"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function PartnersCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Partner logos with their URLs
  const partners = [
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
    {
      name: "Google Cloud",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ABX98sjMF1p1Ol198zNs15LxgR966k.png",
      size: "xlarge",
    },
    {
      name: "Ingenia",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YBLKyRpcyLWwMZ84W6W8mrKVXJ3Kh3.png",
      size: "normal", // Reduced size
    },
    {
      name: "Universidad de Buenos Aires",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hxUQCX0I7n4TcYHz0ojZ5nlkb2nLWw.png",
      size: "large",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + partners.length) % partners.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container px-4 md:px-6 py-16" id="partners">
      <div className="text-center max-w-[800px] mx-auto mb-12">
        <h2 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl text-white">
          TECHNOLOGIES, PARTNERS & TOP UNIVERSITIES
        </h2>
        <p className="mt-4 text-white/80 md:text-xl">
          We work with cutting-edge technologies, with the world's leading academic institutions, and collaborate with
          industry-specific partners.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-xl">
        <div className="relative">
          <div className="overflow-hidden rounded-[1.5rem]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <div key={index} className="w-full flex-shrink-0 flex items-center justify-center p-8">
                  <Image
                    src={partner.image || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={partner.size === "xlarge" ? 500 : partner.size === "large" ? 400 : 300}
                    height={partner.size === "xlarge" ? 250 : partner.size === "large" ? 200 : 150}
                    className={`object-contain ${
                      partner.size === "xlarge"
                        ? "max-h-[220px]"
                        : partner.size === "large"
                          ? "max-h-[180px]"
                          : "max-h-[100px]"
                    } w-auto`}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/30 p-2 rounded-full"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/30 p-2 rounded-full"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="flex justify-center mt-6 gap-2">
            {partners.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
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

