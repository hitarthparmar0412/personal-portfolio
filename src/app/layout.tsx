import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hitarth Parmar — Senior Software Engineer | 24+ Live Apps',
  description: 'Results-driven Senior Software Engineer with 4+ years experience. 24+ live apps, 7M+ users. Expert in Flutter, Firebase, GetX, Bloc, Stripe, Google Maps. Available for freelance & full-time. Ahmedabad.',
  keywords: 'Flutter developer, FlutterFlow, Firebase, cross-platform, mobile app developer, Dart, GetX, Bloc, Riverpod, Stripe integration, Ahmedabad, Flutter developer India',
  authors: [{ name: 'Hitarth Parmar' }],
  creator: 'Hitarth Parmar',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Hitarth Parmar — Senior Software Engineer',
    description: '4+ years · 24+ Live Apps · 7M+ Users · Flutter, Firebase, GetX, Bloc',
    siteName: 'Hitarth Parmar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hitarth Parmar — Senior Software Engineer',
    description: '4+ years · 24+ Live Apps · 7M+ Users',
  },
  verification: {
    google: 'L49991BgkSal0GVnsMGpPyEisreptnlYQHzKVUle6V4',
  },
}

import SmoothScroll from '@/components/SmoothScroll'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
