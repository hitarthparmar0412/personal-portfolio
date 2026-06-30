'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '@/lib/data'
import { SplitText } from '@/components/ui/SplitText'

/* ─────────────────────────── data ─────────────────────────── */
const categories = [
  { id: 'core',    num: '01', title: 'Core Languages',     icon: '{ }',  items: skills.languages,       accent: '#22D3EE' },
  { id: 'mobile',  num: '02', title: 'Frameworks & Tools', icon: '⚙',   items: skills.frameworks,      accent: '#6366F1' },
  { id: 'state',   num: '03', title: 'State Management',   icon: '◈',   items: skills.stateManagement, accent: '#A855F7' },
  { id: 'backend', num: '04', title: 'Backend & Cloud',    icon: '☁',   items: skills.backend,         accent: '#F59E0B' },
  { id: 'pay',     num: '05', title: 'Payments & Maps',    icon: '◈',   items: skills.payments,        accent: '#10B981' },
  { id: 'ai',      num: '06', title: 'AI & GenAI',         icon: '✦',   items: skills.ai,              accent: '#F472B6' },
  { id: 'db',      num: '07', title: 'Local Storage',      icon: '◧',   items: skills.storage,         accent: '#22D3EE' },
  { id: 'devops',  num: '08', title: 'Release & DevOps',   icon: '▲',   items: skills.devops,          accent: '#818CF8' },
  { id: 'method',  num: '09', title: 'Methodology',        icon: '◆',
    items: ['Clean Architecture', 'SOLID Principles', 'Agile / Scrum', 'Code Review', 'Mentorship'],
    accent: '#34D399' },
]

/* ─────────────────────────── main component ────────────────── */
export default function Skills() {
  const [active, setActive] = useState('core')
  const panelRef = useRef<HTMLDivElement>(null)
  const current = categories.find(c => c.id === active)!

  return (
    <section id="skills" className="bg-[#F0F4FF] dark:bg-[#080B14] overflow-hidden">

      {/* ── Hero banner ── */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-0.5"
          style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #818CF8, #22D3EE)' }} />
          <span className="text-[#818CF8] text-[10px] font-mono tracking-[0.25em] uppercase">Technical Stack</span>
        </motion.div>
        <SplitText
          text="Skills & Expertise"
          tag="h2"
          className="heading-gradient font-display font-black leading-none tracking-tight mb-1"
          style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)' } as React.CSSProperties}
          delay={0.05}
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[#6B7280] dark:text-white/44 text-sm font-mono max-w-md"
        >
          50+ technologies across 9 domains — 4+ years of production experience
        </motion.p>
      </div>

      {/* ── Accordion tab layout ── */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* Left — category list */}
          <div className="flex flex-col lg:w-72 shrink-0">
            {categories.map((cat) => {
              const isActive = active === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActive(cat.id)
                    if (window.innerWidth < 1024) {
                      setTimeout(() => panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50)
                    }
                  }}
                  className="group flex items-center gap-4 py-4 text-left transition-all duration-300 relative"
                  style={{ borderBottom: '1px solid var(--divider)' }}
                >
                  {/* Active indicator bar */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                    animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                    style={{ background: cat.accent, transformOrigin: 'top' }}
                  />

                  <span
                    className="text-[11px] font-mono transition-colors duration-300 w-7 shrink-0 pl-3"
                    style={{ color: isActive ? cat.accent : 'var(--text-subtle)' }}
                  >
                    {cat.num}
                  </span>

                  <span
                    className="font-display font-semibold text-sm transition-all duration-300"
                    style={{
                      color: isActive ? 'var(--text-heading)' : 'var(--text-muted)',
                      transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                    }}
                  >
                    {cat.title}
                  </span>

                  <span
                    className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full transition-all duration-300"
                    style={{
                      background: isActive ? `${cat.accent}18` : 'var(--badge-bg)',
                      color: isActive ? cat.accent : 'var(--badge-text)',
                      border: isActive ? `1px solid ${cat.accent}30` : '1px solid var(--badge-border)',
                    }}
                  >
                    {cat.items.length}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right — skill display panel */}
          <div ref={panelRef} className="flex-1 min-h-[320px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                {/* Panel header */}
                <div className="flex items-start gap-4 mb-8">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 mt-0.5"
                    style={{ background: `${current.accent}15`, border: `1px solid ${current.accent}25` }}
                  >
                    {current.icon}
                  </div>
                  <div>
                    <h3
                      className="font-display font-black leading-tight"
                      style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', color: 'var(--text-heading)' }}
                    >
                      {current.title}
                    </h3>
                    <p className="text-[#9CA3AF] dark:text-white/25 font-mono text-xs mt-1">
                      {current.items.length} skills in this category
                    </p>
                  </div>
                </div>

                {/* Skill pills — stagger in */}
                <div className="flex flex-wrap gap-3">
                  {current.items.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.04, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                      <motion.span
                        whileHover={{ scale: 1.06, y: -2 }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-sm cursor-default select-none"
                        style={{
                          background: `${current.accent}10`,
                          color: current.accent,
                          border: `1px solid ${current.accent}22`,
                          boxShadow: `0 0 20px ${current.accent}08`,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full opacity-60" style={{ background: current.accent }} />
                        {skill}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative large category number */}
                <div
                  className="absolute -bottom-4 -right-4 font-display font-black select-none pointer-events-none opacity-[0.04]"
                  style={{ fontSize: '180px', color: current.accent, lineHeight: 1 }}
                >
                  {current.num}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
