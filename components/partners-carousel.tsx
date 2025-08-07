import Image from "next/image"

export default function PartnersCarousel() {
  const partners = [
    {
      name: "ABInBev",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yhR4SR5hnlCjbhOcXVdmY6jj7udXYS.png",
      bgColor: "bg-white",
    },
    {
      name: "Intuitivo",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TuK32bXVvmAAw659TF3txwThsJdaoI.png",
      bgColor: "bg-white/10",
    },
    {
      name: "Netflix",
      logo: "/images/netflix-logo.png",
      bgColor: "bg-black",
    },
    {
      name: "US Logistics",
      logo: "/images/logistics-truck-logo.png",
      bgColor: "bg-white",
    },
    {
      name: "Banking Institution",
      logo: "/images/red-flame-logo.png",
      bgColor: "bg-black",
    },
    {
      name: "América Móvil",
      logo: "/images/red-circular-logo.png",
      bgColor: "bg-white",
    },
  ]

  return (
    <div className="px-1 md:px-6 py-8 md:py-16">
      <div className="text-center max-w-[800px] mx-auto mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl mb-4 text-white">
          Trusted by Industry Leaders
        </h2>
        <p className="hidden md:block text-white/80 md:text-xl">
          We've partnered with companies across various industries to deliver exceptional AI solutions.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-4 md:p-8 lg:p-12 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[1.5rem] bg-white/5 border border-white/20 hover:border-[#01F9C6]/50 transition-all duration-300"
            >
              <div className="aspect-square p-4 md:p-6 flex items-center justify-center">
                <div className={`${partner.bgColor} rounded-xl p-3 md:p-4 w-full h-full flex items-center justify-center shadow-lg`}>
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={120}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
