"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function VisionSection() {
  const compassRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.3,
      },
    )

    if (compassRef.current) {
      observer.observe(compassRef.current)
    }

    return () => {
      if (compassRef.current) {
        observer.unobserve(compassRef.current)
      }
    }
  }, [])

  return (
    <div className="container px-4 md:px-6 py-16">
      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div
              ref={compassRef}
              className={`transition-all duration-1000 ${isVisible ? "animate-compass" : "opacity-0"}`}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-clplEe8dg1jWWCQCsrjcMCuKQyl3aT.png"
                alt="Compass"
                width={400}
                height={400}
                className="w-72 h-72 md:w-96 md:h-96"
                priority
              />
            </div>
          </div>
          <div className="space-y-4 order-1 lg:order-2">
            <h2 className="text-3xl font-light sm:text-4xl md:text-5xl text-white">
              Your business vision is <span className="italic">our compass</span>
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-6">
              At Bixen, we develop projects with a strong technical and scientific focus, always guided by our clients'
              business vision.
            </p>
            <p className="text-white/80 text-xl md:text-2xl">
              We combine cutting-edge technology with deep industry knowledge to create solutions that truly matter.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
