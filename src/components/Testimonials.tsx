'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { SplitText } from '@/components/ui/SplitText'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#F0F4FF] dark:bg-[#080B14]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col gap-0 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-0.5"
            style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #818CF8, #22D3EE)' }} />
            <span className="text-[#818CF8] text-[10px] font-mono tracking-[0.25em] uppercase">What Clients Say</span>
          </motion.div>
          <SplitText
            text="Client Feedback"
            tag="h2"
            className="heading-gradient font-display font-black leading-none tracking-tight mb-1"
            style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)' } as React.CSSProperties}
            delay={0.05}
          />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative rounded-2xl p-7 flex flex-col gap-5"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(to right, ${t.color}, transparent)` }} />

              {/* Quote icon */}
              <Quote size={20} style={{ color: t.color, opacity: 0.4 }} />

              {/* Quote text */}
              <p className="text-[15px] leading-relaxed flex-1 italic" style={{ color: 'var(--text-body)' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4"
                style={{ borderTop: '1px solid var(--divider)' }}>
                {/* Avatar monogram */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-black text-sm shrink-0"
                  style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}30` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--text-heading)' }}>{t.name}</div>
                  <div className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-muted)' }}>{t.title} · {t.company}</div>
                  <div className="text-[11px] font-mono mt-0.5" style={{ color: 'var(--text-subtle)' }}>{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs font-mono mt-8"
          style={{ color: 'var(--text-subtle)' }}
        >
          All testimonials are from verified client engagements · Names shared with permission
        </motion.p>
      </div>
    </section>
  )
}
