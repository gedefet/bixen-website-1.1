"use client"

const SERVICES = [
  {
    num: "01",
    kicker: "01 / AI & Automation",
    title: "AI & Automation",
    tagline: "Embedding intelligence into operations.",
    body: "We design and deploy production AI that automates complex workflows, augments decisions, and unlocks measurable efficiency — from computer vision and LLMs to optimization and intelligent agents.",
    tags: ["LLMs", "Computer Vision", "Agents", "Optimization", "MLOps"],
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&q=85&auto=format&fit=crop",
  },
  {
    num: "02",
    kicker: "02 / Build & Run",
    title: "Build & Run",
    tagline: "Engineering products end-to-end.",
    body: "From a first sketch to a system in production — we design, build, ship and operate software alongside your team. Frontend, backend, data, infra, the whole stack.",
    tags: ["Product Design", "Full-stack", "Data Platforms", "Cloud", "SRE"],
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=85&auto=format&fit=crop",
  },
  {
    num: "03",
    kicker: "03 / Bixen Frontier",
    title: "Bixen Frontier",
    tagline: "Creation beyond convention.",
    body: "Exploratory R&D for problems without an off-the-shelf answer. Frontier models, novel architectures, rigorous experimentation — partnered with your team and our academic network.",
    tags: ["Research", "Foundation Models", "Prototyping", "Academic Partners"],
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=85&auto=format&fit=crop",
  },
  {
    num: "04",
    kicker: "04 / Bixen Humans",
    title: "Bixen Humans",
    tagline: "Embedded experts, on demand.",
    body: "Senior AI, engineering and research talent that plugs straight into your team — without the overhead of hiring full-time. Hand-picked for the work, integrated in days.",
    tags: ["AI Engineers", "ML Researchers", "Staff+ Engineers", "Fractional CTO"],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=85&auto=format&fit=crop",
    id: "humans",
  },
]

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="container-bixen" style={{ paddingTop: "var(--section-pad-y)", paddingBottom: "clamp(48px,6vw,96px)" }}>
        <div className="grid gap-10 items-end" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
          <div>
            <div className="eyebrow">What we do</div>
            <h2 className="h-section" style={{ fontSize: "clamp(36px,4.5vw,72px)", marginTop: 18 }}>
              End-to-end delivery.<br />
              Full ownership or handoff, <em>your choice.</em><br />
              Zero bottlenecks.
            </h2>
          </div>
          <p style={{ fontSize: "clamp(17px,1.3vw,20px)", color: "var(--text-2)", lineHeight: 1.5, margin: 0, maxWidth: 540 }}>
            We meet you wherever you are — strategy, build, frontier R&amp;D, or embedded talent — and operate as one team until the work ships.
          </p>
        </div>
      </div>

      <div
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 1,
          background: "var(--bdr)",
          borderTop: "1px solid var(--bdr)",
          borderBottom: "1px solid var(--bdr)",
        }}
      >
        {SERVICES.map((s) => (
          <article
            key={s.num}
            id={s.id}
            className="reveal relative flex flex-col overflow-hidden"
            style={{ background: "var(--bg)", padding: "clamp(40px,4vw,64px)", gap: 18, minHeight: 680, isolation: "isolate", transition: "background-color .3s ease" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--surface-1)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg)")}
          >
            <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url('${s.img}')`, opacity: 0.14, filter: "contrast(1.05) saturate(.85)" }} />

            <div aria-hidden="true" style={{ fontSize: "clamp(120px,14vw,240px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1, margin: "-8px 0 auto -6px", color: "var(--text-4)", userSelect: "none" }}>
              {s.num}
            </div>

            <div style={{ fontSize: "11.5px", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--clr-accent)" }}>
              {s.kicker}
            </div>

            <h3 style={{ fontSize: "clamp(30px,3vw,44px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, margin: 0, color: "var(--text)" }}>
              {s.title}
            </h3>

            <p style={{ fontSize: "clamp(16px,1.2vw,19px)", fontWeight: 500, color: "var(--clr-accent)", margin: "-8px 0 0", lineHeight: 1.3 }}>
              {s.tagline}
            </p>

            <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--text-2)", margin: 0, maxWidth: 480 }}>
              {s.body}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto pt-6">
              {s.tags.map((t) => (
                <span key={t} style={{ fontSize: "10.5px", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-3)", padding: "5px 10px", border: "1px solid var(--bdr)", borderRadius: "999px" }}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
