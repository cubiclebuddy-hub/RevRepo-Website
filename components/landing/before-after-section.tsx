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
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Before vs After{" "}
            <span className="text-primary">RevRepo</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Before */}
          <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500/5 to-transparent p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20">
                <X className="h-4 w-4 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-red-500">Before RevRepo</h3>
            </div>
            
            <div className="mt-8 space-y-4">
              {beforeItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Minus className="h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                <Check className="h-4 w-4 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-green-500">After RevRepo</h3>
            </div>
            
            <div className="mt-8 space-y-4">
              {afterItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="h-4 w-4 shrink-0 text-green-500" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
