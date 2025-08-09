import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeamSection() {
  const team = [
    {
      name: "Federico Lopez",
      role: "Founder & CEO",
      microbio: "Tech and strategy leader driving Bixen’s vision and delivery.",
      image: "/images/federico-new.jpg",
    },
    {
      name: "Alejandro Sagula",
      role: "Enterprise Architecture",
      microbio: "Automation and large-scale systems expert, 30+ years in IT.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alesagula-1gDy7EWJAz339nREa6XP184LtGKXRd.jpeg",
    },
    {
      name: "Damian Minnock",
      role: "AI & ML Leader",
      microbio: "MSc AI. CV, voice, and LLMs. Hands-on delivery at scale.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/damian.jpg-QJtCUyZNrHwbqwzufrI74Rs0MtwF4R.jpeg",
    },
    {
      name: "Florencia Zalazar",
      role: "HR Manager",
      microbio: "Culture builder matching talent with mission and impact.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/florencia.jpg-jPdi9r41DvdVPdEoob4Ym8FJYeHe4x.jpeg",
    },
    {
      name: "Joaquin Cuomo",
      role: "Expert Advisor",
      microbio: "NLP/LLM strategist applying AI to complex business needs.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joaquin.jpg-96rpwQDiOQcEwd3svKiVRDN9SS7Eyc.jpeg",
    },
  ]

  // 3 + 2 layout as before, with unified portrait framing
  const firstRow = team.slice(0, 3)
  const secondRow = team.slice(3, 5)

  return (
    <section className="section-y" id="team">
      <div className="container-x">
        <div className="text-center max-w-[800px] mx-auto mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-5xl">People</h2>
          <p className="mt-3 text-[hsl(var(--secondary))] text-lg">
            Visionary minds building practical AI with purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-12">
          {firstRow.map((m) => (
            <Card key={m.name} className="glass glass-hover overflow-hidden">
              <CardHeader className="p-6">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <Image
                      src={m.image || "/placeholder.svg"}
                      alt={`${m.name} portrait`}
                      width={192}
                      height={192}
                      className="portrait"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 uniform-overlay pointer-events-none rounded-2xl" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">{m.name}</CardTitle>
                    <CardDescription className="text-[hsl(var(--primary))] font-medium">{m.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <p className="text-[hsl(var(--secondary))]">{m.microbio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {secondRow.map((m) => (
            <Card key={m.name} className="glass glass-hover overflow-hidden">
              <CardHeader className="p-6">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <Image
                      src={m.image || "/placeholder.svg"}
                      alt={`${m.name} portrait`}
                      width={192}
                      height={192}
                      className="portrait"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 uniform-overlay pointer-events-none rounded-2xl" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">{m.name}</CardTitle>
                    <CardDescription className="text-[hsl(var(--primary))] font-medium">{m.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <p className="text-[hsl(var(--secondary))]">{m.microbio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
