import { useEffect, useState } from 'react'

const chapters = [
  { id: 'top', label: 'Intro', num: '01' },
  { id: 'work', label: 'Work', num: '02' },
  { id: 'about', label: 'About', num: '03' },
  { id: 'ventures', label: 'Ventures', num: '04' },
  { id: 'contact', label: 'Contact', num: '05' },
]

export function ChapterIndex() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(c.id))
      .filter(Boolean) as HTMLElement[]

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const id = visible[0]?.target.id
        if (id) setActive(id)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75] },
    )

    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <aside
      className="pointer-events-none fixed top-1/2 left-5 z-40 hidden -translate-y-1/2 xl:block"
      aria-label="Section index"
    >
      <nav className="pointer-events-auto flex flex-col gap-3">
        {chapters.map((c) => {
          const on = active === c.id
          return (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={`group flex items-center gap-3 transition ${
                on ? 'opacity-100' : 'opacity-40 hover:opacity-80'
              }`}
            >
              <span
                className={`h-px w-4 transition-all ${
                  on ? 'w-8 bg-copper' : 'bg-paper/40 group-hover:bg-paper/70'
                }`}
              />
              <span className="font-ui text-[10px] tracking-label text-paper uppercase">
                <span className={on ? 'text-copper' : 'text-mute'}>{c.num}</span>
                <span className="ml-2 hidden 2xl:inline">{c.label}</span>
              </span>
            </a>
          )
        })}
      </nav>
    </aside>
  )
}
