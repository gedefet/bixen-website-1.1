import { Brain, User, Users, Award, CheckCircle, BadgeCheck } from 'lucide-react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WhatWeDoSection() {
  const services = [
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eKacwtw2TeFpTAjxA4LVAeOMMKCvuO.png"
          alt="Product Ideation and Design"
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
        />
      ),
      title: "Product Ideation and Design",
      description:
        "We help you design and craft your product, focusing on an exceptional user experience and ensuring it's ready for a successful market launch.",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FuiRvimTgSgStRvIhFUF5nSXxhEN2Z.png"
          alt="Product Growth and Scale"
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
        />
      ),
      title: "Product Growth and Scale",
      description:
        "If you already have a running product, we enhance, scale, and adapt your existing technology to your specific needs.",
    },
  ]

  const hiringModels = [
    {
      icon: <User className="h-8 w-8 text-[#062e36]" />,
      title: "Solo Bixener",
      description: "1 AI Engineer dedicated entirely to you.",
      image: "/images/solo-developer-focused.png"
    },
    {
      icon: <Users className="h-8 w-8 text-[#062e36]" />,
      title: "Curated Squad",
      description: "A tailor-crafted AI team to work alongside your team, ready to deliver value sprint by sprint.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    {
      icon: <Brain className="h-8 w-8 text-[#062e36]" />,
      title: "AI Advisor",
      description: "Senior fractional expert aimed to assist with vision and critical decisions.",
      image: "/images/senior-ai-consultant.png"
    },
  ]

  const whyChooseUs = [
    {
      icon: <CheckCircle className="h-6 w-6 text-[#062e36]" />,
      title: "+10 years of applied AI experience",
      description: "We know the key problems in sectors like healthcare, telco, retail, gaming, banking, oil & gas because we've already solved them."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#062e36]" />,
      title: "Rigorous & quantifiable process",
      description: "We minimize selection errors: our talents have been tested, reviewed by leaders, and validated in real environments."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#062e36]" />,
      title: "Certified by Bixen program",
      description: "Precisely defines what combines proven technical expertise, business domain knowledge, and execution capability."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-[#062e36]" />,
      title: "Exceptional quality delivery",
      description: "You won't worry about production quality or drive your recruiting team crazy with profiles changing at record speed."
    },
  ]

  return (
    <div className="container px-8 lg:px-16 xl:px-24 py-16">
      <div className="text-center max-w-[800px] mx-auto mb-12">
        <h2 className="text-4xl font-light sm:text-5xl md:text-6xl mb-4 text-white">What We Do</h2>
      </div>

      <div className="bg-gradient-to-br from-white/5 to-[#66e6d3]/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-lg border border-[#66e6d3]/20">
        {/* Two main service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-[1.5rem] border border-[#66e6d3]/30 bg-[#66e6d3]/10 shadow-md transition-all duration-200 hover:shadow-lg flex flex-col h-full"
            >
              <div className="mb-5 flex justify-center">
                <div className="bg-[#66e6d3]/20 p-4 rounded-full inline-block">{service.icon}</div>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium mb-4 text-[#66e6d3] text-center">{service.title}</h3>
              <p className="text-white/90 mb-5 flex-grow text-lg text-center">{service.description}</p>
            </div>
          ))}
        </div>

        {/* AI Curated Humans Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-medium mb-4 text-[#66e6d3]">AI Curated Humans</h3>
            <p className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              We select, assess, and certify top-tier professionals in artificial intelligence, with proven experience and strong technical judgment. 
              Our certified AI professionals are ready to join your team from day one, backed by a rigorous validation process.
            </p>
          </div>

          {/* Three Hiring Models */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {hiringModels.map((model, index) => (
              <Card key={index} className="bg-[#062e36]/80 border-[#66e6d3]/20 rounded-xl overflow-hidden hover:border-[#66e6d3]/40 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={model.image || "/placeholder.svg"}
                    alt={model.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062e36] to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-[#66e6d3] rounded-full w-12 h-12 flex items-center justify-center">
                      {model.icon}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold text-white mb-3">{model.title}</h4>
                  <p className="text-gray-300 mb-6 text-sm">{model.description}</p>
                  <Badge className="bg-[#66e6d3] text-[#062e36] hover:bg-[#339ca7] border-0 px-4 py-2">
                    Certified by Bixen
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Us Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-[#062e36]/60 border-[#66e6d3]/20 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#66e6d3] rounded-full p-3 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* The Bixen Seal */}
          <div className="bg-[#062e36]/60 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#66e6d3] rounded-full p-3">
                    <BadgeCheck className="h-8 w-8 text-[#062e36]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">The Bixen Seal</h4>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  All our engineers pass a proprietary certification process that includes AI technical challenges, code challenges, and soft skills evaluation. Only after that they obtain the 'Certified by Bixen' seal.
                </p>
                <div className="text-[#66e6d3] font-semibold text-lg">
                  Result: exceptional talent, with frictionless integration to your team.
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/person-with-award-ribbon.png"
                  alt="Person with Award Ribbon - Certification"
                  width={600}
                  height={300}
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* AI Section at the bottom */}
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
