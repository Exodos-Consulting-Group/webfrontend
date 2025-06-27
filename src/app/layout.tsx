import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Exodos - Digital Solutions & Web Development',
  description: 'Exodos delivers innovative web solutions that empower businesses to thrive in the digital landscape. Specializing in modern web technologies, accessibility-first design, and scalable solutions.',
  robots: 'index, follow',
  authors: [{ name: 'Exodos Team' }],
  keywords: ['web development', 'digital transformation', 'cloud migration', 'next.js', 'react', 'typescript', 'accessibility', 'exodos'],
  openGraph: {
    title: 'Exodos - Digital Solutions & Web Development',
    description: 'Delivering innovative web solutions that empower businesses to thrive in the digital landscape.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exodos - Digital Solutions & Web Development',
    description: 'Delivering innovative web solutions that empower businesses to thrive in the digital landscape.',
  },
  // PWA and mobile optimization
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Exodos',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Cross-browser compatibility meta tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Mobile optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Favicon for different devices */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  )
}
