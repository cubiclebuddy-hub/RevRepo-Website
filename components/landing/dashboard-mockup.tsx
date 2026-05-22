"use client"

export function DashboardMockup() {
  const platforms = [
    { name: "Google", count: 428 },
    { name: "Trustpilot", count: 312 },
    { name: "Yelp", count: 214 },
    { name: "Glassdoor", count: 156 },
    { name: "Facebook", count: 89 },
    { name: "Others", count: 35 },
  ]

  const chartData = [35, 40, 38, 42, 55, 60, 75, 85, 80, 70, 55, 45]

  return (
    <div className="relative mx-auto max-w-5xl px-2 sm:px-0">
      {/* Ambient Glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 blur-3xl" />

      <div className="relative animate-float">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-card/80 shadow-2xl shadow-primary/10 backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3 sm:px-6">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />

            <span className="ml-4 text-xs font-medium tracking-wide text-muted-foreground sm:text-sm">
              RevRepo Intelligence Dashboard
            </span>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="glass-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20">
                <p className="text-sm text-muted-foreground">
                  Overall Reviews
                </p>

                <div className="mt-3 flex items-end gap-2">
                  <span className="text-3xl font-bold text-green-400 sm:text-4xl">
                    4.6
                  </span>

                  <span className="pb-1 text-sm text-muted-foreground">
                    /5 rating
                  </span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  1,234 total reviews
                </p>
              </div>

              <div className="glass-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20">
                <p className="text-sm text-muted-foreground">
                  Positive Sentiment
                </p>

                <div className="mt-3 flex items-end gap-2">
                  <span className="text-3xl font-bold text-primary sm:text-4xl">
                    72%
                  </span>
                </div>

                <p className="mt-2 text-sm text-green-400">
                  +18% from last month
                </p>
              </div>

              <div className="glass-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20">
                <p className="text-sm text-muted-foreground">
                  Negative Reviews
                </p>

                <div className="mt-3 flex items-end gap-2">
                  <span className="text-3xl font-bold text-red-400 sm:text-4xl">
                    13%
                  </span>
                </div>

                <p className="mt-2 text-sm text-red-400">
                  -6% from last month
                </p>
              </div>
            </div>

            {/* Lower Grid */}
            <div className="mt-6 grid gap-4 lg:grid-cols-5">
              {/* Chart */}
              <div className="glass-card rounded-2xl p-5 lg:col-span-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-foreground">
                    Review Trend
                  </h3>

                  <span className="text-xs text-muted-foreground">
                    Last 30 days
                  </span>
                </div>

                <div className="mt-6 flex h-40 items-end gap-2">
                  {chartData.map((height, index) => (
                    <div
                      key={index}
                      className="group relative flex-1"
                    >
                      <div
                        className="rounded-t-md bg-gradient-to-t from-primary/70 via-primary to-amber-300 transition-all duration-300 group-hover:scale-y-105"
                        style={{
                          height: `${height}%`,
                        }}
                      />

                      <div className="absolute inset-x-0 bottom-full mb-2 hidden rounded-md bg-black/80 px-2 py-1 text-center text-xs text-white group-hover:block">
                        {height}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platforms */}
              <div className="glass-card rounded-2xl p-5 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-foreground">
                    Platforms
                  </h3>

                  <span className="text-xs text-muted-foreground">
                    Active sources
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {platforms.map((platform) => (
                    <div
                      key={platform.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />

                        <span className="text-sm text-muted-foreground">
                          {platform.name}
                        </span>
                      </div>

                      <span className="text-sm font-semibold text-foreground">
                        {platform.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}