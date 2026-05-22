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
    <main className="relative overflow-hidden bg-background text-foreground">

      {/* Global Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Main Top Glow */}
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

        {/* Secondary Glow */}
        <div className="absolute left-0 top-[30%] h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[120px]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-pink-500/5 blur-[120px]" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Header */}
      <Header onCtaClick={openModal} />

      {/* Main Sections */}
      <div className="relative z-10">

        <HeroSection onCtaClick={openModal} />

        <ProblemSection />

        <RevenueLossSection />

        <SolutionSection />

        <BeforeAfterSection />

        <ImpactSection />

        <WhyRevRepoSection />

        <PricingSection onCtaClick={openModal} />

        <FinalCTASection onCtaClick={openModal} />
      </div>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  )
}