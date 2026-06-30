'use client'

import Image from 'next/image'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Linkedin, Instagram, MessageCircle, ChevronDown, ArrowRight } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { useTheme } from './ThemeProvider'

export default function Hero() {
  const { theme } = useTheme()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const orb1X = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), { stiffness: 50, damping: 20 })
  const orb1Y = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), { stiffness: 50, damping: 20 })
  const orb2X = useSpring(useTransform(mouseX, [0, 1], [30, -30]), { stiffness: 40, damping: 25 })
  const orb2Y = useSpring(useTransform(mouseY, [0, 1], [20, -20]), { stiffness: 40, damping: 25 })

  const handleMouse = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth)
    mouseY.set(e.clientY / window.innerHeight)
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouse}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* === BACKGROUND LAYER === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Noise grain */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px',
          }}
        />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.05) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        {/* Ambient orbs — parallax only, no breathing animation */}
        <motion.div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            x: orb1X, y: orb1Y,
            background: 'radial-gradient(circle at 40% 40%, #6366F1 0%, #A855F7 40%, transparent 70%)',
            filter: 'blur(60px)',
            opacity: 'var(--orb-opacity)' as unknown as number,
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full"
          style={{
            x: orb2X, y: orb2Y,
            background: 'radial-gradient(circle at 60% 60%, #06B6D4 0%, #22D3EE 40%, transparent 70%)',
            filter: 'blur(60px)',
            opacity: 'var(--orb-opacity)' as unknown as number,
          }}
        />
        {/* SVG illustration — floating code brackets (decorative) */}
        <motion.svg
          className="absolute top-1/4 left-8 opacity-[0.06] pointer-events-none hidden xl:block"
          width="220" height="280" viewBox="0 0 220 280" fill="none"
          animate={{ y: [0, -16, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M70 20 L20 80 L70 140" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M150 20 L200 80 L150 140" stroke="#818CF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="110" cy="80" r="6" fill="#A855F7" />
          <path d="M40 180 L80 160 L120 190 L160 160 L200 175" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
          <path d="M40 210 L90 195 L130 215 L180 200" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
          <rect x="40" y="235" width="140" height="3" rx="1.5" fill="#A855F7" opacity="0.3"/>
          <rect x="40" y="245" width="100" height="3" rx="1.5" fill="#6366F1" opacity="0.2"/>
          <rect x="40" y="255" width="120" height="3" rx="1.5" fill="#818CF8" opacity="0.2"/>
        </motion.svg>

        {/* SVG illustration — phone + dots (decorative bottom right) */}
        <motion.svg
          className="absolute bottom-20 right-8 opacity-[0.07] pointer-events-none hidden xl:block"
          width="160" height="200" viewBox="0 0 160 200" fill="none"
          animate={{ y: [0, 12, 0], rotate: [0, -1.5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          <rect x="30" y="10" width="100" height="180" rx="20" stroke="#6366F1" strokeWidth="2"/>
          <rect x="30" y="10" width="100" height="180" rx="20" fill="#6366F1" fillOpacity="0.03"/>
          <rect x="50" y="38" width="60" height="8" rx="4" fill="#22D3EE" opacity="0.5"/>
          <rect x="50" y="55" width="60" height="42" rx="8" fill="#22D3EE" opacity="0.12"/>
          <rect x="50" y="108" width="28" height="6" rx="3" fill="#818CF8" opacity="0.4"/>
          <rect x="50" y="122" width="60" height="4" rx="2" fill="white" opacity="0.1"/>
          <rect x="50" y="132" width="45" height="4" rx="2" fill="white" opacity="0.1"/>
          <circle cx="80" cy="176" r="8" stroke="#6366F1" strokeWidth="1.5" opacity="0.5"/>
        </motion.svg>
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 min-h-screen">

        {/* LEFT */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Mobile hero photo — larger portrait card */}
          <div className="flex lg:hidden justify-center mb-8">
            <div className="relative overflow-hidden rounded-3xl"
              style={{ width: '200px', height: '250px', border: '1px solid rgba(99,102,241,0.25)', boxShadow: '0 24px 60px rgba(0,0,0,0.15)' }}
            >
              <Image src="/images/profile.jpg" alt="Hitarth Parmar" fill className="object-cover object-top" priority />
              <div className="absolute bottom-0 left-0 right-0 h-16"
                style={{ background: 'var(--overlay)' }} />
              <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-wider"
                style={{ color: 'var(--text-muted)' }}>
                Senior Flutter Engineer
              </div>
            </div>
          </div>

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 select-none"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-green-400 text-xs font-mono tracking-widest">AVAILABLE FOR PROJECTS</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-4"
          >
            <h1
              className="font-display font-black leading-[0.88] tracking-tighter select-none"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 7rem)' }}
            >
              <span style={theme === 'dark'
                ? { background: 'linear-gradient(135deg, #818CF8 0%, #C4B5FD 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }
                : { background: 'linear-gradient(135deg, #0A0B14 0%, #374151 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }
              }>
                The engineer
              </span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                behind 7M users.
              </span>
            </h1>
          </motion.div>

          {/* Static subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-mono text-sm tracking-[0.15em] mb-5 text-center lg:text-left"
            style={{ color: 'rgba(99,102,241,0.75)' }}
          >
            Flutter · AI · Mobile · Web
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[#374151] dark:text-white/75 text-sm md:text-base max-w-md leading-relaxed mb-10 font-sans"
          >
            I&apos;ve shipped ride apps, payment platforms, and AI products used by <span className="text-white font-semibold">7M+ people</span> in 24 countries. I build what works — on time, at scale, without drama.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)', boxShadow: '0 8px 32px rgba(99,102,241,0.35)' }}
            >
              Let&apos;s Talk <ArrowRight size={14} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{ background: 'var(--badge-bg)', border: '1px solid var(--border-default)', color: 'var(--text-body)' }}
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-12"
          >
            {[
              { href: personalInfo.linkedin,  icon: <Linkedin size={17} />,      label: 'LinkedIn',  color: '#4285F4' },
              { href: personalInfo.instagram, icon: <Instagram size={17} />,     label: 'Instagram', color: '#EC4899' },
              { href: personalInfo.whatsapp,  icon: <MessageCircle size={17} />, label: 'WhatsApp',  color: '#22C55E' },
            ].map((s) => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2, background: `${s.color}18`, borderColor: `${s.color}50` }}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{ background: 'var(--badge-bg)', border: '1px solid var(--border-default)', color: 'var(--text-muted)' }}
                title={s.label}
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
            <div className="w-px h-5 mx-1" style={{ background: 'var(--divider)' }} />
            <span className="text-[#9CA3AF] dark:text-white/25 text-xs font-mono">Ahmedabad, IN</span>
          </motion.div>
        </div>

        {/* RIGHT — Photo */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          className="hidden lg:flex items-center justify-center shrink-0 lg:w-[480px]"
        >
          <div className="relative">
            {/* Static gradient border (no spin) */}
            <div
              className="absolute -inset-[3px] rounded-[2.5rem]"
              style={{
                background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #22D3EE 100%)',
                borderRadius: '2.5rem',
                opacity: 0.6,
              }}
            />
            {/* Static backing */}
            <div className="absolute -inset-[3px] rounded-[2.5rem]"
              style={{ background: 'var(--bg-base)', borderRadius: '2.5rem' }} />

            {/* Photo frame */}
            <div className="relative overflow-hidden"
              style={{ width: '360px', height: '460px', borderRadius: '2.2rem', boxShadow: '0 48px 120px rgba(0,0,0,0.7)' }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Hitarth Parmar — Senior Software Engineer"
                width={360}
                height={460}
                priority
                className="object-cover object-top w-full h-full"
                style={{ borderRadius: '2.2rem' }}
              />
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32"
                style={{ background: 'var(--overlay)' }} />
              {/* Name overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="font-display font-bold text-lg leading-tight" style={{ color: 'var(--text-heading)' }}>Hitarth Parmar</div>
                <div className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>Senior Software Engineer</div>
              </div>
            </div>

            {/* HP monogram watermark behind */}
            <div
              className="absolute -z-10 -bottom-8 -right-8 font-display font-black select-none pointer-events-none"
              style={{ fontSize: '140px', color: 'var(--border-subtle)', lineHeight: 1, letterSpacing: '-0.05em' }}
            >
              HP
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors duration-300 z-20"
        style={{ color: 'var(--text-subtle)' }}
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
