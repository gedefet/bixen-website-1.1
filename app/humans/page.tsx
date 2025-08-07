"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Users, User, Brain, BadgeCheck, FileText, Code, MessageSquare, UserCheck, CheckCircle, Award, TrendingUp, Clock, Target, Shield, Bot, Eye, MessageCircle, Workflow, BarChart3, Star, FileSearch, Mic } from 'lucide-react'
import Head from 'next/head'
import CuratedHero from "@/components/sections/curated-hero"
import HiringModels from "@/components/sections/hiring-models"
import SealCard from "@/components/sections/seal-card"
import ProcessTimeline from "@/components/sections/process-timeline"
import ContactCTA from "@/components/sections/contact-cta"

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
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a1f] via-[#0f2027] to-[#203a43]">
      <Head>
        <title>AI Curated Humans by Bixen - Certified AI Talent Ready to Build</title>
        <meta name="description" content="We select, assess, and certify top-tier AI professionals with proven experience. Vertex AI, LangChain, GPT-4, MLOps experts ready to integrate into your team from day one." />
        <meta name="keywords" content="AI talent, Vertex AI, LangChain, GPT-4, AI engineer, MLOps, LLM, machine learning, Hugging Face, OpenAI, Pinecone, FastAPI, MLflow, AI developers for hire, certified AI professionals, curated AI talent" />
        <meta property="og:title" content="AI Curated Humans by Bixen - Certified AI Talent" />
        <meta property="og:description" content="Certified AI professionals with expertise in GPT-4, LangChain, Vertex AI, and production ML frameworks. Ready to integrate into your team from day one." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Simplified Header for Humans Page */}
      <header
        className={`z-[100] fixed top-0 left-0 right-0 w-full px-2 pt-2 lg:pt-6 transition-opacity duration-300`}
        style={{ opacity }}
      >
        <div
          className={`w-full max-w-screen-xl h-14 lg:h-[4.5rem] flex flex-row items-center justify-between mx-auto px-6 ${
            isScrolled ? "bg-[#004953]/60 backdrop-blur-sm border-b border-[#008794]/20" : "lg:bg-transparent"
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

          <div className="flex items-center justify-end">
            <a
              href="/#contact-form"
              className="inline-flex items-center px-3 py-1.5 text-sm rounded-md bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90 transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Curated Hero Section */}
      <CuratedHero />

      {/* AI Solutions We Build */}
      <section className="py-16 px-8 lg:px-16 xl:px-24 bg-[#203a43]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/20 rounded-xl hover:border-[#00d4aa]/40 transition-colors overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
                  alt="Generative AI Agents"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f33] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#00d4aa]/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <Bot className="h-6 w-6 text-[#00d4aa]" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Generative AI Agents</h3>
                <p className="text-gray-300 text-sm">Sales assistants, onboarding copilots, and intelligent automation</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/20 rounded-xl hover:border-[#00d4aa]/40 transition-colors overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/drone-aerial-view.png"
                  alt="Computer Vision Systems - Drone View"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f33] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#00d4aa]/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-[#00d4aa]" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Computer Vision Systems</h3>
                <p className="text-gray-300 text-sm">Object detection, quality control, and video analytics</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/20 rounded-xl hover:border-[#00d4aa]/40 transition-colors overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop"
                  alt="Intelligent Chatbots"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f33] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#00d4aa]/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-[#00d4aa]" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Intelligent Chatbots</h3>
                <p className="text-gray-300 text-sm">NLP & sentiment analysis for customer engagement</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/20 rounded-xl hover:border-[#00d4aa]/40 transition-colors overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/workflow-automation-diagram.png"
                  alt="Workflow Automation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f33] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#00d4aa]/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <Workflow className="h-6 w-6 text-[#00d4aa]" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Workflow Automation</h3>
                <p className="text-gray-300 text-sm">AI + RPA for intelligent process automation</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/20 rounded-xl hover:border-[#00d4aa]/40 transition-colors overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                  alt="Predictive Analytics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f33] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#00d4aa]/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-[#00d4aa]" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Predictive Analytics</h3>
                <p className="text-gray-300 text-sm">Health, finance, and logistics forecasting systems</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/20 rounded-xl hover:border-[#00d4aa]/40 transition-colors overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
                  alt="Recommendation Systems"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f33] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#00d4aa]/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <Star className="h-6 w-6 text-[#00d4aa]" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Recommendation Systems</h3>
                <p className="text-gray-300 text-sm">Personalization engines for enhanced user experience</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/20 rounded-xl hover:border-[#00d4aa]/40 transition-colors overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
                  alt="Document Processing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f33] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#00d4aa]/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <FileSearch className="h-6 w-6 text-[#00d4aa]" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Document Processing</h3>
                <p className="text-gray-300 text-sm">OCR, NER, and intelligent document classification</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/20 rounded-xl hover:border-[#00d4aa]/40 transition-colors overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/female-ai-avatar-soundwaves.png"
                  alt="Voice Interfaces"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f33] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#00d4aa]/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <Mic className="h-6 w-6 text-[#00d4aa]" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Voice Interfaces</h3>
                <p className="text-gray-300 text-sm">Speech-to-text, voicebots, and audio processing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hiring Models Section */}
      <HiringModels />

      {/* Seal Card Section */}
      <SealCard />

      {/* Detailed Selection Process */}
      <ProcessTimeline />

      {/* Tech Stack */}
      <section className="py-20 px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-4">Tech Stack</h2>
            <p className="text-xl text-gray-300">
              Our team seamlessly adapts to your existing technology stack while bringing expertise in cutting-edge AI frameworks and tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/30 rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#00d4aa] mb-4">Models</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• GPT-4, Claude, LLaMA</p>
                  <p>• Mistral, Gemini, BERT</p>
                  <p>• Whisper, Stable Diffusion</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/30 rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#00d4aa] mb-4">Frameworks</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• LangChain, Haystack</p>
                  <p>• Transformers, Hugging Face</p>
                  <p>• OpenAI SDK, Anthropic</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/30 rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#00d4aa] mb-4">Infrastructure</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• Vertex AI, MLflow, DVC</p>
                  <p>• Docker, Ray, Kubernetes</p>
                  <p>• Apache Airflow, Prefect</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/30 rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#00d4aa] mb-4">Vector Databases</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• Pinecone, Weaviate</p>
                  <p>• FAISS, ChromaDB</p>
                  <p>• Qdrant, Milvus</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/30 rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#00d4aa] mb-4">APIs & Deployment</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• FastAPI, Gradio</p>
                  <p>• Streamlit, RESTful APIs</p>
                  <p>• GraphQL, WebSockets</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-[#00d4aa]/30 rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#00d4aa] mb-4">Cloud</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• GCP, AWS, Azure</p>
                  <p>• Serverless, Lambda</p>
                  <p>• Cloud Run, ECS</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />
    </div>
  )
}
