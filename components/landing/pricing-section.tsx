"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "BASIC",
    price: "₹5,000",
    period: "/mo",
    description: "Perfect for small teams",
    features: [
      "Up to 5 users",
      "Revenue dashboard",
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
    description: "For scaling businesses",
    features: [
      "Unlimited users",
      "Advanced analytics & AI",
      "Location intelligence",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
    contactSales: false,
  },
  {
    name: "ELITE",
    price: "₹30,000",
    period: "/mo",
    description: "For enterprises",
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
      { title: "Instagram + Facebook", subtitle: "Content included" },
      { title: "8 posts/month", subtitle: "Scheduled content" },
    ],
    cta: "Select",
    mostComplete: false,
  },
  {
    name: "GROWTH",
    price: "₹30,000",
    period: "/mo",
    features: [
      { title: "Instagram + Facebook + LinkedIn", subtitle: "Multi-channel management" },
      { title: "16 posts/month", subtitle: "Increased content reach" },
      { title: "Ad Management", subtitle: "Campaign optimization" },
    ],
    cta: "Select",
    mostComplete: false,
  },
  {
    name: "AUTHORITY",
    price: "₹60,000",
    period: "/mo",
    features: [
      { title: "All platforms", subtitle: "Complete social coverage" },
      { title: "30 posts/month", subtitle: "Maximum engagement" },
      { title: "Ads + Strategy + Analytics", subtitle: "Full-suite management" },
    ],
    cta: "Get Started",
    mostComplete: true,
  },
]

interface PricingSectionProps {
  onCtaClick?: () => void
}

export function PricingSection({ onCtaClick }: PricingSectionProps) {
  return (
    <section id="pricing" className="relative py-20 sm:py-32 bg-background">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Pricing Header */}
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            PRICING
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
        </div>

        {/* Main Pricing Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-[#1a1f2e] p-6 sm:p-8"
            >
              {plan.popular && (
                <div className="absolute right-4 top-0 -translate-y-0">
                  <span className="rounded-b-lg bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground">
                    Popular
                  </span>
                </div>
              )}

              <div className="flex-1 flex flex-col">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {plan.name}
                  </h3>
                </div>

                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="outline"
                className={`mt-8 w-full border-primary/50 text-primary hover:bg-primary/10 ${
                  plan.contactSales ? "border-primary text-primary" : ""
                }`}
                size="lg"
                onClick={onCtaClick}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Social Media Add-ons Section */}
        <div className="mt-24">
          <h2 className="text-center text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Social Media Add-ons
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-[#1a1f2e] p-6 sm:p-8"
              >
                {addon.mostComplete && (
                  <div className="absolute right-4 top-0 -translate-y-0">
                    <span className="rounded-b-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                      Most Complete
                    </span>
                  </div>
                )}

                <div className="flex-1 flex flex-col">
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      {addon.name}
                    </h3>
                  </div>

                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">{addon.price}</span>
                    <span className="text-muted-foreground">{addon.period}</span>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {addon.features.map((feature) => (
                      <li key={feature.title} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <div>
                          <span className="text-sm font-medium text-foreground">{feature.title}</span>
                          <p className="text-xs text-muted-foreground">{feature.subtitle}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  className="mt-8 w-full border-primary/50 text-primary hover:bg-primary/10"
                  size="lg"
                  onClick={onCtaClick}
                >
                  {addon.cta}
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Social media add-ons are separate and can be added to any plan based on your requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
