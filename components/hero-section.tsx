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
        {/* LEFT: Ensure same typography on both lines */}
        <AnimatedSection direction="left">
          <div className="max-w-2xl">
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

        {/* RIGHT: Offerings Carousel - icon above text, larger title, transparent centered arrows */}
        <AnimatedSection direction="right">
          <div className="relative lg:pl-6 xl:pl-12">
            <Carousel
              className="w-full max-w-xl mx-auto relative"
              opts={{ align: "start", loop: true }}
              plugins={[autoplay.current]}
            >
              <CarouselContent>
                {offerings.map((item, idx) => (
                  <CarouselItem key={idx} className="basis-full">
                    <div className="py-2">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="rounded-full bg-[#18c7ab]/15 p-3">{item.icon}</div>
                        <h3 className="text-white text-3xl md:text-4xl font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-[42ch]">
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

              {/* Transparent arrows centered vertically over the text */}
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
        </AnimatedSection>
      </div>
    </div>
  )
}
