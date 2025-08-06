"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ArrowRight, Play, Pause } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import ServicesSection from "@/components/services-section"
import FeaturesSection from "@/components/features-section"
import VisionSection from "@/components/vision-section"
import TransformativeSection from "@/components/transformative-section"
import TeamSection from "@/components/team-section"
import PartnersSection from "@/components/partners-section"
import BusinessPartnerSection from "@/components/business-partner-section"
import QuoteSection from "@/components/quote-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function HomePage() {
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
    <div className="min-h-screen bg-gradient-to-b from-black via-[#001a1f] to-[#004953]">
      <Header isScrolled={isScrolled} opacity={headerOpacity} />
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <FeaturesSection />
      <VisionSection />
      <TransformativeSection />
      <TeamSection />
      <PartnersSection />
      <BusinessPartnerSection />
      <QuoteSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
