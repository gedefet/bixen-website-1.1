import Image from "next/image"

export default function TeamSection() {
  const firstRowMembers = [
    {
      name: "Federico Carrone",
      role: "Co-founder & CEO",
      image: "/images/federico-new.jpg",
      description: "Leading AI innovation with 15+ years of experience in machine learning and business strategy.",
    },
    {
      name: "Alejandro Hernández",
      role: "Co-founder & CTO",
      image: "/images/senior-ai-consultant.png",
      description: "Expert in AI architecture and scalable systems with deep technical leadership experience.",
    },
    {
      name: "Damián Silvani",
      role: "Co-founder & Head of Engineering",
      image: "/images/solo-developer-focused.png",
      description: "Full-stack engineer specializing in AI integration and high-performance computing solutions.",
    },
  ]

  const secondRowMembers = [
    {
      name: "Florencia Gonzalez",
      role: "AI Research Scientist",
      image: "/images/person-with-award-ribbon.png",
      description: "PhD in Computer Science, specializing in computer vision and deep learning research.",
    },
    {
      name: "Joaquín Martinez",
      role: "Senior AI Engineer",
      image: "/images/drone-aerial-view.png",
      description: "Expert in MLOps and AI deployment with extensive experience in production systems.",
    },
  ]

  return (
    <div className="px-2 md:px-4 py-8 md:py-16">
      <div className="text-center max-w-[800px] mx-auto mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white">
          Meet Our Team
        </h2>
        <p className="text-white/80 text-sm md:text-xl">
          Passionate experts dedicated to transforming your business with cutting-edge AI solutions.
        </p>
      </div>

      {/* First row - 3 members */}
      <div className="container px-4 md:px-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {firstRowMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 md:p-8 shadow-xl border border-white/20 hover:border-[#01F9C6]/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-4 border-[#01F9C6]/30 group-hover:border-[#01F9C6] transition-all duration-300">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-[#01F9C6] font-medium mb-4 text-sm md:text-base">{member.role}</p>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - 2 members centered */}
      <div className="flex justify-center mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {secondRowMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 md:p-8 shadow-xl border border-white/20 hover:border-[#01F9C6]/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-4 border-[#01F9C6]/30 group-hover:border-[#01F9C6] transition-all duration-300">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-[#01F9C6] font-medium mb-4 text-sm md:text-base">{member.role}</p>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
