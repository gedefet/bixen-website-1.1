"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all",
        scrolled ? "backdrop-blur-md bg-[#0a1a1f]/70 border-b border-white/10" : "bg-transparent"
      )}
      role="banner"
      aria-label="Main header"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="h-14 md:h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Bixen Home">
            <Image
              src="/images/bixen-logo-white.png"
              alt="Bixen Logo"
              width={120}
              height={36}
              className="h-6 md:h-8 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
            <a href="/#services" className="text-sm text-white/90 hover:text-[#01F9C6]">Services</a>
            <a href="/#work" className="text-sm text-white/90 hover:text-[#01F9C6]">Work</a>
            <a href="/#process" className="text-sm text-white/90 hover:text-[#01F9C6]">Process</a>
            <a href="/#team" className="text-sm text-white/90 hover:text-[#01F9C6]">People</a>
            <Link href="/humans" className="text-sm font-semibold text-[#01F9C6] hover:text-[#00d4aa]">
              Curated Humans
            </Link>
          </nav>

          <div className="hidden md:flex">
            <a
              href="/#contact"
              className="inline-flex items-center rounded-md bg-[#01F9C6] px-3 py-1.5 text-sm font-medium text-black hover:bg-[#00d4aa] transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-[max-height] duration-300",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 pb-4">
          <div className="grid gap-2">
            <a onClick={() => setOpen(false)} href="/#services" className="text-white/90 py-2">Services</a>
            <a onClick={() => setOpen(false)} href="/#work" className="text-white/90 py-2">Work</a>
            <a onClick={() => setOpen(false)} href="/#process" className="text-white/90 py-2">Process</a>
            <a onClick={() => setOpen(false)} href="/#team" className="text-white/90 py-2">People</a>
            <Link onClick={() => setOpen(false)} href="/humans" className="text-[#01F9C6] py-2">
              Curated Humans
            </Link>
            <a
              onClick={() => setOpen(false)}
              href="/#contact"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[#01F9C6] px-3 py-2 text-sm font-medium text-black hover:bg-[#00d4aa] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
