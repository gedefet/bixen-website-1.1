"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProblemHero() {
  return (
    <section className="relative">
      {/* Background image with uniform overlay for legibility and grading */}
      <div className="absolute inset-0 legible-on-image">
        <Image
          src="/images/office-workspace-hero.png"
          alt="Technology workspace background"
          fill
          priority
          className="object-cover image-grade"
          sizes="100vw"
        />
      </div>

      <div className="relative z-[1] section-y">
        <div className="container-x">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl">
              Hiring AI that actually ships is slow, risky, and expensive.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[hsl(var(--secondary))]">
              You have budget and urgency—but not a team that can deliver production AI fast.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#contact" aria-label="Start in 10 days">
                <Button className="btn-primary" size="lg">
                  Start in 10 days
                </Button>
              </Link>
              <Link href="#process" aria-label="See the process">
                <Button variant="link" size="lg" className="btn-secondary-link">
                  See the process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
