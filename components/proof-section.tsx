import { Button } from "@/components/ui/button"

const cases = [
  {
    title: "ABInBev — CV model",
    metric: "93% accuracy • 6 weeks to prod",
    description: "Computer vision to optimize a key production process with measurable quality gains.",
  },
  {
    title: "Fintech — GenAI onboarding copilot",
    metric: "−35% support time",
    description: "Onboarding copilots that resolve issues faster and reduce human workload.",
  },
  {
    title: "Healthcare — OCR + NER",
    metric: "98% extraction • +4 NPS",
    description: "Document intelligence to extract critical data with near-perfect accuracy.",
  },
]

export default function ProofSection() {
  return (
    <section className="section-y" id="case-studies">
      <div className="container-x">
        <h2 className="text-3xl sm:text-4xl md:text-5xl">What happened when we shipped</h2>

        <div className="cards-grid mt-8">
          {cases.map((item) => (
            <article key={item.title} className="glass glass-hover p-6">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-[hsl(var(--secondary))]">{item.description}</p>
              <p className="mt-3 text-foreground">{item.metric}</p>
              <div className="mt-6">
                <Button variant="link" aria-label={`Read more about ${item.title}`}>
                  Read more
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
