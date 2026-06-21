'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'
import { education } from '@/lib/data'
import { SectionHeading } from '@/components/ui'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0D1117] lg:pl-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Academic Background" title="Education & Certifications" />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Degree */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-8 gold-glow"
            style={{ borderLeft: '3px solid #E8B554' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(232,181,84,0.15)', border: '1px solid rgba(232,181,84,0.3)' }}
              >
                <GraduationCap size={22} color="#E8B554" />
              </div>
              <span className="text-[#E8B554] text-xs font-mono tracking-widest uppercase">Degree</span>
            </div>

            <h3 className="text-xl font-display font-bold text-white mb-2">{education.degree}</h3>
            <p className="text-white/60 mb-4">{education.university}</p>

            <div className="flex items-center gap-2 text-white/40 text-sm font-mono mb-6">
              <Calendar size={13} />
              {education.period}
            </div>

            {/* SPI Badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(232,181,84,0.15) 0%, rgba(245,166,35,0.1) 100%)', border: '1px solid rgba(232,181,84,0.3)' }}
            >
              <Award size={18} color="#E8B554" />
              <div>
                <div className="text-[#E8B554] font-bold font-display text-2xl leading-none">{education.spi}</div>
                <div className="text-white/40 text-xs font-mono mt-0.5">SPI Score</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
              <span className="text-white/60 text-sm font-mono">Certifications & Courses</span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {education.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 glass rounded-xl px-4 py-3 transition-all duration-300"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold font-mono"
                    style={{ background: 'rgba(66,133,244,0.15)', color: '#4285F4', border: '1px solid rgba(66,133,244,0.25)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white truncate">{cert.name}</div>
                    <div className="text-xs text-white/40 font-mono mt-0.5">{cert.issuer}</div>
                  </div>
                  <div className="shrink-0 ml-auto">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: '#22C55E', boxShadow: '0 0 6px rgba(34,197,94,0.6)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
