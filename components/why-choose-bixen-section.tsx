"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Brain, Building2, CheckCircle2 } from 'lucide-react'
import { cn } from "@/lib/utils"

type Reason = {
  title: string
  description: string
  icon: React.ReactNode
}

const reasons: Reason[] = [
  {
    title: "World Class Team",
    description:
      "Senior engineers, PMs, and AI practitioners with battle-tested experience across industries deliver reliably from day one.",
    icon: <Award className="h-6 w-6 text-[#01F9C6]" aria-hidden="true" />,
  },
  {
    title: "AI and Machine Learning Experts",
    description:
      "Deep expertise in modern ML, LLMs, and MLOps to design, evaluate, and ship scalable, production-ready AI systems.",
    icon: <Brain className="h-6 w-6 text-[#01F9C6]" aria-hidden="true" />,
  },
  {
    title: "Your Business",
    description:
      "Solutions tailored to your domain, stack, and constraints—prioritizing measurable outcomes and sustainable impact.",
    icon: <Building2 className="h-6 w-6 text-[#01F9C6]" aria-hidden="true" />,
  },
  {
    title: "Proven Track Record",
    description:
      "Shipped products and transformations with clear ROI, referenceable results, and continuous improvement.",
    icon: <CheckCircle2 className="h-6 w-6 text-[#01F9C6]" aria-hidden="true" />,
  },
]

export default function WhyChooseBixenSection({
  className,
}: {
  className?: string
}) {
  return (
    <section
      id="why-choose-bixen"
      aria-label="Why Choose Bixen"
      className={cn("w-full", className)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Why Choose Bixen
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-prose">
            A focused set of strengths that help you move faster with confidence.
          </p>
        </div>

        {/* 2x2 matrix: 1 column on mobile, 2 columns on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((r) => (
            <Card
              key={r.title}
              className="group relative overflow-hidden border border-border/70 bg-card/80 backdrop-blur-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(1,249,198,0.15)] hover:border-[#01F9C6]/40"
            >
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#01F9C6]/10 ring-1 ring-[#01F9C6]/20">
                  {r.icon}
                </div>
                <CardTitle className="text-lg sm:text-xl">{r.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {r.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
