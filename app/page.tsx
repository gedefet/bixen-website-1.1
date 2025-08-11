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
      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg viewBox=\\"0 0 256 256\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cfilter id=\\"noiseFilter\\"%3E%3CfeTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.9\\" numOctaves=\\"4\\" stitchTiles=\\"stitch\\"/%3E%3C/filter%3E%3Crect width=\\"100%25\\" height=\\"100%25\\" filter=\\"url(%23noiseFilter)\\"/%3E%3C/svg%3E')]"></div>\
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
}\
