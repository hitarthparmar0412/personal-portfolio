'use client'

import { motion } from 'framer-motion'
import { Download, MapPin, Mail, Phone, Calendar, GraduationCap, Briefcase, ExternalLink } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { SectionHeading } from '@/components/ui'

const infoItems = [
  { icon: <Calendar size={14} />, label: 'Birthday', value: personalInfo.birthday },
  { icon: <Phone size={14} />, label: 'Phone', value: personalInfo.phone },
  { icon: <MapPin size={14} />, label: 'City', value: 'Ahmedabad, India' },
  { icon: <Mail size={14} />, label: 'Email', value: personalInfo.email, short: true },
  { icon: <GraduationCap size={14} />, label: 'Degree', value: personalInfo.degree },
  { icon: <Briefcase size={14} />, label: 'Freelance', value: personalInfo.freelance },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#05080F] lg:pl-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Who I Am" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Gold ring */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, #E8B554, #4285F4, #8B5CF6)',
                  padding: '2px',
                  borderRadius: '24px',
                  transform: 'rotate(3deg)',
                  opacity: 0.7,
                }}
              />
              <div
                className="relative overflow-hidden"
                style={{
                  width: '320px',
                  height: '380px',
                  borderRadius: '22px',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(232,181,84,0.1)',
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Hitarth Parmar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.style.background = 'linear-gradient(135deg, #0D1117 0%, #12181F 100%)'
                      parent.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:12px"><div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#E8B554,#F5A623);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:900;color:#05080F;font-family:Space Grotesk">HP</div><span style="color:rgba(255,255,255,0.4);font-size:14px;font-family:JetBrains Mono">Hitarth Parmar</span></div>`
                    }
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3"
                style={{ border: '1px solid rgba(232,181,84,0.3)' }}
              >
                <div className="text-[#E8B554] font-bold font-display text-xl">4+</div>
                <div className="text-white/60 text-xs font-mono">Years Exp</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3"
                style={{ border: '1px solid rgba(66,133,244,0.3)' }}
              >
                <div className="text-[#4285F4] font-bold font-display text-xl">24+</div>
                <div className="text-white/60 text-xs font-mono">Live Apps</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Senior Flutter & FlutterFlow Developer
            </h3>
            <p className="text-white/65 leading-relaxed mb-4 text-[15px]">
              {personalInfo.bio}
            </p>
            <p className="text-white/65 leading-relaxed mb-8 text-[15px]">
              {personalInfo.bio2}
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {infoItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 text-[#E8B554]">{item.icon}</span>
                  <div>
                    <span className="text-white/40 text-xs font-mono">{item.label}: </span>
                    <span className={`text-white/80 text-sm ${item.short ? 'break-all' : ''}`}>{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="/HitarthParmar_CV.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-[#05080F] font-semibold text-sm"
                style={{ background: 'linear-gradient(135deg, #E8B554 0%, #F5A623 100%)' }}
              >
                <Download size={15} />
                Download CV
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm glass"
              >
                <ExternalLink size={15} />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
