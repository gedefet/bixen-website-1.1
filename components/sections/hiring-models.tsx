import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Users, Brain } from 'lucide-react'
import Image from "next/image"

export default function HiringModels() {
  const models = [
    {
      icon: <User className="h-6 w-6 text-black" />,
      title: "Solo Bixener",
      img: "/images/solo-developer-focused.png",
      desc: "One AI Engineer dedicated to your roadmap and KPIs.",
    },
    {
      icon: <Users className="h-6 w-6 text-black" />,
      title: "Curated Squad",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      desc: "A tailor-crafted AI team that delivers value sprint by sprint.",
    },
    {
      icon: <Brain className="h-6 w-6 text-black" />,
      title: "AI Advisor",
      img: "/images/senior-ai-consultant.png",
      desc: "Fractional senior expert to de-risk decisions and accelerate execution.",
    },
  ]
  return (
    <section id="models" className="bg-[#0f2027]">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-white">Hiring models</h2>
          <p className="mt-2 text-white/70 text-sm md:text-base">
            Choose the shape that best integrates with your team — we guarantee quality.
          </p>
        </div>

        <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {models.map((m, i) => (
            <Card key={i} className="bg-white/5 border-white/10 overflow-hidden">
              <div className="relative h-40 md:h-56">
                <Image src={m.img || "/placeholder.svg"} alt={m.title} fill className="object-cover" />
                <div className="absolute bottom-3 left-3 bg-[#01F9C6] rounded-full w-10 h-10 flex items-center justify-center">
                  {m.icon}
                </div>
              </div>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-white">{m.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
                <p className="text-white/80 text-sm md:text-base">{m.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
