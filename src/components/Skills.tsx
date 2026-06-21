'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '@/lib/data'
import { SplitText } from '@/components/ui/SplitText'

/* ─────────────────────────── data ─────────────────────────── */
const categories = [
  { id: 'core',    num: '01', title: 'Core Languages',     icon: '{ }',  items: skills.languages,       accent: '#4285F4' },
  { id: 'mobile',  num: '02', title: 'Frameworks & Tools', icon: '⚙',   items: skills.frameworks,      accent: '#E8B554' },
  { id: 'state',   num: '03', title: 'State Management',   icon: '◈',   items: skills.stateManagement, accent: '#8B5CF6' },
  { id: 'backend', num: '04', title: 'Backend & Cloud',    icon: '☁',   items: skills.backend,         accent: '#F97316' },
  { id: 'pay',     num: '05', title: 'Payments & Maps',    icon: '◈',   items: skills.payments,        accent: '#22C55E' },
  { id: 'ai',      num: '06', title: 'AI & GenAI',         icon: '✦',   items: skills.ai,              accent: '#EC4899' },
  { id: 'db',      num: '07', title: 'Local Storage',      icon: '◧',   items: skills.storage,         accent: '#06B6D4' },
  { id: 'devops',  num: '08', title: 'Release & DevOps',   icon: '▲',   items: skills.devops,          accent: '#A855F7' },
  { id: 'method',  num: '09', title: 'Methodology',        icon: '◆',
    items: ['Clean Architecture', 'SOLID Principles', 'Agile / Scrum', 'Code Review', 'Mentorship'],
    accent: '#84CC16' },
]

const allSkills = categories.flatMap(c => c.items)

const countries = [
  [
    { flag: '🇮🇳', name: 'India' }, { flag: '🇺🇸', name: 'USA' }, { flag: '🇬🇧', name: 'England' },
    { flag: '🇩🇪', name: 'Germany' }, { flag: '🇦🇺', name: 'Australia' }, { flag: '🇸🇬', name: 'Singapore' },
    { flag: '🇨🇭', name: 'Switzerland' }, { flag: '🇫🇷', name: 'France' },
  ],
  [
    { flag: '🇦🇪', name: 'UAE' }, { flag: '🇸🇦', name: 'Saudi Arabia' }, { flag: '🇮🇪', name: 'Ireland' },
    { flag: '🇧🇩', name: 'Bangladesh' }, { flag: '🇱🇰', name: 'Sri Lanka' }, { flag: '🇳🇬', name: 'Nigeria' },
    { flag: '🇨🇦', name: 'Canada' }, { flag: '🇳🇱', name: 'Netherlands' },
  ],
]

/* ─────────────────────────── skill ticker ──────────────────── */
function SkillTicker({ items, rtl = false }: { items: string[]; rtl?: boolean }) {
  const triple = [...items, ...items, ...items]
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0D1117, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0D1117, transparent)' }} />
      <motion.div
        className="flex gap-3 whitespace-nowrap w-max"
        animate={{ x: rtl ? ['-33.33%', '0%'] : ['0%', '-33.33%'] }}
        transition={{ duration: rtl ? 42 : 36, ease: 'linear', repeat: Infinity }}
      >
        {triple.map((s, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-[13px] font-mono shrink-0"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)' }}>
            <span className="w-1.5 h-1.5 rounded-full opacity-50" style={{ background: '#E8B554' }} />
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

/* ─────────────────────────── flag ticker ───────────────────── */
function FlagTicker({ row, rtl = false, speed = 22 }: { row: typeof countries[0]; rtl?: boolean; speed?: number }) {
  const triple = [...row, ...row, ...row]
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(13,17,23,1), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, rgba(13,17,23,1), transparent)' }} />
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: rtl ? ['-33.33%', '0%'] : ['0%', '-33.33%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {triple.map((c, i) => (
          <div key={i} className="flex items-center gap-2.5 px-4 py-2 rounded-xl shrink-0"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <span className="text-xl leading-none">{c.flag}</span>
            <span className="text-white/55 text-sm font-medium whitespace-nowrap">{c.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

/* ─────────────────────────── main component ────────────────── */
export default function Skills() {
  const [active, setActive] = useState('core')
  const current = categories.find(c => c.id === active)!
  const half = Math.ceil(allSkills.length / 2)

  return (
    <section id="skills" className="bg-[#0D1117] lg:pl-16 overflow-hidden">

      {/* ── Hero banner ── */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col gap-2 mb-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-6 h-px bg-[#E8B554]" />
            <span className="text-[#E8B554] text-xs font-mono tracking-[0.2em] uppercase">Technical Stack</span>
          </motion.div>
          <SplitText
            text="Skills & Expertise"
            tag="h2"
            className="font-display font-black text-white leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' } as React.CSSProperties}
            delay={0.05}
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/40 text-sm font-mono max-w-md"
        >
          {allSkills.length}+ technologies across {categories.length} domains — 4+ years of production experience
        </motion.p>
      </div>

      {/* ── Skill tickers ── */}
      <div className="space-y-3 mb-20">
        <SkillTicker items={allSkills.slice(0, half)} />
        <SkillTicker items={allSkills.slice(half)} rtl />
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
                  onClick={() => setActive(cat.id)}
                  className="group flex items-center gap-4 py-4 text-left transition-all duration-300 relative"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
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
                    style={{ color: isActive ? cat.accent : 'rgba(255,255,255,0.2)' }}
                  >
                    {cat.num}
                  </span>

                  <span
                    className="font-display font-semibold text-sm transition-all duration-300"
                    style={{
                      color: isActive ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.35)',
                      transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                    }}
                  >
                    {cat.title}
                  </span>

                  <span
                    className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full transition-all duration-300"
                    style={{
                      background: isActive ? `${cat.accent}18` : 'rgba(255,255,255,0.04)',
                      color: isActive ? cat.accent : 'rgba(255,255,255,0.2)',
                      border: isActive ? `1px solid ${cat.accent}30` : '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {cat.items.length}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right — skill display panel */}
          <div className="flex-1 min-h-[320px] relative">
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
                      className="font-display font-black text-white leading-tight"
                      style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
                    >
                      {current.title}
                    </h3>
                    <p className="text-white/35 font-mono text-xs mt-1">
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

      {/* ── Global Reach ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-2"
              >
                <div className="w-6 h-px bg-[#E8B554]" />
                <span className="text-[#E8B554] text-xs font-mono tracking-[0.2em] uppercase">Worldwide</span>
              </motion.div>
              <SplitText text="Global Reach" tag="h3"
                className="font-display font-black text-white"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' } as React.CSSProperties}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-right"
            >
              <div className="font-black font-display text-4xl" style={{ color: '#E8B554' }}>24+</div>
              <div className="text-white/30 text-xs font-mono">countries</div>
            </motion.div>
          </div>
        </div>

        <div className="space-y-3 pb-20">
          <FlagTicker row={countries[0]} speed={24} />
          <FlagTicker row={countries[1]} rtl speed={30} />
        </div>
      </div>
    </section>
  )
}
