import HeroHeaderContainer from "@/components/hero-header-container"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import AiStatement from "@/components/ai-statement"
import VisionSection from "@/components/vision-section"
import WhyBixenSection from "@/components/why-bixen-section"
import PartnersCarousel from "@/components/partners-carousel"
import CaseStudiesSection from "@/components/case-studies-section"
import TeamSection from "@/components/team-section"
import QuoteSection from "@/components/quote-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main>
      <HeroHeaderContainer />
      <StatsSection />
      <ServicesSection />
      <AiStatement />
      <VisionSection />
      <WhyBixenSection />
      <PartnersCarousel />
      <CaseStudiesSection />
      <TeamSection />
      <QuoteSection />
      <ContactSection />
    </main>
  )
}
