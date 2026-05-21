"use client"

import { useState } from "react"
import Image from "next/image"

type Case = {
  year: string
  client: string
  title: string
  category: string
  logo?: string
  link?: string
  external?: boolean
  company?: string
  challenge?: string
  benefits?: string[]
  tech?: string[]
}

const CASES: Case[] = [
  {
    year: "2024",
    client: "Intuitivo",
    title: "Retail innovation with Meta technology",
    category: "Retail",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7205978275846713346",
    external: true,
  },
  {
    year: "2024",
    client: "ABInBev",
    title: "Optimizing the barley drying process at a production plant",
    category: "Manufacturing",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhR4SR5hnlCjbhOcXVdmY6jj7udXYS.png",
    company: "ABInBev is the world's largest beer manufacturer, with a portfolio of more than 500 global and local brands including Budweiser, Corona, Stella Artois, Beck's, Leffe and Hoegaarden.",
    challenge: "Optimize the barley drying process at the plant in Uruguay — reducing energy consumption and tightening operating windows.",
    benefits: ["High reduction in energy consumption", "Plant operation optimization"],
    tech: ["Deep Learning / ML", "Reinforcement Learning", "Analytics / Data Science", "Industrial IoT", "AWS"],
  },
  {
    year: "2024",
    client: "Netflix",
    title: "Content recommendation AI system",
    category: "Entertainment",
    company: "Netflix is the world's leading streaming entertainment service with over 230 million memberships across 190+ countries.",
    challenge: "Enhance the content recommendation system to lift engagement and reduce churn through more personalized suggestions.",
    benefits: ["+40% user engagement", "Reduced discovery time", "Improved retention"],
    tech: ["Machine Learning", "Deep Learning", "NLP", "Big Data", "AWS"],
  },
  {
    year: "2023",
    client: "Banco Santander",
    title: "AI-driven financial risk assessment",
    category: "Fintech",
    company: "Banco Santander is a Spanish multinational financial services company — one of the largest banks in the world by market cap.",
    challenge: "Build a risk assessment system to better evaluate loan applications and detect fraud while maintaining regulatory compliance.",
    benefits: ["-50% loan default rate", "Improved fraud detection", "Faster approvals"],
    tech: ["Machine Learning", "Deep Learning", "NLP", "Blockchain", "Cloud Security"],
  },
]

function CaseModal({ c, onClose }: { c: Case; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-6"
      style={{ background: "rgba(0,0,0,.7)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full overflow-y-auto"
        style={{
          background: "var(--surface-1)",
          border: "1px solid var(--bdr)",
          borderRadius: 4,
          maxWidth: 920,
          maxHeight: "86vh",
          display: "grid",
          gridTemplateColumns: "1.2fr .8fr",
        }}
      >
        {/* Body */}
        <div style={{ padding: "clamp(32px,4vw,56px)" }}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex items-center justify-center"
            style={{ width: 36, height: 36, background: "var(--surface-2)", border: "1px solid var(--bdr)", borderRadius: "50%", color: "var(--text)", cursor: "pointer" }}
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 2l10 10M12 2L2 12" />
            </svg>
          </button>

          <div style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--clr-accent)", marginBottom: 12 }}>
            Case study · {c.year}
          </div>
          <h3 style={{ fontSize: "clamp(24px,2.4vw,34px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 24px", color: "var(--text)" }}>
            {c.title}
          </h3>

          {c.company && (
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: "10.5px", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--clr-accent)", marginBottom: 8 }}>The company</div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-2)", margin: 0 }}>{c.company}</p>
            </div>
          )}
          {c.challenge && (
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: "10.5px", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--clr-accent)", marginBottom: 8 }}>The challenge</div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-2)", margin: 0 }}>{c.challenge}</p>
            </div>
          )}
          {c.benefits && (
            <div>
              <div style={{ fontSize: "10.5px", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--clr-accent)", marginBottom: 8 }}>Expected benefits</div>
              <ul style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-2)", margin: 0, paddingLeft: 16 }}>
                {c.benefits.map((b) => <li key={b} style={{ marginBottom: 4 }}>{b}</li>)}
              </ul>
            </div>
          )}
        </div>

        {/* Aside */}
        <div className="flex flex-col justify-between gap-8" style={{ background: "var(--surface-2)", padding: "clamp(28px,3vw,48px)" }}>
          <div>
            <div style={{ fontSize: "10.5px", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 16 }}>Client</div>
            <div className="flex items-center justify-center" style={{ background: "var(--bg)", border: "1px solid var(--bdr)", borderRadius: 4, padding: 32, minHeight: 160 }}>
              {c.logo
                ? <Image src={c.logo} alt={c.client} width={200} height={80} style={{ maxHeight: 80, width: "auto", filter: "brightness(0) invert(1)" }} />
                : <span style={{ fontSize: "clamp(28px,2.6vw,40px)", fontWeight: 700, letterSpacing: "-0.025em", color: "var(--text)" }}>{c.client}</span>
              }
            </div>
          </div>
          {c.tech && (
            <div>
              <div style={{ fontSize: "10.5px", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 10 }}>Technology</div>
              <div className="flex flex-wrap gap-1.5">
                {c.tech.map((t) => (
                  <span key={t} style={{ fontSize: "10.5px", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-2)", padding: "5px 10px", border: "1px solid var(--bdr-strong)", borderRadius: "999px" }}>{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CaseStudiesSection() {
  const [active, setActive] = useState<Case | null>(null)

  const handleClick = (c: Case) => {
    if (c.external && c.link) window.open(c.link, "_blank", "noopener")
    else setActive(c)
  }

  return (
    <section id="cases" style={{ padding: "var(--section-pad-y) 0" }}>
      <div className="container-bixen">
        <div className="grid gap-10 items-end reveal" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", marginBottom: "clamp(48px,6vw,96px)" }}>
          <div>
            <div className="eyebrow">Success stories</div>
            <h2 className="h-section" style={{ fontSize: "clamp(36px,4.5vw,72px)", marginTop: 18 }}>
              Work that<br /><em>moved the needle.</em>
            </h2>
          </div>
          <p style={{ fontSize: "clamp(17px,1.3vw,20px)", color: "var(--text-2)", lineHeight: 1.5, margin: 0, maxWidth: 540 }}>
            Real engagements, real outcomes. A selection of projects across retail, manufacturing, finance, energy, agriculture and beyond.
          </p>
        </div>

        <div className="cases-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "clamp(16px,1.6vw,28px)" }}>
          {CASES.map((c, i) => {
            const num = String(i + 1).padStart(2, "0")
            return (
              <article
                key={c.client}
                className="reveal flex flex-col justify-between relative overflow-hidden cursor-pointer"
                style={{
                  aspectRatio: "3/2",
                  background: "var(--surface-1)",
                  border: "1px solid var(--bdr)",
                  borderRadius: 4,
                  padding: 28,
                  transition: "transform .35s ease, border-color .2s ease",
                  isolation: "isolate",
                }}
                onClick={() => handleClick(c)}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "translateY(-3px)"
                  el.style.borderColor = "var(--bdr-strong)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = ""
                  el.style.borderColor = "var(--bdr)"
                }}
              >
                {/* Top row */}
                <div className="flex justify-between items-start gap-4">
                  <span style={{ fontSize: "10.5px", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-3)", padding: "6px 10px", border: "1px solid var(--bdr)", borderRadius: "999px" }}>
                    {c.category}
                  </span>
                  <span style={{ fontSize: "10.5px", letterSpacing: "var(--tracking-eyebrow)", color: "var(--text-3)" }}>
                    {num} / {c.year}
                  </span>
                </div>

                {/* Logo / wordmark */}
                <div className="flex items-center justify-center flex-1 py-6">
                  {c.logo
                    ? <Image src={c.logo} alt={c.client} width={200} height={64} style={{ maxHeight: 64, width: "auto", filter: "brightness(0) invert(1) opacity(.88)" }} />
                    : <span style={{ fontSize: "clamp(22px,2vw,30px)", fontWeight: 700, letterSpacing: "-0.025em", color: "var(--text)", opacity: 0.92 }}>{c.client}</span>
                  }
                </div>

                {/* Bottom */}
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.005em", lineHeight: 1.25, color: "var(--text)", margin: 0 }}>{c.title}</h3>
                  <div style={{ fontSize: "10.5px", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--text-3)", marginTop: 4 }}>{c.client}</div>
                  <div className="flex items-center gap-1.5 mt-3" style={{ fontSize: 11, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--clr-accent)" }}>
                    {c.external ? "View on LinkedIn" : "Read case study"}
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 5h10M7 1l4 4-4 4"/></svg>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {active && <CaseModal c={active} onClose={() => setActive(null)} />}
    </section>
  )
}
