"use client"

import AnimatedSection from "@/components/animated-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

type Offering = {
  title: string
  description: string
  ctaHref?: string
  isHumans?: boolean
}

const offerings: Offering[] = [
  {
    title: "AI Solutions & Delivery",
    description: "From chatbots to computer vision, we deliver applied AI with measurable impact.",
  },
  {
    title: "Curated Humans",
    description: "Certified AI professionals ready to join your team and deliver from day one.",
    ctaHref: "/humans",
    isHumans: true,
  },
  {
    title: "AI Journey",
    description: "We help you integrate AI across all your organization, in a 7-step framework proven by Bixen.",
  },
  {
    title: "Product Strategy and Design",
    description: "Co-create your product vision and validate the right solutions before you build.",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offerings.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offerings.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offerings.length) % offerings.length)
  }

  return (
    <section className="relative z-0 overflow-visible">
      {/* overlay from previous version remains */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-25vh] h-[calc(100%+25vh)] z-[1] bg-gradient-to-b from-black/60 via-black/50 to-transparent"
      />

      <div className="container px-8 lg:px-16 xl:px-24 relative z-[2] pt-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-4rem)]">
          <AnimatedSection direction="left" className="self-center">
            <div className="max-w-xl">
              <p className="text-[22px] sm:text-[28px] md:text-[34px] text-white font-normal leading-tight">
                {"Unique solutions for "}
                <span className="text-secondary font-medium">{"forward-thinking people."}</span>
              </p>
              <p className="mt-6 text-[22px] sm:text-[28px] md:text-[34px] text-white font-normal">
                {"Leveraging deep AI expertise and "}
                <span className="text-secondary font-medium">{"exceptional talent"}</span>
                {" to push beyond off-the-shelf technology."}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="self-center mt-8 md:mt-10">
            <div className="relative lg:pl-6 xl:pl-12 flex h-full items-center justify-center w-full">
              <div className="w-full mx-auto h-[380px] sm:h-[440px] md:h-[520px] lg:h-[560px] xl:h-[600px] max-w-[780px] md:max-w-[860px] relative">
                {/* Simple slideshow container */}
                <div className="w-full h-full relative overflow-hidden">
                  {offerings.map((item, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        idx === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="h-full w-full flex items-center justify-center">
                        <div className="flex h-full w-full flex-col items-center justify-center text-center gap-8 px-3 sm:px-4">
                          <h3 className="font-sans text-white text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-[50ch] mt-4">
                            {item.description}
                          </p>
                          {item.isHumans && item.ctaHref && (
                            <div className="pt-2">
                              <Link href={item.ctaHref}>
                                <Button
                                  className="bg-[#01F9C6] text-black hover:bg-[#01F9C6]/90 shadow-[0_0_10px_rgba(1,249,198,0.3)] hover:shadow-[0_0_15px_rgba(1,249,198,0.5)] btn-hover"
                                  size="lg"
                                >
                                  Explore Curated Humans
                                </Button>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-white/70 hover:text-white focus-visible:ring-0 z-10 p-2"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-white/70 hover:text-white focus-visible:ring-0 z-10 p-2"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {offerings.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? "bg-[#01F9C6]" : "bg-white/30"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
