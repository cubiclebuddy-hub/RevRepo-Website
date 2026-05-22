"use client"

const metrics = [
  {
    value: "77%",
    label: "Revenue Growth",
  },
  {
    value: "50%",
    label: "Error Reduction",
  },
  {
    value: "3x",
    label: "Pipeline Growth",
  },
  {
    value: "15%",
    label: "Retention Lift",
  },
]

export function ImpactSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            PROVEN IMPACT
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Results That Speak for Themselves
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border bg-[#1a1f2e] p-8 text-center transition-all hover:border-primary/30"
            >
              <div className="text-4xl font-bold text-primary">{metric.value}</div>
              <div className="mt-3 text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
