import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import RevealObserver from "@/components/reveal-observer"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bixen | Helping companies thrive through AI",
  description:
    "Leveraging deep AI expertise and exceptional talent to push beyond off-the-shelf technology. Computer vision, LLMs, intelligent agents — built for measurable impact.",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <RevealObserver />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
