"use client"

import Image from "next/image"

const PARTNERS = [
  { name: "NVIDIA",                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VRdAI1eHxM2NYjZtoJlN7oaNqQXwYX.png" },
  { name: "Amazon",                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QrK5VKqq2imvPmwxs3Uy3Qer8guVgB.png" },
  { name: "Microsoft Azure",         src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E3FvTS1BXHdoF3KOMD6sL7LtNc2Rut.png" },
  { name: "Google Cloud",            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ABX98sjMF1p1Ol198zNs15LxgR966k.png" },
  { name: "Ingenia",                 src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YBLKyRpcyLWwMZ84W6W8mrKVXJ3Kh3.png" },
  { name: "Universidad de Buenos Aires", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hxUQCX0I7n4TcYHz0ojZ5nlkb2nLWw.png" },
]

export default function PartnersCarousel() {
  return (
    <section
      id="partners"
      style={{
        borderTop: "1px solid var(--bdr)",
        borderBottom: "1px solid var(--bdr)",
        background: "var(--surface-1)",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "clamp(64px,8vw,120px) 0" }}>
        <div className="text-center reveal" style={{ marginBottom: "clamp(40px,5vw,72px)" }}>
          <div className="eyebrow eyebrow--solo" style={{ justifyContent: "center" }}>
            Technologies, partners &amp; universities
          </div>
          <p
            style={{
              fontSize: "clamp(22px,2vw,30px)",
              fontWeight: 600,
              letterSpacing: "-0.015em",
              color: "var(--text)",
              margin: "12px 0 0",
            }}
          >
            Built on, and built with, the best.
          </p>
        </div>

        <div
          className="reveal partners-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6,1fr)",
            alignItems: "center",
            maxWidth: "var(--container-w)",
            margin: "0 auto",
            padding: "0 var(--section-pad-x)",
            gap: 1,
            background: "var(--bdr)",
            borderTop: "1px solid var(--bdr)",
            borderBottom: "1px solid var(--bdr)",
          }}
        >
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center"
              style={{
                background: "var(--surface-1)",
                padding: "36px 24px",
                minHeight: 120,
                transition: "background-color .2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--surface-2)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--surface-1)")}
            >
              <Image
                src={p.src}
                alt={p.name}
                width={160}
                height={44}
                style={{
                  maxHeight: 44,
                  width: "auto",
                  filter: "brightness(0) invert(1) opacity(.78)",
                  transition: "filter .25s ease",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
