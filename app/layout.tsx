import type {
  Metadata,
  Viewport,
} from "next"

import { Inter } from "next/font/google"

import { Analytics } from "@vercel/analytics/next"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.revrepo.in"),

  title: {
    default: "RevRepo — Revenue Intelligence Platform",
    template: "%s | RevRepo",
  },

  description:
    "Turn hidden business data into revenue growth. RevRepo centralizes analytics, customer insights, and operational intelligence into one powerful platform.",

  keywords: [
    "Revenue Intelligence",
    "Business Analytics",
    "AI Dashboard",
    "Revenue Tracking",
    "Customer Insights",
    "Growth Intelligence",
    "Predictive Analytics",
    "Business Intelligence",
    "CRM Analytics",
    "Operational Insights",
  ],

  authors: [
    {
      name: "RevRepo",
      url: "https://www.revrepo.in",
    },
  ],

  creator: "RevRepo",

  publisher: "RevRepo",

  applicationName: "RevRepo",

  category: "Business",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "RevRepo — Revenue Intelligence Platform",

    description:
      "One dashboard. Complete revenue clarity. Real-time business intelligence powered by AI.",

    url: "https://www.revrepo.in",

    siteName: "RevRepo",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "RevRepo — Revenue Intelligence Platform",

    description:
      "Turn hidden business data into revenue growth.",

    creator: "@revrepo",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  maximumScale: 1,

  themeColor: "#050816",

  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark"
    >
      <body
        className={`${inter.variable} min-h-screen bg-background font-sans antialiased`}
      >
        {children}

        {process.env.NODE_ENV === "production" && (
          <Analytics />
        )}
      </body>
    </html>
  )
}