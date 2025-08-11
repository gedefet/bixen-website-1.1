"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const heroSlides = [
  {
    id: 1,
    title: "AI Solutions & Delivery",
    description: "We build production-ready AI systems that scale with your business needs.",
    image: "/images/office-workspace-hero.png",
  },
  {
    id: 2,
    title: "Curated Humans",
    description: "Access our network of certified AI professionals, vetted for technical excellence.",
    image: "/images/drone-aerial-view.png",
  },
  {
    id: 3,
    title: "AI Journey",
    description: "We help you integrate AI across all your organization, in an effective way.",
    image: "/images/person-with-award-ribbon.png",
  },
  {
    id: 4,
    title: "Product Strategy and Design",
    description: "Strategic guidance to transform your vision into market-ready AI products.",
    image: "/images/solo-developer-focused.png",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1F24] via-[#0F2A30] to-[#1A3A42]">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover image-grade"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Text content */}
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white mb-4">
              <span className="block">creation</span>
              <span className="block">over</span>
              <span className="block text-[#01F9C6]">convention</span>
            </h1>
          </div>

          <div className="mb-8 space-y-4">
            <p className="text-xl md:text-2xl text-[#01F9C6] font-[Inter,sans-serif]">
              Unique solutions for forward-thinking people.
            </p>
            <p className="text-lg md:text-xl text-white/80 font-[Inter,sans-serif]">
              Leveraging deep AI expertise and exceptional talent to push beyond off-the-shelf technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-[#01F9C6] text-black hover:bg-[#01F9C6]/90 shadow-[0_0_10px_rgba(1,249,198,0.3)] hover:shadow-[0_0_15px_rgba(1,249,198,0.5)] btn-hover"
            >
              Explore Curated Humans
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>

        {/* Right side - Carousel */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="mb-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white mb-4"
                style={{ fontFamily: "Helvetica Neue, sans-serif" }}
              >
                {heroSlides[currentSlide].title}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">{heroSlides[currentSlide].description}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === currentSlide
                        ? "bg-[#01F9C6] shadow-[0_0_8px_rgba(1,249,198,0.5)]"
                        : "bg-white/30 hover:bg-white/50",
                    )}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
