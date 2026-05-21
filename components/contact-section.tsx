"use client"

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: "var(--section-pad-y) 0" }}>
      <div className="container-bixen">
        <div
          className="reveal grid contact-grid gap-12"
          style={{ gridTemplateColumns: "1fr 1fr", alignItems: "start" }}
        >
          {/* Left: contact details */}
          <div>
            <div className="eyebrow">Get in touch</div>
            <h2
              className="h-section"
              style={{ fontSize: "clamp(40px,5vw,80px)", marginTop: 18, marginBottom: 24 }}
            >
              Ready to create something <em>extraordinary?</em>
            </h2>
            <p style={{ fontSize: "clamp(18px,1.4vw,22px)", color: "var(--text-2)", lineHeight: 1.45, margin: "0 0 48px", maxWidth: 440 }}>
              Let&apos;s talk about your project — or explore how we might partner.
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 6 }}>Email</div>
                <a
                  href="mailto:contact@bixen.ai?subject=Inquiry from Bixen Website"
                  style={{ fontSize: "clamp(22px,2vw,28px)", fontWeight: 700, letterSpacing: "-0.012em", color: "var(--text)", lineHeight: 1.2, transition: "color .15s ease" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--clr-accent)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                >
                  contact@bixen.ai
                </a>
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 6 }}>Office</div>
                <div style={{ fontSize: "clamp(22px,2vw,28px)", fontWeight: 700, letterSpacing: "-0.012em", color: "var(--text)", lineHeight: 1.2 }}>
                  Ing. Enrique Butty 275<br />Buenos Aires, Argentina
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 6 }}>Follow</div>
                <a
                  href="https://www.linkedin.com/company/bixen"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "clamp(22px,2vw,28px)", fontWeight: 700, letterSpacing: "-0.012em", color: "var(--text)", lineHeight: 1.2, transition: "color .15s ease" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--clr-accent)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: "4/5", background: "var(--surface-2)", border: "1px solid var(--bdr)", borderRadius: 2 }}
          >
            <div
              className="absolute top-4 left-4 z-10"
              style={{
                background: "var(--bg)",
                padding: "8px 14px",
                border: "1px solid var(--bdr-strong)",
                borderRadius: "999px",
                fontSize: "10.5px",
                letterSpacing: "var(--tracking-eyebrow)",
                textTransform: "uppercase",
                color: "var(--text)",
              }}
            >
              Buenos Aires
            </div>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-58.37631%2C-34.60297%2C-58.36631%2C-34.59297&layer=mapnik&marker=-34.59797%2C-58.37131"
              loading="lazy"
              title="Bixen office"
              style={{ width: "100%", height: "100%", border: 0, filter: "invert(.92) hue-rotate(180deg) contrast(.85)" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
