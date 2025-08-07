import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from 'next/font/google'
import "./globals.css"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

// Optimize font loading
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bixen | Creation Beyond Convention",
  description:
    "We design and deliver AI products and teams. Certified AI talent, rigorous selection, and production-grade delivery — trusted by tech-forward companies.",
  keywords:
    "AI talent, AI engineer, AI developers for hire, AI consultants, curated humans, LLM, MLOps, computer vision, RAG, data science, product strategy, AI delivery",
  viewport: "width=device-width, initial-scale=1",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-[#0a1a1f] text-white`}>
        <SiteHeader />
        <main className="pt-14 md:pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
