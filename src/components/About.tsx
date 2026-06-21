'use client'

import { motion } from 'framer-motion'
import { Download, MapPin, Mail, Phone, Calendar, GraduationCap, Briefcase, ExternalLink, Code2, Zap, Globe } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { SectionHeading } from '@/components/ui'

const infoItems = [
  { icon: Calendar,      label: 'Birthday',  value: personalInfo.birthday },
  { icon: Phone,         label: 'Phone',     value: personalInfo.phone },
  { icon: MapPin,        label: 'City',      value: 'Ahmedabad, India' },
  { icon: Mail,          label: 'Email',     value: personalInfo.email, short: true },
  { icon: GraduationCap, label: 'Degree',    value: personalInfo.degree },
  { icon: Briefcase,     label: 'Freelance', value: personalInfo.freelance },
]

const highlights = [
  { icon: Code2, label: '24+ Apps', sub: 'Shipped to production', color: '#4285F4' },
  { icon: Globe,  label: '7M+ Users', sub: 'Across 24 countries',  color: '#E8B554' },
  { icon: Zap,    label: '4+ Years',  sub: 'Professional experience', color: '#8B5CF6' },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#05080F] lg:pl-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Who I Am" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* === LEFT: Photo + Stats === */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Background blob */}
            <div
              className="absolute -top-12 -left-12 w-80 h-80 rounded-full opacity-20 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #E8B554 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />

            <div className="relative">
              {/* Rotating gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-[2px] rounded-[2rem]"
                style={{
                  background: 'conic-gradient(from 0deg, #E8B554 0%, #4285F4 33%, #8B5CF6 66%, #E8B554 100%)',
                  opacity: 0.6,
                  filter: 'blur(1.5px)',
                }}
              />
              <div className="absolute -inset-[2px] rounded-[2rem]" style={{ background: '#05080F' }} />

              {/* Photo */}
              <div
                className="relative overflow-hidden"
                style={{ width: '300px', height: '370px', borderRadius: '1.8rem', boxShadow: '0 40px 100px rgba(0,0,0,0.6)' }}
              >
                <img
                  src="/images/profile2.jpg"
                  alt="Hitarth Parmar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                  onError={(e) => {
                    const el = e.target as HTMLImageElement
                    el.src = '/images/profile.jpg'
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-28"
                  style={{ background: 'linear-gradient(to top, rgba(5,8,15,0.9), transparent)' }}
                />
              </div>

              {/* Floating highlights */}
              {highlights.map((h, i) => {
                const positions = [
                  { top: '-16px', right: '-56px' },
                  { bottom: '80px', right: '-60px' },
                  { bottom: '-16px', left: '-20px' },
                ]
                const delays = [0, 1, 0.5]
                return (
                  <motion.div
                    key={i}
                    animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: delays[i] }}
                    className="absolute rounded-2xl px-4 py-3 backdrop-blur-xl"
                    style={{
                      ...positions[i],
                      background: 'rgba(13,17,23,0.88)',
                      border: `1px solid ${h.color}30`,
                      boxShadow: `0 8px 28px rgba(0,0,0,0.4), 0 0 20px ${h.color}10`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <h.icon size={14} style={{ color: h.color }} />
                      <span className="font-bold font-display text-sm" style={{ color: h.color }}>{h.label}</span>
                    </div>
                    <div className="text-white/40 text-[11px] font-mono mt-0.5 pl-5">{h.sub}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* === RIGHT: Content === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3
              className="font-display font-bold mb-1"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: 'rgba(255,255,255,0.92)' }}
            >
              Senior Software Engineer
            </h3>
            <p className="text-[#E8B554] font-mono text-sm mb-6 tracking-wide">Flutter · AI · Mobile · Web</p>

            <p className="text-white/60 leading-relaxed mb-4 text-[15px]">
              {personalInfo.bio}
            </p>
            <p className="text-white/60 leading-relaxed mb-8 text-[15px]">
              {personalInfo.bio2}
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8 pb-8"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              {infoItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(232,181,84,0.1)', border: '1px solid rgba(232,181,84,0.15)' }}
                  >
                    <item.icon size={13} style={{ color: '#E8B554' }} />
                  </div>
                  <div>
                    <div className="text-white/35 text-[11px] font-mono uppercase tracking-wider">{item.label}</div>
                    <div className={`text-white/80 text-sm font-medium mt-0.5 ${item.short ? 'break-all' : ''}`}>
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="/HitarthParmar_CV.pdf"
                download
                whileHover={{ scale: 1.04, boxShadow: '0 10px 32px rgba(232,181,84,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-[#05080F] font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #E8B554 0%, #F5C842 100%)' }}
              >
                <Download size={14} />
                Download CV
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, background: 'rgba(66,133,244,0.1)', borderColor: 'rgba(66,133,244,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <ExternalLink size={14} />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
