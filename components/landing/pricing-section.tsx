"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "BASIC",
    price: "₹5,000",
    period: "/mo",
    description: "Perfect for startups and small teams beginning revenue optimization.",
    features: [
      "Up to 5 users",
      "Unified revenue dashboard",
      "Basic analytics",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
    contactSales: false,
  },
  {
    name: "PRO",
    price: "₹15,000",
    period: "/mo",
    description: "Built for growing businesses that need AI-powered intelligence.",
    features: [
      "Unlimited users",
      "Advanced analytics & AI",
      "Location intelligence",
      "Priority support",
    ],
    cta: "Start Scaling",
    popular: true,
    contactSales: false,
  },
  {
    name: "ELITE",
    price: "₹30,000",
    period: "/mo",
    description: "Enterprise-grade intelligence with dedicated strategic support.",
    features: [
      "Unlimited everything",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    cta: "Contact Sales",
    popular: false,
    contactSales: true,
  },
]

const addOns = [
  {
    name: "STARTER",
    price: "₹15,000",
    period: "/mo",
    features: [
      {
        title: "Instagram + Facebook",
        subtitle: "Content creation included",
      },
      {
        title: "8 posts/month",
        subtitle: "Scheduled publishing",
      },
    ],
    cta: "Select Plan",
    mostComplete: false,
  },
  {
    name: "GROWTH",
    price: "₹30,000",
    period: "/mo",
    features: [
      {
        title: "Instagram + Facebook + LinkedIn",
        subtitle: "Multi-platform management",
      },
      {
        title: "16 posts/month",
        subtitle: "Expanded content reach",
      },
      {
        title: "Ad management",
        subtitle: "Campaign optimization included",
      },
    ],
    cta: "Select Plan",
    mostComplete: false,
  },
  {
    name: "AUTHORITY",
    price: "₹60,000",
    period: "/mo",
    features: [
      {
        title: "All platforms",
        subtitle: "Complete social coverage",
      },
      {
        title: "30 posts/month",
        subtitle: "Maximum engagement",
      },
      {
        title: "Ads + Strategy + Analytics",
        subtitle: "Full-suite growth management",
      },
    ],
    cta: "Get Started",
    mostComplete: true,
  },
]

interface PricingSectionProps {
  onCtaClick?: () => void
}

export function PricingSection({
  onCtaClick,
}: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24 sm:py-32"
    >

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">

          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm text-primary backdrop-blur-sm">
            Transparent Pricing
          </div>

          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Flexible Plans for Every Stage
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you're starting out or scaling enterprise operations,
            RevRepo gives you centralized intelligence to drive smarter growth.
          </p>
        </div>

        {/* Main Pricing */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative flex flex-col overflow-hidden rounded-[2rem] border p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-primary/30 bg-gradient-to-br from-orange-500/10 via-pink-500/5 to-purple-600/10"
                  : "border-white/10 bg-white/[0.03] hover:border-primary/20 hover:bg-white/[0.05]"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute right-6 top-6">
                  <span className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  {plan.name}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>

                  <span className="mb-1 text-muted-foreground">
                    {plan.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                      <Check className="h-3 w-3 text-green-400" />
                    </div>

                    <span className="text-sm leading-relaxed text-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                size="lg"
                onClick={onCtaClick}
                className={`mt-10 h-14 rounded-2xl text-base font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white hover:scale-[1.02]"
                    : "border border-white/10 bg-white/[0.03] text-foreground hover:bg-white/[0.06]"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-28">

          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground">
              Social Media Add-ons
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Expand your digital reach with professionally managed
              social media growth packages.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">

            {addOns.map((addon) => (
              <div
                key={addon.name}
                className={`relative overflow-hidden rounded-[2rem] border p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 ${
                  addon.mostComplete
                    ? "border-primary/30 bg-gradient-to-br from-orange-500/10 via-pink-500/5 to-purple-600/10"
                    : "border-white/10 bg-white/[0.03] hover:border-primary/20 hover:bg-white/[0.05]"
                }`}
              >

                {addon.mostComplete && (
                  <div className="absolute right-6 top-6">
                    <span className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-4 py-1 text-xs font-semibold text-white">
                      Best Value
                    </span>
                  </div>
                )}

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  {addon.name}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-5xl font-bold text-foreground">
                    {addon.price}
                  </span>

                  <span className="mb-1 text-muted-foreground">
                    {addon.period}
                  </span>
                </div>

                <ul className="mt-8 space-y-5">
                  {addon.features.map((feature) => (
                    <li
                      key={feature.title}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                        <Check className="h-3 w-3 text-green-400" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {feature.title}
                        </p>

                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {feature.subtitle}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  onClick={onCtaClick}
                  className={`mt-10 h-14 w-full rounded-2xl text-base font-semibold transition-all duration-300 ${
                    addon.mostComplete
                      ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white hover:scale-[1.02]"
                      : "border border-white/10 bg-white/[0.03] text-foreground hover:bg-white/[0.06]"
                  }`}
                >
                  {addon.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Add-ons can be combined with any RevRepo plan based on your growth requirements.
          </p>
        </div>
      </div>
    </section>
  )
}