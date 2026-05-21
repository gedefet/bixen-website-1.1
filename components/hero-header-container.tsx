"use client"

import { useState, useEffect, useCallback } from "react"
import Header from "./header"
import HeroSection from "./hero-section"

export default function HeroHeaderContainer() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40)
  }, [])

  useEffect(() => {
    handleScroll()
    let ticking = false
    const listener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { handleScroll(); ticking = false })
        ticking = true
      }
    }
    window.addEventListener("scroll", listener, { passive: true })
    return () => window.removeEventListener("scroll", listener)
  }, [handleScroll])

  return (
    <>
      <Header isScrolled={isScrolled} />
      <HeroSection />
    </>
  )
}
