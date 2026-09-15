import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: 'div' | 'li' | 'span' | 'p' | 'h2' | 'h3'
}

const tags = {
  div: motion.div,
  li: motion.li,
  span: motion.span,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
} as const

/** Scroll reveal via Motion — respects prefers-reduced-motion. */
export function Reveal({
  children,
  className = '',
  delayMs = 0,
  as = 'div',
}: Props) {
  const reduce = useReducedMotion()
  const Tag = tags[as]

  if (reduce) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: delayMs / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Tag>
  )
}
