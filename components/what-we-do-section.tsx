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

/* Keep previous image sources, unify grading and density */
const allCapabilities: Capability[] = [
  {
    title: "Generative AI Agents",
    description: "Sales assistants, onboarding copilots, and intelligent automation",
    image: "/placeholder.jpg",
    icon: <Sparkles className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />,
  },
  {
    title: "Computer Vision Systems",
    description: "Object detection, quality control, and video analytics",
    image: "/body-recognition-silhouette.png",
    icon: <Camera className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />,
  },
  {
    title: "DevOps & MLOps",
    description: "Reliable CI/CD for AI: reproducible training, model registry, scalable serving",
    image: "/images/rpa-technology.png",
    icon: <ServerCog className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />,
  },
  {
    title: "Recommendation Systems",
    description: "Personalization engines for enhanced user experience",
    image: "/solo-developer-focused.png",
    icon: <Sparkles className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />,
  },
  {
    title: "Intelligent Chatbots",
    description: "NLP & sentiment analysis for customer engagement",
    image: "/senior-ai-consultant.png",
    icon: <MessageSquareText className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />,
  },
  {
    title: "Workflow Automation",
    description: "AI + RPA for intelligent process automation",
    image: "/workflow-automation-diagram.png",
    icon: <Workflow className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />,
  },
  {
    title: "Predictive Analytics",
    description: "Health, finance, and logistics forecasting systems",
    image: "/office-workspace-hero.png",
    icon: <ChartLine className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />,
  },
  {
    title: "Document Processing",
    description: "OCR, NER, and intelligent document classification",
    image: "/placeholder.jpg",
    icon: <FileText className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />,
  },
  {
    title: "Voice Interfaces",
    description: "Speech-to-text, voicebots, and audio processing",
    image: "/female-ai-avatar-soundwaves.png",
    icon: <Mic className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />,
  },
]

function CapabilityCard({ cap, className }: { cap: Capability; className?: string }) {
  return (
    <article className={cn("group relative overflow-hidden glass glass-hover", className)}>
      <div className="relative w-full aspect-[16/10]">
        <Image
          src={cap.image || "/placeholder.svg"}
          alt={cap.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover image-grade"
          priority={false}
        />
        <div className="absolute inset-0 uniform-overlay pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/15 to-transparent rounded-t-2xl pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute left-4 bottom-4">
          <div className="h-11 w-11 rounded-2xl bg-[hsl(var(--primary))]/15 backdrop-blur-sm border border-[hsl(var(--primary))]/30 flex items-center justify-center shadow-[0_4px_20px_rgba(0,212,192,0.25)]">
            {cap.icon}
          </div>
        </div>
      </div>

      <div className="px-6 pt-5 pb-6">
        <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight">{cap.title}</h3>
        <p className="mt-2 text-[hsl(var(--secondary))] text-sm md:text-base leading-relaxed">{cap.description}</p>
      </div>

      <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-300" />
    </article>
  )
}

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="section-y">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-4xl sm:text-5xl">What We Do</h2>
          <p className="mt-4 text-[hsl(var(--secondary))] text-lg md:text-xl">
            Practical AI and product capabilities that compound business value.
          </p>
        </div>

        <div className="glass p-5 md:p-8 lg:p-10">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {allCapabilities.map((cap) => (
                <CarouselItem key={cap.title} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <CapabilityCard cap={cap} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className="left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 border-white/20 bg-black/30 text-white hover:bg-black/40 backdrop-blur-sm shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
              aria-label="Previous"
            />
            <CarouselNext
              className="right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 border-white/20 bg-black/30 text-white hover:bg-black/40 backdrop-blur-sm shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
              aria-label="Next"
            />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
