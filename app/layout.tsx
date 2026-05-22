import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'RevRepo – Revenue Intelligence Platform',
  description: 'Turn hidden data into revenue growth. RevRepo unifies your scattered business data into one powerful dashboard to track, predict, and grow revenue.',
  keywords: ['revenue intelligence', 'business analytics', 'dashboard', 'revenue tracking', 'customer insights', 'smart analytics'],
  authors: [{ name: 'RevRepo' }],
  openGraph: {
    title: 'RevRepo – Revenue Intelligence Platform',
    description: 'Turn hidden data into revenue growth. One dashboard. Complete revenue clarity. Real-time control.',
    url: 'https://www.revrepo.in',
    siteName: 'RevRepo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RevRepo – Revenue Intelligence Platform',
    description: 'Turn hidden data into revenue growth.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
