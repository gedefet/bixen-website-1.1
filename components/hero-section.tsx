"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop",
      title: "AI-Powered Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence"
    },
    {
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop",
      title: "Data-Driven Innovation",
      subtitle: "Unlock insights from your data with advanced analytics"
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop",
      title: "Future-Ready Technology",
      subtitle: "Stay ahead with next-generation tech solutions"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6">
            <span className="text-white font-bold leading-tight">
              {slides[currentSlide].title}
            </span>
          </h1>
          
          <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90 text-lg px-8 py-3">
              <a href="#contact" className="inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3">
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-[#01F9C6]' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
