"use client"

import { useState } from "react"
import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { RevenueLossSection } from "@/components/landing/revenue-loss-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { BeforeAfterSection } from "@/components/landing/before-after-section"
import { ImpactSection } from "@/components/landing/impact-section"
import { WhyRevRepoSection } from "@/components/landing/why-revrepo-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { FinalCTASection } from "@/components/landing/final-cta-section"
import { Footer } from "@/components/landing/footer"
import { ContactModal } from "@/components/landing/contact-modal"

export function LandingWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Header onCtaClick={openModal} />
      <HeroSection onCtaClick={openModal} />
      <ProblemSection />
      <RevenueLossSection />
      <SolutionSection />
      <BeforeAfterSection />
      <ImpactSection />
      <WhyRevRepoSection />
      <PricingSection onCtaClick={openModal} />
      <FinalCTASection onCtaClick={openModal} />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
