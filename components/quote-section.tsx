export default function QuoteSection() {
  return (
    <section
      id="quote"
      className="text-center"
      style={{
        padding: "clamp(96px,12vw,180px) var(--section-pad-x)",
        borderTop: "1px solid var(--bdr)",
        borderBottom: "1px solid var(--bdr)",
        background: "var(--surface-1)",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div
          aria-hidden="true"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(96px,12vw,180px)",
            lineHeight: 0.6,
            color: "var(--clr-accent)",
            opacity: 0.8,
            margin: 0,
          }}
        >
          &ldquo;
        </div>
        <blockquote
          style={{
            fontWeight: 700,
            fontSize: "clamp(28px,4vw,56px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            color: "var(--text)",
            margin: "32px auto",
            maxWidth: 880,
          }}
        >
          If you look closely, most{" "}
          <em style={{ fontStyle: "normal", color: "var(--clr-accent)" }}>overnight successes</em>
          <br />took a long time.
        </blockquote>
        <div
          style={{
            fontSize: 11,
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color: "var(--text-3)",
          }}
        >
          — <strong style={{ color: "var(--text)", fontWeight: 500 }}>Steve Jobs</strong>
        </div>
      </div>
    </section>
  )
}
