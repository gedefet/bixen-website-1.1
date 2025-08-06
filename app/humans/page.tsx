"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Cpu, BrainCircuit, Rocket, Users, Award, Wrench, Target, Clock, Shield, Code, Database, Cloud } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="bg-gray-900/50 p-6 rounded-lg text-center border border-gray-700">
    <div className="flex justify-center text-red-500 mb-3">{icon}</div>
    <p className="text-4xl font-bold text-white">{value}</p>
    <p className="text-gray-400">{label}</p>
  </div>
)

const ProcessStep = ({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description: string
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
      <span className="text-2xl font-bold text-white">{step}</span>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-1">{description}</p>
    </div>
  </div>
)

const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-gray-800 text-gray-300 rounded-full px-4 py-1 text-sm font-medium mr-2 mb-2 border border-gray-700">
    {children}
  </span>
)

export default function CuratedHumansPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [headerOpacity, setHeaderOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      const maxScroll = 200
      const newOpacity = Math.max(0.3, 1 - window.scrollY / maxScroll)
      setHeaderOpacity(newOpacity)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-black text-white">
      <Header isScrolled={isScrolled} opacity={headerOpacity} />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-red-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              AI Curated Humans
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
              We select, assess, and certify top-tier professionals in artificial intelligence, with proven experience and strong technical judgment. Each AI Curated Human is ready to integrate into your team from day one, backed by a rigorous real-world validation process, ongoing support, and a quality guarantee. You choose who to work with — we make sure it's the right person.
            </p>
            <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-red-500">
              Certified AI talent, ready to build.
            </h2>
          </div>
        </section>

        {/* Why Curated Humans Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Why We're the Right Choice</h2>
              <p className="mt-4 text-lg text-gray-400">
                Finding elite AI talent is hard. Vetting them is harder. We do the heavy lifting so you can focus on building. Our profiles have hands-on experience with tools like <span className="text-red-400">Vertex AI, LangChain, and Hugging Face</span>, and production frameworks like <span className="text-red-400">MLflow and Ray</span>.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <StatCard 
                icon={<Cpu size={32} />} 
                value="<5%" 
                label="Of applicants pass our technical assessment" 
              />
              <StatCard 
                icon={<BrainCircuit size={32} />} 
                value="200+" 
                label="Hours of real-world project validation" 
              />
              <StatCard 
                icon={<Rocket size={32} />} 
                value="1 Week" 
                label="Average time to onboard a new talent" 
              />
            </div>
          </div>
        </section>

        {/* The Bixen Seal Section */}
        <section className="py-16 md:py-24 bg-gray-900/40">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">The Bixen Seal of Approval</h2>
                <p className="mt-4 text-lg text-gray-400">
                  Every Curated Human carries our seal, a promise of quality, expertise, and readiness. This isn't just a certification; it's a guarantee that the professional has been tested against real-world challenges and has demonstrated mastery in their domain. They are proficient in key technologies like <span className="text-red-400">Transformers, RLHF, Pinecone, Weaviate, Docker + FastAPI</span>, and deployments on <span className="text-red-400">AWS/GCP</span>.
                </p>
                <ul className="mt-6 space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    Technically Vetted & Certified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    Proven Problem-Solving Skills
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    Ready for Immediate Deployment
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Image 
                  src="/images/red-flame-alt-logo.png" 
                  alt="Bixen Seal" 
                  width={300} 
                  height={300} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Selection Process Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Our Rigorous 6-Step Selection Process</h2>
              <p className="mt-4 text-lg text-gray-400">
                We ensure only the most capable and reliable professionals join our curated network.
              </p>
            </div>
            <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <ProcessStep 
                step="01" 
                title="Profile Screening" 
                description="Initial review of experience, portfolio, and background." 
              />
              <ProcessStep 
                step="02" 
                title="Technical Assessment" 
                description="In-depth evaluation of core AI/ML concepts and coding skills." 
              />
              <ProcessStep 
                step="03" 
                title="Live Coding Challenge" 
                description="Real-time problem-solving session with one of our senior engineers." 
              />
              <ProcessStep 
                step="04" 
                title="System Design Interview" 
                description="Designing a scalable, real-world AI system from the ground up." 
              />
              <ProcessStep 
                step="05" 
                title="Project Simulation" 
                description="A multi-day take-home assignment mimicking a real client project." 
              />
              <ProcessStep 
                step="06" 
                title="Final Behavioral Interview" 
                description="Assessing communication, teamwork, and cultural fit." 
              />
            </div>
          </div>
        </section>
        
        {/* Stack & Expertise Section */}
        <section className="py-16 md:py-24 bg-gray-900/40">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Wrench className="mx-auto h-12 w-12 text-red-500" />
              <h2 className="mt-4 text-3xl md:text-4xl font-bold">Stack & Expertise of our Curated Humans</h2>
              <p className="mt-4 text-lg text-gray-400">
                Our talent pool is proficient across the entire modern AI stack, ensuring they can tackle any challenge.
              </p>
            </div>
            <div className="max-w-5xl mx-auto mt-12">
              <div>
                <h3 className="text-xl font-semibold text-red-500 mb-4">Models</h3>
                <TechBadge>GPT-4</TechBadge>
                <TechBadge>Claude</TechBadge>
                <TechBadge>LLaMA</TechBadge>
                <TechBadge>Mistral</TechBadge>
                <TechBadge>Gemini</TechBadge>
                <TechBadge>BERT</TechBadge>
                <TechBadge>Whisper</TechBadge>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-red-500 mb-4">Frameworks</h3>
                <TechBadge>LangChain</TechBadge>
                <TechBadge>Haystack</TechBadge>
                <TechBadge>Transformers</TechBadge>
                <TechBadge>Hugging Face</TechBadge>
                <TechBadge>OpenAI SDK</TechBadge>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-red-500 mb-4">Infrastructure</h3>
                <TechBadge>Vertex AI</TechBadge>
                <TechBadge>MLflow</TechBadge>
                <TechBadge>DVC</TechBadge>
                <TechBadge>Docker</TechBadge>
                <TechBadge>Ray</TechBadge>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-red-500 mb-4">Vector Databases</h3>
                <TechBadge>Pinecone</TechBadge>
                <TechBadge>Weaviate</TechBadge>
                <TechBadge>FAISS</TechBadge>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-red-500 mb-4">APIs & Deployment</h3>
                <TechBadge>FastAPI</TechBadge>
                <TechBadge>Gradio</TechBadge>
                <TechBadge>Streamlit</TechBadge>
                <TechBadge>RESTful APIs</TechBadge>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-red-500 mb-4">Cloud</h3>
                <TechBadge>GCP</TechBadge>
                <TechBadge>AWS</TechBadge>
                <TechBadge>Azure</TechBadge>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to build with the best?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              Stop searching. Start building. Get access to our exclusive network of certified AI professionals today.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
                <Link href="/#contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
