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
import WhyChooseBixenSection from "@/components/why-choose-bixen-section"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroHeaderContainer />

      <div className="pt-3 sm:pt-4 md:pt-10 lg:pt-12 px-2 md:px-8 lg:px-16 xl:px-24">
        {/* Sections with minimal spacing on mobile, maximum spacing on desktop */}
        <div className="relative z-10 mb-6 md:mb-24" id="what-we-do">
          <WhatWeDoSection />
        </div>

        <div className="relative z-20 mb-6 md:mb-24">
          <VisionSection />
        </div>

        <div className="relative z-25 mb-6 md:mb-24" id="why-choose-bixen">
          <WhyChooseBixenSection />
        </div>

        <div className="relative z-30 mb-6 md:mb-24" id="features">
          <FeaturesSection />
        </div>

        <div className="relative z-40 mb-6 md:mb-24" id="partners">
          <PartnersCarousel />
        </div>

        <div className="relative z-50 mb-6 md:mb-24" id="case-studies">
          <CaseStudiesSection />
        </div>

        <div className="relative z-30 mb-6 md:mb-24" id="business-partners">
          <BusinessPartnerSection />
        </div>
      </div>

      {/* Keep the remaining sections as they were */}
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

      <SectionWrapper backgroundColor="transparent" prevSectionColor="transparent" id="contact" className="px-2 md:px-8 lg:px-16 xl:px-24">
        <ContactSection />
      </SectionWrapper>
    </main>
  )
}
