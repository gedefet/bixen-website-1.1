export default function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "100vh",
        padding: "clamp(140px,16vh,200px) var(--section-pad-x) clamp(80px,10vw,140px)",
        isolation: "isolate",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Geosat-2-E_lo.jpg-gb2cigAgiBVscURgZfUX2eGacyIgd9.jpeg')",
          filter: "brightness(.42) contrast(1.05)",
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 85% 60% at 30% 55%, transparent 0%, rgba(0,0,0,.55) 100%), linear-gradient(180deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,.25) 35%, rgba(0,0,0,.55) 100%)",
        }}
      />

      {/* Top strip: location / regions */}
      <div
        className="absolute left-0 right-0 flex items-center justify-between gap-6 pointer-events-none"
        style={{
          top: "clamp(82px,9vw,110px)",
          padding: "0 var(--section-pad-x)",
          fontSize: "11px",
          letterSpacing: "var(--tracking-eyebrow)",
          textTransform: "uppercase",
          color: "var(--text-2)",
        }}
      >
        <div className="flex items-center gap-3" style={{ color: "var(--text)" }}>
          <span
            className="inline-block rounded-full"
            style={{
              width: 7,
              height: 7,
              background: "var(--clr-accent)",
              animation: "pulse-dot 2.4s ease-out infinite",
            }}
          />
          Buenos Aires · 34.6° S / 58.3° W
        </div>
        <div className="hidden sm:flex items-center gap-8" style={{ color: "var(--text-3)" }}>
          <span style={{ color: "var(--text)" }}>LATAM</span>
          <span style={{ color: "var(--text)" }}>US</span>
          <span style={{ color: "var(--text)" }}>Europe</span>
        </div>
      </div>

      {/* Main content */}
      <div style={{ width: "100%", maxWidth: "var(--container-w)", margin: "0 auto" }}>
        <div className="flex flex-col" style={{ maxWidth: 920, gap: "clamp(22px,2.5vw,36px)" }}>
          {/* Claude Partner badge */}
          <a
            href="https://www.anthropic.com/partners"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start transition-colors duration-200"
            style={{
              padding: "9px 18px 9px 14px",
              border: "1px solid var(--bdr-strong)",
              borderRadius: "999px",
              background: "rgba(5,7,9,.55)",
              backdropFilter: "blur(8px)",
              fontSize: "11.5px",
              fontWeight: 500,
              letterSpacing: "var(--tracking-eyebrow)",
              textTransform: "uppercase",
              color: "var(--text)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true" style={{ flexShrink: 0 }}>
              <g fill="#D97757">
                <rect x="9.2" y="0" width="1.6" height="20" rx=".8"/>
                <rect x="9.2" y="0" width="1.6" height="20" rx=".8" transform="rotate(45 10 10)"/>
                <rect x="9.2" y="0" width="1.6" height="20" rx=".8" transform="rotate(90 10 10)"/>
                <rect x="9.2" y="0" width="1.6" height="20" rx=".8" transform="rotate(135 10 10)"/>
              </g>
            </svg>
            Member of the Claude Partner Network
          </a>

          {/* Headline */}
          <h1
            className="h-section"
            style={{
              fontSize: "clamp(34px,7vw,92px)",
              marginLeft: "-3px",
              paddingBottom: "0.28em",
            }}
          >
            Helping companies<br className="hidden sm:inline" />{" "}
            <em>thrive</em> through AI.
          </h1>

          {/* Sub */}
          <p
            style={{
              fontSize: "clamp(14px,1.7vw,21px)",
              lineHeight: 1.5,
              color: "var(--text-2)",
              margin: 0,
              maxWidth: 640,
            }}
          >
            Leveraging deep AI expertise and exceptional talent to push beyond off-the-shelf technology.{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>
              Computer vision, LLMs, intelligent agents
            </strong>{" "}
            — built for measurable impact.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          fontSize: 10,
          letterSpacing: "var(--tracking-eyebrow)",
          textTransform: "uppercase",
          color: "var(--text-3)",
        }}
      >
        Scroll
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          style={{ animation: "bob 1.8s ease-in-out infinite" }}
        >
          <path d="M6 1v12M2 9l4 4 4-4" />
        </svg>
      </div>
    </section>
  )
}
