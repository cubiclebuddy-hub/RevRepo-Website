"use client"

import { X, Phone, Mail } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md transition-all duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col overflow-hidden border-l border-white/10 bg-background/95 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-right duration-300">

        {/* Gradient Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-sm text-primary">
              Contact RevRepo
            </p>

            <h2 className="text-2xl font-bold text-foreground">
              Let’s Talk Growth
            </h2>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-muted-foreground transition-all hover:bg-white/[0.08] hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col justify-center gap-8 px-6 py-8">

          {/* Call Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-white/[0.05]">

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-purple-600 shadow-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Call Us
                </p>

                <h3 className="text-xl font-semibold text-foreground">
                  +91 844 601 7464
                </h3>
              </div>
            </div>

            <div className="mt-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
              <p>Monday to Friday: 9:00 AM – 7:00 PM</p>
              <p>Saturday & Sunday: 11:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-white/[0.05]">

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-purple-600 shadow-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Email Us
                </p>

                <h3 className="text-lg font-semibold text-foreground">
                  info@revrepo.in
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Share your name, phone number, and business requirements.
              Our team will get back to you within 24 hours.
            </p>
          </div>

          {/* Extra Highlight */}
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-orange-500/10 via-pink-500/5 to-purple-600/10 p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              RevRepo helps businesses centralize reviews, revenue insights,
              customer feedback, and growth analytics into one AI-powered platform.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="relative z-10 border-t border-white/10 p-6">
          <button
            onClick={onClose}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-500/20"
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
}
