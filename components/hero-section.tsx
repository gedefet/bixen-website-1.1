"use client"

import AnimatedSection from "@/components/animated-section"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Brain, Gift, Users2 } from 'lucide-react'

const offerings = [
  {
    icon: <Gift className="h-8 w-8 text-secondary" />,
    title: "Product Strategy & Design",
    description:
      "Co-create your product vision and validate the right solutions before you build.",
  },
  {
    icon: <Brain className="h-8 w-8 text-secondary" />,
    title: "AI Solutions & Delivery",
    description:
      "From chatbots to computer vision, we deliver applied AI with measurable impact.",
  },
  {
    icon: <Users2 className="h-8 w-8 text-secondary" />,
    title: "Curated Humans by Bixen",
    description:
      "Certified AI professionals ready to join your team and deliver from day one.",
  },
]

export default function HeroSection() {
  return (
    <div className="container px-8 lg:px-16 xl:px-24 relative z-10 pt-16 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-4rem)]">
        {/* LEFT: Unique Solutions */}
        <AnimatedSection direction="left">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light w-full leading-tight">
              <span className="inline-block w-full px-2 py-0 mb-3 text-white font-bold">
                {'UNIQUE SOLUTIONS'}
              </span>
              <br />
              <span className="inline-block w-full px-2 py-0 text-white italic">
                {'FOR FORWARD-THINKING PEOPLE'}
              </span>
            </h1>

            <p className="mt-8 text-2xl sm:text-3xl md:text-4xl text-white">
              Leveraging deep AI expertise and{" "}
              <span className="text-secondary font-medium">exceptional talent</span>{" "}
              to push beyond off-the-shelf technology.
            </p>
          </div>
        </AnimatedSection>

        {/* RIGHT: Offerings Carousel (replaces “Creation Beyond Convention”) */}
        <AnimatedSection direction="right">
          <div
            className="lg:pl-6 xl:pl-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "250ms", animationDuration: "900ms" }}
          >
            <Carousel className="w-full max-w-xl mx-auto">
              <CarouselContent>
                {offerings.map((item, idx) => (
                  <CarouselItem key={idx} className="basis-full">
                    <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-8 backdrop-blur-sm shadow-md">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-full bg-secondary/20">{item.icon}</div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-6 flex items-center justify-center gap-3">
                <CarouselPrevious className="relative translate-x-0" />
                <CarouselNext className="relative translate-x-0" />
              </div>
            </Carousel>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
