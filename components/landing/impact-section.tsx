"use client"

const metrics = [
  {
    value: "77%",
    label: "Revenue Growth",
    description: "Average increase in revenue visibility and operational efficiency.",
  },
  {
    value: "50%",
    label: "Error Reduction",
    description: "Reduced manual reporting mistakes through centralized automation.",
  },
  {
    value: "3x",
    label: "Pipeline Growth",
    description: "Faster identification of opportunities and customer trends.",
  },
  {
    value: "15%",
    label: "Retention Lift",
    description: "Improved customer experience and long-term business retention.",
  },
]

export function ImpactSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">

          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary backdrop-blur-sm">
            Proven Business Impact
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Results That Speak for Themselves
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Businesses using RevRepo gain better visibility, faster decisions,
            and measurable operational growth through centralized intelligence.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.05]"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-pink-500/5 to-purple-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* Metric Value */}
                <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-5xl font-bold text-transparent">
                  {metric.value}
                </div>

                {/* Label */}
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-14 text-center">
          <p className="text-sm text-muted-foreground">
            Real-time insights. Centralized intelligence. Smarter business growth.
          </p>
        </div>
      </div>
    </section>
  )
}