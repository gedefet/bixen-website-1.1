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
import ClosingCta from "@/components/closing-cta"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Value proposition first */}
      <HeroHeaderContainer />

      {/* Services next */}
      <div className="px-2">
        <div id="what-we-do">
          <WhatWeDoSection />
        </div>

        {/* Success stories to support credibility */}
        <div id="case-studies">
          <CaseStudiesSection />
        </div>

        {/* Partners/universities */}
        <div id="partners">
          <PartnersCarousel />
        </div>

        {/* Vision and features (avoid repetition; keep concise) */}
        <VisionSection />
        <FeaturesSection />

        {/* People */}
        <SectionWrapper
          backgroundColor="transparent"
          prevSectionColor="transparent"
          nextSectionColor="transparent"
          id="team"
        >
          <TeamSection />
        </SectionWrapper>

        {/* Quote (optional narrative break) */}
        <SectionWrapper
          backgroundColor="transparent"
          prevSectionColor="transparent"
          nextSectionColor="transparent"
          id="quote"
        >
          <QuoteSection />
        </SectionWrapper>

        {/* CTA band before contact */}
        <ClosingCta />

        {/* Contact last */}
        <SectionWrapper backgroundColor="transparent" prevSectionColor="transparent" id="contact">
          <ContactSection />
        </SectionWrapper>
      </div>
    </main>
  )
}
