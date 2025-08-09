import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeamSection() {
  const team = [
    {
      name: "Federico Lopez",
      role: "Founder & CEO",
      bio: "Bringing together technology and business strategy, Federico helps drive Bixen's vision and innovation",
      image: "/images/federico-new.jpg",
    },
    {
      name: "Alejandro Sagula",
      role: "Corporate Architecture and Automation Expert",
      bio: "Alejandro brings over 30 years of experience in large-scale IT organizations, helping companies scale products and systems efficiently. As an advisor to Bixen, he contributes his expertise in automation and enterprise architecture with a focus on operational excellence.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alesagula-1gDy7EWJAz339nREa6XP184LtGKXRd.jpeg",
    },
    {
      name: "Damian Minnock",
      role: "AI & Machine Learning Leader",
      bio: "MSc AI specialist with expertise in Computer Vision, Voice Processing, and Large Language Models (LLM). As a senior advisor, he supports Bixen's most complex AI initiatives, leading innovation with a strong hands-on approach.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/damian.jpg-QJtCUyZNrHwbqwzufrI74Rs0MtwF4R.jpeg",
    },
    {
      name: "Florencia Zalazar",
      role: "HR Manager",
      bio: "Florencia shapes Bixen's culture and connects talent aligned with our values, building a team that thrives on creativity and impact.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/florencia.jpg-jPdi9r41DvdVPdEoob4Ym8FJYeHe4x.jpeg",
    },
    {
      name: "Joaquin Cuomo",
      role: "Expert Advisor",
      bio: "MSc specialist providing strategic guidance on LLM and NLP technologies, with deep expertise in applying AI to solve complex business challenges.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joaquin.jpg-96rpwQDiOQcEwd3svKiVRDN9SS7Eyc.jpeg",
    },
  ]

  const firstRowMembers = team.slice(0, 3)
  const secondRowMembers = team.slice(3, 5)

  return (
    <div className="container px-2 md:px-6">
      <div className="text-center max-w-[800px] mx-auto mb-4 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl text-white">People</h2>
        <p className="mt-2 md:mt-4 text-white text-sm md:text-xl max-w-3xl mx-auto">
          Visionary minds, purposeful technology. These are some of the people driving Bixen, alongside a global team of
          experts.
        </p>
      </div>

      {/* First row: uniform square portraits with unified grading */}
      <div className="container px-2 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-8">
          {firstRowMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-[#004953]/80 backdrop-blur-sm border-[#008794]/30 glass-hover"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#004953]">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover image-grade"
                />
                {/* unified cool tint overlay */}
                <div className="absolute inset-0 pointer-events-none photo-grade" />
              </div>
              <CardHeader className="p-3 md:p-6">
                <CardTitle className="text-white text-sm md:text-base">{member.name}</CardTitle>
                <CardDescription className="text-[#01F9C6] text-xs md:text-sm">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="p-3 md:p-6 pt-0">
                <p className="text-xs md:text-sm text-white">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Second row: uniform square portraits and grading */}
      <div className="container px-2 md:px-6 mb-8 md:mb-16">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-3 md:gap-6">
          {secondRowMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/3">
              <Card className="h-full overflow-hidden bg-[#004953]/80 backdrop-blur-sm border-[#008794]/30 glass-hover">
                <div className="relative aspect-square w-full overflow-hidden bg-[#004953]">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover image-grade"
                  />
                  {/* unified cool tint overlay */}
                  <div className="absolute inset-0 pointer-events-none photo-grade" />
                </div>
                <CardHeader className="p-3 md:p-6">
                  <CardTitle className="text-white text-sm md:text-base">{member.name}</CardTitle>
                  <CardDescription className="text-[#01F9C6] text-xs md:text-sm">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="p-3 md:p-6 pt-0">
                  <p className="text-xs md:text-sm text-white">{member.bio}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto">{/* reserved copy block if needed */}</div>
    </div>
  )
}
