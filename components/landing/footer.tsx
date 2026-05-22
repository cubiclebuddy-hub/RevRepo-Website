"use client"

import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

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
                className="h-auto w-[170px] object-contain brightness-110"
              />
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              RevRepo helps businesses centralize reviews, customer feedback,
              revenue analytics, and operational insights into one AI-powered platform.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">

            {/* Company */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Company
              </h3>

              <div className="space-y-3">
                <Link
                  href="/careers"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Careers
                </Link>

                <Link
                  href="/privacy-policy"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/leadership"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Leadership & Staff
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
                  href="mailto:info@revrepo.in"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  info@revrepo.in
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
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>

            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>

            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>

            <Link href="#contact">
            <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}