"use client"

import AnimatedSection from "@/components/animated-section"

export default function HeroSection() {
  return (
    <div className="container px-4 md:px-6 relative z-10 pt-16 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-4rem)]">
        <AnimatedSection direction="left">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light w-full">
            <span className="inline-block w-full px-2 py-0 mb-2 text-white font-bold leading-tight">CREATION </span>
            <br />
            <span className="inline-block w-full px-2 py-0 mb-2 text-white italic leading-tight">BEYOND </span>
            <br />
            <span className="inline-block w-full px-2 py-0 text-white leading-tight">CONVENTION </span>
          </h1>
        </AnimatedSection>

        <div
          className="lg:pl-6 xl:pl-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "1000ms", animationDuration: "1000ms" }}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl text-white mb-10">
            Unconventional solutions for <span className="text-[#01F9C6] font-medium">forward-thinking</span> people.
          </p>

          <p className="text-2xl sm:text-3xl md:text-4xl text-white">
            Leveraging deep AI expertise and <span className="text-[#01F9C6] font-medium">exceptional talent</span> to
            push beyond off-the-shelf technology.
          </p>
        </div>
      </div>
    </div>
  )
}

