"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { DashboardMockup } from "./dashboard-mockup"

interface HeroSectionProps {
  onCtaClick?: () => void
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">Now in public beta</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Turn Hidden Data Into{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Revenue Growth
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            RevRepo unifies your scattered business data into one powerful dashboard to track, predict, and grow revenue.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="group w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
              onClick={onCtaClick}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-border text-foreground hover:bg-secondary sm:w-auto"
              onClick={onCtaClick}
            >
              <Play className="mr-2 h-4 w-4" />
              Book Demo
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative mt-16 sm:mt-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
