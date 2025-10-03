'use client'

import { motion } from 'framer-motion'

export function SlideIn({ children, direction = 'left' }: any) {
  const variants = {
    left: { x: -100 },
    right: { x: 100 },
    up: { y: -100 },
    down: { y: 100 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...variants[direction as keyof typeof variants] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
