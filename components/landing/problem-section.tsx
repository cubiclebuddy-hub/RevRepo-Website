"use client"

import {
  Layers,
  TrendingDown,
  HelpCircle,
} from "lucide-react"

const problems = [
  {
    icon: Layers,
    title: "Scattered Data",
    description:
      "Your business data lives across multiple tools with no centralized visibility, creating disconnects and missed opportunities.",
    gradient:
      "from-orange-500/20 to-pink-500/10",
    iconColor: "text-orange-400",
  },
  {
    icon: TrendingDown,
    title: "Revenue Leakage",
    description:
      "Without unified intelligence, hidden revenue leaks and operational inefficiencies continue silently impacting growth.",
    gradient:
      "from-yellow-500/20 to-orange-500/10",
    iconColor: "text-yellow-400",
  },
  {
    icon: HelpCircle,
    title: "Reactive Decisions",
    description:
      "Businesses relying on outdated reports and assumptions struggle to make confident, data-driven decisions.",
    gradient:
      "from-red-500/20 to-pink-500/10",
    iconColor: "text-red-400",
  },
]

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden py-24 sm:py-32"
    >

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">

          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary backdrop-blur-sm">
            The Problem
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Your Revenue Has{" "}

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Blind Spots
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Most businesses operate with disconnected systems,
            delayed reporting, and limited visibility —
            resulting in slower growth and missed revenue opportunities.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.05]"
            >

              {/* Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative z-10">

                {/* Icon */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${problem.gradient} ring-1 ring-white/10`}
                >
                  <problem.icon
                    className={`h-7 w-7 ${problem.iconColor}`}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold text-foreground">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            RevRepo eliminates disconnected workflows by centralizing business intelligence into one intelligent platform.
          </p>
        </div>
      </div>
    </section>
  )
}