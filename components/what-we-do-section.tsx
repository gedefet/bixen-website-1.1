import Image from "next/image"

const services = [
{
  icon: (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eKacwtw2TeFpTAjxA4LVAeOMMKCvuO.png"
      alt="Product Ideation and Design"
      width={64}
      height={64}
      className="h-16 w-16 object-contain"
    />
  ),
  title: "Product Ideation & Design",
  description:
    "From a spark of an idea to a market-ready product. We partner with you to define, design, and build exceptional AI-powered applications, focusing on user experience and a clear path to launch.",
},
{
  icon: (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FuiRvimTgSgStRvIhFUF5nSXxhEN2Z.png"
      alt="Product Growth & Scale"
      width={64}
      height={64}
      className="h-16 w-16 object-contain"
    />
  ),
  title: "Product Growth & Scale",
  description:
    "Your product is live, but it's just the beginning. We help you enhance features, scale your infrastructure, and adapt your technology to meet growing demand and new challenges.",
},
{
  icon: (
    <Image
      src="/images/person-with-award-ribbon.png"
      alt="Curated Humans"
      width={64}
      height={64}
      className="h-16 w-16 object-contain"
    />
  ),
  title: "Curated Humans",
  description:
    "Build your dream team, faster. We provide access to our exclusive network of certified AI professionals, handling the sourcing and vetting so you get top-tier talent ready to make an immediate impact.",
},
]

export default function WhatWeDoSection() {
return (
  <div className="bg-[#0a0a0a] text-white py-20 sm:py-28">
    <div className="container px-6 lg:px-12">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
        <h2 className="text-4xl font-light sm:text-5xl md:text-6xl mb-6">
          What We Do
        </h2>
        <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
          At Bixen, AI is in our DNA. With over 10 years of hands-on experience building intelligent solutions, we integrate AI strategically and practically into every stage of your project. Our expertise ensures smarter outcomes, greater efficiency, and measurable business value.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-16 lg:space-y-20">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-white/10 to-[#01F9C6]/20 p-6 rounded-full border border-[#01F9C6]/30 shadow-[0_0_20px_rgba(1,249,198,0.2)]">
                {service.icon}
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-3xl lg:text-4xl font-medium text-[#01F9C6] mb-4">
                {service.title}
              </h3>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto md:mx-0">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)
}
