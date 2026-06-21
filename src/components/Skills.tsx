'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import { SectionHeading } from '@/components/ui'

const skillCategories = [
  {
    key: 'languages',
    title: 'Languages',
    icon: '{ }',
    items: skills.languages,
    accent: '#4285F4',
  },
  {
    key: 'frameworks',
    title: 'Frameworks & Tools',
    icon: '⚙',
    items: skills.frameworks,
    accent: '#E8B554',
  },
  {
    key: 'stateManagement',
    title: 'State Management',
    icon: '◈',
    items: skills.stateManagement,
    accent: '#8B5CF6',
  },
  {
    key: 'backend',
    title: 'Backend & Cloud',
    icon: '☁',
    items: skills.backend,
    accent: '#F97316',
  },
  {
    key: 'payments',
    title: 'Payments & Maps',
    icon: '💳',
    items: skills.payments,
    accent: '#22C55E',
  },
  {
    key: 'ai',
    title: 'AI & GenAI',
    icon: '✦',
    items: skills.ai,
    accent: '#EC4899',
  },
  {
    key: 'storage',
    title: 'Local Storage',
    icon: '◧',
    items: skills.storage,
    accent: '#06B6D4',
  },
  {
    key: 'devops',
    title: 'Release & DevOps',
    icon: '🚀',
    items: skills.devops,
    accent: '#A855F7',
  },
  {
    key: 'methodology',
    title: 'Methodology',
    icon: '◆',
    items: ['Clean Architecture', 'SOLID Principles', 'Agile / Scrum', 'Code Review', 'Mentorship'],
    accent: '#84CC16',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0D1117] lg:pl-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Technical Stack" title="Skills & Expertise" />

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass rounded-2xl p-6 transition-all duration-300 group cursor-default"
              style={{
                '--accent': cat.accent,
              } as React.CSSProperties}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-mono font-bold transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${cat.accent}18`,
                    color: cat.accent,
                    border: `1px solid ${cat.accent}30`,
                  }}
                >
                  {cat.icon}
                </div>
                <span className="text-white/80 text-sm font-semibold font-display">{cat.title}</span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-lg font-mono transition-all duration-200"
                    style={{
                      background: `${cat.accent}10`,
                      color: `${cat.accent}cc`,
                      border: `1px solid ${cat.accent}20`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
