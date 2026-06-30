'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export default function InlineCTA() {
  return (
    <section className="py-16 bg-[#FAFBFF] dark:bg-[#020409]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-3xl px-8 py-12 md:px-16 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden"
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          {/* Background accent */}
          <div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(66,133,244,0.06) 0%, transparent 70%)' }}
          />

          <div className="relative text-center md:text-left">
            <p className="text-[#6366F1] font-mono text-xs tracking-[0.2em] uppercase mb-3">
              Ready to build?
            </p>
            <h2 className="font-display font-black leading-tight mb-2"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--text-heading)' }}>
              Let&apos;s turn your idea into a live app.
            </h2>
            <p className="text-sm font-sans max-w-md" style={{ color: 'var(--text-muted)' }}>
              Free 30-min scoping call. Written estimate in 48 hours. No commitment required.
            </p>
          </div>

          <div className="relative flex flex-col sm:flex-row gap-3 shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#05080F]"
              style={{ background: 'linear-gradient(135deg, #E8B554 0%, #F5C842 100%)', boxShadow: '0 8px 32px rgba(232,181,84,0.25)' }}
            >
              Start a Project <ArrowRight size={14} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, background: 'rgba(255,255,255,0.06)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{ background: 'var(--badge-bg)', border: '1px solid var(--border-default)', color: 'var(--text-body)' }}
            >
              <Calendar size={14} /> Book a Free Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
