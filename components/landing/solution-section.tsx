"use client"

import {
  BarChart3,
  Users,
  MapPin,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Revenue Intelligence",
    description:
      "Monitor revenue streams in real time with centralized business visibility across all channels.",
    gradient:
      "from-orange-500/20 to-pink-500/10",
    iconColor: "text-orange-400",
  },
  {
    icon: Users,
    title: "Customer Insights",
    description:
      "Understand customer behavior, retention patterns, and lifetime value with actionable analytics.",
    gradient:
      "from-pink-500/20 to-purple-500/10",
    iconColor: "text-pink-400",
  },
  {
    icon: MapPin,
    title: "Location Intelligence",
    description:
      "Analyze geographic performance and uncover regional growth opportunities with smart mapping.",
    gradient:
      "from-purple-500/20 to-indigo-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description:
      "Predict trends, automate reporting, and receive proactive alerts before issues impact growth.",
    gradient:
      "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-400",
  },
]

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden py-24 sm:py-32"
    >

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">

          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary backdrop-blur-sm">
            The Solution
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            One Dashboard.{" "}

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Complete Revenue Clarity
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            RevRepo centralizes your business intelligence into one powerful platform —
            helping teams monitor, predict, and optimize growth in real time.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.05]"
            >

              {/* Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative z-10">

                {/* Icon */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${feature.gradient} ring-1 ring-white/10`}
                >
                  <feature.icon
                    className={`h-8 w-8 ${feature.iconColor}`}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold text-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Built for modern businesses that need clarity, automation, and scalable growth intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}