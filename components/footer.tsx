"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuente%20blanca%20fondo%20transparente_registrado-DEnxY22L1XvDKGRhofoq1uFyEv75Po.png"
                alt="Bixen"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-white/80 mb-6 max-w-md">
              Transforming businesses through cutting-edge AI solutions and data-driven innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#01F9C6] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#01F9C6] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#01F9C6] transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-[#01F9C6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/60 hover:text-[#01F9C6] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/humans" className="text-white/60 hover:text-[#01F9C6] transition-colors">
                  Curated Humans
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/60 hover:text-[#01F9C6] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/60">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@bixen.ai" className="hover:text-[#01F9C6] transition-colors">
                  contact@bixen.ai
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2025 Bixen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
