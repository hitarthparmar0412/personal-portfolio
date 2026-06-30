'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function TopNavigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(250,251,255,0.92)' : 'rgba(250,251,255,0.6)',
          backdropFilter: 'blur(20px) saturate(1.8)',
          borderBottom: scrolled ? '1px solid rgba(99,102,241,0.1)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-black text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)' }}
            >
              HP
            </div>
            <span className="font-display font-bold text-white text-sm hidden sm:block group-hover:text-[#818CF8] transition-colors">
              Hitarth Parmar
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    color: isActive ? '#6366F1' : '#374151',
                    background: isActive ? 'rgba(99,102,241,0.06)' : 'transparent',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #6366F1, #A855F7)' }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA + Mobile menu button */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
              }}
            >
              Hire Me <ArrowRight size={14} />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
              style={{
                background: 'rgba(255,255,255,0.05)',
                color: '#374151',
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-10"
            style={{
              background: 'rgba(250,251,255,0.97)',
              backdropFilter: 'blur(24px)',
            }}
          >
            <div className="flex flex-col gap-2 mt-6">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between py-5 border-b font-display font-bold text-2xl transition-colors"
                      style={{
                        borderColor: 'rgba(255,255,255,0.07)',
                        color: isActive ? '#818CF8' : 'rgba(255,255,255,0.6)',
                      }}
                    >
                      {link.label}
                      <ArrowRight size={20} style={{ color: isActive ? '#6366F1' : '#9CA3AF' }} />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-white text-base"
                style={{
                  background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
                  boxShadow: '0 8px 32px rgba(99,102,241,0.3)',
                }}
              >
                Let&apos;s Work Together <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
