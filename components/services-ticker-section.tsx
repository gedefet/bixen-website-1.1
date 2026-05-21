"use client"

const STATS = [
  { num: "10+ yrs", label: "Applied AI" },
  { num: "98.4%",   label: "Precision · 3D Body Scan" },
  { num: "-60%",    label: "Customer Service Cost" },
  { num: "4",       label: "Continents Delivered" },
]

const ITEMS = [
  "Bixen Humans",
  "Product Strategy",
  "Design Systems",
  "AI & Automation",
  "Build & Run",
  "Bixen Frontier",
]

export default function ServicesTickerSection() {
  const track = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div>
      {/* Stats row */}
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
              className="flex flex-col gap-2 reveal"
              style={{
                padding: "28px 24px",
                borderRight: i < STATS.length - 1 ? "1px solid var(--bdr)" : undefined,
              }}
            >
              <div
                style={{
                  fontSize: "clamp(30px,3vw,48px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  color: "var(--text)",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: 10.5,
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

      {/* Auto-scrolling ticker */}
      <div
        style={{
          borderBottom: "1px solid var(--bdr)",
          overflow: "hidden",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 36s linear infinite",
          }}
        >
          {track.map((item, i) => (
            <span
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 36,
                padding: "0 36px",
                whiteSpace: "nowrap",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-3)",
              }}
            >
              {item}
              <span
                aria-hidden="true"
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--clr-accent)",
                  flexShrink: 0,
                }}
              />
            </span>
          ))}
        </div>
      </div>

      {/* Statement card */}
      <div
        className="container-bixen"
        style={{ paddingTop: "clamp(48px,6vw,80px)", paddingBottom: "clamp(48px,6vw,80px)" }}
      >
        <div
          className="reveal relative overflow-hidden"
          style={{
            border: "1px solid var(--bdr)",
            borderRadius: 6,
            padding: "clamp(40px,5vw,72px) clamp(32px,4vw,64px)",
            background: "var(--surface-1)",
            isolation: "isolate",
          }}
        >
          {/* Decorative rings */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-5%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "45%",
              aspectRatio: "1",
              pointerEvents: "none",
              zIndex: -1,
            }}
          >
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid var(--bdr)" }} />
            <div style={{ position: "absolute", inset: "18%", borderRadius: "50%", border: "1px dashed var(--bdr)" }} />
            <div style={{ position: "absolute", inset: "36%", borderRadius: "50%", border: "1px solid var(--bdr-strong)" }} />
          </div>

          <h2
            style={{
              fontSize: "clamp(28px,3.5vw,52px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.12,
              margin: 0,
              color: "var(--text)",
              maxWidth: 560,
            }}
          >
            We partner with teams that need more than execution.
          </h2>
          <p
            style={{
              fontSize: "clamp(16px,1.3vw,19px)",
              color: "var(--text-2)",
              margin: "16px 0 0",
              lineHeight: 1.5,
            }}
          >
            We help define, build, and scale.
          </p>
        </div>
      </div>
    </div>
  )
}
