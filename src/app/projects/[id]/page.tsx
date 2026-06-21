import { projects, projectDetails } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Smartphone, Globe, Apple, CheckCircle2, Zap, AlertTriangle, Trophy } from 'lucide-react'
import type { Metadata } from 'next'

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export function generateMetadata({
  params,
}: {
  params: { id: string }
}): Metadata {
  const project = projects.find((p) => p.id === params.id)
  if (!project) return {}
  return {
    title: `${project.name} — Hitarth Parmar`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Hitarth Parmar`,
      description: project.description,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${project.name} — Hitarth Parmar`,
      description: project.description,
    },
  }
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function PlatformBadge({ platform }: { platform: string }) {
  const icons: Record<string, React.ReactNode> = {
    Android: <Smartphone size={12} />,
    iOS: <Apple size={12} />,
    Web: <Globe size={12} />,
  }
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-mono font-medium"
      style={{
        background: 'rgba(255,255,255,0.07)',
        color: 'rgba(255,255,255,0.65)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {icons[platform]}
      {platform}
    </span>
  )
}

function TechPill({ label }: { label: string }) {
  return (
    <span
      className="text-[12px] px-3 py-1.5 rounded-lg font-mono font-medium"
      style={{
        background: 'rgba(66,133,244,0.1)',
        color: 'rgba(66,133,244,0.85)',
        border: '1px solid rgba(66,133,244,0.22)',
      }}
    >
      {label}
    </span>
  )
}

function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-6">
      <span className="text-[#E8B554]">{icon}</span>
      <span className="text-[#E8B554] text-xs font-mono tracking-widest uppercase font-semibold">
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: 'rgba(232,181,84,0.15)' }} />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)
  if (!project) notFound()

  const detail = projectDetails[project.id]

  return (
    <main className="min-h-screen bg-[#05080F]">
      {/* ------------------------------------------------------------------ */}
      {/* Hero */}
      {/* ------------------------------------------------------------------ */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}14 0%, #05080F 55%, #05080F 100%)`,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Radial glow behind the title */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)`,
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 pt-10 pb-16">
          {/* Back navigation */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-white/40 hover:text-[#E8B554] transition-colors duration-200 mb-10 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
            />
            Back to projects
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {/* Category tag */}
            <span
              className="text-[10px] font-mono font-semibold px-3 py-1.5 rounded-full tracking-widest"
              style={{
                background: `${project.color}1A`,
                color: project.color,
                border: `1px solid ${project.color}35`,
              }}
            >
              {project.isAI ? '✦ ' : ''}
              {project.tag}
            </span>

            {/* AI badge */}
            {project.isAI && (
              <span
                className="text-[10px] font-mono font-semibold px-3 py-1.5 rounded-full tracking-widest"
                style={{
                  background: 'rgba(139,92,246,0.15)',
                  color: '#A78BFA',
                  border: '1px solid rgba(139,92,246,0.3)',
                }}
              >
                ✦ AI-Powered
              </span>
            )}

            {/* Platforms */}
            {project.platforms.map((p) => (
              <PlatformBadge key={p} platform={p} />
            ))}

            {/* Year */}
            {detail && (
              <span className="text-[11px] font-mono text-white/30 ml-auto">
                {detail.year}
              </span>
            )}
          </div>

          {/* Project name */}
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
            {project.name}
          </h1>

          {/* Category */}
          <p className="text-[#E8B554] font-mono text-sm tracking-wider mb-6">
            {project.category}
            {detail && ` · ${detail.role}`}
          </p>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #E8B554 0%, #F5A623 100%)',
                  color: '#05080F',
                  boxShadow: '0 0 24px rgba(232,181,84,0.25)',
                }}
              >
                View Live App
                <ExternalLink size={14} />
              </a>
            )}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <ArrowLeft size={14} />
              All Projects
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Body */}
      {/* ------------------------------------------------------------------ */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Tech stack */}
        <section>
          <SectionLabel icon={<Zap size={14} />} label="Tech Stack" />
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
        </section>

        {/* Features */}
        {detail && (
          <section>
            <SectionLabel icon={<CheckCircle2 size={14} />} label="Key Features" />
            <div className="grid sm:grid-cols-2 gap-4">
              {detail.features.map((feature, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-4 flex gap-3 items-start group transition-all duration-300"
                >
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold"
                    style={{
                      background: `${project.color}20`,
                      color: project.color,
                      border: `1px solid ${project.color}35`,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white/65 text-sm leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Challenges */}
        {detail && detail.challenges.length > 0 && (
          <section>
            <SectionLabel icon={<AlertTriangle size={14} />} label="Engineering Challenges" />
            <div className="space-y-4">
              {detail.challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-5 flex gap-4 items-start"
                  style={{ borderLeft: `3px solid ${project.color}60` }}
                >
                  <span
                    className="flex-shrink-0 font-display font-bold text-2xl leading-none"
                    style={{ color: `${project.color}40` }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white/60 text-[15px] leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Outcome */}
        {detail && (
          <section>
            <SectionLabel icon={<Trophy size={14} />} label="Outcome" />
            <div
              className="glass rounded-2xl p-7"
              style={{
                background: `linear-gradient(135deg, ${project.color}0C 0%, rgba(255,255,255,0.03) 100%)`,
                borderColor: `${project.color}25`,
              }}
            >
              <p className="text-white/75 text-[16px] leading-relaxed">{detail.outcome}</p>
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl p-7"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div>
            <p className="text-white font-display font-semibold text-lg mb-1">
              Interested in working together?
            </p>
            <p className="text-white/40 text-sm font-mono">
              I&apos;m open to new projects — let&apos;s build something great.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #E8B554 0%, #F5A623 100%)',
                  color: '#05080F',
                }}
              >
                Live App <ExternalLink size={12} />
              </a>
            )}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: 'rgba(232,181,84,0.08)',
                color: '#E8B554',
                border: '1px solid rgba(232,181,84,0.2)',
              }}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
