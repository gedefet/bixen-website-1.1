import { FileText, Code, MessageSquare, UserCheck, CheckCircle, Award } from 'lucide-react'

const steps = [
  { icon: FileText, title: "CV & Portfolio Review", text: "Applied AI projects, impact, and open-source." },
  { icon: Code, title: "AI/ML Code Challenge", text: "Real-world tasks, accuracy and best practices." },
  { icon: MessageSquare, title: "Technical Deep-Dive", text: "Architecture, trade-offs, troubleshooting." },
  { icon: UserCheck, title: "Soft Skills (BEI)", text: "Ownership, collaboration, communication." },
  { icon: CheckCircle, title: "Internal QA Pilot", text: "Sandbox sprint, velocity & quality metrics." },
  { icon: Award, title: "Certification", text: "“Certified by Bixen” and onboarding." },
]

export default function ProcessTimeline() {
  return (
    <section id="process" className="bg-[#203a43]">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-white">Selection process</h2>
          <p className="mt-2 text-white/70 text-sm md:text-base">
            Curated Humans are vetted through a rigorous, measurable framework.
          </p>
        </div>

        <div className="mt-6 md:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="bg-[#01F9C6]/20 rounded-full w-10 h-10 flex items-center justify-center">
                <s.icon className="h-5 w-5 text-[#01F9C6]" />
              </div>
              <h3 className="mt-3 text-white text-sm md:text-base font-semibold">{s.title}</h3>
              <p className="mt-1 text-white/70 text-xs md:text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
