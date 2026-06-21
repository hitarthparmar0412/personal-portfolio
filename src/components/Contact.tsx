'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { personalInfo, contactInfo } from '@/lib/data'
import { SectionHeading } from '@/components/ui'

declare global {
  interface Window {
    emailjs?: {
      init: (key: string) => void
      send: (serviceId: string, templateId: string, params: Record<string, string>) => Promise<{ status: number }>
    }
  }
}

const contactItems = [
  { icon: <Mail size={16} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#E8B554' },
  { icon: <Phone size={16} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#4285F4' },
  { icon: <MapPin size={16} />, label: 'Location', value: personalInfo.location, href: '#', color: '#8B5CF6' },
  { icon: <Linkedin size={16} />, label: 'LinkedIn', value: 'parmar-hitarth', href: personalInfo.linkedin, color: '#22C55E' },
  { icon: <MessageCircle size={16} />, label: 'WhatsApp', value: '+91 95869 13540', href: personalInfo.whatsapp, color: '#22C55E' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const emailjsLoaded = useRef(false)

  useEffect(() => {
    if (emailjsLoaded.current) return
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.async = true
    script.onload = () => {
      window.emailjs?.init(contactInfo.emailjsPublicKey)
      emailjsLoaded.current = true
    }
    document.head.appendChild(script)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    try {
      // Send via EmailJS
      if (window.emailjs) {
        await window.emailjs.send(
          contactInfo.emailjsServiceId,
          contactInfo.emailjsTemplateId,
          {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
            to_name: 'Hitarth Parmar',
          }
        )
      }

      // Also post to Firebase
      await fetch(contactInfo.firebaseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      })

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputClass = "w-full px-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all duration-200 font-sans placeholder:text-white/25"
  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
  }

  return (
    <section id="contact" className="py-24 bg-[#0D1117] lg:pl-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Let's Connect"
          title="Get In Touch"
          subtitle="Have a project, opportunity, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3
              className="font-display font-black leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              <span className="text-white">Let&apos;s Work</span>
              <br />
              <span style={{ color: '#E8B554' }}>Together</span>
            </h3>

            <div className="space-y-4 mb-8">
              {contactItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/40 font-mono mb-0.5">{item.label}</div>
                    <div className="text-sm text-white/80 group-hover:text-white transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <div>
                <div className="text-green-400 text-sm font-semibold">Available for Work</div>
                <div className="text-white/40 text-xs font-mono mt-0.5">Freelance & Full-time</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/40 font-mono mb-2 ml-1">Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 font-mono mb-2 ml-1">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/40 font-mono mb-2 ml-1">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry, collaboration..."
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-xs text-white/40 font-mono mb-2 ml-1">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}
                >
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-green-400 text-sm">Message sent! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)' }}
                >
                  <AlertCircle size={16} className="text-red-400" />
                  <span className="text-red-400 text-sm">Something went wrong. Try emailing directly.</span>
                </motion.div>
              )}

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-[#05080F] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #E8B554 0%, #F5A623 100%)',
                  boxShadow: '0 8px 32px rgba(232,181,84,0.25)',
                }}
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#05080F]/40 border-t-[#05080F] rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
