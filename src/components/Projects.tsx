'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Smartphone, Globe, Apple, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/lib/data'
import { SectionHeading } from '@/components/ui'

const filters = ['All', 'AI', 'Fintech', 'Delivery', 'Marketplace']

const projectLogos: Record<string, string> = {
  'deonde':          '/projects/deonde-logo.svg',
  'chowman':         '/projects/chowman-logo-hq.png',
  'times-of-my-life':'/projects/times-logo-navbar.png',
  'juiced-fuel':     '/projects/juiced-logo-hq.webp',
  'oklends':         '/projects/oklends-icon.png',
  'astrolearn':      '/projects/astrolearn-logo.png',
  'zebrapad':        '/projects/zebrapad-logo.png',
  'busineswise':     '/projects/busineswise-logo.png',
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
      style={{ background: 'var(--badge-bg)', color: 'var(--badge-text)', border: '1px solid var(--badge-border)' }}
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
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        boxShadow: 'var(--card-shadow)',
      }}
    >
      {/* Preview banner */}
      <div
        className="relative h-36 flex items-center justify-center overflow-hidden shrink-0"
        style={{
          background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}08 60%, rgba(5,7,20,0.7) 100%)`,
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
            style={{ maxHeight: '72px', maxWidth: '160px', filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.2))' }}
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
            style={{ background: 'rgba(244,114,182,0.2)', color: '#F472B6', border: '1px solid rgba(244,114,182,0.3)' }}
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
          <span className="text-[10px] font-mono" style={{ color: 'var(--text-subtle)' }}>{project.category}</span>
        </div>

        {/* Name */}
        <h3 className={`font-display font-bold mb-2 ${large ? 'text-xl' : 'text-base'}`} style={{ color: 'var(--text-heading)' }}>
          {project.name}
        </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-muted)' }}>
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2.5 py-1 rounded-lg font-mono"
            style={{ background: 'rgba(34,211,238,0.08)', color: '#22D3EE', border: '1px solid rgba(34,211,238,0.2)' }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--divider)' }}>
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
              color: 'var(--badge-text)',
              background: 'var(--badge-bg)',
              border: '1px solid var(--badge-border)',
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
  const filtered = activeFilter === 'All'
    ? projects.filter(p => !p.isFeatured)
    : projects.filter(p => {
        if (activeFilter === 'AI') return p.isAI
        return p.category.toLowerCase().includes(activeFilter.toLowerCase())
      })

  return (
    <section id="projects" className="py-24 bg-[#FAFBFF] dark:bg-[#020409]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Portfolio"
          title="Live Projects"
          subtitle="24+ production applications shipped across SaaS, fintech, AI, delivery, health and travel — serving 7M+ users worldwide."
          className="mb-12"
        />

        {/* Featured row — only show on 'All' filter */}
        {activeFilter === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#818CF8] animate-pulse" />
              <span className="text-[#818CF8] text-xs font-mono tracking-widest uppercase">Featured</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} large />
              ))}
            </div>
          </motion.div>
        )}

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
                background: activeFilter === filter ? 'rgba(99,102,241,0.15)' : 'var(--badge-bg)',
                color: activeFilter === filter ? '#818CF8' : 'var(--badge-text)',
                border: activeFilter === filter ? '1px solid rgba(99,102,241,0.3)' : '1px solid var(--badge-border)',
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
            className="text-center py-16 font-mono"
          style={{ color: 'var(--text-subtle)' }}
          >
            No projects in this category yet.
          </motion.div>
        )}
      </div>
    </section>
  )
}
