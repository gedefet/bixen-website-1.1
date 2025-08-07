import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Story = {
  id: string
  client: string
  logo: string
  title: string
  summary: string
  bg?: "light" | "dark"
}

const stories: Story[] = [
  {
    id: "netflix",
    client: "Netflix",
    logo: "/images/netflix-logo.png",
    title: "3D Body Scan Validation",
    summary: "AI model validation for 3D scans — 98.4% precision, enabling large-scale rollout.",
    bg: "dark",
  },
  {
    id: "us-logistics",
    client: "US Logistics",
    logo: "/images/logistics-truck-logo.png",
    title: "Voice Automation",
    summary: "Intelligent IVR and voice understanding — 60% reduction in operational costs.",
    bg: "light",
  },
  {
    id: "banking",
    client: "Banking Institution",
    logo: "/images/red-flame-logo.png",
    title: "Assistant Evolution",
    summary: "Custom NLP pipeline — IBM Watson accuracy up from 60% to 82%.",
    bg: "dark",
  },
]

export default function SuccessStories() {
  return (
    <section id="work" className="bg-[#0f2027]">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-white">Selected work</h2>
          <p className="mt-2 text-white/70 text-sm md:text-base">
            Real-world results, across healthcare, logistics, retail and banking.
          </p>
        </div>

        <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {stories.map((s) => (
            <Card
              key={s.id}
              className={s.bg === "dark" ? "bg-black border-white/10" : "bg-white border-white/10"}
            >
              <CardHeader>
                <div className={(s.bg === "dark" ? "bg-white" : "bg-black") + " rounded-md p-3 inline-flex"}>
                  <Image
                    src={s.logo || "/placeholder.svg"}
                    alt={`${s.client} logo`}
                    width={140}
                    height={40}
                    className="h-7 w-auto"
                  />
                </div>
                <CardTitle className={s.bg === "dark" ? "text-white mt-4" : "text-black mt-4"}>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={s.bg === "dark" ? "text-white/80 text-sm md:text-base" : "text-black/70 text-sm md:text-base"}>
                  {s.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
