"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function VisionSection() {
  const compassRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const compass = compassRef.current
    if (!compass) return

    const handleScroll = () => {
      const rect = compass.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height

      // Calculate if element is in viewport
      const elementVisible = elementTop < windowHeight && elementTop + elementHeight > 0

      if (elementVisible) {
        // Calculate rotation based on scroll position
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)))
        const rotation = scrollProgress * 360
        compass.style.transform = `rotate(${rotation}deg)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="container px-4 md:px-6 py-16">
      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
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
                className="w-64 h-64 transition-transform duration-100 ease-out"
                style={{ transformOrigin: "center" }}
              >
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Compass representing business direction"
                  width={256}
                  height={256}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
