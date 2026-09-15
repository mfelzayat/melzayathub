import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: 'div' | 'li' | 'span' | 'p' | 'h2' | 'h3'
}

/** Restrained fade/rise via IntersectionObserver — no bounce. */
export function Reveal({
  children,
  className = '',
  delayMs = 0,
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: shown ? `${delayMs}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
