'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/data'
import { SectionHeading } from '@/components/ui'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#FAFBFF] dark:bg-[#020409]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="What I Offer"
          title="Services"
          subtitle="End-to-end Flutter development — from architecture and UI design to payment integration and App Store deployment."
        />

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="rounded-2xl p-6 transition-all duration-300 group"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              {/* Icon circle */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all duration-300"
                style={{
                  background: `${service.color}15`,
                  border: `1px solid ${service.color}30`,
                  boxShadow: `0 0 20px ${service.color}00`,
                }}
              >
                {service.icon}
              </motion.div>

              <h3
                className="font-display font-bold text-lg mb-3 group-hover:text-[#818CF8] transition-colors duration-300"
                style={{ color: 'var(--text-heading)' }}
              >
                {service.title}
              </h3>
              <p className="text-[#374151] dark:text-white/55 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-5 h-px transition-all duration-300"
                style={{ background: `linear-gradient(90deg, ${service.color}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-[#6B7280] dark:text-white/50 mb-6 text-[15px]">Have a project in mind? Let&apos;s build something great together.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-2xl text-white font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)', boxShadow: '0 8px 32px rgba(99,102,241,0.35)' }}
          >
            Get In Touch →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
