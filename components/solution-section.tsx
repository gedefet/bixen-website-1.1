import { CheckCircle2 } from "lucide-react"

export default function SolutionSection() {
  const bullets = [
    "Certified engineers (tech challenge, code review, soft skills)",
    "“Done-with-you” delivery in your codebase",
    "Clear SLAs and measurable KPIs from day one",
    "Replacement/backup policy to reduce risk",
  ]
  return (
    <section className="section-y" id="solution">
      <div className="container-x">
        <h2 className="text-3xl sm:text-4xl md:text-5xl">Curated Humans by Bixen</h2>
        <p className="mt-3 text-lg md:text-xl text-[hsl(var(--secondary))]">
          Squads that deliver production-grade AI in 10 days—with SLAs and delivery KPIs from sprint 1.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <CheckCircle2 className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />
              <span className="text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
