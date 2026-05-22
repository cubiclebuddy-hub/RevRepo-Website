"use client"

import { Lightbulb, Target, Rocket } from "lucide-react"

const reasons = [
  {
    icon: Lightbulb,
    title: "Predictive Intelligence",
    description: "AI that sees revenue opportunities before they appear.",
  },
  {
    icon: Target,
    title: "Actionable Insights",
    description: "Not just data — clear next steps you can act on today.",
  },
  {
    icon: Rocket,
    title: "Growth-First Platform",
    description: "Built from the ground up to accelerate revenue.",
  },
]

export function WhyRevRepoSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Why{" "}
            <span className="text-primary">RevRepo</span>?
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-3 max-w-xs text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
