"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function PartnersCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Partner logos grouped into sets of three
  const partnerGroups = [
    [
      {
        name: "NVIDIA",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VRdAI1eHxM2NYjZtoJlN7oaNqQXwYX.png",
        size: "large",
      },
      {
        name: "Amazon",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QrK5VKqq2imvPmwxs3Uy3Qer8guVgB.png",
        size: "normal",
      },
      {
        name: "Microsoft Azure",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E3FvTS1BXHdoF3KOMD6sL7LtNc2Rut.png",
        size: "xlarge",
      },
    ],
    [
      {
        name: "Google Cloud",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ABX98sjMF1p1Ol198zNs15LxgR966k.png",
        size: "xlarge",
      },
      {
        name: "Ingenia",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YBLKyRpcyLWwMZ84W6W8mrKVXJ3Kh3.png",
        size: "normal",
      },
      {
        name: "Universidad de Buenos Aires",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hxUQCX0I7n4TcYHz0ojZ5nlkb2nLWw.png",
        size: "large",
      },
    ],
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partnerGroups.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + partnerGroups.length) % partnerGroups.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container px-2 md:px-6 py-4 md:py-16" id="partners">
      <div className="text-center max-w-[800px] mx-auto mb-6 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl text-white">
          TECHNOLOGIES, PARTNERS & TOP UNIVERSITIES
        </h2>
        <p className="mt-2 md:mt-4 text-white/80 text-sm md:text-xl">
          We work with cutting-edge technologies, with the world's leading academic institutions, and collaborate with
          industry-specific partners.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-4 md:p-12 shadow-xl">
        <div className="relative">
          <div className="overflow-hidden rounded-[1.5rem]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {partnerGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0 flex items-center justify-center p-4 md:p-8">
                  <div className="grid grid-cols-3 gap-8 md:gap-12 w-full max-w-4xl">
                    {group.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="flex items-center justify-center">
                        <Image
                          src={partner.image || "/placeholder.svg"}
                          alt={`${partner.name} logo`}
                          width={partner.size === "xlarge" ? 300 : partner.size === "large" ? 250 : 200}
                          height={partner.size === "xlarge" ? 150 : partner.size === "large" ? 125 : 100}
                          className={`object-contain ${
                            partner.size === "xlarge"
                              ? "max-h-[120px]"
                              : partner.size === "large"
                                ? "max-h-[100px]"
                                : "max-h-[80px]"
                          } w-auto`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/30 p-1 md:p-2 rounded-full"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>
          <button
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/30 p-1 md:p-2 rounded-full"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </button>
          <div className="flex justify-center mt-3 md:mt-6 gap-1 md:gap-2">
            {partnerGroups.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#01F9C6]" : "bg-white/30"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
