"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
  opacity: number
}

export default function Header({ isScrolled, opacity }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={`z-[100] fixed top-0 left-0 right-0 w-full px-2 pt-2 lg:pt-6 transition-opacity duration-300`}
      style={{ opacity }}
    >
      <div
        className={`w-full max-w-screen-xl h-14 lg:h-[4.5rem] flex flex-row items-center justify-between mx-auto px-6 ${
          isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-primary/20" : "lg:bg-transparent"
        } transition-all ease-in duration-200 rounded-[1.25rem]`}
      >
        <a href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuente%20blanca%20fondo%20transparente_registrado-DEnxY22L1XvDKGRhofoq1uFyEv75Po.png"
            alt="Bixen Logo"
            width={120}
            height={40}
            className="h-8 w-auto lg:h-10 lg:w-auto"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center justify-center gap-8">
          <a href="/#process" className="text-sm font-medium text-white hover:underline btn-secondary-link">
            Process
          </a>
          <a href="/humans#talent" className="text-sm font-medium text-white hover:underline btn-secondary-link">
            Talent
          </a>
          <a href="/#what-we-do" className="text-sm font-medium text-white hover:underline btn-secondary-link">
            Services
          </a>
          <a href="/#case-studies" className="text-sm font-medium text-white hover:underline btn-secondary-link">
            Proof
          </a>
          <a href="/#team" className="text-sm font-medium text-white hover:underline btn-secondary-link">
            People
          </a>
        </nav>

        <div className="hidden md:flex items-center justify-end">
          <a
            href="/#contact"
            aria-label="Start in 10 days"
            className="inline-flex items-center px-3 py-1.5 text-sm rounded-md btn-primary font-semibold"
          >
            Start in 10 days
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white bg-transparent border-none p-2">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 z-[200] bg-background border border-primary/30 shadow-xl p-4 md:hidden animate-fadeIn"
            style={{ opacity: 1 }}
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-white bg-transparent border-none p-2">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <a
                href="/#process"
                className="text-lg font-medium text-white hover:underline btn-secondary-link"
                onClick={() => setIsOpen(false)}
              >
                Process
              </a>
              <a
                href="/humans#talent"
                className="text-lg font-medium text-white hover:underline btn-secondary-link"
                onClick={() => setIsOpen(false)}
              >
                Talent
              </a>
              <a
                href="/#what-we-do"
                className="text-lg font-medium text-white hover:underline btn-secondary-link"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="/#case-studies"
                className="text-lg font-medium text-white hover:underline btn-secondary-link"
                onClick={() => setIsOpen(false)}
              >
                Proof
              </a>
              <a
                href="/#team"
                className="text-lg font-medium text-white hover:underline btn-secondary-link"
                onClick={() => setIsOpen(false)}
              >
                People
              </a>
              <a
                href="/#contact"
                className="text-lg font-semibold text-[#0B1F24] btn-primary inline-flex w-fit px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
                aria-label="Start in 10 days"
              >
                Start in 10 days
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
