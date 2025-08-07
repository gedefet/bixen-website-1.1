import Link from "next/link"
import Image from "next/image"
import { Linkedin } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a1a1f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-3 items-center">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center" aria-label="Bixen Home">
              <Image
                src="/images/bixen-logo-white.png"
                alt="Bixen Logo"
                width={110}
                height={32}
                className="h-6 w-auto"
              />
            </Link>
            <span className="text-white/50 text-sm">Creation beyond convention</span>
          </div>

          <ul className="flex flex-wrap items-center gap-4 justify-start md:justify-center">
            <li><a href="/#services" className="text-white/80 hover:text-[#01F9C6] text-sm">Services</a></li>
            <li><a href="/#work" className="text-white/80 hover:text-[#01F9C6] text-sm">Work</a></li>
            <li><a href="/#process" className="text-white/80 hover:text-[#01F9C6] text-sm">Process</a></li>
            <li><a href="/#team" className="text-white/80 hover:text-[#01F9C6] text-sm">People</a></li>
            <li><Link href="/humans" className="text-white/80 hover:text-[#01F9C6] text-sm">Curated Humans</Link></li>
          </ul>

          <div className="flex items-center gap-4 md:justify-end">
            <a
              href="https://www.linkedin.com/company/bixen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#01F9C6] transition-colors"
              aria-label="Bixen on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <span className="text-white/50 text-sm">© {new Date().getFullYear()} Bixen®</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
