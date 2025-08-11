import FeaturesSection from "@/components/features-section"
import CaseStudiesSection from "@/components/case-studies-section"
import TeamSection from "@/components/team-section"
import PartnersCarousel from "@/components/partners-carousel"
import QuoteSection from "@/components/quote-section"
import ContactSection from "@/components/contact-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import VisionSection from "@/components/vision-section"
import SectionWrapper from "@/components/section-wrapper"
import HeroHeaderContainer from "@/components/hero-header-container"
import BusinessPartnerSection from "@/components/business-partner-section"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroHeaderContainer />

      <div className="pt-3 sm:pt-4 md:pt-10 lg:pt-12 px-2 md:px-8 lg:px-16 xl:px-24">
        {/* Unified breathing space */}
        <div className="relative z-10 section-spacing" id="what-we-do">
          <WhatWeDoSection />
        </div>

        <div className="relative z-30 section-spacing" id="features">
          <FeaturesSection />
        </div>

        <div className="relative z-20 section-spacing">
          <VisionSection />
        </div>

        <div className="relative z-40 section-spacing" id="partners">
          <PartnersCarousel />
        </div>

        <div className="relative z-50 section-spacing" id="case-studies">
          <CaseStudiesSection />
        </div>

        <div className="relative z-30 section-spacing" id="business-partners">
          <BusinessPartnerSection />
        </div>
      </div>

      <SectionWrapper
        backgroundColor="transparent"
        prevSectionColor="transparent"
        nextSectionColor="transparent"
        id="team"
        className="mt-6 md:mt-16 px-2 md:px-8 lg:px-16 xl:px-24"
      >
        <TeamSection />
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="transparent"
        prevSectionColor="transparent"
        nextSectionColor="transparent"
        id="quote"
        className="px-2 md:px-8 lg:px-16 xl:px-24"
      >
        <QuoteSection />
      </SectionWrapper>

      <SectionWrapper
        backgroundColor="transparent"
        prevSectionColor="transparent"
        id="contact"
        className="px-2 md:px-8 lg:px-16 xl:px-24"
      >
        <ContactSection />
      </SectionWrapper>
    </main>
  )
}
