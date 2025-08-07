import { Brain, Gift, UserCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ServicesGrid() {
  const services = [
    {
      icon: <Gift className="h-7 w-7 text-[#01F9C6]" />,
      title: "Product Strategy & Design",
      desc:
        "Validate ideas fast, prototype experiences that solve real problems, and align tech with measurable outcomes.",
    },
    {
      icon: <Brain className="h-7 w-7 text-[#01F9C6]" />,
      title: "AI Solutions & Delivery",
      desc:
        "From chatbots to computer vision, we build applied AI that ships to production and delivers business impact.",
    },
    {
      icon: <UserCheck className="h-7 w-7 text-black" />,
      title: "Curated Humans by Bixen",
      desc:
        "Staff your team with certified AI engineers, MLOps experts and LLM specialists, ready to build from day one.",
      highlight: true,
      link: "/humans",
    },
  ]

  return (
    <section id="services" className="bg-[#0f2027]">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-white">What we do</h2>
          <p className="mt-2 text-white/70 text-sm md:text-base">
            Strategy, delivery, and outstanding people — integrated to move your business forward.
          </p>
        </div>

        <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {services.map((s, i) => (
            <Card
              key={i}
              className={
                s.highlight
                  ? "bg-[#01F9C6] border-[#01F9C6] shadow-[0_0_20px_rgba(1,249,198,0.3)]"
                  : "bg-white/5 border-white/10 backdrop-blur-sm"
              }
            >
              <CardHeader className="flex flex-row items-center gap-3">
                <div
                  className={
                    s.highlight
                      ? "bg-black rounded-full p-2"
                      : "bg-[#01F9C6]/20 rounded-full p-2"
                  }
                >
                  {s.icon}
                </div>
                <CardTitle className={s.highlight ? "text-black" : "text-white"}>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={s.highlight ? "text-black/80" : "text-white/80 text-sm md:text-base"}>{s.desc}</p>
                {s.link && (
                  <div className="mt-4">
                    <Link
                      href={s.link}
                      className="text-sm font-medium underline underline-offset-4 decoration-black/30 text-black hover:decoration-black"
                    >
                      Learn more
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
