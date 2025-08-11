"use client"

import Image from "next/image"
import {
  Camera,
  MessageSquareText,
  Workflow,
  LineChartIcon as ChartLine,
  Sparkles,
  FileText,
  Mic,
  ServerCog,
} from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import type { JSX } from "react"

type Capability = {
  title: string
  description: string
  image: string
  icon: JSX.Element
}

// Reordered per your last instructions and kept relevant tech imagery
const allCapabilities: Capability[] = [
  {
    title: "Generative AI Agents",
    description: "Sales assistants, onboarding copilots, and intelligent automation",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/generative-ai-agents-Yd9Iy9Yd9Iy9.jpg",
    icon: <Sparkles className="icon-6 text-[#0dc4a8]" />,
  },
  {
    title: "Computer Vision Systems",
    description: "Object detection, quality control, and video analytics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/computer-vision-systems-Yd9Iy9Yd9Iy9.jpg",
    icon: <Camera className="icon-6 text-[#0dc4a8]" />,
  },
  {
    title: "DevOps & MLOps",
    description: "Reliable CI/CD for AI: reproducible training, model registry, scalable serving",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/devops-mlops-Yd9Iy9Yd9Iy9.jpg",
    icon: <ServerCog className="icon-6 text-[#0dc4a8]" />,
  },
  {
    title: "Recommendation Systems",
    description: "Personalization engines for enhanced user experience",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recommendation-systems-Yd9Iy9Yd9Iy9.jpg",
    icon: <Sparkles className="icon-6 text-[#0dc4a8]" />,
  },
  {
    title: "Intelligent Chatbots",
    description: "NLP & sentiment analysis for customer engagement",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/intelligent-chatbots-Yd9Iy9Yd9Iy9.jpg",
    icon: <MessageSquareText className="icon-6 text-[#0dc4a8]" />,
  },
  {
    title: "Workflow Automation",
    description: "AI + RPA for intelligent process automation",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workflow-automation-Yd9Iy9Yd9Iy9.jpg",
    icon: <Workflow className="icon-6 text-[#0dc4a8]" />,
  },
  {
    title: "Predictive Analytics",
    description: "Health, finance, and logistics forecasting systems",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/predictive-analytics-Yd9Iy9Yd9Iy9.jpg",
    icon: <ChartLine className="icon-6 text-[#0dc4a8]" />,
  },
  {
    title: "Document Processing",
    description: "OCR, NER, and intelligent document classification",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/document-processing-Yd9Iy9Yd9Iy9.jpg",
    icon: <FileText className="icon-6 text-[#0dc4a8]" />,
  },
  {
    title: "Voice Interfaces",
    description: "Speech-to-text, voicebots, and audio processing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/voice-interfaces-Yd9Iy9Yd9Iy9.jpg",
    icon: <Mic className="icon-6 text-[#0dc4a8]" />,
  },
]

function CapabilityCard({ cap, className }: { cap: Capability; className?: string }) {
  return (
    <article
      className={cn(
        "group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f2f34]/40 shadow-[0_12px_30px_rgba(0,0,0,0.35)] glass-hover",
        className,
      )}
    >
      {/* Image header */}
      <div className="relative w-full aspect-[16/10]">
        <Image
          src={cap.image || "/placeholder.svg"}
          alt={cap.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, (min-width: 640px) 100vw, 100vw"
          className="object-cover image-grade"
          priority={false}
        />
        {/* unified cool tint overlay */}
        <div className="absolute inset-0 pointer-events-none photo-grade" />
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
        <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight">{cap.title}</h3>
        <p className="mt-2 text-white/75 text-sm md:text-base leading-relaxed">{cap.description}</p>
      </div>

      {/* subtle hover ring */}
      <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-300" />
    </article>
  )
}

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="px-0 md:container md:px-8 lg:px-16 xl:px-24 py-10 md:py-16">
      <div className="text-center max-w-[900px] mx-auto mb-8 md:mb-12 px-2 md:px-0">
        <h2 className="text-4xl font-light sm:text-5xl md:text-6xl mb-3 text-white">What We Do</h2>
        <p className="text-white/80 text-lg md:text-xl">
          Practical AI and product capabilities that compound business value.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-[#0d2730]/60 p-4 md:p-6 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {allCapabilities.map((cap) => (
              <CarouselItem key={cap.title} className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <CapabilityCard cap={cap} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-11 md:w-11 border-white/30 bg-black/30 text-white hover:bg-black/40 backdrop-blur-sm shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60" />
          <CarouselNext className="-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-11 md:w-11 border-white/30 bg-black/30 text-white hover:bg-black/40 backdrop-blur-sm shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60" />
        </Carousel>
      </div>
    </section>
  )
}
