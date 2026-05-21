import Image from "next/image"

export default function VisionSection() {
  return (
    <section id="vision" style={{ padding: "var(--section-pad-y) 0" }}>
      <div className="container-bixen">
        <div
          className="reveal grid vision-grid items-center"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "clamp(48px,6vw,120px)" }}
        >
          {/* Compass */}
          <div className="relative flex items-center justify-center" style={{ aspectRatio: "1" }}>
            <div
              className="absolute inset-0 rounded-full"
              style={{ inset: "12%", border: "1px solid var(--bdr)" }}
            />
            <div
              className="absolute rounded-full"
              style={{ inset: "28%", border: "1px dashed var(--bdr)" }}
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-clplEe8dg1jWWCQCsrjcMCuKQyl3aT.png"
              alt="Compass"
              width={400}
              height={400}
              className="animate-spin-slow"
              style={{
                width: "64%",
                height: "auto",
                filter: "drop-shadow(0 0 60px rgba(1,249,198,.15))",
              }}
            />
          </div>

          {/* Text */}
          <div>
            <div className="eyebrow">Our compass</div>
            <h2 className="h-section" style={{ fontSize: "clamp(36px,4.5vw,64px)", marginTop: 18 }}>
              Your business vision is <em>our compass.</em>
            </h2>
            <p style={{ fontSize: "clamp(17px,1.3vw,20px)", color: "var(--text-2)", marginTop: 24, lineHeight: 1.5, maxWidth: 480 }}>
              At Bixen, we develop projects with a strong technical and scientific focus, always guided by our clients&apos; business vision.
            </p>
            <p style={{ fontSize: "clamp(17px,1.3vw,20px)", color: "var(--text-2)", marginTop: 16, lineHeight: 1.5, maxWidth: 480 }}>
              We combine cutting-edge technology with deep industry knowledge to create solutions that truly matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
