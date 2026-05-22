"use client"

import { EyeOff, Users, Settings } from "lucide-react"

const leakCategories = [
  {
    icon: EyeOff,
    title: "Missed Insights",
    percentage: "~12%",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-500",
  },
  {
    icon: Users,
    title: "Customer Churn",
    percentage: "~10%",
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-500",
  },
  {
    icon: Settings,
    title: "Manual Processes",
    percentage: "~8%",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-500",
  },
]

export function RevenueLossSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            THE COST OF INACTION
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Businesses Lose{" "}
            <span className="text-primary">15-30% Revenue</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Due to hidden leaks across operations, customer management, and manual processes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {leakCategories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col items-center text-center"
            >
              <div className={`flex h-20 w-20 items-center justify-center rounded-full ${category.iconBg}`}>
                <category.icon className={`h-10 w-10 ${category.iconColor}`} />
              </div>
              <div className="mt-6 text-3xl font-bold text-primary">{category.percentage}</div>
              <div className="mt-2 text-lg text-muted-foreground">{category.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
