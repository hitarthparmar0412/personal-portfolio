
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '@/lib/data'

// For dynamic stats (e.g. hours of support), we animate over a representative
// display window rather than from 0 to the full accumulated value — otherwise
// a counter starting at 18 000+ would scroll past unreadably fast.
const DYNAMIC_DISPLAY_RANGE = 500

interface AnimatedCounterProps {
  value: number
  suffix: string
  dynamic?: boolean
  duration?: number
}

function AnimatedCounter({ value, suffix, dynamic = false, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  // Dynamic stats animate from (value - DYNAMIC_DISPLAY_RANGE) → value so the
  // motion feels alive without burning through tens of thousands of frames.
  const animateFrom = dynamic ? value - DYNAMIC_DISPLAY_RANGE : 0
  const [count, setCount] = useState(animateFrom)

  useEffect(() => {
    if (!inView) return
    const startTime = Date.now()
    const endTime = startTime + duration * 1000

    const frame = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (endTime - startTime), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(animateFrom + eased * (value - animateFrom)))
      if (progress < 1) requestAnimationFrame(frame)
      else setCount(value)
    }

    requestAnimationFrame(frame)
    // animateFrom is derived from value — listing both would cause a re-run on
    // every render; value alone is the canonical dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, duration])

  const displayValue = Number.isInteger(value) ? count.toLocaleString() : count.toFixed(1)

  return (
    <div ref={ref} className="font-display font-black leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#6366F1' }}>
      {displayValue}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-16" style={{ background: '#09091F', borderTop: '1px solid rgba(99,102,241,0.08)', borderBottom: '1px solid rgba(99,102,241,0.08)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl p-6 text-center transition-all duration-300 group"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.1)' }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} dynamic={stat.dynamic} />
              <div className="text-white/80 font-semibold mt-2 text-sm md:text-base">{stat.label}</div>
              <div className="text-white/35 text-xs mt-1 font-mono">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
