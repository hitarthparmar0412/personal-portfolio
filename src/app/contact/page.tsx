import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact — Hitarth Parmar',
  description: "Let's build something amazing. Available for freelance projects, full-time roles, and technical consulting.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: '#050714' }}>
      {/* Page hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-10 right-10 w-[400px] h-[400px]"
            style={{
              background: 'radial-gradient(circle at 70% 30%, rgba(16,185,129,0.09) 0%, transparent 65%)',
            }}
          />
          <div className="absolute bottom-0 left-0 w-[500px] h-[300px]"
            style={{
              background: 'radial-gradient(circle at 20% 80%, rgba(99,102,241,0.08) 0%, transparent 60%)',
            }}
          />
        </div>
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
            <span className="text-[11px] font-mono text-[#6366F1]">Contact</span>
          </div>

          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[#10B981] text-[10px] font-mono tracking-[0.25em] uppercase">Available for Work</span>
          </div>

          <h1
            className="font-display font-black leading-none tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              background: 'linear-gradient(135deg, #0A0B14 0%, #10B981 50%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Let&apos;s Build<br />Something
          </h1>

          <p className="text-[#6B7280] text-lg max-w-xl leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. I typically respond within
            {' '}<span className="font-semibold text-white">24 hours</span>.
          </p>

          {/* Response time indicators */}
          <div className="flex flex-wrap gap-4 mt-10">
            {[
              { label: '< 24h', sublabel: 'Response time', color: '#10B981' },
              { label: 'Free', sublabel: '30-min scoping call', color: '#6366F1' },
              { label: 'Remote', sublabel: 'Available worldwide', color: '#06B6D4' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                style={{
                  background: `${item.color}08`,
                  border: `1px solid ${item.color}20`,
                }}
              >
                <div>
                  <div className="font-bold text-sm" style={{ color: item.color }}>{item.label}</div>
                  <div className="text-[11px] text-[#9CA3AF] font-mono">{item.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <Contact />
    </main>
  )
}
