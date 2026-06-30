'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { SplitText } from '@/components/ui/SplitText'

// ─── Shared animation variants ───────────────────────────────────────────────

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0, 0, 1] } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const stagger = (delay = 0.08) => ({
  visible: { transition: { staggerChildren: delay } },
})

export const springScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
}

// ─── Design tokens ────────────────────────────────────────────────────────────

export const GOLD = '#6366F1'
export const BLUE = '#06B6D4'
export const BG_DARK = '#050714'
export const BG_DARKER = '#09091F'

// ─── Section wrapper ──────────────────────────────────────────────────────────

interface SectionProps {
  id: string
  className?: string
  children: ReactNode
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      {children}
    </section>
  )
}

// ─── Section heading ──────────────────────────────────────────────────────────

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ label, title, subtitle, className = 'mb-10' }: SectionHeadingProps) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-0.5"
        style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #818CF8, #22D3EE)' }} />
        <span className="text-[#818CF8] text-[10px] font-mono tracking-[0.25em] uppercase">{label}</span>
      </motion.div>
      <SplitText
        text={title}
        tag="h2"
        className="heading-gradient font-display font-black leading-none tracking-tight mb-1"
        style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)' }}
        delay={0.05}
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/40 mt-1 max-w-2xl text-[15px] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

// ─── Glass card ───────────────────────────────────────────────────────────────

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  style?: React.CSSProperties
}

export function GlassCard({ children, className = '', hover = true, style }: GlassCardProps) {
  return (
    <div
      className={`
        glass rounded-2xl transition-all duration-300
        ${hover ? 'hover:scale-[1.02] hover:-translate-y-1' : ''}
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  )
}

// ─── Tag / Badge ──────────────────────────────────────────────────────────────

type TagVariant = 'blue' | 'gold' | 'purple' | 'green' | 'red' | 'mono'

const TAG_STYLES: Record<TagVariant, string> = {
  blue:   'bg-cyan-500/10 border-cyan-500/20 text-cyan-600',
  gold:   'bg-indigo-500/10 border-indigo-500/20 text-indigo-600',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-600',
  green:  'bg-emerald-500/10 border-emerald-500/20 text-emerald-600',
  red:    'bg-rose-500/10 border-rose-500/20 text-rose-600',
  mono:   'bg-white/5 border-white/10 text-white/50',
}

interface TagProps {
  children: ReactNode
  variant?: TagVariant
  className?: string
}

export function Tag({ children, variant = 'blue', className = '' }: TagProps) {
  return (
    <span className={`
      inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono
      border ${TAG_STYLES[variant]} ${className}
    `}>
      {children}
    </span>
  )
}

// ─── Button ───────────────────────────────────────────────────────────────────

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-150 cursor-pointer'
  const variants: Record<ButtonVariant, string> = {
    primary:   'bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.35)]',
    secondary: 'border border-[#6366F1]/40 text-[#6366F1] hover:bg-[#6366F1]/10 backdrop-blur-sm',
    ghost:     'text-[#6B7280] hover:text-[#374151] hover:bg-black/5',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
