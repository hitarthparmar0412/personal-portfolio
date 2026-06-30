import type { Metadata } from 'next'
import './globals.css'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hitarthparmar.dev'),
  title: {
    default: 'Hitarth Parmar — Flutter Developer & Mobile Architect | 24+ Live Apps',
    template: '%s | Hitarth Parmar',
  },
  description: 'Results-driven Senior Software Engineer with 4+ years experience. 24+ live apps, 7M+ users. Expert in Flutter, Firebase, GetX, Bloc, Stripe, Google Maps. Available for freelance & full-time. Ahmedabad.',
  keywords: 'Flutter developer, FlutterFlow, Firebase, cross-platform, mobile app developer, Dart, GetX, Bloc, Riverpod, Stripe integration, Ahmedabad, Flutter developer India, hire Flutter developer, Senior Software Engineer Ahmedabad, mobile app developer India, Flutter freelancer, FlutterFlow developer, cross-platform app developer',
  authors: [{ name: 'Hitarth Parmar', url: 'https://hitarthparmar.dev' }],
  creator: 'Hitarth Parmar',
  publisher: 'Hitarth Parmar',
  alternates: {
    canonical: 'https://hitarthparmar.dev',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_IN',
    url: 'https://hitarthparmar.dev',
    title: 'Hitarth Parmar — Flutter Developer & Mobile Architect',
    description: '4+ years · 24+ Live Apps · 7M+ Users · Flutter, Firebase, GetX, Bloc',
    siteName: 'Hitarth Parmar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hitarth Parmar — Flutter Developer & Mobile Architect | 24+ Live Apps',
      },
    ],
    firstName: 'Hitarth',
    lastName: 'Parmar',
    username: 'parmar-hitarth',
    gender: 'male',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hitarth Parmar — Flutter Developer & Mobile Architect',
    description: '4+ years · 24+ Live Apps · 7M+ Users · Flutter, Firebase',
    images: ['/og-image.jpg'],
    creator: '@hitarthparmar',
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'L49991BgkSal0GVnsMGpPyEisreptnlYQHzKVUle6V4',
  },
  category: 'technology',
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://hitarthparmar.dev/#person',
  name: 'Hitarth Parmar',
  givenName: 'Hitarth',
  familyName: 'Parmar',
  jobTitle: 'Senior Flutter Developer',
  description: 'Senior Flutter Developer with 4+ years of experience shipping 24+ cross-platform mobile applications for Android, iOS, and Web. Creator of Deonde (white-label delivery SaaS, 300+ businesses, 24 countries, $1B+ revenue processed), GoPayana (ride-hailing platform, Karnataka), and 12+ other production applications.',
  url: 'https://hitarthparmar.dev',
  image: 'https://hitarthparmar.dev/images/profile.jpg',
  email: 'hitarth.parmar0412@gmail.com',
  telephone: '+919586913540',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'iCoderz Solutions Pvt. Ltd.',
    url: 'https://icoderz.com',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Atmiya University',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rajkot',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
  },
  award: [
    'The Eccentric Performer — iCoderz Solutions',
    'Best Performer of the Team — iCoderz Solutions',
    'Featured in Apple App Store "New Apps We Love" editorial — TripTrop (2022)',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Generative AI Skill Badge',
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: 'Google' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'AI Fundamentals',
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: 'Google' },
    },
  ],
  knowsAbout: [
    'Flutter', 'Dart', 'Firebase', 'GetX', 'Bloc', 'Riverpod',
    'Stripe', 'Razorpay', 'Socket.IO', 'Google Maps SDK',
    'OpenAI API', 'Google Gemini', 'Clean Architecture', 'MVVM',
    'Mobile App Development', 'Cross-Platform Development',
    'FlutterFlow', 'Fastlane', 'GitHub Actions',
  ],
  sameAs: [
    'https://www.linkedin.com/in/parmar-hitarth',
    'https://github.com/hitarth-parmar',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Hitarth Parmar — Flutter Developer Portfolio',
  url: 'https://hitarthparmar.dev',
  description: 'Portfolio of Hitarth Parmar, Senior Flutter Developer, Ahmedabad India. 24+ live apps, 7M+ users, $1B+ revenue processed.',
  author: {
    '@type': 'Person',
    '@id': 'https://hitarthparmar.dev/#person',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://hitarthparmar.dev/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://hitarthparmar.dev/#person',
  },
  dateCreated: '2024-01-01',
  dateModified: new Date().toISOString().split('T')[0],
}

import Script from 'next/script'
import SmoothScroll from '@/components/SmoothScroll'
import TopNavigation from '@/components/TopNavigation'
import Footer from '@/components/Footer'
import { ScrollProgress } from '@/components/ScrollProgress'
import { ThemeProvider } from '@/components/ThemeProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme')||((window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark')})()` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScroll>
            <TopNavigation />
            <ScrollProgress />
            <div className="pt-16">
              {children}
            </div>
            <Footer />
          </SmoothScroll>
          <Script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="0DUF4iFpBs+a/Q5LGgd2BQ"
            strategy="afterInteractive"
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
