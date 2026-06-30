'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function MobileHireFAB() {
  const [visible, setVisible] = useState(false)
  const [nearBottom, setNearBottom] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
      const nearEnd = window.scrollY + window.innerHeight >= document.body.scrollHeight - 400
      setNearBottom(nearEnd)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && !nearBottom && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 lg:hidden flex items-center gap-2 px-4 py-3 rounded-full font-bold text-sm text-white"
          style={{
            background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)',
            boxShadow: '0 8px 32px rgba(99,102,241,0.35)',
          }}
        >
          <Mail size={14} />
          Hire Me
        </motion.button>
      )}
    </AnimatePresence>
  )
}
