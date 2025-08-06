import HeroHeaderContainer from "@/components/hero-header-container"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import FeaturesSection from "@/components/features-section"
import VisionSection from "@/components/vision-section"
import TransformativeSection from "@/components/transformative-section"
import TeamSection from "@/components/team-section"
import PartnersSection from "@/components/partners-section"
import BusinessPartnerSection from "@/components/business-partner-section"
import QuoteSection from "@/components/quote-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroHeaderContainer />
      <HeroSection />
      <ServicesSection />
      <WhatWeDoSection />
      <FeaturesSection />
      <VisionSection />
      <TransformativeSection />
      <TeamSection />
      <PartnersSection />
      <BusinessPartnerSection />
      <QuoteSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
