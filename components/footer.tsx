"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUp, Linkedin, Twitter, Github } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 border-t border-white/10 bg-[#004953]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuente%20blanca%20fondo%20transparente_registrado-DEnxY22L1XvDKGRhofoq1uFyEv75Po.png"
                alt="Bixen Logo"
                width={100}
                height={33}
                className="h-5 w-auto"
                priority
              />
            </Link>
            <span className="text-xs align-super text-white/60">®</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60">
            <Link href="/#what-we-do" className="hover:text-white transition-colors">
              What We Do
            </Link>
            <Link href="/#features" className="hover:text-white transition-colors">
              Why Bixen
            </Link>
            <Link href="/#case-studies" className="hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="/#business-partners" className="hover:text-white transition-colors">
              Business Partners
            </Link>
            <Link href="/#team" className="hover:text-white transition-colors">
              People
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/bixen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <p className="text-white/60 text-xs">© {new Date().getFullYear()} Bixen®</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          Creation beyond convention.
        </div>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-12 h-12 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-40"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  )
}
