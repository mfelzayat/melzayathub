import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: 'div' | 'li' | 'span' | 'p' | 'h2' | 'h3'
}

/** Restrained fade/rise via IntersectionObserver. No bounce, no Framer. */
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

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    io.observe(el)

    // Fail-open so full-page captures / odd IO edge cases never leave copy blank
    const failOpen = window.setTimeout(() => setShown(true), 2400)

    return () => {
      io.disconnect()
      window.clearTimeout(failOpen)
    }
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
