"use client"

import { useEffect, useRef, useState } from "react"

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    const videoElement = videoRef.current

    if (videoElement) {
      // Add event listeners for debugging
      videoElement.addEventListener("error", (e) => {
        console.error("Video error:", e)
        if (isMounted) setError("Error loading video")
      })

      // Try to play the video with proper error handling
      const playPromise = videoElement.play()

      // Handle the play promise
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video started playing successfully
          })
          .catch((error) => {
            // Auto-play was prevented or another error occurred
            console.error("Error playing video:", error)
            if (isMounted) setError("Error playing video")

            // If autoplay is blocked, we can mute the video and try again
            if (videoElement && isMounted) {
              videoElement.muted = true
              videoElement.play().catch((e) => {
                console.error("Error playing muted video:", e)
              })
            }
          })
      }
    }

    // Cleanup function
    return () => {
      isMounted = false
      if (videoElement) {
        videoElement.pause()
        videoElement.src = ""
        videoElement.load()
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      {error ? (
        // Fallback to a static background if video fails
        <div className="absolute inset-0 bg-[#004953]"></div>
      ) : (
        <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_preview_h264-Yd9Iy9Yd9Iy9.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#004953]/90 via-[#004953]/70 to-[#004953]/90 backdrop-blur-[2px]"></div>
    </div>
  )
}
