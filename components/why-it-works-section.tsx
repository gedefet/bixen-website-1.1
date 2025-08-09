import { ShieldCheck, Code2, Clock, FileCheck2 } from "lucide-react"

const items = [
  { icon: Code2, text: "Tech due-diligence beyond buzzwords" },
  { icon: FileCheck2, text: "Internal QA sandbox and code reviews" },
  { icon: Clock, text: "Replacement within 48h if needed" },
  { icon: ShieldCheck, text: "Code ownership on your side" },
]

export default function WhyItWorksSection() {
  return (
    <section className="section-y">
      <div className="container-x">
        <h2 className="text-3xl sm:text-4xl md:text-5xl">Why it works</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3 glass p-4">
              <Icon className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />
              <span className="text-foreground/90">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
