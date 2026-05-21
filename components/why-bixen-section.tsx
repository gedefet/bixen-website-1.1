const REASONS = [
  {
    num: "01",
    title: "World-class team",
    body: "Engineers and researchers who love solving complex challenges creatively — and who treat your problem as their own.",
    bold: "love solving complex challenges creatively",
  },
  {
    num: "02",
    title: "AI & ML depth",
    body: "Our practice spans Computer Vision, LLMs, intelligent agents and optimization models — so we know what's right for the problem, not what's trending.",
    bold: "Computer Vision, LLMs, intelligent agents and optimization models",
  },
  {
    num: "03",
    title: "Your business — our guide",
    body: "We align technology with your strategy to achieve your business goals, not to ship the most impressive demo.",
    bold: "to achieve your business goals",
  },
  {
    num: "04",
    title: "Proven track record",
    body: "Academic rigor and field experience across software, manufacturing, healthcare and aerospace.",
    bold: "software, manufacturing, healthcare and aerospace",
  },
]

export default function WhyBixenSection() {
  return (
    <section id="why" style={{ padding: "var(--section-pad-y) 0 0" }}>
      <div className="container-bixen" style={{ paddingBottom: "clamp(48px,6vw,80px)" }}>
        <div className="text-center" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="eyebrow eyebrow--solo" style={{ justifyContent: "center" }}>Why Bixen</div>
          <h2 className="h-section" style={{ fontSize: "clamp(36px,4.5vw,72px)", marginTop: 18 }}>
            Four reasons teams choose us.
          </h2>
        </div>
      </div>

      <div
        className="why-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderTop: "1px solid var(--bdr)",
        }}
      >
        {REASONS.map((r, i) => (
          <div
            key={r.num}
            className="reveal flex flex-col gap-6"
            style={{
              padding: "clamp(32px,3vw,48px) clamp(24px,2.5vw,36px)",
              borderRight: i < REASONS.length - 1 ? "1px solid var(--bdr)" : undefined,
              minHeight: 360,
            }}
          >
            <div
              style={{
                fontSize: "clamp(56px,6vw,96px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "var(--text-4)",
                marginBottom: 8,
              }}
            >
              {r.num}
            </div>
            <h3 style={{ fontSize: "clamp(22px,1.8vw,28px)", fontWeight: 700, letterSpacing: "-0.018em", lineHeight: 1.2, margin: 0, color: "var(--text)" }}>
              {r.title}
            </h3>
            <p style={{ fontSize: "15.5px", lineHeight: 1.55, color: "var(--text-2)", margin: 0 }}>
              {r.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
