"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function PartnersCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const partners = [
    { name: "NVIDIA", image: "/images/placeholder-logo.png", size: "large" },
    { name: "Amazon", image: "/images/placeholder-logo.png", size: "normal" },
    { name: "Microsoft Azure", image: "/images/placeholder-logo.png", size: "xlarge" },
    { name: "Google Cloud", image: "/images/placeholder-logo.png", size: "xlarge" },
    { name: "Ingenia", image: "/images/placeholder-logo.png", size: "normal" },
    { name: "Universidad de Buenos Aires", image: "/images/placeholder-logo.png", size: "large" },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % partners.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + partners.length) % partners.length)

  useEffect(() => {
    if (paused) return
    const id = setInterval(nextSlide, 4500)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section className="section-y" id="partners">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Technologies, Partners & Universities</h2>
          <p className="mt-4 text-[hsl(var(--secondary))] text-lg">
            We work with cutting-edge technologies, top academic institutions, and industry partners.
          </p>
        </div>

        <div
          ref={containerRef}
          className="glass p-6 md:p-10 lg:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-12"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {partners.map((partner, index) => (
                  <div key={index} className="w-full flex-shrink-0 flex items-center justify-center p-6">
                    <Image
                      src={partner.image || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={partner.size === "xlarge" ? 420 : partner.size === "large" ? 340 : 260}
                      height={partner.size === "xlarge" ? 160 : partner.size === "large" ? 140 : 120}
                      className="object-contain w-auto logo-dim"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-black/30 hover:bg-black/40 p-2 rounded-full"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-black/30 hover:bg-black/40 p-2 rounded-full"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 gap-2">
              {partners.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[hsl(var(--primary))]" : "bg-white/30"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
