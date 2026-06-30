'use client'

import { useScroll, motion, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{ scaleX, background: 'linear-gradient(to right, #6366F1, #A855F7, #06B6D4)' }}
    />
  )
}
