"use client"

import Image from "next/image"

const PEOPLE = [
  {
    name: "Federico Lopez",
    role: "Founder & CEO",
    bio: "Bringing technology and business strategy together, Federico drives Bixen's vision and innovation.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFkzHTdG0MCEw/profile-displayphoto-scale_400_400/B4DZ0rrgsGH4Ag-/0/1774554330475?e=1781136000&v=beta&t=ob8oQae76YetEfh8nmEX_9aAWbce_cyToOi9-WTWBSM",
  },
  {
    name: "Damian Minnock",
    role: "AI & Machine Learning Manager",
    bio: "MSc AI specialist in Computer Vision, Voice Processing and LLMs — shaping our technical practice.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/damian.jpg-QJtCUyZNrHwbqwzufrI74Rs0MtwF4R.jpeg",
  },
  {
    name: "Florencia Zalazar",
    role: "Sales & Marketing Manager",
    bio: "Strategic vision and deep experience in healthcare and technology markets — connecting our work to the right partners.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/florencia.jpg-jPdi9r41DvdVPdEoob4Ym8FJYeHe4x.jpeg",
  },
  {
    name: "Joaquin Cuomo",
    role: "Expert Advisor",
    bio: "MSc specialist guiding LLM and NLP strategy — deep expertise applying AI to complex business challenges.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joaquin.jpg-96rpwQDiOQcEwd3svKiVRDN9SS7Eyc.jpeg",
  },
  {
    name: "Alejandro Sagula",
    role: "Corporate Architecture and Automation Expert",
    bio: "Alejandro brings over 30 years of experience in large-scale IT organizations, helping companies scale products and systems efficiently. As an advisor to Bixen, he contributes his expertise in automation and enterprise architecture with a focus on operational excellence.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alesagula-1gDy7EWJAz339nREa6XP184LtGKXRd.jpeg",
  },
]

export default function TeamSection() {
  return (
    <section id="people" style={{ padding: "var(--section-pad-y) 0" }}>
      <div className="container-bixen">
        <div className="grid gap-10 items-end reveal" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", marginBottom: "clamp(48px,6vw,96px)" }}>
          <div>
            <div className="eyebrow">People</div>
            <h2 className="h-section" style={{ fontSize: "clamp(36px,4.5vw,72px)", marginTop: 18 }}>
              Visionary minds.<br /><em>Purposeful technology.</em>
            </h2>
          </div>
          <p style={{ fontSize: "clamp(17px,1.3vw,20px)", color: "var(--text-2)", lineHeight: 1.5, margin: 0, maxWidth: 540 }}>
            A few of the people driving Bixen — alongside a global team of engineers, researchers, and strategists.
          </p>
        </div>

        <div className="people-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "clamp(16px,1.6vw,28px)" }}>
          {PEOPLE.map((p, i) => {
            const spanClass =
              i === 3 ? "people-span-start-2" :
              i === 4 ? "people-span-start-4" :
              "people-span-2"
            return (
            <article key={p.name} className={`reveal flex flex-col ${spanClass}`}>
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "4/5",
                  background: "var(--surface-2)",
                  backgroundImage: `url('${p.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  borderRadius: 2,
                  filter: "grayscale(.4) contrast(1.05)",
                  transition: "filter .35s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.filter = "grayscale(0) contrast(1.05)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = "grayscale(.4) contrast(1.05)")}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,.4))" }}
                />
              </div>
              <div style={{ padding: "18px 4px 0" }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.005em", color: "var(--text)", margin: 0 }}>
                  {p.name}
                </h3>
                <div style={{ fontSize: "10.5px", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--clr-accent)", margin: "6px 0 12px" }}>
                  {p.role}
                </div>
                <p style={{ fontSize: "13.5px", color: "var(--text-2)", lineHeight: 1.5, margin: 0 }}>
                  {p.bio}
                </p>
              </div>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
