export default function AiStatement() {
  return (
    <div
      className="reveal relative overflow-hidden text-center"
      style={{
        padding: "clamp(80px,10vw,160px) var(--section-pad-x)",
        borderBottom: "1px solid var(--bdr)",
        isolation: "isolate",
      }}
    >
      {/* "AI" watermark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none"
        style={{
          fontSize: "clamp(280px,38vw,540px)",
          fontWeight: 800,
          lineHeight: 1,
          color: "var(--clr-accent)",
          opacity: 0.06,
          letterSpacing: "-0.05em",
        }}
      >
        AI
      </div>

      <div style={{ maxWidth: 880, margin: "0 auto", position: "relative" }}>
        <div className="eyebrow eyebrow--solo" style={{ justifyContent: "center" }}>
          A note on AI
        </div>
        <p
          style={{
            fontFamily: "inherit",
            fontSize: "clamp(28px,3.2vw,48px)",
            fontWeight: 500,
            letterSpacing: "-0.025em",
            lineHeight: 1.18,
            color: "var(--text)",
            margin: "24px 0 0",
          }}
        >
          AI is in our DNA. We&apos;ve been shipping intelligent systems for{" "}
          <em style={{ fontStyle: "normal", color: "var(--clr-accent)" }}>over a decade</em>{" "}
          — long before the acronym was a marketing asset. That experience is why we know where AI earns its keep,
          and where it doesn&apos;t.
        </p>
      </div>
    </div>
  )
}
