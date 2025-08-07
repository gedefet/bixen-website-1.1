"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CuratedHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0a1a1f] via-[#0f2027] to-[#203a43]">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/office-workspace-hero.png"
          alt="Office background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" aria-hidden="true"></div>
      </div>

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-12 md:pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Curated Humans by Bixen
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80">
            Certified AI engineers, MLOps experts, and LLM specialists. Vetted for technical depth, execution quality,
            and reliability — ready to join your team from day one.
          </p>

        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#models">
            <Button className="bg-[#01F9C6] text-black hover:bg-[#00d4aa]">Hiring models</Button>
          </a>
          <a href="#process">
            <Button variant="outline" className="border-[#01F9C6] text-[#01F9C6] hover:bg-[#01F9C6]/10">
              Our process
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
