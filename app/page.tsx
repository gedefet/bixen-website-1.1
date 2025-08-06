import HeroHeaderContainer from "@/components/hero-header-container"
import WhatWeDoSection from "@/components/what-we-do-section"
import VisionSection from "@/components/vision-section"
import FeaturesSection from "@/components/features-section"
import PartnersCarousel from "@/components/partners-carousel"
import CaseStudiesSection from "@/components/case-studies-section"
import BusinessPartnerSection from "@/components/business-partner-section"
import TeamSection from "@/components/team-section"
import QuoteSection from "@/components/quote-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import SectionWrapper from "@/components/section-wrapper"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <HeroHeaderContainer />

      <div className="pt-16 md:pt-24">
        <div className="relative z-10 mb-16 md:mb-24" id="what-we-do">
          <WhatWeDoSection />
        </div>

        <div className="relative z-20 mb-16 md:mb-24">
          <VisionSection />
        </div>

        <div className="relative z-30 mb-16 md:mb-24" id="features">
          <FeaturesSection />
        </div>

        <div className="relative z-40 mb-16 md:mb-24" id="partners">
          <PartnersCarousel />
        </div>

        <div className="relative z-50 mb-16 md:mb-24" id="case-studies">
          <CaseStudiesSection />
        </div>

        <div className="relative z-30 mb-16 md:mb-24" id="business-partners">
          <BusinessPartnerSection />
        </div>
      </div>

      <SectionWrapper
        backgroundColor="transparent"
        prevSectionColor="transparent"
        nextSectionColor="transparent"
        id="team"
        className="mt-16"
      >
        <TeamSection />
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="transparent"
        prevSectionColor="transparent"
        nextSectionColor="transparent"
        id="quote"
      >
        <QuoteSection />
      </SectionWrapper>

      <SectionWrapper backgroundColor="transparent" prevSectionColor="transparent" id="contact">
        <ContactSection />
      </SectionWrapper>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
