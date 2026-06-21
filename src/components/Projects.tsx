'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Smartphone, Globe, Apple, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/lib/data'
import { SectionHeading } from '@/components/ui'

const filters = ['All', 'Delivery & Logistics', 'Fintech', 'AI', 'Health & Lifestyle', 'EdTech', 'Marketplace', 'Mobility Platform', 'B2B Marketplace']

const projectLogos: Record<string, string> = {
  'deonde':          '/projects/deonde-logo-hq.png',
  'chowman':         '/projects/chowman-logo-hq.png',
  'times-of-my-life':'/projects/times-logo-hq.png',
  'juiced-fuel':     '/projects/juiced-logo-hq.png',
  'oklends':         '/projects/oklends-logo.png',
}

function PlatformBadge({ platform }: { platform: string }) {
  const icons: Record<string, React.ReactNode> = {
    'Android': <Smartphone size={10} />,
    'iOS': <Apple size={10} />,
    'Web': <Globe size={10} />,
  }
  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-md font-mono"
      style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {icons[platform]}
      {platform}
    </span>
  )
}

function ProjectCard({ project, large = false }: { project: typeof projects[0]; large?: boolean }) {
  const logo = projectLogos[project.id]
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: large ? 1.01 : 1.02, y: -4 }}
      className="rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full group"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Preview banner */}
      <div
        className="relative h-36 flex items-center justify-center overflow-hidden shrink-0"
        style={{
          background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}08 60%, rgba(5,8,15,0.8) 100%)`,
          borderBottom: `1px solid ${project.color}18`,
        }}
      >
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(${project.color}40 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
        {logo ? (
          <img
            src={logo}
            alt={project.name}
            className="relative z-10 object-contain transition-transform duration-300 group-hover:scale-105"
            style={{ maxHeight: '72px', maxWidth: '160px', filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.5))' }}
          />
        ) : (
          <div
            className="relative z-10 font-display font-black text-4xl select-none"
            style={{
              color: project.color,
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.4))',
              opacity: 0.9,
            }}
          >
            {project.name.slice(0, 2).toUpperCase()}
          </div>
        )}
        {/* AI badge */}
        {project.isAI && (
          <div
            className="absolute top-3 right-3 text-[10px] font-mono px-2 py-1 rounded-full"
            style={{ background: 'rgba(236,72,153,0.2)', color: '#EC4899', border: '1px solid rgba(236,72,153,0.3)' }}
          >
            ✦ AI
          </div>
        )}
        {/* Live badge */}
        {project.link !== '#' && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-mono px-2 py-1 rounded-full"
            style={{ background: 'rgba(34,197,94,0.15)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.25)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            LIVE
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Tag + category */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full tracking-widest"
            style={{ background: `${project.color}18`, color: project.color, border: `1px solid ${project.color}30` }}
          >
            {project.tag}
          </span>
          <span className="text-[10px] text-white/25 font-mono">{project.category}</span>
        </div>

        {/* Name */}
        <h3 className={`font-display font-bold text-white mb-2 ${large ? 'text-xl' : 'text-base'}`}>
          {project.name}
        </h3>

      {/* Description */}
      <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2.5 py-1 rounded-lg font-mono"
            style={{ background: 'rgba(66,133,244,0.1)', color: 'rgba(66,133,244,0.8)', border: '1px solid rgba(66,133,244,0.2)' }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex gap-1.5">
          {project.platforms.map((p) => <PlatformBadge key={p} platform={p} />)}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          {/* Details → internal link (always shown) */}
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 hover:opacity-80"
            style={{
              color: 'rgba(255,255,255,0.55)',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            Details <ArrowRight size={11} />
          </Link>

          {/* Live → external link (only when a real URL exists) */}
          {project.link !== '#' && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
              style={{
                color: project.color,
                background: `${project.color}15`,
                border: `1px solid ${project.color}30`,
              }}
            >
              Live <ExternalLink size={11} />
            </motion.a>
          )}
        </div>
      </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const featuredProjects = projects.filter(p => p.isFeatured)
  const filtered = projects.filter(p => {
    if (activeFilter === 'All') return !p.isFeatured
    if (activeFilter === 'AI') return p.isAI && !p.isFeatured
    return p.category.toLowerCase().includes(activeFilter.toLowerCase()) && !p.isFeatured
  })

  return (
    <section id="projects" className="py-24 bg-[#05080F] lg:pl-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Portfolio"
          title="Live Projects"
          subtitle="24+ production applications shipped across SaaS, fintech, AI, delivery, health and travel — serving 7M+ users worldwide."
          className="mb-12"
        />

        {/* Featured row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E8B554] animate-pulse" />
            <span className="text-[#E8B554] text-xs font-mono tracking-widest uppercase">Featured</span>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} large />
            ))}
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200"
              style={{
                background: activeFilter === filter ? 'rgba(232,181,84,0.15)' : 'rgba(255,255,255,0.04)',
                color: activeFilter === filter ? '#E8B554' : 'rgba(255,255,255,0.5)',
                border: activeFilter === filter ? '1px solid rgba(232,181,84,0.3)' : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-white/30 font-mono"
          >
            No projects in this category yet.
          </motion.div>
        )}
      </div>
    </section>
  )
}
