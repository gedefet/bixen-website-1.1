"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0a1a1f] via-[#0f2027] to-[#203a43]">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/office-workspace-hero.png"
          alt="Modern office workspace"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" aria-hidden="true"></div>
      </div>

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-12 md:pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Creation beyond convention
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80">
            We design and deliver AI products and teams. From strategy to production, we align technology with your
            business goals — and staff you with Certified by Bixen talent when you need to scale fast.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact">
              <Button className="bg-[#01F9C6] text-black hover:bg-[#00d4aa]">Get in Touch</Button>
            </a>
            <a href="/humans">
              <Button variant="outline" className="border-[#01F9C6] text-[#01F9C6] hover:bg-[#01F9C6]/10">
                Explore Curated Humans
              </Button>
            </a>
          </div>
        </div>

        {/* Logos row */}
        <div className="mt-10 md:mt-16">
          <p className="text-white/60 text-xs md:text-sm">Trusted experience across industries</p>
          <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 items-center">
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src="/images/netflix-logo.png" alt="Netflix" width={96} height={32} className="h-6 w-auto" />
            </div>
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src="/images/logistics-truck-logo.png" alt="US Logistics" width={96} height={32} className="h-6 w-auto" />
            </div>
            <div className="bg-white rounded-md p-2 flex items-center justify-center">
              <Image src="/images/red-circular-logo.png" alt="América Móvil group" width={96} height={32} className="h-6 w-auto" />
            </div>
            <div className="bg-white rounded-md p-2 hidden sm:flex items-center justify-center">
              <Image src="/images/red-flame-logo.png" alt="Banking Institution" width={96} height={32} className="h-6 w-auto" />
            </div>
            <div className="bg-white rounded-md p-2 hidden md:flex items-center justify-center">
              <Image src="/images/american-logistics-logo.png" alt="American Logistics" width={96} height={32} className="h-6 w-auto" />
            </div>
            <div className="bg-white rounded-md p-2 hidden md:flex items-center justify-center">
              <Image src="/images/person-with-award-ribbon.png" alt="Awards" width={96} height={32} className="h-6 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
