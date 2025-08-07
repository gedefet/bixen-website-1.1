"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function VisionSection() {
  const compassRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = compassRef.current
    if (!el) return

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let rafId = 0
    let ticking = false

    const update = () => {
      ticking = false
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight

      // Compute how centered the element is in the viewport: 1 at center, 0 out of view
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = vh / 2
      const distance = Math.abs(elementCenter - viewportCenter)
      const maxDistance = viewportCenter + rect.height / 2
      const progress = 1 - Math.min(1, distance / maxDistance)

      const rotation = progress * 360
      el.style.transform = `rotate(${rotation}deg)`
    }

    const onScroll = () => {
      if (prefersReducedMotion) return
      if (!ticking) {
        ticking = true
        rafId = requestAnimationFrame(update)
      }
    }

    const onResize = () => {
      if (prefersReducedMotion) return
      update()
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    // Initial render
    update()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="container px-2 md:px-6 py-4 md:py-16">
      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-4 md:p-12 shadow-xl">
        <div className="grid gap-4 md:gap-8 md:grid-cols-2 items-center">
          <div className="space-y-3 md:space-y-6">
            <h2 className="hidden md:block text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl text-white">
              Your business vision is our compass
            </h2>
            <p className="hidden md:block text-white/80 text-xl md:text-2xl">
              We don&apos;t just build technology; we align it with your strategic goals to create meaningful impact.
            </p>
            <p className="hidden md:block text-white/80 text-xl md:text-2xl">
              Every solution is designed to move your business forward, ensuring that innovation serves your vision.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="hidden md:block relative">
              <div
                ref={compassRef}
                // Removed transition classes to avoid lag during manual transform updates
                className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
                style={{ transformOrigin: "50% 50%", willChange: "transform" }}
                aria-hidden="true"
              >
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Compass representing business direction"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
