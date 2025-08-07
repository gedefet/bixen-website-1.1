import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const team = [
  {
    name: "Federico Lopez",
    role: "Founder & CEO",
    bio: "Bridging technology and business strategy; drives Bixen’s vision and innovation.",
    image: "/images/federico-new.jpg",
  },
  {
    name: "Alejandro Sagula",
    role: "Architecture & Automation Expert",
    bio: "30+ years scaling enterprise systems and automation for operational excellence.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alesagula-1gDy7EWJAz339nREa6XP184LtGKXRd.jpeg",
  },
  {
    name: "Damian Minnock",
    role: "AI & ML Leader",
    bio: "MSc AI; Computer Vision, Voice Processing, and LLMs for complex initiatives.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/damian.jpg-QJtCUyZNrHwbqwzufrI74Rs0MtwF4R.jpeg",
  },
  {
    name: "Florencia Zalazar",
    role: "HR Manager",
    bio: "Builds culture and connects values-aligned talent for creativity and impact.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/florencia.jpg-jPdi9r41DvdVPdEoob4Ym8FJYeHe4x.jpeg",
  },
  {
    name: "Joaquin Cuomo",
    role: "Expert Advisor",
    bio: "MSc; strategic guidance on LLM/NLP to solve complex business challenges.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joaquin.jpg-96rpwQDiOQcEwd3svKiVRDN9SS7Eyc.jpeg",
  },
]

export default function TeamGrid() {
  return (
    <section id="team" className="bg-[#0f2027]">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-white">People</h2>
          <p className="mt-2 text-white/70 text-sm md:text-base">
            Visionary minds and purposeful technology, backed by a global network of experts.
          </p>
        </div>

        <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {team.map((m, i) => (
            <Card key={i} className="bg-[#004953]/80 border-[#008794]/30 overflow-hidden">
              <div className="aspect-square w-full bg-[#004953]">
                <Image src={m.image || "/placeholder.svg"} alt={m.name} width={600} height={600} className="w-full h-full object-cover" />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-white text-base md:text-lg">{m.name}</CardTitle>
                <CardDescription className="text-[#01F9C6]">{m.role}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-white/90 text-sm">{m.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
