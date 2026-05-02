"use client"

import { BarChart3, Users, MapPin, Zap } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Revenue Tracking",
    description: "Real-time revenue monitoring across all channels.",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-500",
  },
  {
    icon: Users,
    title: "Customer Insights",
    description: "Deep understanding of customer behavior & value.",
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-500",
  },
  {
    icon: MapPin,
    title: "Location Intelligence",
    description: "Geo-based revenue analytics and opportunity mapping.",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Zap,
    title: "Smart Analytics",
    description: "AI-powered predictions and automated alerts.",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-500",
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            THE SOLUTION
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            One Dashboard. Complete Revenue Clarity.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Real-time control over every revenue lever in your business.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-[#1a1f2e] p-6 text-center transition-all hover:border-primary/30"
            >
              <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${feature.iconBg}`}>
                <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
