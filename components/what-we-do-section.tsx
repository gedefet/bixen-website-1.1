import { Brain } from "lucide-react"
import Image from "next/image"

export default function WhatWeDoSection() {
  const services = [
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eKacwtw2TeFpTAjxA4LVAeOMMKCvuO.png"
          alt="Product Strategy & Design"
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
        />
      ),
      title: "Product Strategy & Design",
      description:
        "We co-create your product vision, crafting prototypes and experiences that solve real business problems. From ideation to validation, we help you build the right thing — before you build it right.",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FuiRvimTgSgStRvIhFUF5nSXxhEN2Z.png"
          alt="AI Solutions & Delivery"
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
        />
      ),
      title: "AI Solutions & Delivery",
      description:
        "From chatbots to computer vision, we build applied AI that delivers measurable impact. With over a decade of experience, we integrate AI into your stack, not just your slides.",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iwSNTj0NWUsK8nBIFhgA8FydCiAiA5.png"
          alt="Curated Humans™ by Bixen"
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
        />
      ),
      title: "Curated Humans™ by Bixen",
      description:
        "We select, assess, and certify top-tier professionals in artificial intelligence, with proven experience. Our certified AI professionals are ready to join your team from day one, backed by a rigorous validation process.",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-16">
      <div className="text-center max-w-[800px] mx-auto mb-12">
        <h2 className="text-4xl font-light sm:text-5xl md:text-6xl mb-4 text-white">What We Do</h2>
      </div>

      <div className="bg-gradient-to-br from-white/10 to-[#01F9C6]/20 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl border border-[#01F9C6]/30">
        {/* Three service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-[1.5rem] border border-[#01F9C6] bg-[#01F9C6]/20 shadow-[0_0_15px_rgba(1,249,198,0.3)] transition-all duration-200 hover:shadow-lg flex flex-col h-full"
            >
              <div className="mb-5 flex justify-center">
                <div className="bg-[#01F9C6]/30 p-4 rounded-full inline-block">{service.icon}</div>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium mb-4 text-[#01F9C6] text-center">{service.title}</h3>
              <p className="text-white/90 mb-5 flex-grow text-lg text-center">{service.description}</p>
            </div>
          ))}
        </div>

        {/* AI Section at the bottom with transparent background */}
        <div className="mt-8 py-10 px-6 text-center bg-transparent rounded-[1.5rem]">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            <div className="bg-white/10 p-4 rounded-full mb-6">
              <Brain className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-4xl md:text-5xl font-medium mb-6 text-white">AI</h3>
            <p className="text-white/90 text-xl md:text-2xl leading-relaxed">
              At Bixen, AI is in our DNA. With over 10 years of hands-on experience building intelligent solutions—even
              before 'AI' became mainstream—we integrate AI strategically and practically into every stage of your
              project. Our expertise ensures smarter outcomes, greater efficiency, and measurable business value.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
