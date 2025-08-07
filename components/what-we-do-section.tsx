import { Brain, Gift, UserCheck } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function WhatWeDoSection() {
  const services = [
    {
      icon: <Gift className="h-12 w-12 text-secondary" />,
      title: "Product Strategy & Design",
      description:
        "We co-create your product vision, crafting prototypes and experiences that solve real business problems. From ideation to validation, we help you build the right thing — before you build it right.",
      isSpecial: false,
    },
    {
      icon: <Brain className="h-12 w-12 text-secondary" />,
      title: "AI Solutions & Delivery",
      description:
        "From chatbots to computer vision, we build applied AI that delivers measurable impact. With over a decade of experience, we integrate AI into your stack, not just your slides.",
      isSpecial: false,
    },
    {
      icon: <UserCheck className="h-12 w-12 text-white" />,
      title: "Curated Humans™ by Bixen",
      description:
        "We select, assess, and certify top-tier professionals in artificial intelligence, with proven experience. Our certified AI professionals are ready to join your team from day one, backed by a rigorous validation process.",
      isSpecial: true,
    },
  ]

  return (
    <div className="px-0 md:container md:px-8 lg:px-16 xl:px-24 py-16">
      <div className="text-center max-w-[800px] mx-auto mb-12 px-4 md:px-0">
        <h2 className="hidden md:block text-4xl font-light sm:text-5xl md:text-6xl mb-4 text-white">What We Do</h2>
      </div>

      {/* Desktop wrapper with background */}
      <div className="hidden md:block bg-gradient-to-br from-white/5 to-secondary/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-lg border border-secondary/20">
        {/* Three service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-[1.5rem] shadow-md transition-all duration-200 hover:shadow-lg flex flex-col h-full ${
                service.isSpecial
                  ? 'bg-black/30 border border-black shadow-[0_0_20px_rgba(1,249,198,0.3)] hover:shadow-[0_0_30px_rgba(1,249,198,0.4)]'
                  : 'border border-secondary/30 bg-secondary/10'
              }`}
            >
              <div className="mb-5 flex justify-center">
                <div className={`p-4 rounded-full inline-block ${
                  service.isSpecial
                    ? 'bg-[#01F9C6]/20 shadow-[0_0_15px_rgba(1,249,198,0.4)]'
                    : 'bg-secondary/20'
                }`}>
                  {service.icon}
                </div>
              </div>
              <h3 className={`text-2xl md:text-3xl font-medium mb-4 text-center ${
                service.isSpecial ? 'text-[#01F9C6]' : 'text-secondary'
              }`}>
                {service.title}
              </h3>
              <p className="text-white/90 mb-5 flex-grow text-lg text-center">{service.description}</p>
              {service.isSpecial && (
                <div className="mt-auto pt-4 flex justify-center">
                  <Link href="/humans">
                    <button className="bg-[#01F9C6] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#01F9C6]/90 transition-colors duration-200 shadow-[0_0_10px_rgba(1,249,198,0.3)] hover:shadow-[0_0_15px_rgba(1,249,198,0.5)]">
                      Learn More
                    </button>
                  </Link>
                </div>
              )}
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

      {/* Mobile layout without background wrapper */}
      <div className="md:hidden px-2">
        {/* Three service cards */}
        <div className="grid grid-cols-1 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-[1.5rem] shadow-md transition-all duration-200 hover:shadow-lg flex flex-col h-full ${
                service.isSpecial
                  ? 'bg-black/30 border border-black shadow-[0_0_20px_rgba(1,249,198,0.3)] hover:shadow-[0_0_30px_rgba(1,249,198,0.4)]'
                  : 'border border-secondary/30 bg-secondary/10'
              }`}
            >
              <div className="mb-5 flex justify-center">
                <div className={`p-4 rounded-full inline-block ${
                  service.isSpecial
                    ? 'bg-[#01F9C6]/20 shadow-[0_0_15px_rgba(1,249,198,0.4)]'
                    : 'bg-secondary/20'
                }`}>
                  {service.icon}
                </div>
              </div>
              <h3 className={`text-2xl font-medium mb-4 text-center ${
                service.isSpecial ? 'text-[#01F9C6]' : 'text-secondary'
              }`}>
                {service.title}
              </h3>
              {service.isSpecial && (
                <div className="mt-auto pt-4 flex justify-center">
                  <Link href="/humans">
                    <button className="bg-[#01F9C6] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#01F9C6]/90 transition-colors duration-200 shadow-[0_0_10px_rgba(1,249,198,0.3)] hover:shadow-[0_0_15px_rgba(1,249,198,0.5)]">
                      Learn More
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
