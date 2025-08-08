"use client"

import Image from "next/image"
import Link from "next/link"

type Capability = {
  title: string
  description: string
  image: string
  href?: string
}

const capabilities: Capability[] = [
  {
    title: "Generative Agents",
    description:
      "Autonomous, goal-driven agents that plan, reason, and act across tools and data.",
    image: "/female-ai-avatar-soundwaves.png",
  },
  {
    title: "Computer Vision",
    description:
      "Detection, tracking, OCR, and visual QA for real-world automation and insight.",
    image: "/body-recognition-silhouette.png",
  },
  {
    title: "NLP & RAG",
    description:
      "Domain-grounded assistants with retrieval, summarization, and compliance controls.",
    image: "/placeholder.jpg",
  },
  {
    title: "Agentic Automation",
    description:
      "Orchestrated workflows, RPA integrations, and enterprise-grade handoffs.",
    image: "/workflow-automation-diagram.png",
  },
  {
    title: "LLM Apps & Chatbots",
    description:
      "High-UX conversational systems with memory, tools, and multi-turn reasoning.",
    image: "/senior-ai-consultant.png",
  },
  {
    title: "MLOps & Serving",
    description:
      "Evaluations, observability, and scalable inference with robust CI/CD for models.",
    image: "/rpa-technology.png",
  },
  {
    title: "Data Engineering",
    description:
      "Pipelines, warehousing, and governance to make your data AI-ready.",
    image: "/office-workspace-hero.png",
  },
  {
    title: "Product Strategy & Design",
    description:
      "Validate problems, de-risk solutions, and ship experiences customers love.",
    image: "/solo-developer-focused.png",
  },
]

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="px-0 md:container md:px-8 lg:px-16 xl:px-24 py-6 md:py-14">
      <div className="text-center max-w-[900px] mx-auto mb-6 md:mb-10 px-2 md:px-0">
        <h2 className="text-4xl font-light sm:text-5xl md:text-6xl mb-3 text-white">
          What We Do
        </h2>
        <p className="text-white/80 text-lg md:text-xl">
          Practical AI and product capabilities that compound business value.
        </p>
      </div>

      {/* Image cards matching curated-humans visual style */}
      <div className="bg-gradient-to-br from-white/5 to-secondary/10 backdrop-blur-md rounded-[2rem] p-5 md:p-8 lg:p-10 shadow-lg border border-secondary/20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {capabilities.map((cap) => (
            <article
              key={cap.title}
              className="group relative rounded-2xl overflow-hidden border border-secondary/30 bg-black/20 shadow-[0_0_20px_rgba(1,249,198,0.1)] hover:shadow-[0_0_28px_rgba(1,249,198,0.18)] transition-shadow duration-300"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={cap.image || "/placeholder.svg"}
                  alt={cap.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
                {/* Soft overlay and gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Text content pinned to bottom over the image */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold drop-shadow">
                  {cap.title}
                </h3>
                <p className="mt-1 text-white/90 text-sm md:text-base leading-relaxed line-clamp-3">
                  {cap.description}
                </p>
              </div>

              {/* Optional clickable area (if href present) */}
              {cap.href && (
                <Link
                  href={cap.href}
                  className="absolute inset-0"
                  aria-label={`Learn more about ${cap.title}`}
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
