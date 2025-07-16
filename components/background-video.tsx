"use client"

import { useEffect, useRef } from "react"

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Asegurarse de que el video se reproduzca correctamente en diferentes navegadores
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error reproduciendo el video:", error)
      })
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_preview_h264-Yd9Iy9Yd9Iy9.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#004953]/90 via-[#004953]/70 to-[#004953]/90 backdrop-blur-[2px]"></div>
    </div>
  )
}
