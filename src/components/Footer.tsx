'use client'

import { motion } from 'framer-motion'
import { Linkedin, Instagram, MessageCircle, Heart, ArrowUp } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      className="py-10 lg:pl-16"
      style={{ background: '#05080F', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-[#05080F] font-bold font-mono text-sm"
              style={{ background: 'linear-gradient(135deg, #E8B554 0%, #F5A623 100%)' }}
            >
              HP
            </div>
            <span className="font-display font-bold text-white text-lg">Hitarth Parmar</span>
          </motion.div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { href: personalInfo.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn' },
              { href: personalInfo.instagram, icon: <Instagram size={16} />, label: 'Instagram' },
              { href: personalInfo.whatsapp, icon: <MessageCircle size={16} />, label: 'WhatsApp' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.5)',
                }}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-32 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(232,181,84,0.4), transparent)' }} />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/30 text-xs font-mono mb-1">
              Designed & Built by{' '}
              <span className="text-[#E8B554]">Hitarth Parmar</span>
            </p>
            <p className="text-white/20 text-xs font-mono flex items-center justify-center gap-1.5">
              Made with <Heart size={10} className="text-red-400 fill-red-400" /> using Next.js & Tailwind · © 2024–2026
            </p>
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-[#E8B554] font-mono transition-colors duration-200"
          >
            <ArrowUp size={12} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
