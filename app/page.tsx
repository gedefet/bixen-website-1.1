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
import HomeHero from "@/components/sections/home-hero"
import ServicesGrid from "@/components/sections/services-grid"
import SealCard from "@/components/sections/seal-card"
import SuccessStories from "@/components/sections/success-stories"
import ProcessTimeline from "@/components/sections/process-timeline"
import TeamGrid from "@/components/sections/team-grid"
import ContactCTA from "@/components/sections/contact-cta"

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HomeHero />

      <div className="pt-8 md:pt-24 px-2 md:px-8 lg:px-16 xl:px-24">
        {/* Sections with minimal spacing on mobile, maximum spacing on desktop */}
        <div className="relative z-10 mb-6 md:mb-24" id="what-we-do">
          <WhatWeDoSection />
        </div>

        <div className="relative z-20 mb-6 md:mb-24">
          <VisionSection />
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

        <div className="relative z-60 mb-6 md:mb-24" id="services">
          <ServicesGrid />
        </div>

        <div className="relative z-70 mb-6 md:mb-24" id="seal">
          <SealCard />
        </div>

        <div className="relative z-80 mb-6 md:mb-24" id="success-stories">
          <SuccessStories />
        </div>

        <div className="relative z-90 mb-6 md:mb-24" id="process-timeline">
          <ProcessTimeline />
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
        <TeamGrid />
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
        <ContactCTA />
      </SectionWrapper>
    </main>
  )
}
