import { Building2, Heart, Factory, Plane, Smartphone, DollarSign } from 'lucide-react'

export default function BusinessPartnerSection() {
  const industries = [
    {
      icon: <DollarSign className="h-8 w-8 text-[#01F9C6]" />,
      name: "Fintech",
      description: "Financial technology solutions",
    },
    {
      icon: <Heart className="h-8 w-8 text-[#01F9C6]" />,
      name: "Healthcare",
      description: "Medical and health solutions",
    },
    {
      icon: <Factory className="h-8 w-8 text-[#01F9C6]" />,
      name: "Manufacturing",
      description: "Industrial and production systems",
    },
    {
      icon: <Plane className="h-8 w-8 text-[#01F9C6]" />,
      name: "Aerospace",
      description: "Aviation and space technology",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[#01F9C6]" />,
      name: "Technology",
      description: "Software and hardware solutions",
    },
    {
      icon: <Building2 className="h-8 w-8 text-[#01F9C6]" />,
      name: "Enterprise",
      description: "Large-scale business solutions",
    },
  ]

  return (
    <div className="px-1 md:px-6 py-8 md:py-16">
      <div className="text-center max-w-[800px] mx-auto mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white">
          Business Partners
        </h2>
        <p className="hidden md:block text-white/80 md:text-xl">
          If you are a company or individual with deep expertise in industries such as fintech, healthcare,
          manufacturing, aerospace, or technology, and you're looking to expand your service offerings with cutting-edge
          AI solutions, we'd love to explore a partnership with you.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-4 md:p-8 lg:p-12 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/20 rounded-[1.5rem] p-4 md:p-6 text-center hover:bg-white/10 transition-all duration-200 hover:border-[#01F9C6]/50"
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="bg-[#01F9C6]/20 p-2 md:p-3 rounded-full">
                  {industry.icon}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-white mb-1 md:mb-2">{industry.name}</h3>
              <p className="hidden md:block text-white/70 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
