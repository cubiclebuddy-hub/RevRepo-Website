"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl" />

        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-purple-600/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center"
            >
              <Image
                src="/logo.png"
                alt="RevRepo Logo"
                width={190}
                height={60}
                priority
                className="h-auto w-[170px] object-contain"
              />
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              RevRepo helps businesses centralize reviews, customer feedback,
              revenue analytics, and operational insights into one AI-powered platform.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">

            {/* Product */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Product
              </h3>

              <div className="space-y-3">
                <Link
                  href="#features"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Features
                </Link>

                <Link
                  href="#pricing"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Pricing
                </Link>

                <Link
                  href="#about"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Company
              </h3>

              <div className="space-y-3">
                <Link
                  href="#contact"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>

                <Link
                  href="#"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="#"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms & Support
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Contact
              </h3>

              <div className="space-y-3">
                <a
                  href="mailto:sales@revrepo.in"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  sales@revrepo.in
                </a>

                <a
                  href="https://www.revrepo.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  www.revrepo.in
                </a>

                <p className="text-sm text-muted-foreground">
                  Pune, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">

          <p className="text-sm text-muted-foreground">
            © 2026 RevRepo. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>

            <Link
              href="#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}