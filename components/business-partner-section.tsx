import { ArrowRight, Building2, Cpu, Factory, Flame, Leaf, Rocket, Heart, Car, Wheat } from "lucide-react"

export default function BusinessPartnerSection() {
  // Rearranged and recolored industries
  const industries = [
    {
      icon: <Building2 className="h-10 w-10 text-white" />,
      name: "Fintech",
      bgColor: "bg-[#004D40]/20",
      borderColor: "border-[#004D40]",
      hoverBgColor: "hover:bg-[#004D40]/40",
    },
    {
      icon: <Flame className="h-10 w-10 text-white" />,
      name: "Oil & Gas",
      bgColor: "bg-[#FF9800]/20",
      borderColor: "border-[#FF9800]",
      hoverBgColor: "hover:bg-[#FF9800]/40",
    },
    {
      icon: <Heart className="h-10 w-10 text-white" />,
      name: "Healthcare",
      bgColor: "bg-[#F44336]/20",
      borderColor: "border-[#F44336]",
      hoverBgColor: "hover:bg-[#F44336]/40",
    },
    {
      icon: <Rocket className="h-10 w-10 text-white" />,
      name: "Aerospace",
      bgColor: "bg-[#2196F3]/20",
      borderColor: "border-[#2196F3]",
      hoverBgColor: "hover:bg-[#2196F3]/40",
    },
    {
      icon: <Wheat className="h-10 w-10 text-white" />,
      name: "Agriculture",
      bgColor: "bg-[#FFD700]/20",
      borderColor: "border-[#FFD700]",
      hoverBgColor: "hover:bg-[#FFD700]/40",
    },
    {
      icon: <Factory className="h-10 w-10 text-white" />,
      name: "Manufacturing",
      bgColor: "bg-[#9C27B0]/20",
      borderColor: "border-[#9C27B0]",
      hoverBgColor: "hover:bg-[#9C27B0]/40",
    },
    {
      icon: <Cpu className="h-10 w-10 text-white" />,
      name: "Energy",
      bgColor: "bg-[#4CAF50]/20",
      borderColor: "border-[#4CAF50]",
      hoverBgColor: "hover:bg-[#4CAF50]/40",
    },
    {
      icon: <Car className="h-10 w-10 text-white" />,
      name: "Automotive",
      bgColor: "bg-black/20",
      borderColor: "border-black/40",
      hoverBgColor: "hover:bg-black/40",
    },
    {
      icon: <Leaf className="h-10 w-10 text-white" />,
      name: "Sustainability",
      bgColor: "bg-[#8BC34A]/20",
      borderColor: "border-[#8BC34A]",
      hoverBgColor: "hover:bg-[#8BC34A]/40",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-16 relative" id="business-partners">
      <div className="text-center max-w-[800px] mx-auto mb-12">
        <h2 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white">
          We&apos;re looking for business partners!
        </h2>
        <p className="text-white/80 md:text-xl">
          Collaborate with us to create innovative solutions for your industry.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-white/90 text-xl md:text-2xl">
              If you are a company or individual with deep expertise in industries such as (but not limited to) fintech,
              healthcare, automotive, agriculture, oil & gas, manufacturing, aerospace, energy, or sustainability,
              we&apos;d love to explore partnership opportunities.
            </p>

            <p className="text-white/90 text-xl md:text-2xl">
              Let&apos;s discuss how we can work together to transform opportunities into solutions.
            </p>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 rounded-md bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90 transition-colors font-medium text-lg"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`${industry.bgColor} ${industry.hoverBgColor} border ${industry.borderColor} rounded-xl p-4 flex flex-col items-center justify-center text-center transition-colors duration-200`}
              >
                <div className="mb-3">{industry.icon}</div>
                <p className="text-white font-medium text-lg">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
