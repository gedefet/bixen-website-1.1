"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Menu } from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
}

const NAV_LINKS = [
  { href: "#services", label: "What We Do" },
  { href: "#cases", label: "Success Cases" },
  { href: "#humans", label: "Bixen Humans", bold: true },
  { href: "#people", label: "People" },
]

export default function Header({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between gap-6"
      style={{
        padding: "18px var(--section-pad-x)",
        borderBottom: `1px solid ${isScrolled ? "var(--bdr)" : "transparent"}`,
        backgroundColor: isScrolled ? "rgba(5,7,9,.78)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px) saturate(140%)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(140%)" : "none",
        transition: "background-color .25s ease, backdrop-filter .25s ease, border-color .25s ease",
      }}
    >
      {/* Logo */}
      <a href="/" aria-label="Bixen home">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuente%20blanca%20fondo%20transparente_registrado-DEnxY22L1XvDKGRhofoq1uFyEv75Po.png"
          alt="Bixen"
          width={100}
          height={22}
          className="h-[22px] w-auto"
          priority
        />
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[13px] transition-colors duration-150"
            style={{
              color: "var(--text-2)",
              fontWeight: l.bold ? 600 : 400,
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-2)")}
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:inline-flex items-center text-[13px] font-medium transition-colors duration-150"
        style={{
          padding: "9px 20px",
          border: "1px solid var(--bdr-strong)",
          borderRadius: "999px",
          color: "var(--text)",
          letterSpacing: "0.01em",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.borderColor = "var(--clr-accent)"
          el.style.color = "var(--clr-accent)"
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.borderColor = "var(--bdr-strong)"
          el.style.color = "var(--text)"
        }}
      >
        Get in Touch
      </a>

      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2"
        style={{ color: "var(--text)", background: "none", border: "none" }}
        aria-label="Open menu"
      >
        <Menu size={22} strokeWidth={1.5} />
      </button>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex flex-col p-6"
          style={{ background: "var(--bg)" }}
        >
          <div className="flex justify-between items-center mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuente%20blanca%20fondo%20transparente_registrado-DEnxY22L1XvDKGRhofoq1uFyEv75Po.png"
              alt="Bixen"
              width={100}
              height={22}
              className="h-[22px] w-auto"
            />
            <button
              onClick={() => setIsOpen(false)}
              style={{ color: "var(--text)", background: "none", border: "none" }}
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold"
                style={{ color: "var(--text)", letterSpacing: "-0.02em" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold"
              style={{ color: "var(--clr-accent)", letterSpacing: "-0.02em" }}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
