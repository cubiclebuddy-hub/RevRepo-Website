"use client"

import { X, Phone, Mail } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed left-0 top-0 h-full w-full max-w-sm bg-[#0a0a0f] border-r border-white/10 z-50 p-8 flex flex-col animate-slide-in">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex-1 flex flex-col justify-center gap-8">
          {/* Call Us Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <h3 className="text-white font-semibold text-lg">Call Us</h3>
            </div>
            <p className="text-white text-xl font-medium tracking-wide">
              +91 844 601 7464
            </p>
            <div className="text-gray-400 text-sm leading-relaxed">
              <p>Monday to Friday: 9:00 AM to 7:00 PM</p>
              <p>Saturday & Sunday: 11:00 AM to 5:00 PM</p>
            </div>
          </div>

          {/* Email Us Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <h3 className="text-white font-semibold text-lg">Email Us</h3>
            </div>
            <p className="text-white text-lg">
              info@revrepo.in
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Share your name, number and query and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
        >
          Close
        </button>
      </div>
    </>
  )
}
