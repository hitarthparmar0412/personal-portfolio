'use client'
import { motion } from 'framer-motion'
import React from 'react'

interface Props {
  text: string
  className?: string
  style?: React.CSSProperties
  delay?: number
  once?: boolean
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export function SplitText({ text, className = '', style, delay = 0, once = true, tag: Tag = 'span' }: Props) {
  const words = text.split(' ')
  return (
    <Tag className={className} style={style} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden mr-[0.22em]">
          <motion.span
            className="inline-block"
            initial={{ y: '105%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: delay + wi * 0.07 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
