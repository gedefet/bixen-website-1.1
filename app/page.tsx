import HeroHeaderContainer from "@/components/hero-header-container"
import ServicesTickerSection from "@/components/services-ticker-section"
import CaseStudiesSection from "@/components/case-studies-section"
import AiStatement from "@/components/ai-statement"
import ServicesSection from "@/components/services-section"
import WhyBixenSection from "@/components/why-bixen-section"
import PartnersCarousel from "@/components/partners-carousel"
import TeamSection from "@/components/team-section"
import QuoteSection from "@/components/quote-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main>
      <HeroHeaderContainer />
      <ServicesTickerSection />
      <CaseStudiesSection />
      <AiStatement />
      <ServicesSection />
      <WhyBixenSection />
      <PartnersCarousel />
      <TeamSection />
      <QuoteSection />
      <ContactSection />
    </main>
  )
}
