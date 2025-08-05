"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"
import {
  Users,
  User,
  Brain,
  BadgeCheck,
  FileText,
  Code,
  MessageSquare,
  UserCheck,
  CheckCircle,
  Award,
  TrendingUp,
  Clock,
  Target,
  Shield,
} from "lucide-react"

export default function HumansPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Calculate opacity based on scroll position
      const maxScroll = 200
      const newOpacity = Math.max(0.3, 1 - scrollPosition / maxScroll)
      setOpacity(newOpacity)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#001a1d] to-[#002e33]">
      <Header isScrolled={isScrolled} opacity={opacity} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">CURATED HUMANS</h1>
            <div className="flex items-center justify-center">
              <span className="text-xl md:text-2xl text-gray-300">by</span>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuente%20blanca%20fondo%20transparente_registrado-DEnxY22L1XvDKGRhofoq1uFyEv75Po.png"
                alt="Bixen"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto ml-2"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              We select, assess, and certify top-tier professionals in artificial intelligence, with proven experience
              and strong technical judgment. Each Curated Human is ready to integrate into your team from day one,
              backed by a rigorous real-world validation process, ongoing support, and a quality guarantee. You choose
              who to work with — we make sure they're the right persons.
            </p>
          </div>

          <p className="text-xl md:text-2xl text-[#01F9C6] font-semibold max-w-3xl mx-auto">
            Certified AI talent, ready to build.
          </p>
        </div>
      </section>

      {/* Why Curated Humans Section */}
      <section className="py-20 px-4 bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Why Curated Humans?</h2>

          {/* The Context */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#01F9C6] mb-8 text-center">The Context:</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black/30 backdrop-blur-sm border-red-500/30 rounded-2xl shadow-2xl">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-red-400 mb-2">87%</div>
                  <p className="text-gray-300 text-sm">
                    of companies still struggle to find AI talent, with average hiring time exceeding 140 days.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 backdrop-blur-sm border-red-500/30 rounded-2xl shadow-2xl">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-red-400 mb-2">75-95%</div>
                  <p className="text-gray-300 text-sm">
                    of recruiters struggle to evaluate both technical and AI-specific soft skills in traditional hiring
                    processes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 backdrop-blur-sm border-red-500/30 rounded-2xl shadow-2xl">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-red-400 mb-2">1%</div>
                  <p className="text-gray-300 text-sm">
                    of companies consider themselves mature in AI implementation, increasing investment risk without
                    real results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why We're the Right Choice */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#01F9C6] mb-8 text-center">
              Why We're the Right Choice:
            </h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-[#01F9C6] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">+10 Years of Applied AI Experience</h4>
                    <p className="text-gray-300">
                      We know the key problems in sectors like healthcare, telco, retail, gaming, banking, oil & gas
                      (among others) because we've already solved them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <BadgeCheck className="h-8 w-8 text-[#01F9C6] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Certified by Bixen Program</h4>
                    <p className="text-gray-300">
                      Precisely defines what combines proven technical expertise, business domain knowledge, and
                      execution capability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Target className="h-8 w-8 text-[#01F9C6] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Rigorous & Quantifiable Process</h4>
                    <p className="text-gray-300">
                      We minimize selection errors: our talents have been tested, reviewed by leaders, and validated in
                      real environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-[#01F9C6] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Exceptional Quality Delivery</h4>
                    <p className="text-gray-300">
                      We promise delivery with exceptional quality, so you don't have to worry about your production
                      quality or drive your recruiting team crazy with profiles that change at record speed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                  alt="Why Curated Humans"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Bixen Seal */}
      <section className="py-20 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BadgeCheck className="h-8 w-8 text-[#01F9C6]" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">The Bixen Seal</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                All our engineers pass through our proprietary certification process that includes AI technical
                challenges, 72-hour code challenges, and soft skills assessment. Only 5% earn the{" "}
                <span className="text-[#01F9C6] font-semibold">'Certified by Bixen'</span> seal.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
                alt="Certification Process"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Hiring Models */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Three Hiring Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Solo Bixener */}
            <Card className="bg-black/30 backdrop-blur-sm border-[#01F9C6]/30 hover:scale-105 transition-transform duration-300 rounded-2xl shadow-2xl">
              <CardContent className="p-8 text-center">
                <User className="h-12 w-12 text-[#01F9C6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Solo Bixener</h3>
                <p className="text-gray-300 mb-6">
                  1 dedicated AI Engineer
                  <br />
                  40 hours/week
                </p>
                <Badge className="bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90">Certified by Bixen</Badge>
              </CardContent>
            </Card>

            {/* Curated Squad */}
            <Card className="bg-black/30 backdrop-blur-sm border-[#01F9C6]/30 hover:scale-105 transition-transform duration-300 rounded-2xl shadow-2xl">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-[#01F9C6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Curated Squad</h3>
                <p className="text-gray-300 mb-6">
                  PM + AI Dev + Engineer
                  <br />
                  Ready to deliver value sprint after sprint
                </p>
                <Badge className="bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90">Certified by Bixen</Badge>
              </CardContent>
            </Card>

            {/* AI Advisor */}
            <Card className="bg-black/30 backdrop-blur-sm border-[#01F9C6]/30 hover:scale-105 transition-transform duration-300 rounded-2xl shadow-2xl">
              <CardContent className="p-8 text-center">
                <Brain className="h-12 w-12 text-[#01F9C6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">AI Advisor</h3>
                <p className="text-gray-300 mb-6">
                  Senior fractional expert
                  <br />
                  8–16 hours/week to define vision and unblock critical decisions
                </p>
                <Badge className="bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90">Certified by Bixen</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Selection Process - Step 1 */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Our Selection Process</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-[#01F9C6] text-[#004953] rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl absolute -top-8 -left-8 z-10">
                1
              </div>
              <Image
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop"
                alt="CV & Portfolio Review"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-8 w-8 text-[#01F9C6]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">CV & Portfolio Review</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Screening by the Bixen technical team: applied AI projects, quantifiable impact, and open-source
                contributions/publications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Selection Process - Step 2 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Code className="h-8 w-8 text-[#01F9C6]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">72-Hour Code Challenge</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Real-world case (LLM/MLOps). We measure accuracy, efficiency, documentation, and best practices.
                Peer-reviewed by Ariel and Eduardo.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="bg-[#01F9C6] text-[#004953] rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl absolute -top-8 -right-8 z-10">
                2
              </div>
              <Image
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop"
                alt="Code Challenge"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Selection Process - Step 3 */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-[#01F9C6] text-[#004953] rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl absolute -top-8 -left-8 z-10">
                3
              </div>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Technical Deep-Dive"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-8 w-8 text-[#01F9C6]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Technical Deep-Dive (90 min)</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                With a Lead AI: architecture, trade-offs, live troubleshooting, and system design on a whiteboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Selection Process - Step 4 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="h-8 w-8 text-[#01F9C6]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Soft Skills Interview (BEI)</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                60-minute session based on Behavioral Event Interview: ownership, collaboration, resilience, and
                communication.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="bg-[#01F9C6] text-[#004953] rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl absolute -top-8 -right-8 z-10">
                4
              </div>
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop"
                alt="Soft Skills Interview"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Selection Process - Step 5 */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-[#01F9C6] text-[#004953] rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl absolute -top-8 -left-8 z-10">
                5
              </div>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Internal QA Pilot"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-8 w-8 text-[#01F9C6]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Internal QA Pilot (2 weeks)</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Integration in a Bixen sandbox: real sprint, velocity metrics, SonarQube code quality, and 360°
                feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Selection Process - Step 6 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-[#01F9C6]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Certification & Client Onboarding</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Issuance of the "Certified by Bixen" badge, environment setup, and kickoff with clear objectives for the
                first 5 days.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="bg-[#01F9C6] text-[#004953] rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl absolute -top-8 -right-8 z-10">
                6
              </div>
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Certification & Onboarding"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="py-12 px-4 bg-[#01F9C6]/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#01F9C6] font-semibold text-xl md:text-2xl">
            Result: exceptional talent, with no doubts about their AI expertise.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#000000] to-[#001a1d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
            Ready to add a <span className="text-[#01F9C6]">Curated Human</span>?
          </h2>
          <Button
            asChild
            className="bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90 text-xl px-12 py-8 rounded-xl font-semibold"
          >
            <a href="mailto:contact@bixen.ai">Contact us</a>
          </Button>
          <p className="text-gray-400 text-sm mt-8">Certified by Bixen • 2025</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
