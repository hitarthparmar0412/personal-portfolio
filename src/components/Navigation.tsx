'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { id: 'hero', label: 'Home', icon: '⌂' },
  { id: 'about', label: 'About', icon: '◉' },
  { id: 'skills', label: 'Skills', icon: '◈' },
  { id: 'projects', label: 'Projects', icon: '◧' },
  { id: 'experience', label: 'Experience', icon: '◆' },
  { id: 'services', label: 'Services', icon: '◉' },
  { id: 'education', label: 'Education', icon: '◈' },
  { id: 'awards', label: 'Awards', icon: '★' },
  { id: 'contact', label: 'Contact', icon: '◎' },
]

export default function Navigation() {
  const [active, setActive] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => document.getElementById(l.id))
      const scrollPos = window.scrollY + window.innerHeight / 3
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActive(navLinks[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <>
      {/* Desktop sidebar */}
      <motion.nav
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed left-0 top-0 h-full w-16 z-50 hidden lg:flex flex-col items-center justify-center py-8 gap-1"
        style={{ background: 'rgba(5,7,20,0.85)', backdropFilter: 'blur(20px)', borderRight: '1px solid rgba(99,102,241,0.1)' }}
      >
        {/* Logo mark */}
        <div className="absolute top-6 left-0 w-full flex justify-center">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm font-mono"
            style={{ background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)' }}>
            HP
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-1 mt-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              title={link.label}
              className="relative group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{
                background: active === link.id ? 'rgba(99,102,241,0.15)' : 'transparent',
                border: active === link.id ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
              }}
            >
              <span
                className="text-sm transition-colors duration-300"
                style={{ color: active === link.id ? '#6366F1' : 'rgba(255,255,255,0.4)' }}
              >
                {link.icon}
              </span>
              {/* Tooltip */}
              <span className="absolute left-14 bg-[#09091F] text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
                style={{ border: '1px solid rgba(99,102,241,0.2)', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                {link.label}
              </span>
              {active === link.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute right-0 w-0.5 h-5 rounded-full"
                  style={{ background: '#6366F1' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Bottom dot */}
        <div className="absolute bottom-6 w-2 h-2 rounded-full animate-pulse-glow" style={{ background: '#22C55E' }} />
      </motion.nav>

      {/* Mobile top bar */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden flex items-center justify-between px-5 py-4 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}
        style={{ background: scrolled ? 'rgba(5,7,20,0.95)' : 'transparent', backdropFilter: 'blur(20px)', borderBottom: scrolled ? '1px solid rgba(99,102,241,0.1)' : 'none' }}
      >
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm font-mono"
          style={{ background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)' }}>
          HP
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <Menu size={18} color="#F8F8F8" />
        </button>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 lg:hidden"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-72 z-50 lg:hidden flex flex-col py-8 px-6"
              style={{ background: '#09091F', borderLeft: '1px solid rgba(99,102,241,0.15)', boxShadow: '-8px 0 40px rgba(0,0,0,0.5)' }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold font-mono"
                    style={{ background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)' }}>
                    HP
                  </div>
                  <span className="text-white font-semibold font-display">Hitarth Parmar</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <X size={16} color="#F8F8F8" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(link.id)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200"
                    style={{
                      background: active === link.id ? 'rgba(99,102,241,0.15)' : 'transparent',
                      border: active === link.id ? '1px solid rgba(99,102,241,0.2)' : '1px solid transparent',
                    }}
                  >
                    <span className="text-base" style={{ color: active === link.id ? '#6366F1' : 'rgba(255,255,255,0.4)' }}>{link.icon}</span>
                    <span className="text-sm font-medium" style={{ color: active === link.id ? '#6366F1' : '#374151' }}>
                      {link.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-black/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-[#9CA3AF]">Open to Opportunities</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
