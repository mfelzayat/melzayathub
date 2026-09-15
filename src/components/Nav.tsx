import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { StrikeMark } from './StrikeMark'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#ventures', label: 'Ventures' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-void/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 lg:px-14">
        <a
          href="#top"
          className="group flex items-center gap-3 text-paper transition hover:text-strike"
          onClick={() => setOpen(false)}
          aria-label="Mohamed El Zayat, home"
        >
          <StrikeMark className="h-8 w-8 transition group-hover:scale-105" />
          <span className="font-ui text-[11px] font-semibold tracking-label uppercase">
            MEZ
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-ui text-[11px] font-medium tracking-label text-mute uppercase transition hover:text-paper"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:melzayat@strikemedia.net"
              className="font-ui inline-flex items-center border border-strike/60 bg-strike/10 px-4 py-2 text-[11px] font-semibold tracking-label text-strike uppercase transition hover:border-strike hover:bg-strike hover:text-paper"
            >
              Write
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="font-ui text-[11px] font-semibold tracking-label text-paper uppercase md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-line bg-void md:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col px-5 py-8">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-display block border-b border-line py-4 text-3xl font-semibold tracking-tight text-paper"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-6">
                <a
                  href="mailto:melzayat@strikemedia.net"
                  className="font-ui text-sm tracking-label text-strike uppercase"
                  onClick={() => setOpen(false)}
                >
                  melzayat@strikemedia.net
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
