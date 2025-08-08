"use client"

import AnimatedSection from "@/components/animated-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

type Offering = {
  title: string
  description: string
  ctaHref?: string
  isHumans?: boolean
}

const offerings: Offering[] = [
  {
    title: "AI Solutions & Delivery",
    description:
      "From chatbots to computer vision, we deliver applied AI with measurable impact.",
  },
  {
    title: "Curated Humans",
    description:
      "Certified AI professionals ready to join your team and deliver from day one.",
    ctaHref: "/humans",
    isHumans: true,
  },
  {
    title: "AI Journey",
    description:
      "We help you integrate AI across all your organization, in an effective way.",
  },
  {
    title: "Product Strategy and Design",
    description:
      "Co-create your product vision and validate the right solutions before you build.",
  },
]

export default function HeroSection() {
  // Auto-advance every 3 seconds
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  )

  return (
    <div className="container px-8 lg:px-16 xl:px-24 relative z-10 pt-16 overflow-hidden">
      {/* items-center vertically aligns the left and right columns */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-4rem)]">
        {/* LEFT: Match typography across both lines and color the phrase */}
        <AnimatedSection direction="left">
          <div className="max-w-xl">
            <p className="text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight">
              {"Unique Solutions for "}
              <span className="text-secondary font-medium">{"Forward-Thinking People"}</span>
            </p>
            <p className="mt-6 text-2xl sm:text-3xl md:text-4xl text-white font-normal">
              {"Leveraging deep AI expertise and "}
              <span className="text-secondary font-medium">{"exceptional talent"}</span>
              {" to push beyond off-the-shelf technology."}
            </p>
          </div>
        </AnimatedSection>

        {/* RIGHT: Vertically centered, larger carousel without icons */}
        <AnimatedSection direction="right">
          {/* Use flex to vertically center the carousel relative to the left content */}
          <div className="relative lg:pl-6 xl:pl-12 flex h-full items-center justify-center">
            {/* Responsive height and width to stand out while staying balanced */}
            <div className="w-full mx-auto h-[380px] sm:h-[440px] md:h-[520px] lg:h-[560px] xl:h-[600px] max-w-[780px] md:max-w-[860px]">
              <Carousel
                className="w-full h-full relative"
                opts={{ align: "start", loop: true }}
                plugins={[autoplay.current]}
              >
                <CarouselContent className="h-full">
                  {offerings.map((item, idx) => (
                    <CarouselItem key={idx} className="basis-full h-full">
                      <div className="h-full w-full flex items-center justify-center">
                        {/* Increased gap between title and description, larger title */}
                        <div className="flex h-full w-full flex-col items-center justify-center text-center gap-6 px-3 sm:px-4">
                          <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-[50ch]">
                            {item.description}
                          </p>
                          {item.isHumans && item.ctaHref && (
                            <div className="pt-1">
                              <Link href={item.ctaHref}>
                                <Button
                                  className="bg-[#01F9C6] text-black hover:bg-[#01F9C6]/90 shadow-[0_0_10px_rgba(1,249,198,0.3)] hover:shadow-[0_0_15px_rgba(1,249,198,0.5)]"
                                  size="lg"
                                >
                                  Explore Curated Humans
                                </Button>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Transparent arrows vertically centered over the text */}
                <CarouselPrevious
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-white/70 hover:text-white focus-visible:ring-0 z-10"
                  aria-label="Previous"
                />
                <CarouselNext
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-white/70 hover:text-white focus-visible:ring-0 z-10"
                  aria-label="Next"
                />
              </Carousel>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
