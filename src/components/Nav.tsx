import { useEffect, useState } from 'react'
import { Monogram } from './Monogram'

const links = [
  { href: '#about', label: 'About' },
  { href: '#ventures', label: 'Ventures' },
  { href: '#focus', label: 'Focus' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-ink/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 lg:px-14">
        <a
          href="#top"
          className="flex items-center gap-3 text-paper transition hover:text-copper"
          onClick={() => setOpen(false)}
          aria-label="Mohamed El Zayat, home"
        >
          <Monogram className="h-7 w-7" />
          <span className="font-ui text-xs font-semibold tracking-label uppercase">
            MEZ
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
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
              className="font-ui inline-flex items-center border border-copper/50 px-4 py-2 text-[11px] font-semibold tracking-label text-copper uppercase transition hover:border-copper hover:bg-copper hover:text-ink"
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

      {open && (
        <div className="border-t border-line bg-ink md:hidden">
          <ul className="flex flex-col px-5 py-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display block border-b border-line py-4 text-3xl text-paper"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <a
                href="mailto:melzayat@strikemedia.net"
                className="font-ui text-sm tracking-label text-copper uppercase"
                onClick={() => setOpen(false)}
              >
                melzayat@strikemedia.net
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
