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

export const GOLD = '#E8B554'
export const BLUE = '#4285F4'
export const BG_DARK = '#05080F'
export const BG_DARKER = '#0D1117'

// ─── Section wrapper ──────────────────────────────────────────────────────────

interface SectionProps {
  id: string
  className?: string
  children: ReactNode
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`py-24 lg:pl-16 ${className}`}>
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

export function SectionHeading({ label, title, subtitle, className = 'mb-16' }: SectionHeadingProps) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-3"
      >
        <div className="h-px w-6 bg-[#E8B554]" />
        <span className="text-[#E8B554] text-xs font-mono tracking-[0.2em] uppercase">{label}</span>
      </motion.div>
      <SplitText
        text={title}
        tag="h2"
        className="font-display font-black text-white leading-[0.95] tracking-tight"
        style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}
        delay={0.05}
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/45 mt-4 max-w-2xl text-[15px] leading-relaxed"
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
  blue:   'bg-blue-500/10 border-blue-500/20 text-blue-400',
  gold:   'bg-[#E8B554]/10 border-[#E8B554]/20 text-[#E8B554]',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  green:  'bg-green-500/10 border-green-500/20 text-green-400',
  red:    'bg-red-500/10 border-red-500/20 text-red-400',
  mono:   'bg-white/5 border-white/10 text-gray-300',
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
    primary:   'bg-gradient-to-r from-[#E8B554] to-[#F5A623] text-[#05080F] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(232,181,84,0.3)]',
    secondary: 'border border-[#E8B554]/50 text-[#E8B554] hover:bg-[#E8B554]/10 backdrop-blur-sm',
    ghost:     'text-gray-400 hover:text-white hover:bg-white/5',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
