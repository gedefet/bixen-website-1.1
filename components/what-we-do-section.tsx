"use client"

import Image from "next/image"
import { Camera, MessageSquareText, Workflow, LineChartIcon as ChartLine, Sparkles, FileText, Mic } from 'lucide-react'

type Capability = {
  title: string
  description: string
  image: string
  icon: JSX.Element
}

const capabilities: Capability[] = [
  {
    title: "Generative AI Agents",
    description:
      "Sales assistants, onboarding copilots, and intelligent automation",
    image: "/placeholder.jpg",
    icon: <Sparkles className="h-5 w-5 text-[#0dc4a8]" />,
  },
  {
    title: "Computer Vision Systems",
    description: "Object detection, quality control, and video analytics",
    image: "/body-recognition-silhouette.png",
    icon: <Camera className="h-5 w-5 text-[#0dc4a8]" />,
  },
  {
    title: "Intelligent Chatbots",
    description: "NLP & sentiment analysis for customer engagement",
    image: "/senior-ai-consultant.png",
    icon: <MessageSquareText className="h-5 w-5 text-[#0dc4a8]" />,
  },
  {
    title: "Workflow Automation",
    description: "AI + RPA for intelligent process automation",
    image: "/workflow-automation-diagram.png",
    icon: <Workflow className="h-5 w-5 text-[#0dc4a8]" />,
  },
  {
    title: "Predictive Analytics",
    description: "Health, finance, and logistics forecasting systems",
    image: "/office-workspace-hero.png",
    icon: <ChartLine className="h-5 w-5 text-[#0dc4a8]" />,
  },
  {
    title: "Recommendation Systems",
    description: "Personalization engines for enhanced user experience",
    image: "/solo-developer-focused.png",
    icon: <Sparkles className="h-5 w-5 text-[#0dc4a8]" />,
  },
  {
    title: "Document Processing",
    description: "OCR, NER, and intelligent document classification",
    image: "/placeholder.jpg",
    icon: <FileText className="h-5 w-5 text-[#0dc4a8]" />,
  },
  {
    title: "Voice Interfaces",
    description: "Speech-to-text, voicebots, and audio processing",
    image: "/female-ai-avatar-soundwaves.png",
    icon: <Mic className="h-5 w-5 text-[#0dc4a8]" />,
  },
]

function CapabilityCard({ cap }: { cap: Capability }) {
  return (
    <article className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f2f34]/40 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
      {/* Image header */}
      <div className="relative w-full aspect-[16/10]">
        <Image
          src={cap.image || "/placeholder.svg"}
          alt={cap.title}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          priority={false}
        />
        {/* soft highlight and legibility gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/[0.18] to-transparent rounded-t-2xl" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
        </div>
        {/* circular teal icon badge near lower-left */}
        <div className="absolute left-4 bottom-4">
          <div className="h-10 w-10 rounded-full bg-[#0dc4a8]/18 backdrop-blur-sm border border-[#0dc4a8]/30 flex items-center justify-center shadow-[0_4px_20px_rgba(13,196,168,0.25)]">
            {cap.icon}
          </div>
        </div>
      </div>

      {/* Text block */}
      <div className="px-6 pt-5 pb-6">
        <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight">
          {cap.title}
        </h3>
        <p className="mt-2 text-white/75 text-sm md:text-base leading-relaxed">
          {cap.description}
        </p>
      </div>

      {/* subtle hover ring */}
      <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-300" />
    </article>
  )
}

export default function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="px-0 md:container md:px-8 lg:px-16 xl:px-24 py-8 md:py-14"
    >
      <div className="text-center max-w-[900px] mx-auto mb-6 md:mb-10 px-2 md:px-0">
        <h2 className="text-4xl font-light sm:text-5xl md:text-6xl mb-3 text-white">
          What We Do
        </h2>
        <p className="text-white/80 text-lg md:text-xl">
          Practical AI and product capabilities that compound business value.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-[#0d2730]/60 p-5 md:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.title} cap={cap} />
          ))}
        </div>
      </div>
    </section>
  )
}
