"use client"

import AnimatedSection from "@/components/animated-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

type Offering = {
  title: string
  description: string
  ctaHref?: string
  isHumans?: boolean
}

// Ordered: AI Solutions & Delivery, Curated Humans, AI Journey, Product Strategy and Design
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
  { title: "AI Journey", description: "We help you integrate AI across all your organization, in an effective way." },
  {
    title: "Product Strategy and Design",
    description: "Co-create your product vision and validate the right solutions before you build.",
  },
]

export default function HeroSection() {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  )

  return (
    <section className="relative overflow-visible">
      {/* Uniform cool overlay ensures legibility even if background imagery is used later */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 uniform-overlay" />

      <div className="container-x section-y relative z-[1]">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[60vh]">
          {/* LEFT: Value proposition first */}
          <AnimatedSection direction="left" className="self-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl">Ship AI that matters.</h1>
              <p className="mt-5 text-foreground/90 text-lg md:text-xl max-w-prose">
                Teams ready in 10 days. Certified engineers delivering in your stack from week one.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#contact" aria-label="Start in 10 days - contact us">
                  <Button variant="default" size="lg" className="btn-primary">
                    Start in 10 days
                  </Button>
                </Link>
                <Link href="#process" aria-label="See the process">
                  <Button variant="link" size="lg">
                    See the process
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT: Carousel with consistent typography */}
          <AnimatedSection direction="right" className="self-center">
            <div className="relative flex h-full items-center justify-center w-full">
              <div className="w-full mx-auto h-[360px] sm:h-[420px] md:h-[520px] lg:h-[560px] max-w-[820px]">
                <Carousel
                  className="w-full h-full relative"
                  opts={{ align: "start", loop: true }}
                  plugins={[autoplay.current]}
                >
                  <CarouselContent className="h-full">
                    {offerings.map((item, idx) => (
                      <CarouselItem key={idx} className="basis-full h-full">
                        <div className="h-full w-full flex items-center justify-center">
                          <div className="flex h-full w-full flex-col items-center justify-center text-center gap-7 px-3 sm:px-4">
                            <h3 className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-foreground/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-[55ch]">
                              {item.description}
                            </p>
                            {item.isHumans && item.ctaHref && (
                              <div className="pt-1">
                                <Link href={item.ctaHref} aria-label="Explore Curated Humans">
                                  <Button variant="default" size="lg" className="btn-primary">
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

                  <CarouselPrevious
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-white/70 hover:text-white focus-visible:ring-0 z-10"
                    aria-label="Previous item"
                  />
                  <CarouselNext
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent border-none hover:bg-transparent text-white/70 hover:text-white focus-visible:ring-0 z-10"
                    aria-label="Next item"
                  />
                </Carousel>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
