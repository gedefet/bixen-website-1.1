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

      <div className="pt-16 md:pt-24">
        {/* Sections with maximum spacing between them */}
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

      {/* Keep the remaining sections as they were */}
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
    </main>
  )
}

