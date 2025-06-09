import Link from "next/link"
import Image from "next/image"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#004953]/90 backdrop-blur-sm border-t border-[#008794]/10">
      <div className="container px-4 md:px-6 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-col items-center md:items-start">
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
            <p className="text-white/60 text-xs mt-1">Creation beyond convention</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 mt-2 md:mt-0">
            <ul className="flex flex-wrap justify-center items-center gap-3 text-xs">
              <li>
                <Link href="#what-we-do" className="text-white hover:text-[#01F9C6] transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-white hover:text-[#01F9C6] transition-colors">
                  Why Bixen
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white hover:text-[#01F9C6] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-white hover:text-[#01F9C6] transition-colors">
                  People
                </Link>
              </li>
              <li>
                <Link href="#business-partners" className="text-white hover:text-[#01F9C6] transition-colors">
                  Business Partners
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-2 md:mt-0">
              <a
                href="https://www.linkedin.com/company/bixen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#01F9C6] transition-colors"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <p className="text-white/60 text-xs">© {new Date().getFullYear()} Bixen®</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
