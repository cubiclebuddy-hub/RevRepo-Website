"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { DashboardMockup } from "./dashboard-mockup"

interface HeroSectionProps {
  onCtaClick?: () => void
}

export function HeroSection({
  onCtaClick,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main Glow */}
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[140px]" />

        {/* Secondary Glows */}
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[120px]" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Hero Content */}
        <div className="text-center">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/[0.03] px-5 py-2 backdrop-blur-xl">

            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-purple-600">
              <Sparkles className="h-3 w-3 text-white" />
            </div>

            <span className="text-sm text-muted-foreground">
              AI-Powered Revenue Intelligence Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto mt-8 max-w-5xl text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">

            Turn Scattered Business Data Into{" "}

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Revenue Growth
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            RevRepo centralizes reviews, analytics, customer insights,
            and operational data into one intelligent dashboard —
            helping businesses monitor performance, identify opportunities,
            and scale revenue faster.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Button
              size="lg"
              className="group h-14 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-8 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-purple-500/30"
              onClick={onCtaClick}
            >
              Start Free Trial

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-2xl border-white/10 bg-white/[0.03] px-8 text-base text-foreground backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.06]"
              onClick={onCtaClick}
            >
              <Play className="mr-2 h-4 w-4" />

              Book Demo
            </Button>
          </div>

          {/* Trust Line */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">

            <span>No credit card required</span>

            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />

            <span>14-day free trial</span>

            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />

            <span>Cancel anytime</span>
          </div>

          {/* Mini Stats */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-foreground">
                AI
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Smart Insights
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-foreground">
                24/7
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Real-Time Tracking
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-foreground">
                1
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Unified Dashboard
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-foreground">
                Live
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Revenue Visibility
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative mt-20 sm:mt-24">

          {/* Bottom Fade */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" />

          {/* Glow Behind Dashboard */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />

          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}