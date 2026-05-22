"use client"

import { X, Check, Minus } from "lucide-react"

const beforeItems = [
  "Data scattered across 10+ tools",
  "Hours wasted on manual spreadsheets",
  "Decisions based on outdated data",
  "Revenue leaks go unnoticed",
]

const afterItems = [
  "One unified revenue dashboard",
  "Real-time automated insights",
  "Predictive analytics for growth",
  "Every dollar tracked and optimized",
]

export function BeforeAfterSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary backdrop-blur-sm">
            Revenue Transformation
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Before vs{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              RevRepo
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            See how businesses transform revenue operations after switching to RevRepo.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          
          {/* Before Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-white/[0.05]">
            
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 ring-1 ring-red-500/20">
                  <X className="h-5 w-5 text-red-400" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Traditional Workflow
                  </p>

                  <h3 className="text-2xl font-bold text-red-400">
                    Before RevRepo
                  </h3>
                </div>
              </div>

              <div className="mt-10 space-y-5">
                {beforeItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1">
                      <Minus className="h-4 w-4 shrink-0 text-red-400" />
                    </div>

                    <span className="text-base leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-orange-500/10 via-pink-500/5 to-purple-600/10 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/40">
            
            {/* Animated Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-600/10 opacity-50 blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-purple-600 shadow-lg">
                  <Check className="h-5 w-5 text-white" />
                </div>

                <div>
                  <p className="text-sm text-primary/80">
                    AI-Powered Revenue Ops
                  </p>

                  <h3 className="text-2xl font-bold text-foreground">
                    After RevRepo
                  </h3>
                </div>
              </div>

              <div className="mt-10 space-y-5">
                {afterItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                      <Check className="h-3 w-3 shrink-0 text-green-400" />
                    </div>

                    <span className="text-base font-medium leading-relaxed text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Highlight */}
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                <p className="text-sm text-muted-foreground">
                  Businesses using RevRepo report faster decision-making,
                  improved visibility, and increased revenue efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}