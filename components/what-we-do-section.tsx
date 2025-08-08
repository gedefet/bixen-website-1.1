import { Brain, Camera, Bot, MessageSquareText, Workflow, ServerCog, Database, LayoutDashboard } from 'lucide-react'
import Link from "next/link"

type Offering = {
  icon: JSX.Element
  title: string
  description: string
  href?: string
}

const offerings: Offering[] = [
  {
    icon: <Bot className="h-8 w-8 text-secondary" />,
    title: "Generative Agents",
    description:
      "Autonomous, goal-driven agents that plan, reason, and act across tools and data.",
  },
  {
    icon: <Camera className="h-8 w-8 text-secondary" />,
    title: "Computer Vision",
    description:
      "Detection, tracking, OCR, and visual QA for real-world automation and insight.",
  },
  {
    icon: <MessageSquareText className="h-8 w-8 text-secondary" />,
    title: "NLP & RAG",
    description:
      "Domain-grounded assistants with retrieval, summarization, and compliance controls.",
  },
  {
    icon: <Workflow className="h-8 w-8 text-secondary" />,
    title: "Agentic Automation",
    description:
      "Orchestrated workflows, RPA integrations, and enterprise-grade handoffs.",
  },
  {
    icon: <Brain className="h-8 w-8 text-secondary" />,
    title: "LLM Apps & Chatbots",
    description:
      "High-UX conversational systems with memory, tools, and multi-turn reasoning.",
  },
  {
    icon: <ServerCog className="h-8 w-8 text-secondary" />,
    title: "MLOps & Serving",
    description:
      "Observability, evaluations, and scalable inference with robust CI/CD for models.",
  },
  {
    icon: <Database className="h-8 w-8 text-secondary" />,
    title: "Data Engineering",
    description:
      "Pipelines, warehousing, and governance to make your data AI-ready.",
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-secondary" />,
    title: "Product Strategy & Design",
    description:
      "Validate problems, de-risk solutions, and ship experiences customers love.",
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

      {/* Desktop/tablet wrapper with background */}
      <div className="hidden md:block bg-gradient-to-br from-white/5 to-secondary/10 backdrop-blur-md rounded-[2rem] p-8 md:p-10 shadow-lg border border-secondary/20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {offerings.map((o, i) => (
            <div
              key={i}
              className="h-full p-6 rounded-[1.25rem] border border-secondary/30 bg-secondary/10 shadow-md transition-all duration-200 hover:shadow-lg flex flex-col"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="p-3 rounded-full bg-secondary/20">{o.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {o.title}
                </h3>
              </div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed flex-grow">
                {o.description}
              </p>
              {o.href && (
                <div className="mt-5">
                  <Link
                    href={o.href}
                    className="inline-flex text-secondary hover:underline font-medium"
                  >
                    Learn more
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile layout without background wrapper */}
      <div className="md:hidden px-1 mt-2">
        <div className="grid grid-cols-1 gap-3">
          {offerings.map((o, i) => (
            <div
              key={i}
              className="p-4 rounded-[1.25rem] border border-secondary/30 bg-secondary/10 shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-secondary/20">{o.icon}</div>
                <h3 className="text-lg font-semibold text-white">{o.title}</h3>
              </div>
              <p className="text-white/90 text-base leading-relaxed">{o.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
