import type { Metadata } from 'next'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'

export const metadata: Metadata = {
  title: 'Services — Hitarth Parmar',
  description: 'Flutter app development, AI integration, SaaS architecture and mobile consulting services.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen" style={{ background: '#050714' }}>
      {/* Page hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.06) 50%, transparent 70%)',
          }}
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(99,102,241,0.07) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-[11px] font-mono text-[#9CA3AF]">Hitarth Parmar</span>
            <span className="text-[#D1D5DB]">/</span>
            <span className="text-[11px] font-mono text-[#6366F1]">Services</span>
          </div>

          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)' }} />
            <span className="text-[#818CF8] text-[10px] font-mono tracking-[0.25em] uppercase">What I Do</span>
          </div>

          <h1
            className="font-display font-black leading-none tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              background: 'linear-gradient(135deg, #0A0B14 0%, #4F46E5 65%, #A855F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Services &<br />Pricing
          </h1>

          <p className="text-[#6B7280] text-lg max-w-xl leading-relaxed">
            From idea to App Store in weeks — not months. Fixed-price engagements with
            written estimates within{' '}
            <span className="font-semibold text-white">48 hours</span>.
          </p>

          {/* Service highlights */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { label: 'Flutter Apps', color: '#6366F1' },
              { label: 'AI Integration', color: '#A855F7' },
              { label: 'SaaS Architecture', color: '#06B6D4' },
              { label: 'Backend APIs', color: '#10B981' },
              { label: 'App Store Submission', color: '#F59E0B' },
              { label: 'Technical Consulting', color: '#EC4899' },
            ].map((chip) => (
              <span
                key={chip.label}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium"
                style={{
                  background: `${chip.color}10`,
                  color: chip.color,
                  border: `1px solid ${chip.color}25`,
                }}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <Services />
      <Pricing />
    </main>
  )
}
