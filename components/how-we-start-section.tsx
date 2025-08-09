import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ClipboardList, Users, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Scope",
    body: "60-min deep dive to define value and constraints.",
  },
  {
    icon: Users,
    title: "Match in 72h",
    body: "You meet the engineers, we align on KPIs.",
  },
  {
    icon: BarChart3,
    title: "Sprint 1 with metrics",
    body: "Delivery, dashboards, and weekly reviews.",
  },
]

export default function HowWeStartSection() {
  return (
    <section className="section-y" id="process">
      <div className="container-x">
        <h2 className="text-3xl sm:text-4xl md:text-5xl">How we start</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }) => (
            <div key={title} className="glass glass-hover p-6">
              <Icon className="icon-24 text-[hsl(var(--primary))]" strokeWidth={1.75} />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-[hsl(var(--secondary))]">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="#contact" aria-label="Start in 10 days">
            <Button className="btn-primary" size="lg">
              Start in 10 days
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
