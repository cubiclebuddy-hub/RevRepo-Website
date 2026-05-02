"use client"

import { Button } from "@/components/ui/button"

interface FinalCTASectionProps {
  onCtaClick?: () => void
}

export function FinalCTASection({ onCtaClick }: FinalCTASectionProps) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Every Day Without RevRepo ={" "}
            <span className="text-primary">Lost Revenue</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Stop guessing. Start growing. Join hundreds of businesses already maximizing their revenue with RevRepo.
          </p>

          <div className="mt-10">
            <Button 
              size="lg" 
              className="rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
              onClick={onCtaClick}
            >
              Start Growing Smarter Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
