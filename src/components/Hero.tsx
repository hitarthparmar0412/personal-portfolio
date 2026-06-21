'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Linkedin, Instagram, MessageCircle, ChevronDown, Download, ArrowRight, Sparkles } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const TYPED_ITEMS = ['Senior Software Engineer', 'Flutter Expert', 'AI App Builder', 'Mobile Architect', 'Full-Stack Developer']

function useTyped(items: string[]) {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [char, setChar] = useState(0)
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const cur = items[idx]
    const t = setTimeout(() => {
      if (!deleting) {
        if (char < cur.length) { setText(cur.slice(0, char + 1)); setChar(c => c + 1) }
        else setTimeout(() => setDeleting(true), 2000)
      } else {
        if (char > 0) { setText(cur.slice(0, char - 1)); setChar(c => c - 1) }
        else { setDeleting(false); setIdx(i => (i + 1) % items.length) }
      }
    }, deleting ? 45 : 85)
    return () => clearTimeout(t)
  }, [char, deleting, idx, items])
  return text
}

export default function Hero() {
  const typed = useTyped(TYPED_ITEMS)
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
      className="relative min-h-screen flex items-center overflow-hidden lg:pl-16"
      style={{ background: '#05080F' }}
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
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        {/* Ambient orbs — parallax */}
        <motion.div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.18]"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            x: orb1X, y: orb1Y,
            background: 'radial-gradient(circle at 40% 40%, #4285F4 0%, #8B5CF6 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full opacity-[0.14]"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            x: orb2X, y: orb2Y,
            background: 'radial-gradient(circle at 60% 60%, #E8B554 0%, #F97316 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* SVG illustration — floating code brackets (decorative) */}
        <motion.svg
          className="absolute top-1/4 left-8 opacity-[0.06] pointer-events-none hidden xl:block"
          width="220" height="280" viewBox="0 0 220 280" fill="none"
          animate={{ y: [0, -16, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M70 20 L20 80 L70 140" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M150 20 L200 80 L150 140" stroke="#E8B554" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="110" cy="80" r="6" fill="#8B5CF6" />
          <path d="M40 180 L80 160 L120 190 L160 160 L200 175" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
          <path d="M40 210 L90 195 L130 215 L180 200" stroke="#E8B554" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
          <rect x="40" y="235" width="140" height="3" rx="1.5" fill="#8B5CF6" opacity="0.3"/>
          <rect x="40" y="245" width="100" height="3" rx="1.5" fill="#4285F4" opacity="0.2"/>
          <rect x="40" y="255" width="120" height="3" rx="1.5" fill="#E8B554" opacity="0.2"/>
        </motion.svg>

        {/* SVG illustration — phone + dots (decorative bottom right) */}
        <motion.svg
          className="absolute bottom-20 right-8 opacity-[0.07] pointer-events-none hidden xl:block"
          width="160" height="200" viewBox="0 0 160 200" fill="none"
          animate={{ y: [0, 12, 0], rotate: [0, -1.5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          <rect x="30" y="10" width="100" height="180" rx="20" stroke="#E8B554" strokeWidth="2"/>
          <rect x="30" y="10" width="100" height="180" rx="20" fill="#E8B554" fillOpacity="0.03"/>
          <rect x="50" y="38" width="60" height="8" rx="4" fill="#4285F4" opacity="0.5"/>
          <rect x="50" y="55" width="60" height="42" rx="8" fill="#4285F4" opacity="0.12"/>
          <rect x="50" y="108" width="28" height="6" rx="3" fill="#E8B554" opacity="0.4"/>
          <rect x="50" y="122" width="60" height="4" rx="2" fill="white" opacity="0.1"/>
          <rect x="50" y="132" width="45" height="4" rx="2" fill="white" opacity="0.1"/>
          <circle cx="80" cy="176" r="8" stroke="#E8B554" strokeWidth="1.5" opacity="0.5"/>
        </motion.svg>
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 min-h-screen">

        {/* LEFT */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 select-none"
            style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.22)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-green-400 text-xs font-mono tracking-widest">AVAILABLE FOR PROJECTS</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 48, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-4"
          >
            <h1
              className="font-display font-black leading-[0.88] tracking-tighter select-none"
              style={{ fontSize: 'clamp(3.2rem, 8vw, 7.5rem)' }}
            >
              <span style={{
                background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.75) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                HITARTH
              </span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #E8B554 0%, #F5C842 40%, #4285F4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                PARMAR
              </span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-5"
          >
            <Sparkles size={14} style={{ color: '#E8B554' }} />
            <span className="font-mono text-base md:text-lg font-medium" style={{ color: '#E8B554' }}>
              {typed}
              <span className="inline-block w-0.5 h-4 ml-0.5 bg-[#E8B554] align-middle animate-pulse" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/45 text-sm md:text-base max-w-md leading-relaxed mb-10 font-sans"
          >
            Building production-grade Flutter apps used by <span className="text-white/70 font-medium">7M+ users</span> across 24+ countries. I turn complex ideas into elegant, high-performance mobile experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(232,181,84,0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-[#05080F] font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #E8B554 0%, #F5C842 100%)', boxShadow: '0 8px 28px rgba(232,181,84,0.28)' }}
            >
              View My Work
              <ArrowRight size={15} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.97 }}
              href="/HitarthParmar_CV.pdf"
              download
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold text-sm transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <Download size={15} />
              Download CV
            </motion.a>
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
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
                title={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
            <div className="w-px h-5 bg-white/10 mx-1" />
            <span className="text-white/30 text-xs font-mono">Ahmedabad, IN</span>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6"
          >
            {[
              { n: '4+',  l: 'Years', color: '#E8B554' },
              { n: '24+', l: 'Apps',  color: '#4285F4' },
              { n: '7M+', l: 'Users', color: '#8B5CF6' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-black font-display" style={{ color: s.color }}>{s.n}</div>
                <div className="text-[10px] text-white/35 font-mono uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
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
            {/* Outer glow ring — animated */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-[3px] rounded-[2.5rem]"
              style={{
                background: 'conic-gradient(from 0deg, #E8B554, #4285F4, #8B5CF6, #E8B554)',
                borderRadius: '2.5rem',
                filter: 'blur(2px)',
                opacity: 0.7,
              }}
            />
            {/* Static backing */}
            <div className="absolute -inset-[3px] rounded-[2.5rem]"
              style={{ background: '#05080F', borderRadius: '2.5rem' }} />

            {/* Photo frame */}
            <div className="relative overflow-hidden"
              style={{ width: '360px', height: '460px', borderRadius: '2.2rem', boxShadow: '0 48px 120px rgba(0,0,0,0.7)' }}
            >
              <img
                src="/images/profile.jpg"
                alt="Hitarth Parmar — Senior Software Engineer"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32"
                style={{ background: 'linear-gradient(to top, rgba(5,8,15,0.85) 0%, transparent 100%)' }} />
              {/* Name overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-white font-display font-bold text-lg leading-tight">Hitarth Parmar</div>
                <div className="text-white/50 font-mono text-xs">Senior Software Engineer</div>
              </div>
            </div>

            {/* Floating card — top left */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -left-10 rounded-2xl px-4 py-3 backdrop-blur-xl"
              style={{ background: 'rgba(13,17,23,0.85)', border: '1px solid rgba(232,181,84,0.3)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              <div className="text-[#E8B554] font-black font-display text-xl leading-none">4+</div>
              <div className="text-white/55 text-[11px] font-mono mt-0.5">Years Exp</div>
            </motion.div>

            {/* Floating card — top right */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-5 -right-10 rounded-2xl px-4 py-3 backdrop-blur-xl"
              style={{ background: 'rgba(13,17,23,0.85)', border: '1px solid rgba(66,133,244,0.3)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              <div className="text-[#4285F4] font-black font-display text-xl leading-none">24+</div>
              <div className="text-white/55 text-[11px] font-mono mt-0.5">Live Apps</div>
            </motion.div>

            {/* Floating card — bottom right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-5 -right-8 rounded-2xl px-4 py-3 backdrop-blur-xl"
              style={{ background: 'rgba(13,17,23,0.85)', border: '1px solid rgba(139,92,246,0.3)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-purple-300 text-[11px] font-mono">7M+ Users</span>
              </div>
            </motion.div>

            {/* HP monogram watermark behind */}
            <div
              className="absolute -z-10 -bottom-8 -right-8 font-display font-black select-none pointer-events-none"
              style={{ fontSize: '140px', color: 'rgba(255,255,255,0.02)', lineHeight: 1, letterSpacing: '-0.05em' }}
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
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 hover:text-white/55 transition-colors duration-300 z-20"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}
