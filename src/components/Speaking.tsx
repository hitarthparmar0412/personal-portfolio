'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { speakingSessions } from '@/lib/data'
import { SplitText } from '@/components/ui/SplitText'

export default function Speaking() {
  return (
    <section id="speaking" className="bg-[#0D1117] overflow-hidden">

      {/* ── Full-bleed photo with overlay text ── */}
      <div className="relative w-full" style={{ minHeight: '70vh' }}>
        <Image
          src="/images/profile-speaking.jpg"
          alt="Hitarth Parmar speaking"
          fill
          className="object-cover object-top"
          style={{ filter: 'grayscale(15%) brightness(0.55)' }}
        />

        {/* Dark gradient overlay — stronger at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(13,17,23,0.3) 0%, rgba(13,17,23,0.5) 40%, rgba(13,17,23,0.97) 100%)',
          }}
        />

        {/* Left edge gradient for sidebar nav */}
        <div className="absolute inset-y-0 left-0 w-16 hidden lg:block"
          style={{ background: 'linear-gradient(to right, rgba(13,17,23,0.8), transparent)' }} />

        {/* Content over photo */}
        <div className="relative z-10 flex flex-col justify-end min-h-[70vh] max-w-6xl mx-auto px-6 pb-16 pt-20">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-6 h-px bg-[#E8B554]" />
            <span className="text-[#E8B554] text-xs font-mono tracking-[0.2em] uppercase">Community & Education</span>
          </motion.div>

          {/* Big title */}
          <SplitText
            text="Expert Sessions"
            tag="h2"
            className="font-display font-black text-white leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            delay={0.05}
          />

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-8 mt-6"
          >
            {[
              { n: '2',       l: 'Sessions Conducted' },
              { n: '100+',    l: 'Students Reached' },
              { n: 'College', l: 'Level Audience'  },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-black font-display text-2xl text-white">{s.n}</div>
                <div className="text-white/40 text-xs font-mono mt-0.5">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Session cards ── */}
      <div className="max-w-6xl mx-auto px-6 pb-20 -mt-2">
        <div className="grid md:grid-cols-2 gap-5">
          {speakingSessions.map((session, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(to right, ${session.color}, transparent)` }}
              />

              {/* Topic tag */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full tracking-wide"
                  style={{
                    background: `${session.color}15`,
                    color: session.color,
                    border: `1px solid ${session.color}30`,
                  }}
                >
                  {session.topic}
                </span>
                <span className="text-white/25 text-[11px] font-mono">{session.audience}</span>
              </div>

              {/* Session number */}
              <div
                className="absolute top-6 right-6 font-black font-display opacity-[0.07]"
                style={{ fontSize: '5rem', color: session.color, lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <h3 className="font-display font-bold text-white text-xl mb-3 leading-snug pr-12">
                {session.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {session.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-5 flex items-center justify-between px-6 py-4 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-white/40 text-sm">
            Available for <span className="text-white/70 font-medium">workshops, college talks & tech meetups</span>
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="text-[#E8B554] text-sm font-semibold font-mono hover:underline shrink-0 ml-6"
          >
            Invite me →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
