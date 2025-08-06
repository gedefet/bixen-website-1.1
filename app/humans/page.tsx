"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { BadgeCheck, Users, UserCheck, Brain, Clock, Target, Shield, CheckCircle, TrendingUp, ArrowRight, Mail } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function HumansPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [headerOpacity, setHeaderOpacity] = useState(1)
  const quoteSectionRef = useRef<HTMLElement | null>(null)

  const handleScroll = useCallback(() => {
    // Handle header background change
    if (window.scrollY > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }

    // Handle header fade out when reaching quote section
    if (!quoteSectionRef.current) {
      quoteSectionRef.current = document.getElementById("quote")
    }

    if (quoteSectionRef.current) {
      const quoteRect = quoteSectionRef.current.getBoundingClientRect()
      const quoteTop = quoteRect.top
      const windowHeight = window.innerHeight

      // Start fading out when quote section is 300px from entering viewport
      if (quoteTop < windowHeight + 300) {
        // Calculate opacity based on distance (1 when far, 0 when quote section enters viewport)
        const opacity = Math.max(0, Math.min(1, (quoteTop - windowHeight + 300) / 300))
        setHeaderOpacity(opacity)
      } else {
        setHeaderOpacity(1)
      }
    }
  }, [])

  useEffect(() => {
    // Initial check
    handleScroll()

    // Use requestAnimationFrame for better performance
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", scrollListener, { passive: true })
    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [handleScroll])

  const hiringModes = [
    {
      icon: <UserCheck className="h-12 w-12 text-[#01F9C6]" />,
      title: "Solo Bixener",
      description: "1 AI Engineer dedicated",
      details: "40 h/week",
      badge: "Certified by Bixen"
    },
    {
      icon: <Users className="h-12 w-12 text-[#01F9C6]" />,
      title: "Curated Squad",
      description: "PM + AI Dev + Engineer",
      details: "Ready-to-deliver team, sprint by sprint",
      badge: "Certified by Bixen"
    },
    {
      icon: <Brain className="h-12 w-12 text-[#01F9C6]" />,
      title: "AI Advisor",
      description: "Senior fractional expert",
      details: "8–16 h/week for vision and critical decisions",
      badge: "Certified by Bixen"
    }
  ]

  const selectionSteps = [
    {
      number: 1,
      title: "CV & Portfolio Review",
      icon: <Target className="h-8 w-8 text-[#01F9C6]" />,
      description: "Screening by the Bixen technical team: applied AI projects, quantifiable impact, and open-source contributions/publications.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop"
    },
    {
      number: 2,
      title: "72-Hour Code Challenge",
      icon: <Clock className="h-8 w-8 text-[#01F9C6]" />,
      description: "Real-world case (LLM/MLOps). We measure precision, efficiency, documentation, and best practices. Peer-reviewed by Ariel and Eduardo.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      number: 3,
      title: "Technical Deep-Dive (90 min)",
      icon: <Brain className="h-8 w-8 text-[#01F9C6]" />,
      description: "With an AI Lead: architecture, trade-offs, live troubleshooting, and whiteboard system design.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
    },
    {
      number: 4,
      title: "Soft Skills Interview (BEI)",
      icon: <Users className="h-8 w-8 text-[#01F9C6]" />,
      description: "60-minute session based on Behavioral Event Interview: ownership, collaboration, resilience, and communication.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop"
    },
    {
      number: 5,
      title: "Internal QA Pilot (2 weeks)",
      icon: <Shield className="h-8 w-8 text-[#01F9C6]" />,
      description: "Integration in a Bixen sandbox: real sprint, velocity metrics, SonarQube code-quality, and 360° feedback.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
    {
      number: 6,
      title: "Certification & Client Onboarding",
      icon: <BadgeCheck className="h-8 w-8 text-[#01F9C6]" />,
      description: "Issuance of 'Certified by Bixen' badge, environment setup, and kickoff with clear objectives for the first 5 days.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=300&fit=crop"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#001a1f] to-[#004953]">
      {/* Header */}
      <Header isScrolled={isScrolled} opacity={headerOpacity} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6">
                <span className="text-white font-bold leading-tight">CURATED HUMANS </span>
                <br />
                <div className="flex items-center justify-center gap-4 mt-4">
                  <span className="text-white/60 text-3xl sm:text-4xl md:text-5xl font-light">by</span>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuente%20blanca%20fondo%20transparente_registrado-DEnxY22L1XvDKGRhofoq1uFyEv75Po.png"
                    alt="Bixen Logo"
                    width={200}
                    height={60}
                    className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto"
                  />
                </div>
              </h1>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6">
                We select, assess, and certify top-tier professionals in artificial intelligence, with proven experience and strong technical judgment. Each Curated Human is ready to integrate into your team from day one, backed by a rigorous real-world validation process, ongoing support, and a quality guarantee. You choose who to work with — we make sure they're the right persons.
              </p>
              
              <p className="text-[#01F9C6] text-xl md:text-2xl font-semibold">
                Certified AI talent, ready to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Curated Humans Section */}
      <section className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-light sm:text-5xl md:text-6xl text-white mb-8">
              Why Curated Humans?
            </h2>
          </div>

          {/* The Context */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-12 text-center">The Context</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-red-400 mb-2">87%</div>
                  <p className="text-white/80 text-sm">
                    of companies struggle to find AI talent, with hiring times exceeding 140 days
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-red-400 mb-2">75-95%</div>
                  <p className="text-white/80 text-sm">
                    of recruiters struggle to evaluate both technical and AI-specific soft skills
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-red-400 mb-2">1%</div>
                  <p className="text-white/80 text-sm">
                    of companies consider themselves mature in AI implementation, increasing investment risk
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why We're the Right Choice */}
          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-12 text-center">Why We're the Right Choice</h3>
            <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-[#01F9C6] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">+10 years of applied AI experience</h4>
                      <p className="text-white/80">
                        We know the key problems in sectors like healthcare, telco, retail, gaming, banking, oil & gas because we've already solved them.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <BadgeCheck className="h-6 w-6 text-[#01F9C6] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Certified by Bixen program</h4>
                      <p className="text-white/80">
                        Precisely defines what combines proven technical expertise, business domain knowledge, and execution capability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Target className="h-6 w-6 text-[#01F9C6] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Rigorous & quantifiable process</h4>
                      <p className="text-white/80">
                        We minimize selection errors: our talents have been tested, reviewed by leaders, and validated in real environments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-[#01F9C6] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Exceptional quality delivery</h4>
                      <p className="text-white/80">
                        You won't worry about production quality or drive your recruiting team crazy with rapidly changing profiles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Bixen Seal Section */}
      <section className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BadgeCheck className="h-10 w-10 text-[#01F9C6]" />
                  <h2 className="text-3xl md:text-4xl font-medium text-white">The Bixen Seal</h2>
                </div>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                  All our engineers pass a proprietary certification process that includes AI technical challenges, 72-hour code challenges, and soft skills evaluation. Only 5% obtain the 'Certified by Bixen' seal.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
                  alt="Certification process"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Hiring Models Section */}
      <section className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-light sm:text-5xl md:text-6xl text-white mb-8">
              Three Hiring Models
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hiringModes.map((mode, index) => (
              <Card key={index} className="bg-white/5 border-[#01F9C6]/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">{mode.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{mode.title}</h3>
                  <p className="text-white/80 text-lg mb-2">{mode.description}</p>
                  <p className="text-white/60 text-sm mb-6">{mode.details}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#01F9C6]/20 border border-[#01F9C6]/50 rounded-full">
                    <BadgeCheck className="h-4 w-4 text-[#01F9C6]" />
                    <span className="text-[#01F9C6] text-sm font-medium">{mode.badge}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Selection Process */}
      <section className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-light sm:text-5xl md:text-6xl text-white mb-8">
              Detailed Selection Process
            </h2>
          </div>

          <div className="space-y-20">
            {selectionSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#01F9C6] text-[#004953] rounded-full flex items-center justify-center font-bold text-xl">
                        {step.number}
                      </div>
                      {step.icon}
                      <h3 className="text-2xl md:text-3xl font-medium text-white">{step.title}</h3>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      width={600}
                      height={400}
                      className="rounded-xl object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="mt-20 text-center">
            <div className="bg-[#01F9C6]/20 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-[#01F9C6]/50">
              <h3 className="text-2xl md:text-3xl font-bold text-[#01F9C6] mb-4">Result</h3>
              <p className="text-white text-xl md:text-2xl font-medium">
                Exceptional talent, no doubts about their AI expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="bg-gradient-to-r from-[#01F9C6]/20 to-[#008794]/20 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Ready to add a <span className="text-[#01F9C6] font-medium">Curated Human</span>?
            </h2>
            <Button asChild className="bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90 text-lg px-8 py-3">
              <a href="mailto:contact@bixen.ai" className="inline-flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact us
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <p className="text-white/60 text-sm mt-6">Certified by Bixen • 2025</p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
