"use client"

import Image from "next/image"

const LINKS = [
  { href: "#services", label: "What We Do" },
  { href: "#cases",    label: "Success Cases" },
  { href: "#humans",   label: "Bixen Humans" },
  { href: "#people",   label: "People" },
  { href: "#contact",  label: "Contact" },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--bdr)",
        padding: "48px var(--section-pad-x) 32px",
        background: "var(--surface-1)",
      }}
    >
      <div
        className="footer-grid"
        style={{
          maxWidth: "var(--container-w)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto auto",
          gap: 32,
          alignItems: "center",
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuente%20blanca%20fondo%20transparente_registrado-DEnxY22L1XvDKGRhofoq1uFyEv75Po.png"
          alt="Bixen"
          width={100}
          height={22}
          style={{ height: 22, width: "auto", opacity: 0.9 }}
        />

        <nav className="flex flex-wrap gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: 12, color: "var(--text-3)", transition: "color .15s ease" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-3)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div
          style={{
            fontSize: "10.5px",
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color: "var(--text-3)",
          }}
        >
          © {new Date().getFullYear()} Bixen®
        </div>
      </div>
    </footer>
  )
}
