'use client'

import { motion } from 'framer-motion'
import { MapPin, CheckCircle2 } from 'lucide-react'
import { experience } from '@/lib/data'
import { SectionHeading } from '@/components/ui'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#09091F]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading label="Career Path" title="Work Experience" />

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #6366F1, #06B6D4)', opacity: 0.15, transform: 'translateX(-50%)' }}
          />

          <div className="flex flex-col gap-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative md:grid md:grid-cols-2 md:gap-16 ${i % 2 === 0 ? '' : ''}`}
              >
                {/* Dot on timeline */}
                <div
                  className="absolute left-1/2 top-8 w-4 h-4 rounded-full border-2 hidden md:block"
                  style={{
                    background: exp.color,
                    borderColor: '#09091F',
                    transform: 'translateX(-50%)',
                    boxShadow: `0 0 20px ${exp.color}60`,
                    zIndex: 10,
                  }}
                />

                {/* Left side (even) or empty (odd) */}
                {i % 2 === 0 ? (
                  <>
                    <div className="md:text-right">
                      <ExperienceCard exp={exp} />
                    </div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div>
                      <ExperienceCard exp={exp} />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp }: { exp: typeof experience[0] }) {
  return (
    <div
      className="rounded-2xl p-6 transition-all duration-300"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderLeft: `3px solid ${exp.color}` }}
    >
      {/* Company & period */}
      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
        <h3 className="font-display font-bold text-white text-lg leading-tight">{exp.company}</h3>
        <span
          className="text-xs px-3 py-1 rounded-full font-mono whitespace-nowrap"
          style={{ background: `${exp.color}18`, color: exp.color, border: `1px solid ${exp.color}30` }}
        >
          {exp.period}
        </span>
      </div>

      {/* Role */}
      <div className="font-semibold mb-3" style={{ color: exp.color }}>
        {exp.role}
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-[#6B7280] text-xs font-mono mb-5">
        <MapPin size={11} />
        {exp.location}
      </div>

      {/* Highlights */}
      <ul className="space-y-2.5">
        {exp.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-[#1F2937] leading-relaxed">
            <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: exp.color }} />
            {h}
          </li>
        ))}
      </ul>
    </div>
  )
}
