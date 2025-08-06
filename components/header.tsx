"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { href: "/#what-we-do", label: "What we do" },
  { href: "/#features", label: "Features" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/humans", label: "Curated Humans" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/red-flame-logo.png"
              alt="Bixen Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="ml-3 text-2xl font-bold text-white">Bixen</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-red-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <Button asChild variant="outline" className="bg-transparent border-red-500 text-white hover:bg-red-500 hover:text-white">
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg hover:text-red-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="outline" className="bg-transparent border-red-500 text-white hover:bg-red-500 hover:text-white mt-4">
              <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
