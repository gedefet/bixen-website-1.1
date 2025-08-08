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
import { Brain, Gift, Users2 } from 'lucide-react'
import { useRef } from "react"

type Offering = {
  title: string
  description: string
  icon: JSX.Element
  ctaHref?: string
  isHumans?: boolean
}

const offerings: Offering[] = [
  {
    icon: <Gift className="h-8 w-8 text-[#18c7ab]" />,
    title: "Product Strategy & Design",
    description:
      "Co-create your product vision and validate the right solutions before you build.",
  },
  {
    icon: <Brain className="h-8 w-8 text-[#18c7ab]" />,
    title: "AI Solutions & Delivery",
    description:
      "From chatbots to computer vision, we deliver applied AI with measurable impact.",
  },
  {
    icon: <Users2 className="h-8 w-8 text-[#18c7ab]" />,
    title: "Curated Humans by Bixen",
    description:
      "Certified AI professionals ready to join your team and deliver from day one.",
    ctaHref: "/humans",
    isHumans: true,
  },
]

export default function HeroSection() {
  // Autoplay every 3 seconds
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  )

  return (
    <div className="container px-8 lg:px-16 xl:px-24 relative z-10 pt-16 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-4rem)]">
        {/* LEFT: Ensure same typography on both lines but keep a narrower measure */}
        <AnimatedSection direction="left">
          <div className="max-w-xl"> {/* narrowed from max-w-2xl to emphasize carousel scale */}
            <p className="text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight">
              Unique Solutions for Forward-Thinking People
            </p>
            <p className="mt-6 text-2xl sm:text-3xl md:text-4xl text-white font-normal">
              Leveraging deep AI expertise and{" "}
              <span className="text-secondary font-medium">exceptional talent</span>{" "}
              to push beyond off-the-shelf technology.
            </p>
          </div>
        </AnimatedSection>

        {/* RIGHT: Offerings Carousel - larger, proportionate, and centered */}
        <AnimatedSection direction="right">
          <div className="relative lg:pl-6 xl:pl-12">
            {/* Carousel wrapper with responsive height and generous width */}
            <div className="w-full mx-auto h-[380px] sm:h-[420px] md:h-[480px] lg:h-[560px] xl:h-[600px] max-w-[760px] md:max-w-[820px]">
              <Carousel
                className="w-full h-full relative"
                opts={{ align: "start", loop: true }}
                plugins={[autoplay.current]}
              >
                <CarouselContent className="h-full">
                  {offerings.map((item, idx) => (
                    <CarouselItem key={idx} className="basis-full h-full">
                      <div className="h-full w-full flex items-center justify-center">
                        <div className="flex h-full w-full flex-col items-center justify-center text-center gap-4 px-2 sm:px-4">
                          <div className="rounded-full bg-[#18c7ab]/15 p-3">{item.icon}</div>
                          <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-[48ch]">
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

                {/* Transparent arrows centered vertically over the larger carousel */}
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
