"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Users, User, Brain, BadgeCheck, FileText, Code, MessageSquare, UserCheck, CheckCircle, Award, TrendingUp, Clock, Target, Shield, Bot, Eye, MessageCircle, Workflow, BarChart3, Star, FileSearch, Mic, Sparkles, Cpu, Database, FlaskConical, ServerCog, Cloud, CircuitBoard } from 'lucide-react'
import Head from 'next/head'
import ContactSection from "@/components/contact-section"

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 lg:px-16 xl:px-24">
        {/* Background Image with fade effect */}
        <div className="absolute inset-0">
          <Image
            src="/images/office-workspace-hero.png"
            alt="Modern office workspace"
            fill
            className="object-cover transition-opacity duration-1000 ease-in-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a1f]/80 via-[#0f2027]/70 to-[#203a43]/90 transition-all duration-1000 ease-in-out"></div>
          {/* Fade to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#203a43] to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto pt-32 lg:pt-40">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI Curated Humans
          </h1>
          
          {/* "by" text with Bixen logo */}
          <div className="flex items-center justify-center gap-3 mb-20">
            <span className="text-2xl md:text-3xl text-gray-300 font-light">by</span>
            <Image
              src="/images/bixen-logo-white.png"
              alt="Bixen Logo"
              width={120}
              height={36}
              className="object-contain"
            />
          </div>
          
          <div className="text-lg md:text-xl text-gray-300 mb-24 max-w-4xl mx-auto leading-relaxed space-y-6">
            <p>
              We select, assess, and certify top-tier professionals in artificial intelligence, with proven experience and strong technical judgment.
            </p>
            <p>
              Our certified AI professionals are ready to join your team from day one, backed by a rigorous validation process, ongoing support, and a quality guarantee.
            </p>
            <p>
              You choose who to work with — we make sure they're the right person.
            </p>
          </div>
          <div className="text-3xl md:text-5xl font-bold text-[#00d4aa] leading-tight">
            Certified AI talent with your stack, ready to build.
          </div>
        </div>
      </section>

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

      {/* Why Curated Humans Stats */}
      <section className="py-20 px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-thin text-white text-center mb-16">Why Curated Humans?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-red-500/30 rounded-xl">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-16 w-16 text-red-400 mx-auto mb-6" />
                <div className="text-4xl font-bold text-red-400 mb-4">87%</div>
                <p className="text-gray-300">
                  of companies still struggle to find AI talent, with average hiring time exceeding 140 days.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-red-500/30 rounded-xl">
              <CardContent className="p-8 text-center">
                <Clock className="h-16 w-16 text-red-400 mx-auto mb-6" />
                <div className="text-4xl font-bold text-red-400 mb-4">75-95%</div>
                <p className="text-gray-300">
                  of recruiters struggle to evaluate both technical and AI-specific soft skills in traditional hiring processes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a2f33]/80 backdrop-blur-sm border-red-500/30 rounded-xl">
              <CardContent className="p-8 text-center">
                <Target className="h-16 w-16 text-red-400 mx-auto mb-6" />
                <div className="text-4xl font-bold text-red-400 mb-4">1%</div>
                <p className="text-gray-300">
                  of companies consider themselves mature in AI implementation, increasing investment risk without real results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We're the Right Choice */}
      <section className="py-20 px-8 lg:px-16 xl:px-24 bg-[#0f2027]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-thin text-white text-center mb-16">
            Why We're the Right Choice
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - 2x2 grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#1a2f33] border-[#00d4aa]/20 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00d4aa] rounded-full p-3 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">+10 years of applied AI experience</h3>
                      <p className="text-gray-300 text-sm">
                        We know the key problems in sectors like healthcare, telco, retail, gaming, banking, oil & gas because we've already solved them.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1a2f33] border-[#00d4aa]/20 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00d4aa] rounded-full p-3 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Rigorous & quantifiable process</h3>
                      <p className="text-gray-300 text-sm">
                        We minimize selection errors: our talents have been tested, reviewed by leaders, and validated in real environments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1a2f33] border-[#00d4aa]/20 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00d4aa] rounded-full p-3 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Certified by Bixen program</h3>
                      <p className="text-gray-300 text-sm">
                        Precisely defines what combines proven technical expertise, business domain knowledge, and execution capability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1a2f33] border-[#00d4aa]/20 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00d4aa] rounded-full p-3 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Exceptional quality delivery</h3>
                      <p className="text-gray-300 text-sm">
                        You won't worry about production quality or drive your recruiting team crazy with profiles changing at record speed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right side - The Bixen Seal */}
            <div className="bg-[#1a2f33] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#00d4aa] rounded-full p-3">
                  <BadgeCheck className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">The Bixen Seal</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                All our engineers pass a proprietary certification process that includes AI technical challenges, code challenges, and soft skills evaluation. Only after that they obtain the 'Certified by Bixen' seal.
              </p>
              <div className="relative">
                <Image
                  src="/images/bixen-seal-stamp.png"
                  alt="The Bixen Seal - Professional Certification"
                  width={600}
                  height={300}
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Hiring Models */}
      <section className="py-20 px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-thin text-white text-center mb-16">
            Three Hiring Models
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Solo Bixener */}
            <Card className="bg-[#1a2f33] border-[#00d4aa]/20 rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/solo-developer-focused.png"
                  alt="Solo AI Engineer - Focused Developer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f33] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#00d4aa] rounded-full w-12 h-12 flex items-center justify-center">
                    <User className="h-6 w-6 text-black" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Solo Bixener</h3>
                <p className="text-gray-300 mb-8">1 AI Engineer dedicated entirely to you.</p>
                <Badge className="bg-[#00d4aa] text-black hover:bg-[#00b894] border-0 px-4 py-2">
                  Certified by Bixen
                </Badge>
              </CardContent>
            </Card>

            {/* Curated Squad */}
            <Card className="bg-[#1a2f33] border-[#00d4aa]/20 rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                  alt="AI Team Squad"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f33] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#00d4aa] rounded-full w-12 h-12 flex items-center justify-center">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Curated Squad</h3>
                <p className="text-gray-300 mb-8">A tailor-crafted AI team to work alongside your team, ready to deliver value sprint by sprint.</p>
                <Badge className="bg-[#00d4aa] text-black hover:bg-[#00b894] border-0 px-4 py-2">
                  Certified by Bixen
                </Badge>
              </CardContent>
            </Card>

            {/* AI Advisor */}
            <Card className="bg-[#1a2f33] border-[#00d4aa]/20 rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/senior-ai-consultant.png"
                  alt="Senior AI Advisor - Executive Consultant"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f33] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#00d4aa] rounded-full w-12 h-12 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-black" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">AI Advisor</h3>
                <p className="text-gray-300 text-sm mb-8">Senior fractional expert aimed to assist with vision and critical decisions.</p>
                <Badge className="bg-[#00d4aa] text-black hover:bg-[#00b894] border-0 px-4 py-2">
                  Certified by Bixen
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Selection Process */}
      <section className="py-20 px-8 lg:px-16 xl:px-24 bg-[#0f2027]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-thin text-white text-center mb-16">
            Detailed Selection Process
          </h2>
          
          {/* Step 1 */}
          <div className="mb-16">
            <div className="bg-[#1a2f33] rounded-2xl p-8 md:p-12 relative">
              <div className="absolute -top-6 -left-6 bg-[#00d4aa] text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                1
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#00d4aa] rounded-full p-2">
                      <FileText className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">CV & Portfolio Review</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Screening by the Bixen technical team: applied AI projects, GitHub contributions, quantifiable impact, and open-source contributions/publications.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop"
                    alt="CV & Portfolio Review"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-16">
            <div className="bg-[#1a2f33] rounded-2xl p-8 md:p-12 relative">
              <div className="absolute -top-6 -right-6 bg-[#00d4aa] text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                2
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative order-1 md:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop"
                    alt="Code Challenge"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div className="order-2 md:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#00d4aa] rounded-full p-2">
                      <Code className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">AI/ML Code Challenge</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Real-world case (LLM/ML/DS). We measure accuracy, efficiency, documentation, and best practices. Peer reviewed by Bixen's Tech Leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-16">
            <div className="bg-[#1a2f33] rounded-2xl p-8 md:p-12 relative">
              <div className="absolute -top-6 -left-6 bg-[#00d4aa] text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                3
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#00d4aa] rounded-full p-2">
                      <MessageSquare className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Technical Deep-Dive (90 min)</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    With a Lead AI: architecture, trade-offs, live troubleshooting, and system design on a whiteboard.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                    alt="Technical Deep-Dive"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-16">
            <div className="bg-[#1a2f33] rounded-2xl p-8 md:p-12 relative">
              <div className="absolute -top-6 -right-6 bg-[#00d4aa] text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                4
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative order-1 md:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop"
                    alt="Soft Skills Interview"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div className="order-2 md:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#00d4aa] rounded-full p-2">
                      <UserCheck className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Soft Skills Interview (BEI)</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    60-minute session based on Behavioral Event Interview: ownership, collaboration, resilience, and communication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-16">
            <div className="bg-[#1a2f33] rounded-2xl p-8 md:p-12 relative">
              <div className="absolute -top-6 -left-6 bg-[#00d4aa] text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                5
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#00d4aa] rounded-full p-2">
                      <CheckCircle className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Internal QA Pilot</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Integration in a Bixen sandbox: real sprint, velocity metrics, code quality, and 360° feedback.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                    alt="Internal QA Pilot"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="mb-16">
            <div className="bg-[#1a2f33] rounded-2xl p-8 md:p-12 relative">
              <div className="absolute -top-6 -right-6 bg-[#00d4aa] text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10">
                6
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative order-1 md:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                    alt="Certification & Onboarding"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div className="order-2 md:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#00d4aa] rounded-full p-2">
                      <Award className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Certification & Client Onboarding</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Issuance of the "Certified by Bixen" badge, environment setup, and soft onboarding with the client with clear objectives for the first sprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="py-20 px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
              Our Certified AI Tech Stack
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              Every Curated Human™ works with a rigorously validated technology stack, ensuring compatibility with your existing systems and the ability to deliver high-impact results from day one. Our expertise covers the entire AI lifecycle — from data ingestion to deployment — across multiple domains and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* 1. AI & Machine Learning Frameworks */}
            <div className="bg-[#1a2f33]/80 backdrop-blur-sm border border-[#00d4aa]/30 rounded-xl hover:border-[#00d4aa]/50 hover:shadow-lg transition-colors">
              <div className="p-6">
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00d4aa]/20">
                    <Cpu className="h-5 w-5 text-[#00d4aa]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#00d4aa]">AI &amp; Machine Learning Frameworks</h3>
                </div>
                <div className="space-y-1.5 text-gray-300">
                  <p>{'• TensorFlow'}</p>
                  <p>{'• PyTorch'}</p>
                  <p>{'• Hugging Face Transformers'}</p>
                  <p>{'• scikit-learn'}</p>
                  <p>{'• spaCy'}</p>
                  <p>{'• OpenCV'}</p>
                </div>
              </div>
            </div>

            {/* 2. Large Language Models & Generative AI (Prominent) */}
            <div className="bg-[#1a2f33]/80 backdrop-blur-sm border border-[#00d4aa]/40 rounded-xl hover:border-[#00d4aa]/60 hover:shadow-lg transition-colors lg:col-span-2 ring-1 ring-[#00d4aa]/25">
              <div className="p-6">
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00d4aa]/20">
                    <Sparkles className="h-5 w-5 text-[#00d4aa]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#00d4aa]">Large Language Models &amp; Generative AI</h3>
                </div>
                <div className="space-y-1.5 text-gray-300">
                  <p>{'• GPT-4, Claude, Vertex AI, Azure OpenAI'}</p>
                  <p>{'• LLaMA 2, Mistral'}</p>
                  <p>{'• LangChain, AutoGen, CrewAI'}</p>
                  <p>{'• Prompt engineering & fine-tuning'}</p>
                  <p>{'• Retrieval-Augmented Generation (RAG) pipelines'}</p>
                </div>
              </div>
            </div>

            {/* 3. Vector Databases & Search */}
            <div className="bg-[#1a2f33]/80 backdrop-blur-sm border border-[#00d4aa]/30 rounded-xl hover:border-[#00d4aa]/50 hover:shadow-lg transition-colors">
              <div className="p-6">
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00d4aa]/20">
                    <Database className="h-5 w-5 text-[#00d4aa]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#00d4aa]">Vector Databases &amp; Search</h3>
                </div>
                <div className="space-y-1.5 text-gray-300">
                  <p>{'• Pinecone'}</p>
                  <p>{'• Weaviate'}</p>
                  <p>{'• FAISS'}</p>
                  <p>{'• Milvus'}</p>
                </div>
              </div>
            </div>

            {/* 4. Automation & Testing Tools (Prominent) */}
            <div className="bg-[#1a2f33]/80 backdrop-blur-sm border border-[#00d4aa]/40 rounded-xl hover:border-[#00d4aa]/60 hover:shadow-lg transition-colors lg:col-span-2 ring-1 ring-[#00d4aa]/25">
              <div className="p-6">
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00d4aa]/20">
                    <FlaskConical className="h-5 w-5 text-[#00d4aa]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#00d4aa]">Automation &amp; Testing Tools</h3>
                </div>
                <div className="space-y-1.5 text-gray-300">
                  <p>{'• Selenium, Cypress, Playwright'}</p>
                  <p>{'• TestRail, Postman, Cucumber'}</p>
                </div>
              </div>
            </div>

            {/* 5. DevOps & MLOps */}
            <div className="bg-[#1a2f33]/80 backdrop-blur-sm border border-[#00d4aa]/30 rounded-xl hover:border-[#00d4aa]/50 hover:shadow-lg transition-colors">
              <div className="p-6">
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00d4aa]/20">
                    <ServerCog className="h-5 w-5 text-[#00d4aa]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#00d4aa]">DevOps &amp; MLOps</h3>
                </div>
                <div className="space-y-1.5 text-gray-300">
                  <p>{'• Jenkins, GitHub Actions, GitLab CI/CD'}</p>
                  <p>{'• Docker, Kubernetes'}</p>
                  <p>{'• MLflow, Weights & Biases'}</p>
                </div>
              </div>
            </div>

            {/* 6. Cloud & Infrastructure */}
            <div className="bg-[#1a2f33]/80 backdrop-blur-sm border border-[#00d4aa]/30 rounded-xl hover:border-[#00d4aa]/50 hover:shadow-lg transition-colors">
              <div className="p-6">
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00d4aa]/20">
                    <Cloud className="h-5 w-5 text-[#00d4aa]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#00d4aa]">Cloud &amp; Infrastructure</h3>
                </div>
                <div className="space-y-1.5 text-gray-300">
                  <p>{'• AWS (SageMaker, Lambda, ECS)'}</p>
                  <p>{'• Google Cloud (Vertex AI, BigQuery)'}</p>
                  <p>{'• Microsoft Azure (Cognitive Services, ML)'}</p>
                  <p>{'• Cloud-native microservices'}</p>
                </div>
              </div>
            </div>

            {/* 7. Advanced AI Capabilities */}
            <div className="bg-[#1a2f33]/80 backdrop-blur-sm border border-[#00d4aa]/30 rounded-xl hover:border-[#00d4aa]/50 hover:shadow-lg transition-colors">
              <div className="p-6">
                <div className="mb-4 inline-flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00d4aa]/20">
                    <CircuitBoard className="h-5 w-5 text-[#00d4aa]" />
                  </span>
                  <h3 className="text-xl font-bold text-[#00d4aa]">Advanced AI Capabilities</h3>
                </div>
                <div className="space-y-1.5 text-gray-300">
                  <p>{'• Multi-agent orchestration'}</p>
                  <p>{'• Reinforcement Learning'}</p>
                  <p>{'• Multi-modal reasoning (text, vision, audio)'}</p>
                  <p>{'• Human-in-the-loop optimization'}</p>
                  <p>{'• Graph-based reasoning'}</p>
                  <p>{'• Autonomous AI systems for QE'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="py-12 px-8 lg:px-16 xl:px-24 bg-[#00d4aa]/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#00d4aa] font-semibold text-xl md:text-2xl">
            Result: exceptional talent, with frictionless integration to your team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 lg:px-16 xl:px-24 bg-gradient-to-r from-[#0a1a1f] to-[#203a43]">
        <ContactSection />
      </section>
    </div>
  )
}
