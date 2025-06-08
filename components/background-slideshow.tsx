"use client"

import { useState, useEffect } from "react"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202024-06-12%20090942-WtR2IvdFX8PkQGlyM2ekWiQ94tJAYS.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202024-06-12%20091059-eYuRr1pfYzvUCbxm8uy6DaWJ2tHDyL.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202024-06-12%20091025-hPeY51vNNkWGA6fZCLEwEQPlpGasbc.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202024-06-12%20090856-wAMyPQVaf0zRX3T5jZIICgPJT5DVo8.png",
]

export default function BackgroundSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
        setNextImageIndex((prev) => (prev + 1) % images.length)
        setIsTransitioning(false)
      }, 1000) // Duración del fade
    }, 5000) // Cambiar imagen cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      {/* Imagen actual */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#004953]/80 via-[#004953]/60 to-[#004953]/80 backdrop-blur-[1px]"></div>
      </div>

      {/* Siguiente imagen (para el fade) */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={images[nextImageIndex] || "/placeholder.svg"}
          alt="Next Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#004953]/80 via-[#004953]/60 to-[#004953]/80 backdrop-blur-[1px]"></div>
      </div>
    </div>
  )
}
