"use client"

import { Layers, TrendingDown, HelpCircle } from "lucide-react"

const problems = [
  {
    icon: Layers,
    title: "Scattered Data",
    description: "Your data lives in 10+ tools. No single source of truth means missed connections and lost opportunities.",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-500",
  },
  {
    icon: TrendingDown,
    title: "Missed Revenue",
    description: "Without unified insights, revenue leaks go unnoticed until it's too late to act.",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-500",
  },
  {
    icon: HelpCircle,
    title: "Poor Decisions",
    description: "Without real-time insights, decisions are based on gut feelings instead of data.",
    iconBg: "bg-red-500/20",
    iconColor: "text-red-500",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            THE PROBLEM
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Your Revenue Has{" "}
            <span className="text-primary">Blind Spots</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-border bg-[#1a1f2e] p-8 transition-all hover:border-primary/30"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${problem.iconBg}`}>
                <problem.icon className={`h-6 w-6 ${problem.iconColor}`} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
