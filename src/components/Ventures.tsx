import { Reveal } from './Reveal'

const ventures = [
  {
    num: '01',
    name: 'Strike Media',
    role: 'Founder & CEO',
    blurb:
      'Full-stack media company — strategy, creative, and digital execution. Studio front at Strike Studio.',
    href: 'https://strikestudio.net',
    cta: 'strikestudio.net',
  },
  {
    num: '02',
    name: 'StrikeMedia EMS',
    role: 'Event operations',
    blurb:
      'QR invitations and event ops — the system behind live production workflows.',
    href: 'https://ems.strikemedia.net',
    cta: 'ems.strikemedia.net',
  },
  {
    num: '03',
    name: 'Labs',
    role: 'Experiments',
    blurb:
      'Melzayat experiments — city platforms and product probes in the spirit of newcairo.live. Ideas that earn their keep.',
    href: null,
    cta: null,
  },
]

export function Ventures() {
  return (
    <section
      id="ventures"
      className="scroll-mt-24 border-y border-line bg-ink-2 px-5 py-24 md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 max-w-2xl md:mb-20">
          <p className="font-ui text-[11px] font-medium tracking-label text-copper uppercase">
            03 — Ventures
          </p>
          <h2 className="mt-5 font-display text-5xl text-paper md:text-6xl">
            Companies &amp; platforms
          </h2>
        </Reveal>

        <ul className="divide-y divide-line border-y border-line">
          {ventures.map((v, i) => {
            const inner = (
              <>
                <div className="flex items-baseline justify-between gap-4 md:col-span-3">
                  <span className="font-ui text-[11px] tracking-label text-copper uppercase">
                    {v.num}
                  </span>
                  <span className="font-ui text-[10px] tracking-label text-mute uppercase md:hidden">
                    {v.role}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl text-paper md:text-4xl">
                    {v.name}
                  </h3>
                  <p className="mt-1 hidden font-ui text-[10px] tracking-label text-mute uppercase md:block">
                    {v.role}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-base leading-relaxed text-paper-dim md:text-lg">
                    {v.blurb}
                  </p>
                  {v.cta && (
                    <p className="mt-4 font-ui text-[11px] tracking-label text-copper uppercase transition group-hover:text-copper-bright">
                      {v.cta} ↗
                    </p>
                  )}
                </div>
              </>
            )

            return (
              <Reveal key={v.name} as="li" delayMs={i * 70}>
                {v.href ? (
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-4 py-10 transition hover:bg-ink-3/60 md:grid-cols-12 md:items-start md:gap-8 md:px-2 md:py-12"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="grid gap-4 py-10 md:grid-cols-12 md:items-start md:gap-8 md:px-2 md:py-12">
                    {inner}
                  </div>
                )}
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
