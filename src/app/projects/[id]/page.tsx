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
  const detail = projectDetails[project.id]
  const description = `${project.description} Built by Hitarth Parmar — Senior Flutter Developer, Ahmedabad.`
  const url = `https://hitarthparmar.dev/projects/${project.id}`
  return {
    title: `${project.name} — Hitarth Parmar | Flutter Developer`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.name} — Hitarth Parmar`,
      description,
      type: 'website',
      url,
      siteName: 'Hitarth Parmar Portfolio',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} — Hitarth Parmar`,
      description,
      images: ['/og-image.jpg'],
    },
    keywords: [project.name, ...project.tech, 'Flutter', 'Hitarth Parmar', project.category],
    authors: [{ name: 'Hitarth Parmar' }],
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
        background: 'var(--badge-bg)',
        color: 'var(--badge-text)',
        border: '1px solid var(--badge-border)',
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
        background: 'rgba(6,182,212,0.08)',
        color: '#0891B2',
        border: '1px solid rgba(6,182,212,0.18)',
      }}
    >
      {label}
    </span>
  )
}

function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-6">
      <span className="text-[#6366F1]">{icon}</span>
      <span className="text-[#6366F1] text-xs font-mono tracking-widest uppercase font-semibold">
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: 'rgba(99,102,241,0.15)' }} />
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

  const operatingSystem = project.platforms
    .map((p) => (p === 'iOS' ? 'iOS' : p === 'Android' ? 'Android' : 'Web'))
    .join(', ')

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    applicationCategory: 'MobileApplication',
    operatingSystem,
    author: {
      '@type': 'Person',
      name: 'Hitarth Parmar',
      url: 'https://hitarthparmar.dev',
    },
    ...(project.link !== '#' ? { url: project.link } : {}),
    ...(detail ? { datePublished: detail.year.split('–')[0].trim() } : {}),
  }

  return (
    <main className="min-h-screen bg-[#050714] dark:bg-[#020409]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      {/* ------------------------------------------------------------------ */}
      {/* Hero */}
      {/* ------------------------------------------------------------------ */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}10 0%, var(--bg-base) 55%, var(--bg-base) 100%)`,
          borderBottom: '1px solid var(--divider)',
        }}
      >
        {/* Radial glow behind the title */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{
            background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)`,
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 pt-10 pb-16">
          {/* Back navigation */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#9CA3AF] dark:text-white/25 hover:text-[#6366F1] transition-colors duration-200 mb-10 group"
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
              <span className="text-[11px] font-mono text-[#9CA3AF] dark:text-white/25 ml-auto">
                {detail.year}
              </span>
            )}
          </div>

          {/* Project name */}
          <h1 className="font-display font-bold text-[#0A0B14] dark:text-[#F8FAFF] text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
            {project.name}
          </h1>

          {/* Category */}
          <p className="text-[#6366F1] font-mono text-sm tracking-wider mb-6">
            {project.category}
            {detail && ` · ${detail.role}`}
          </p>

          {/* Description */}
          <p className="text-[#374151] dark:text-white/75 text-[16px] leading-relaxed max-w-2xl">
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
                  background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                  color: '#ffffff',
                  boxShadow: '0 0 24px rgba(99,102,241,0.25)',
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
                background: 'var(--badge-bg)',
                color: 'var(--badge-text)',
                border: '1px solid var(--badge-border)',
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
                  className="rounded-xl p-4 flex gap-3 items-start group transition-all duration-300"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    boxShadow: 'var(--card-shadow)',
                  }}
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
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>{feature}</p>
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
                  className="rounded-xl p-5 flex gap-4 items-start"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    borderLeft: `3px solid ${project.color}50`,
                    boxShadow: 'var(--card-shadow)',
                  }}
                >
                  <span
                    className="flex-shrink-0 font-display font-bold text-2xl leading-none"
                    style={{ color: `${project.color}50` }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-body)' }}>{challenge}</p>
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
              className="rounded-2xl p-7"
              style={{
                background: `linear-gradient(135deg, ${project.color}06 0%, var(--card-bg) 100%)`,
                border: `1px solid ${project.color}20`,
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <p className="text-[16px] leading-relaxed" style={{ color: 'var(--text-body)' }}>{detail.outcome}</p>
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl p-7"
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          <div>
            <p className="font-display font-semibold text-lg mb-1" style={{ color: 'var(--text-heading)' }}>
              Interested in working together?
            </p>
            <p className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
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
                  background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                  color: '#ffffff',
                }}
              >
                Live App <ExternalLink size={12} />
              </a>
            )}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: 'rgba(99,102,241,0.08)',
                color: '#6366F1',
                border: '1px solid rgba(99,102,241,0.2)',
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
