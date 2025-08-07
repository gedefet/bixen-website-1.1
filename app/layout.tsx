import "./globals.css"
import { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Bixen",
  description: "AI, engineering, and business strategy for smarter businesses.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Site-wide background overlay to subtly dim the background on all pages (mobile + desktop) */}
          <div className="fixed inset-0 bg-black/10 pointer-events-none z-0" aria-hidden="true" />
          {/* Content wrapper above the overlay */}
          <div className="relative z-[1] min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
