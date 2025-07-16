"use client"

import { useState, useEffect } from "react"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Geosat-2-E_lo.jpg-gb2cigAgiBVscURgZfUX2eGacyIgd9.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oculus-PZNSIhNFvPCRS4eBMYZ3QJTskjwZi7.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tubos_sangre.jpg-0DzJodD8GyNXUx7CLb8yVASCOLUetP.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wheat-865152_1920.jpg-0Lbjoio0NTQKe3EpwYbeAqNW5wlmaW.jpeg",
]

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Simple slideshow without transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Current image */}
      <div className="absolute inset-0 w-full h-full">
        <img src={images[currentIndex] || "/placeholder.svg"} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#004953]/50 via-[#004953]/40 to-[#004953]/50"></div>
      </div>
    </div>
  )
}
