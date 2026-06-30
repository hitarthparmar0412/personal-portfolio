import type { Metadata } from 'next'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Awards from '@/components/Awards'

export const metadata: Metadata = {
  title: 'About — Hitarth Parmar',
  description: 'Flutter developer & mobile architect with 4+ years of experience building apps for 7M+ users.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: '#050714' }}>
      {/* Page hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(168,85,247,0.1) 0%, transparent 70%)',
          }}
        />
        <div className="absolute right-0 bottom-0 w-[400px] h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 80% 70%, rgba(6,182,212,0.08) 0%, transparent 70%)',
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
            <span className="text-[11px] font-mono text-[#6366F1]">About</span>
          </div>

          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #A855F7, #22D3EE)' }} />
            <span className="text-[#818CF8] text-[10px] font-mono tracking-[0.25em] uppercase">The Person</span>
          </div>

          <h1
            className="font-display font-black leading-none tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              background: 'linear-gradient(135deg, #0A0B14 0%, #7C3AED 65%, #A855F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About Me
          </h1>

          <p className="text-[#6B7280] text-lg max-w-xl leading-relaxed">
            Flutter developer and mobile architect based in Ahmedabad, India. I build apps that scale —
            from MVP to{' '}
            <span className="font-semibold text-white">millions of users</span>.
          </p>

          {/* Quick facts */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { label: '4+ Years', sublabel: 'Experience', color: '#6366F1' },
              { label: 'Ahmedabad', sublabel: 'India', color: '#A855F7' },
              { label: 'Open to', sublabel: 'Remote & On-site', color: '#06B6D4' },
              { label: 'iCoderz', sublabel: 'Current employer', color: '#10B981' },
            ].map((fact) => (
              <div
                key={fact.label}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                style={{
                  background: `${fact.color}08`,
                  border: `1px solid ${fact.color}20`,
                }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: fact.color }} />
                <div>
                  <div className="font-semibold text-sm" style={{ color: fact.color }}>{fact.label}</div>
                  <div className="text-[11px] text-[#9CA3AF] font-mono">{fact.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <About />
      <Skills />
      <Experience />
      <Education />
      <Awards />
    </main>
  )
}
