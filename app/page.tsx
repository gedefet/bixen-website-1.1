import ProblemHero from "@/components/problem-hero"
import InsightSection from "@/components/insight-section"
import SolutionSection from "@/components/solution-section"
import ProofSection from "@/components/proof-section"
import HowWeStartSection from "@/components/how-we-start-section"
import WhyItWorksSection from "@/components/why-it-works-section"
import ClosingCta from "@/components/closing-cta"
import ContactSection from "@/components/contact-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import TeamSection from "@/components/team-section"
import QuoteSection from "@/components/quote-section"
import SectionWrapper from "@/components/section-wrapper"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1) Problem */}
      <ProblemHero />
      {/* 2) Insight */}
      <InsightSection />
      {/* 3) Solution */}
      <SolutionSection />
      {/* 4) Proof (3 mini-cases) */}
      <ProofSection />
      {/* 5) How we start (#process) */}
      <HowWeStartSection />
      {/* 6) Why it works */}
      <WhyItWorksSection />
      {/* Services (kept concise, after story) */}
      <WhatWeDoSection />
      {/* People */}
      <SectionWrapper
        backgroundColor="transparent"
        prevSectionColor="transparent"
        nextSectionColor="transparent"
        id="team"
      >
        <TeamSection />
      </SectionWrapper>
      {/* Optional narrative break */}
      <SectionWrapper
        backgroundColor="transparent"
        prevSectionColor="transparent"
        nextSectionColor="transparent"
        id="quote"
      >
        <QuoteSection />
      </SectionWrapper>
      {/* 7) Closing CTA */}
      <ClosingCta />
      {/* Contact (final) */}
      <SectionWrapper backgroundColor="transparent" prevSectionColor="transparent" id="contact">
        <ContactSection />
      </SectionWrapper>
    </main>
  )
}
