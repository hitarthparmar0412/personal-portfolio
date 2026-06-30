'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { awards } from '@/lib/data'
import { SectionHeading } from '@/components/ui'

export default function Awards() {
  return (
    <section id="awards" className="py-24 bg-[#050714]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Recognition" title="Awards" />

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.number}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -6 }}
              className="rounded-2xl p-8 transition-all duration-300 relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Background number watermark */}
              <div
                className="absolute top-4 right-6 font-display font-black select-none pointer-events-none"
                style={{ fontSize: '7rem', lineHeight: 1, color: 'rgba(99,102,241,0.04)' }}
              >
                {award.number}
              </div>

              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
                >
                  <Trophy size={24} color="#6366F1" />
                </div>
                <div
                  className="text-5xl font-display font-black leading-none"
                  style={{ color: '#6366F1', textShadow: '0 0 40px rgba(99,102,241,0.2)' }}
                >
                  {award.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {award.title}
              </h3>
              <p className="text-[#1F2937] text-sm leading-relaxed mb-5">
                {award.description}
              </p>

              {/* Company badge */}
              <div className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#6366F1' }}
                />
                <span className="text-xs font-mono text-[#6B7280]">{award.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
