'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Instagram, MessageCircle, ChevronDown, Download, ArrowRight } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [itemIndex, setItemIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const items = personalInfo.typedItems
    const current = items[itemIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setTypedText(current.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        if (charIndex > 0) {
          setTypedText(current.slice(0, charIndex - 1))
          setCharIndex(c => c - 1)
        } else {
          setIsDeleting(false)
          setItemIndex(i => (i + 1) % items.length)
        }
      }
    }, isDeleting ? 50 : 90)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, itemIndex])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05080F] lg:pl-16">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute animate-pulse-glow"
          style={{
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(66,133,244,0.12) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)',
            top: '-100px',
            right: '-100px',
          }}
        />
        <div
          className="absolute animate-pulse-glow"
          style={{
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,181,84,0.10) 0%, rgba(66,133,244,0.06) 40%, transparent 70%)',
            bottom: '-50px',
            left: '10%',
            animationDelay: '2s',
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-xs font-medium font-mono tracking-widest">OPEN TO OPPORTUNITIES</span>
        </motion.div>

        {/* Giant name */}
        <motion.h1
          initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="gradient-text font-display font-black leading-[0.9] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
        >
          HITARTH
          <br />
          PARMAR
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#E8B554]" />
          <span className="font-mono text-lg md:text-xl" style={{ color: '#E8B554' }}>
            {typedText}
            <span className="animate-pulse text-[#E8B554]">|</span>
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#E8B554]" />
        </motion.div>

        {/* Static subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-white/50 text-sm md:text-base font-mono tracking-widest uppercase mb-10"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl text-[#05080F] font-semibold text-sm tracking-wide transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #E8B554 0%, #F5A623 100%)', boxShadow: '0 8px 32px rgba(232,181,84,0.3)' }}
          >
            View My Work
            <ArrowRight size={16} />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="/HitarthParmar_CV.pdf"
            download
            className="flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-sm tracking-wide glass transition-all duration-200"
          >
            <Download size={16} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            { href: personalInfo.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn', color: '#4285F4' },
            { href: personalInfo.instagram, icon: <Instagram size={18} />, label: 'Instagram', color: '#EC4899' },
            { href: personalInfo.whatsapp, icon: <MessageCircle size={18} />, label: 'WhatsApp', color: '#22C55E' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.6)',
              }}
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Quick stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex items-center justify-center gap-8 mb-12"
        >
          {[
            { value: '4+', label: 'Yrs Exp' },
            { value: '24+', label: 'Live Apps' },
            { value: '7M+', label: 'Users' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl font-bold font-display" style={{ color: '#E8B554' }}>{stat.value}</div>
              <div className="text-xs text-white/40 font-mono mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll down arrow */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 mx-auto text-white/30 hover:text-white/60 transition-colors duration-300"
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
