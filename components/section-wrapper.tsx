import type React from "react"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  backgroundColor: string
  nextSectionColor?: string
  prevSectionColor?: string
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  backgroundColor,
  nextSectionColor,
  prevSectionColor,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-12 md:py-20 overflow-hidden section-transition ${className}`}
      style={
        {
          backgroundColor: "transparent",
          "--section-color": backgroundColor,
        } as React.CSSProperties
      }
    >
      {prevSectionColor && (
        <div
          className="section-divider section-divider-top"
          style={{
            background: `linear-gradient(to bottom, ${prevSectionColor} 0%, ${backgroundColor} 100%)`,
          }}
        />
      )}

      {children}

      {nextSectionColor && (
        <div
          className="section-divider section-divider-bottom"
          style={{
            background: `linear-gradient(to bottom, ${backgroundColor} 0%, ${nextSectionColor} 100%)`,
          }}
        />
      )}
    </section>
  )
}

