const STATS = [
  { num: "10", sup: "+", label: "Years in AI" },
  { num: "4",  sup: "",  label: "Service practices" },
  { num: "9",  sup: "",  label: "Industries served" },
  { num: "∞",  sup: "",  label: "Conventions broken" },
]

export default function StatsSection() {
  return (
    <div
      style={{
        borderTop: "1px solid var(--bdr)",
        borderBottom: "1px solid var(--bdr)",
        background: "var(--surface-1)",
      }}
    >
      <div
        className="grid stats-grid"
        style={{
          gridTemplateColumns: "repeat(4,1fr)",
          maxWidth: "var(--container-w)",
          margin: "0 auto",
          padding: "0 var(--section-pad-x)",
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            className="flex flex-col gap-1.5 reveal"
            style={{
              padding: "32px 24px",
              borderRight: i < STATS.length - 1 ? "1px solid var(--bdr)" : undefined,
            }}
          >
            <div
              style={{
                fontSize: "clamp(40px,4.5vw,64px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "var(--text)",
              }}
            >
              {s.num}
              {s.sup && (
                <sup style={{ fontSize: ".5em", verticalAlign: "top", color: "var(--clr-accent)", marginLeft: 2 }}>
                  {s.sup}
                </sup>
              )}
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "var(--tracking-eyebrow)",
                textTransform: "uppercase",
                color: "var(--text-3)",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
