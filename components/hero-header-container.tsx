"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Header from "./header"
import HeroSection from "./hero-section"
import HeroSlideshow from "./hero-slideshow"

export default function HeroHeaderContainer() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [headerOpacity, setHeaderOpacity] = useState(1)
  const quoteSectionRef = useRef<HTMLElement | null>(null)

  const handleScroll = useCallback(() => {
    // Handle header background change
    if (window.scrollY > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }

    // Handle header fade out when reaching quote section
    if (!quoteSectionRef.current) {
      quoteSectionRef.current = document.getElementById("quote")
    }

    if (quoteSectionRef.current) {
      const quoteRect = quoteSectionRef.current.getBoundingClientRect()
      const quoteTop = quoteRect.top
      const windowHeight = window.innerHeight

      // Start fading out when quote section is 300px from entering viewport
      if (quoteTop < windowHeight + 300) {
        // Calculate opacity based on distance (1 when far, 0 when quote section enters viewport)
        const opacity = Math.max(0, Math.min(1, (quoteTop - windowHeight + 300) / 300))
        setHeaderOpacity(opacity)
      } else {
        setHeaderOpacity(1)
      }
    }
  }, [])

  useEffect(() => {
    // Initial check
    handleScroll()

    // Use requestAnimationFrame for better performance
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", scrollListener, { passive: true })
    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [handleScroll])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slideshow background */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <HeroSlideshow />
      </div>

      {/* Header with conditional background and fade effect */}
      <Header isScrolled={isScrolled} opacity={headerOpacity} />

      {/* Hero section - add padding-top to account for fixed header */}
      <div className="relative z-10 pt-20 lg:pt-28">
        <HeroSection />
      </div>
    </div>
  )
}

