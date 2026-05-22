"use client"

import {
  EyeOff,
  Users,
  Settings,
} from "lucide-react"

const leakCategories = [
  {
    icon: EyeOff,
    title: "Missed Insights",
    percentage: "~12%",
    description:
      "Critical business signals remain hidden across disconnected systems and reports.",
    gradient:
      "from-orange-500/20 to-pink-500/10",
    iconColor: "text-orange-400",
  },
  {
    icon: Users,
    title: "Customer Churn",
    percentage: "~10%",
    description:
      "Without proactive engagement insights, businesses lose valuable long-term customers.",
    gradient:
      "from-pink-500/20 to-purple-500/10",
    iconColor: "text-pink-400",
  },
  {
    icon: Settings,
    title: "Manual Operations",
    percentage: "~8%",
    description:
      "Time-consuming manual workflows create inefficiencies and slow business growth.",
    gradient:
      "from-yellow-500/20 to-orange-500/10",
    iconColor: "text-yellow-400",
  },
]

export function RevenueLossSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">

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
            The Cost of Inaction
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">

            Businesses Lose{" "}

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              15–30% Revenue
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Hidden operational inefficiencies, customer churn,
            and disconnected workflows silently reduce business profitability every day.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {leakCategories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white/[0.05]"
            >

              {/* Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative z-10">

                {/* Icon */}
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${category.gradient} ring-1 ring-white/10`}
                >
                  <category.icon
                    className={`h-10 w-10 ${category.iconColor}`}
                  />
                </div>

                {/* Percentage */}
                <div className="mt-8 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-5xl font-bold text-transparent">
                  {category.percentage}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            RevRepo helps businesses identify hidden revenue leaks before they impact growth.
          </p>
        </div>
      </div>
    </section>
  )
}