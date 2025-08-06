"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, BrainCircuit, Users, Rocket, Microscope, Award, Target } from 'lucide-react'
import { Button } from "@/components/ui/button"
import HeroHeaderContainer from "@/components/hero-header-container"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import AnimatedSection from "@/components/animated-section"

import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"

export const metadata = {
  title: "Bixen | Curated Humans - Top AI Talent",
  description: "Access top-tier, certified AI professionals ready to integrate into your team. Rigorously validated talent in LLMs, MLOps, and more.",
  keywords: "AI talent, Vertex AI, LangChain, GPT-4, AI engineer, MLOps, LLM, machine learning, Hugging Face, OpenAI, Pinecone, FastAPI, MLflow, AI developers for hire",
}

const StackItem = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
    <h3 className="text-xl font-bold text-[#01F9C6] mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-center text-white/90">
          <CheckCircle2 className="h-4 w-4 mr-2 text-[#01F9C6]" />
          {item}
        </li>
      ))}
    </ul>
  </div>
)

export default function HumansPage() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [headerOpacity, setHeaderOpacity] = React.useState(1)
  const quoteSectionRef = React.useRef<HTMLElement | null>(null)

  const handleScroll = React.useCallback(() => {
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

  React.useEffect(() => {
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

  const selectionProcess = [
    { icon: <Microscope className="w-8 h-8 text-[#01F9C6]" />, title: "Initial Screening", description: "We review profiles, portfolios, and experience to ensure they meet our baseline criteria for excellence." },
    { icon: <BrainCircuit className="w-8 h-8 text-[#01F9C6]" />, title: "Technical Deep-Dive", description: "Candidates undergo a rigorous technical assessment, including live coding and architectural challenges." },
    { icon: <Users className="w-8 h-8 text-[#01F9C6]" />, title: "Cultural & Team Fit", description: "We evaluate soft skills, communication, and problem-solving approaches to ensure seamless team integration." },
    { icon: <Rocket className="w-8 h-8 text-[#01F9C6]" />, title: "Real-World Project Simulation", description: "A hands-on project that mirrors real-world scenarios tests their practical application and strategic thinking." },
    { icon: <Award className="w-8 h-8 text-[#01F9C6]" />, title: "Final Review & Certification", description: "Our senior experts conduct a final review before granting the Bixen Curated Human certification." },
    { icon: <Target className="w-8 h-8 text-[#01F9C6]" />, title: "Client Matching", description: "We match the certified professional's skills and experience with your specific project needs and company culture." },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <HeroHeaderContainer />

      {/* Header */}
      <Header isScrolled={isScrolled} opacity={headerOpacity} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 container text-center">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">AI Curated Humans</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80">
            We select, assess, and certify top-tier professionals in artificial intelligence, with proven experience and strong technical judgment. Each AI Curated Human is ready to integrate into your team from day one, backed by a rigorous real-world validation process, ongoing support, and a quality guarantee. You choose who to work with — we make sure it’s the right person.
          </p>
          <h2 className="mt-8 text-3xl md:text-4xl font-medium text-[#01F9C6]">
            Certified AI talent, ready to build.
          </h2>
        </AnimatedSection>
      </section>

      {/* Why Curated Humans Section */}
      <section className="py-16 container">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Why We're the Right Choice</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/80">
                Finding elite AI talent is hard. We make it easy. Our Curated Humans are not just skilled—they are vetted, certified, and aligned with the demands of modern AI development. We go beyond resumes to validate real-world problem-solving abilities.
              </p>
              <p className="text-lg text-white/80">
                Our profiles have practical experience in tools like <span className="text-[#01F9C6] font-semibold">Vertex AI, LangChain, Hugging Face, OpenAI APIs</span>, and production frameworks like <span className="text-[#01F9C6] font-semibold">MLflow and Ray</span>. They master key technologies such as <span className="text-[#01F9C6] font-semibold">Transformers, RLHF, Pinecone, Weaviate, Docker + FastAPI</span>, and deployments on <span className="text-[#01F9C6] font-semibold">AWS/GCP</span>.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/20">
              <Image src="/placeholder.svg?height=400&width=500" alt="Bixen Seal of Quality" width={500} height={400} className="rounded-lg object-cover" />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Selection Process Section */}
      <section className="py-16 container">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Rigorous Selection Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectionProcess.map((step, index) => (
              <div key={index} className="bg-white/5 border border-white/20 rounded-2xl p-6 flex flex-col items-start text-left hover:border-[#01F9C6]/50 transition-colors">
                <div className="bg-[#01F9C6]/10 p-3 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Stack & Expertise Section */}
      <section className="py-16 container">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            🔧 Stack & Expertise of our Curated Humans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StackItem title="Models" items={["GPT-4 & GPT-4o", "Claude 3", "LLaMA & Mistral", "Gemini", "BERT & T5", "Whisper"]} />
            <StackItem title="Frameworks" items={["LangChain & LlamaIndex", "Haystack", "Transformers", "Hugging Face", "OpenAI SDK", "PyTorch & TensorFlow"]} />
            <StackItem title="Infrastructure" items={["Vertex AI", "MLflow & DVC", "Docker & Kubernetes", "Ray", "Airflow", "CI/CD Pipelines"]} />
            <StackItem title="Vector Databases" items={["Pinecone", "Weaviate", "FAISS", "ChromaDB", "Milvus", "Elasticsearch"]} />
            <StackItem title="APIs & Deployment" items={["FastAPI & Flask", "Gradio & Streamlit", "RESTful APIs", "Serverless (Cloud Functions)", "TorchServe", "BentoML"]} />
            <StackItem title="Cloud" items={["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)", "Microsoft Azure", "Vercel", "Hugging Face Hub", "Terraform & IaC"]} />
          </div>
        </AnimatedSection>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white/5">
        <AnimatedSection className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to build your AI-powered future?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            Access the talent that will drive your next breakthrough. Let's connect and find the perfect Curated Human for your team.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-[#01F9C6] text-black hover:bg-[#01F9C6]/80 font-bold text-lg px-8 py-6">
              <Link href="/contact">Hire AI Talent</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
