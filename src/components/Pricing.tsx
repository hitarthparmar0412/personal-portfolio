'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, IndianRupee, DollarSign } from 'lucide-react'
import { SplitText } from '@/components/ui/SplitText'

type Currency = 'USD' | 'INR'

const plans = [
  {
    name: 'MVP Sprint',
    usd: { price: '$3,000', suffix: '– $6,000' },
    inr: { price: '₹2.5L', suffix: '– ₹5L' },
    timeline: '4–6 weeks',
    color: '#4285F4',
    description: 'Idea to App Store. Perfect for startups validating a product.',
    features: [
      'Flutter app (Android + iOS)',
      'Core feature set',
      'Firebase backend',
      'App Store submission',
      '2 weeks post-launch support',
    ],
    cta: 'Start a Project',
    featured: false,
  },
  {
    name: 'Production Build',
    usd: { price: '$8,000', suffix: '– $18,000' },
    inr: { price: '₹6.5L', suffix: '– ₹15L' },
    timeline: '8–14 weeks',
    color: '#6366F1',
    description: 'Full-featured production app with backend integrations.',
    features: [
      'Everything in MVP Sprint',
      'Complex state management',
      'Payment integration (Stripe / Razorpay)',
      'Real-time features (Socket.IO / Firestore)',
      'Admin dashboard',
      'CI/CD pipeline setup',
    ],
    cta: 'Get a Quote',
    featured: true,
  },
  {
    name: 'SaaS / Enterprise',
    usd: { price: '$18,000', suffix: '– $45,000' },
    inr: { price: '₹15L', suffix: '– ₹37L' },
    timeline: '12–20 weeks',
    color: '#8B5CF6',
    description: 'Multi-tenant SaaS platforms, white-label products, and complex integrations.',
    features: [
      'Everything in Production Build',
      'Multi-tenant architecture',
      'White-label support',
      'AI/ML API integration',
      'Web + mobile (Flutter Web)',
      'Ongoing retainer available',
    ],
    cta: "Let's Talk",
    featured: false,
  },
]

function detectCurrency(): Currency {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta') return 'INR'
    const locale = navigator.language || ''
    if (locale.toLowerCase().includes('en-in') || locale.toLowerCase().includes('hi')) return 'INR'
  } catch {}
  return 'USD'
}

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>('USD')
  const [detected, setDetected] = useState<Currency>('USD')

  useEffect(() => {
    const c = detectCurrency()
    setCurrency(c)
    setDetected(c)
  }, [])

  return (
    <section id="pricing" className="py-20 bg-[#050714] dark:bg-[#020409]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-4">
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-0.5"
              style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #818CF8, #22D3EE)' }} />
              <span className="text-[#818CF8] text-[10px] font-mono tracking-[0.25em] uppercase">Investment</span>
            </motion.div>
            <SplitText
              text="Transparent Pricing"
              tag="h2"
              className="heading-gradient font-display font-black leading-none tracking-tight mb-1"
              style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)' } as React.CSSProperties}
              delay={0.05}
            />
          </div>

          {/* Currency toggle */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1 p-1 rounded-xl self-start sm:self-auto shrink-0"
            style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}
          >
            <button
              onClick={() => setCurrency('USD')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold transition-all duration-200"
              style={{
                background: currency === 'USD' ? 'var(--card-border)' : 'transparent',
                color: currency === 'USD' ? 'var(--text-heading)' : 'var(--text-subtle)',
              }}
            >
              <DollarSign size={11} /> USD
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold transition-all duration-200"
              style={{
                background: currency === 'INR' ? 'var(--card-border)' : 'transparent',
                color: currency === 'INR' ? 'var(--text-heading)' : 'var(--text-subtle)',
              }}
            >
              <IndianRupee size={11} /> INR
            </button>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm font-mono mb-12 max-w-lg"
          style={{ color: 'var(--text-muted)' }}
        >
          Fixed-price or milestone-based. Written estimate within 48 hours. No surprise charges.
          {detected === 'INR' && currency === 'USD' && (
            <span className="block mt-1 text-[11px]" style={{ color: 'var(--text-subtle)' }}>
              Showing USD · <button onClick={() => setCurrency('INR')} className="text-[#818CF8] hover:underline">Switch to ₹ INR</button>
            </span>
          )}
          {detected === 'USD' && currency === 'INR' && (
            <span className="block mt-1 text-[11px]" style={{ color: 'var(--text-subtle)' }}>
              Showing INR · <button onClick={() => setCurrency('USD')} className="text-[#22D3EE] hover:underline">Switch to $ USD</button>
            </span>
          )}
        </motion.p>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => {
            const pricing = currency === 'INR' ? plan.inr : plan.usd
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative rounded-2xl p-7 flex flex-col"
                style={{
                  background: plan.featured ? `${plan.color}08` : 'var(--card-bg)',
                  border: plan.featured ? `1px solid ${plan.color}35` : '1px solid var(--card-border)',
                  boxShadow: plan.featured ? undefined : 'var(--card-shadow)',
                }}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(to right, ${plan.color}, transparent)` }} />

                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full"
                      style={{ background: plan.color, color: '#05080F' }}>
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <div className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>{plan.name}</div>
                  <div className="flex items-end gap-1">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={pricing.price}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="font-display font-black"
                        style={{ fontSize: '2rem', color: 'var(--text-heading)' }}
                      >
                        {pricing.price}
                      </motion.span>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={pricing.suffix}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="font-mono text-sm pb-1"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {pricing.suffix}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="text-xs font-mono mt-1 inline-flex items-center gap-1.5 px-2 py-0.5 rounded"
                    style={{ color: 'var(--text-subtle)', background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}>
                    Timeline: {plan.timeline}
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-body)' }}>{plan.description}</p>

                <ul className="space-y-2.5 flex-1 mb-7">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <div className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-body)' }}>
                        <Check size={13} className="mt-0.5 shrink-0" style={{ color: plan.color }} />
                        {f}
                      </div>
                      {j < plan.features.length - 1 && (
                        <div className="mt-2.5 h-px" style={{ background: 'var(--divider)' }} />
                      )}
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all duration-200"
                  style={plan.featured
                    ? { background: `linear-gradient(135deg, ${plan.color} 0%, #A855F7 100%)`, color: '#ffffff' }
                    : { background: 'var(--badge-bg)', color: '#818CF8', border: '1px solid var(--badge-border)' }
                  }
                >
                  {plan.cta} <ArrowRight size={13} />
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-2xl"
          style={{ background: 'var(--badge-bg)', border: '1px solid rgba(99,102,241,0.1)' }}
        >
          <p className="text-sm text-center sm:text-left" style={{ color: 'var(--text-body)' }}>
            Not sure which fits? I provide a <span className="font-medium" style={{ color: 'var(--text-heading)' }}>free 30-minute scoping call</span> — no commitment required.
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white"
            style={{ background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)' }}
          >
            Book Free 30-Min Call →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
