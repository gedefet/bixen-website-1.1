"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  isScrolled?: boolean
  opacity?: number
}

export default function Header({ isScrolled = false, opacity = 1 }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      style={{ opacity }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuente%20blanca%20fondo%20transparente_registrado-DEnxY22L1XvDKGRhofoq1uFyEv75Po.png"
              alt="Bixen"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#01F9C6] transition-colors">
              Home
            </Link>
            <Link href="/case-studies" className="text-white hover:text-[#01F9C6] transition-colors">
              Case Studies
            </Link>
            <Link href="/humans" className="text-white hover:text-[#01F9C6] transition-colors">
              Curated Humans
            </Link>
            <Button asChild className="bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90">
              <Link href="#contact">Contact</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-[#01F9C6] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white hover:text-[#01F9C6] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/case-studies" 
                className="text-white hover:text-[#01F9C6] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                href="/humans" 
                className="text-white hover:text-[#01F9C6] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Curated Humans
              </Link>
              <Button asChild className="bg-[#01F9C6] text-[#004953] hover:bg-[#01F9C6]/90 w-full">
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
