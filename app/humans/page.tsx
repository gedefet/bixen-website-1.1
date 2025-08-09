"use client"

import Image from "next/image"
import Head from "next/head"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Clock, Target, BadgeCheck, Code2, UserCheck, Users, User, Brain, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

function TechIcon({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:border-white/20 transition-colors">
      <Image src={src || "/placeholder.svg"} alt={label} width={20} height={20} className="h-5 w-5 object-contain" />
      <span className="text-sm text-gray-200">{label}</span>
    </div>
  )
}

export default function HumansPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 50)
      const maxScroll = 200
      setOpacity(Math.max(0.3, 1 - y / maxScroll))
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Head>
        <title>Curated Humans by Bixen — Certified AI talent</title>
      </Head>

      {/* Simple header bar for Humans */}
      <header
        className={`z-[100] fixed top-0 left-0 right-0 w-full px-2 pt-2 lg:pt-6 transition-opacity duration-300`}
        style={{ opacity }}
      >
        <div
          className={`w-full max-w-screen-xl h-14 lg:h-[4.5rem] flex flex-row items-center justify-between mx-auto px-6 ${
            isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-white/10" : "lg:bg-transparent"
          } transition-all ease-in duration-200 rounded-[1.25rem]`}
        >
          <a href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuente%20blanca%20fondo%20transparente_registrado-DEnxY22L1XvDKGRhofoq1uFyEv75Po.png"
              alt="Bixen Logo"
              width={120}
              height={40}
              className="h-8 w-auto lg:h-10 lg:w-auto"
              priority
            />
          </a>

          <div className="flex items-center gap-4">
            <a href="/humans#process" className="text-sm font-medium text-white hover:underline btn-secondary-link">
              Process
            </a>
            <a href="/humans#talent" className="text-sm font-medium text-white hover:underline btn-secondary-link">
              Talent
            </a>
            <a href="/#contact" aria-label="Start in 10 days" className="px-3 py-1.5 text-sm rounded-md btn-primary">
              Start in 10 days
            </a>
          </div>
        </div>
      </header>

      {/* 1) Hook with stats */}
      <section className="section-y">
        <div className="container-x">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">The AI talent gap is real—here’s how we remove the risk.</h1>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-8">
            <Card className="glass">
              <CardContent className="p-8 text-center">
                <TrendingUp className="icon-24 text-[hsl(var(--primary))] mx-auto mb-4" strokeWidth={1.75} />
                <div className="text-4xl font-bold text-white mb-2">87%</div>
                <p className="text-[hsl(var(--secondary))]">of companies struggle to hire AI talent (140+ days avg).</p>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardContent className="p-8 text-center">
                <Clock className="icon-24 text-[hsl(var(--primary))] mx-auto mb-4" strokeWidth={1.75} />
                <div className="text-4xl font-bold text-white mb-2">75–95%</div>
                <p className="text-[hsl(var(--secondary))]">recruiters can’t judge AI-specific soft + tech skills.</p>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardContent className="p-8 text-center">
                <Target className="icon-24 text-[hsl(var(--primary))] mx-auto mb-4" strokeWidth={1.75} />
                <div className="text-4xl font-bold text-white mb-2">1%</div>
                <p className="text-[hsl(var(--secondary))]">feel mature in AI implementation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 2) What “Certified by Bixen” means */}
      <section className="section-y">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">What “Certified by Bixen” means</h2>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Brain, text: "Tech challenge (LLM/CV/ML) with peer review" },
              { icon: Code2, text: "Code review in real repos and environments" },
              { icon: UserCheck, text: "Soft skills: ownership, comms, resilience" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="glass p-6 flex items-start gap-3">
                <Icon className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />
                <p className="text-foreground/90">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Hiring models with “when to use” */}
      <section className="section-y">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Hiring models</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-8">
            <Card className="glass glass-hover overflow-hidden p-6">
              <div className="flex items-center gap-3">
                <User className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />
                <h3 className="text-xl font-semibold">Solo Bixener</h3>
              </div>
              <p className="mt-3 text-[hsl(var(--secondary))]">
                When you need an individual technical owner for a critical module.
              </p>
            </Card>

            <Card className="glass glass-hover overflow-hidden p-6">
              <div className="flex items-center gap-3">
                <Users className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />
                <h3 className="text-xl font-semibold">Curated Squad</h3>
              </div>
              <p className="mt-3 text-[hsl(var(--secondary))]">
                When you want delivery velocity on a full end-to-end front.
              </p>
            </Card>

            <Card className="glass glass-hover overflow-hidden p-6">
              <div className="flex items-center gap-3">
                <BadgeCheck className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />
                <h3 className="text-xl font-semibold">AI Advisor</h3>
              </div>
              <p className="mt-3 text-[hsl(var(--secondary))]">
                When you need senior decisions, architecture, and continuous de-risking.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4) Process summarized as timeline */}
      <section id="process" className="section-y">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Our process</h2>
          <div className="mt-8">
            <ol className="grid md:grid-cols-3 gap-6">
              {[
                "CV & Portfolio Review",
                "AI/ML Code Challenge",
                "Technical Deep-Dive (90’)",
                "BEI (soft skills)",
                "Internal QA Pilot",
                "Certification & Client Onboarding",
              ].map((step, idx) => (
                <li key={step} className="glass p-5">
                  <span className="text-[hsl(var(--primary))] font-bold">Step {idx + 1}</span>
                  <p className="mt-2">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 5) Guarantees and SLAs */}
      <section className="section-y">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Risk controls we sign for</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              "Replacement within 48h",
              "Internal QA sandbox and velocity metrics",
              "Clear SLAs, delivery KPIs, and code ownership",
            ].map((text) => (
              <li key={text} className="glass p-4 flex items-start gap-3">
                <ShieldCheck className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6) 0–10 days band */}
      <section className="section-y">
        <div className="container-x">
          <div className="glass p-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">From zero to sprint in 10 days</h2>
            <div className="mt-6 grid md:grid-cols-4 gap-4">
              {[
                { day: "D0", label: "kickoff" },
                { day: "D3", label: "matching" },
                { day: "D7", label: "environment ready" },
                { day: "D10", label: "sprint 1 delivering" },
              ].map(({ day, label }) => (
                <div key={day} className="glass p-4 text-center">
                  <div className="text-2xl font-bold text-white">{day}</div>
                  <div className="text-[hsl(var(--secondary))]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7) Stack (simplified intro; keep existing grid if present elsewhere) */}
      <section className="section-y">
        <div className="container-x">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Our Certified AI Stack</h2>
          <p className="mt-3 text-[hsl(var(--secondary))]">
            We certify across LLMs, Vision, MLOps, Testing, and Cloud — matching your environment from day one.
          </p>
          {/* Keep your existing stack grid; reduced copy above */}
        </div>
      </section>

      {/* 8) CTA final id="talent" */}
      <section id="talent" className="section-y">
        <div className="container-x">
          <div className="glass p-8 md:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">Ready to meet certified engineers?</h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/#contact" aria-label="Start in 10 days">
                <Button className="btn-primary" size="lg">
                  Start in 10 days
                </Button>
              </Link>
              <Link href="/#contact" aria-label="Request profiles">
                <Button variant="link" size="lg" className="btn-secondary-link">
                  Request profiles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
