"use client"

import { Button } from "@/components/ui/button"

interface FinalCTASectionProps {
  onCtaClick?: () => void
}

export function FinalCTASection({
  onCtaClick,
}: FinalCTASectionProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-16 shadow-2xl backdrop-blur-2xl sm:px-10 lg:px-16">

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-pink-500/5 to-purple-600/10" />

          {/* Top Badge */}
          <div className="relative z-10 mx-auto flex w-fit items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary backdrop-blur-sm">
            AI-Powered Revenue Growth
          </div>

          {/* Heading */}
          <div className="relative z-10 mt-8 text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Every Day Without{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                RevRepo
              </span>{" "}
              = Lost Revenue
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Stop relying on outdated reports and disconnected tools.
              RevRepo helps businesses centralize reviews, analytics,
              customer insights, and revenue intelligence in one platform.
            </p>
          </div>

          {/* Stats */}
          <div className="relative z-10 mt-12 grid gap-6 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-foreground">
                24/7
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Real-Time Monitoring
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-foreground">
                AI
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Smart Revenue Insights
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-foreground">
                1 Dashboard
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Complete Business Visibility
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="relative z-10 mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Button
              size="lg"
              className="h-14 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-8 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-purple-500/20"
              onClick={onCtaClick}
            >
              Start Growing Smarter Today
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-2xl border-white/10 bg-white/[0.03] px-8 text-base backdrop-blur-xl hover:bg-white/[0.06]"
            >
              Book a Demo
            </Button>
          </div>

          {/* Footer Text */}
          <p className="relative z-10 mt-6 text-center text-sm text-muted-foreground">
            No complicated setup. No scattered tools. Just smarter business growth.
          </p>
        </div>
      </div>
    </section>
  )
}
