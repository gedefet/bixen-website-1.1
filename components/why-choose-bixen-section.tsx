"use client"

import { BadgeCheck, Rocket, Layers, Handshake } from 'lucide-react'

type Reason = {
  title: string
  description: string
  icon: React.ReactNode
}

const reasons: Reason[] = [
  {
    title: "Certified by Bixen Talent",
    description:
      "Work with rigorously vetted AI professionals trained on delivery standards and quality engineering best practices.",
    icon: <BadgeCheck className="h-6 w-6 text-[#0dc4a8]" />,
  },
  {
    title: "AI-First Delivery",
    description:
      "From ideation to deployment, our playbooks accelerate time-to-value with measurable outcomes at each milestone.",
    icon: <Rocket className="h-6 w-6 text-[#0dc4a8]" />,
  },
  {
    title: "Quality Engineering at Scale",
    description:
      "Integrated automation, test orchestration, and guardrails ensure reliability across complex, multi-agent AI systems.",
    icon: <Layers className="h-6 w-6 text-[#0dc4a8]" />,
  },
  {
    title: "Trusted Partnerships",
    description:
      "We co-create with your team, aligning to your stack, compliance, and workflows for seamless adoption.",
    icon: <Handshake className="h-6 w-6 text-[#0dc4a8]" />,
  },
]

export default function WhyChooseBixenSection() {
  return (
    <section
      id="why-choose-bixen"
      className="px-0 md:container md:px-8 lg:px-16 xl:px-24 py-8 md:py-14"
      aria-labelledby="why-choose-bixen-title"
    >
      <div className="text-center max-w-[900px] mx-auto mb-6 md:mb-10 px-2 md:px-0">
        <h2 id="why-choose-bixen-title" className="text-4xl font-light sm:text-5xl md:text-6xl mb-3 text-white">
          {"Why Choose Bixen"}
        </h2>
        <p className="text-white/80 text-lg md:text-xl">
          {"Proven methodology, certified talent, and quality engineering that compound business value."}
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-[#0d2730]/60 p-5 md:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {reasons.map((item) => (
            <article
              key={item.title}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f2f34]/40 p-6 md:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-[#0dc4a8]/15 backdrop-blur-sm border border-[#0dc4a8]/30 flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(13,196,168,0.25)]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-white/75 text-sm md:text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-300 pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
