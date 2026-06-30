import type { Metadata } from 'next'
import Projects from '@/components/Projects'

export const metadata: Metadata = {
  title: 'Work — Hitarth Parmar',
  description: '24+ production apps across AI, fintech, delivery and SaaS serving 7M+ users worldwide.',
}

export default function WorkPage() {
  return (
    <main className="min-h-screen" style={{ background: '#050714' }}>
      {/* Page hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Gradient orb — top right */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, rgba(99,102,241,0.12) 0%, transparent 70%)',
          }}
        />
        {/* Gradient orb — bottom left */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 30% 70%, rgba(6,182,212,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(rgba(99,102,241,0.07) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-[11px] font-mono text-[#9CA3AF]">
              Hitarth Parmar
            </span>
            <span className="text-[#D1D5DB]">/</span>
            <span className="text-[11px] font-mono text-[#6366F1]">Work</span>
          </div>

          {/* Portfolio badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.18)',
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #818CF8, #22D3EE)',
              }}
            />
            <span className="text-[#818CF8] text-[10px] font-mono tracking-[0.25em] uppercase">
              Portfolio
            </span>
          </div>

          {/* Page title */}
          <h1
            className="font-display font-black leading-none tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              background:
                'linear-gradient(135deg, #0A0B14 0%, #4F46E5 65%, #818CF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Selected Work
          </h1>

          <p className="text-[#6B7280] text-lg max-w-xl leading-relaxed">
            24+ production applications shipped across SaaS, fintech, AI,
            delivery and health — serving{' '}
            <span className="font-semibold text-white">7M+ users</span>{' '}
            worldwide.
          </p>

          {/* Quick stats row */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { num: '24+', label: 'Live apps' },
              { num: '7M+', label: 'Users' },
              { num: '14', label: 'Featured' },
              { num: '4+', label: 'Years' },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-display font-black text-2xl text-[#6366F1]">
                  {s.num}
                </span>
                <span className="text-sm text-[#9CA3AF] font-mono">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects section — override sidebar left-padding from the component */}
      <div className="[&_.lg\\:pl-16]:pl-0">
        <Projects />
      </div>
    </main>
  )
}
