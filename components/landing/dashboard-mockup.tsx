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
    <div className="relative mx-auto max-w-4xl">
      {/* Glow effect */}
      <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 opacity-60 blur-3xl" />
      
      {/* Floating animation wrapper */}
      <div className="relative animate-float">
        <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/95 shadow-2xl shadow-primary/10 backdrop-blur-sm">
          {/* Window controls */}
          <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/30 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-4 text-sm text-muted-foreground">RevRepo Dashboard</span>
          </div>

          <div className="p-6">
            {/* Stats row - 3 columns */}
            <div className="mb-6 grid grid-cols-3 gap-4">
              {/* Overall Reviews */}
              <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                <p className="text-sm text-muted-foreground">Overall Reviews</p>
                <p className="mt-1 text-3xl font-bold text-green-500">4.6/5</p>
                <p className="text-sm text-muted-foreground">1,234 reviews</p>
              </div>

              {/* Positive Reviews */}
              <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                <p className="text-sm text-muted-foreground">Positive Reviews</p>
                <p className="mt-1 text-3xl font-bold text-green-500">892</p>
                <p className="text-sm text-green-500">72% sentiment</p>
              </div>

              {/* Negative Reviews */}
              <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                <p className="text-sm text-muted-foreground">Negative Reviews</p>
                <p className="mt-1 text-3xl font-bold text-red-500">156</p>
                <p className="text-sm text-red-500">13% sentiment</p>
              </div>
            </div>

            {/* Bottom grid - Chart and Platforms */}
            <div className="grid gap-4 md:grid-cols-5">
              {/* Review Trend Chart - Takes more space */}
              <div className="rounded-lg border border-border/50 bg-secondary/20 p-4 md:col-span-3">
                <h3 className="mb-4 text-sm font-medium text-foreground">Review Trend (30 Days)</h3>
                <div className="flex h-32 items-end gap-2">
                  {chartData.map((height, i) => (
                    <div key={i} className="flex-1">
                      <div
                        className="rounded-sm bg-gradient-to-t from-amber-600 to-primary transition-all duration-300 hover:from-primary hover:to-amber-500"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Platforms */}
              <div className="rounded-lg border border-border/50 bg-secondary/20 p-4 md:col-span-2">
                <h3 className="mb-3 text-sm font-medium text-foreground">Review Platforms</h3>
                <div className="space-y-2">
                  {platforms.map((platform) => (
                    <div key={platform.name} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{platform.name}</span>
                      <span className="font-medium text-primary">{platform.count}</span>
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
