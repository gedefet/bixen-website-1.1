"use client"
import HeroSection from "@/components/hero-section"
import ProblemSolutionSection from "@/components/problem-solution-section"
import SuccessCasesSection from "@/components/success-cases-section"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import TeamSection from "@/components/team-section"
import PartnersSection from "@/components/partners-section"
import FinalCTASection from "@/components/final-cta-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import ChatWidget from "@/components/chat-widget"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      {/* Subtle noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-white/5 via-transparent to-white/5 bg-[length:100px_100px]"></div>
      </div>

      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <ProblemSolutionSection />
        <SuccessCasesSection />
        <ServicesSection />
        <ProcessSection />
        <TeamSection />
        <PartnersSection />
        <FinalCTASection />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  )
}
