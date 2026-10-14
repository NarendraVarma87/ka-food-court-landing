import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import { SITE } from '@/config/site'
import { SkipLink } from '@/components/layout/SkipLink'
import { Navbar } from '@/components/layout/Navbar'
import { StickyCta } from '@/components/layout/StickyCta'
import { Footer } from '@/components/layout/Footer'
import { MotionProvider } from '@/components/layout/MotionProvider'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildLocalBusinessSchema } from '@/lib/schema'

const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading-jakarta',
  display: 'swap',
})

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'KA Food Court | Corporate Cafeteria & Food Court Management Hyderabad',
    template: '%s | KA Food Court Hyderabad',
  },
  description:
    'End-to-end food court management and bulk corporate catering for tech parks and IT campuses in Hyderabad. Reliable, hygienic, and scalable.',
  keywords: [
    'food court management company Hyderabad',
    'corporate cafeteria services Hyderabad',
    'corporate catering Hyderabad',
    'bulk food orders Hyderabad',
    'office party catering Hyderabad',
    'tech park food court operations Hyderabad',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'KA Food Court | Corporate Food Court & Cafeteria Management Hyderabad',
    description:
      'Professional food court management and bulk catering for corporate campuses and tech parks in Hyderabad.',
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KA Food Court - Corporate Food Court & Catering Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KA Food Court | Corporate Food Courts & Bulk Catering Hyderabad',
    description:
      'End-to-end food court management and bulk corporate catering for tech parks in Hyderabad.',
    images: ['/og/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = buildLocalBusinessSchema()

  return (
    <html lang="en-IN" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <JsonLd data={localBusinessSchema} />
      </head>
      <body className="font-body bg-surface text-ink antialiased overflow-x-clip selection:bg-brand-500/20 selection:text-brand-900">
        <SkipLink />
        <MotionProvider>
          <Navbar />
          <div id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </div>
          <StickyCta />
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
