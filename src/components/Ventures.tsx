import { Reveal } from './Reveal'

const ventures = [
  {
    num: '01',
    name: 'Strike Media',
    role: 'Co-Founder & CEO',
    blurb:
      'Integrated marketing, film, and live production. A-list launch nights and TVCs out of Cairo.',
    href: 'https://strikemedia.net',
    cta: 'strikemedia.net',
  },
  {
    num: '02',
    name: 'StrikeMedia EMS',
    role: 'Event operations',
    blurb:
      'QR invitations, check-in, live ops. The systems layer under the nights we stage.',
    href: 'https://ems.strikemedia.net',
    cta: 'ems.strikemedia.net',
  },
  {
    num: '03',
    name: 'DARAK V2',
    role: 'Cinematic pitch',
    blurb: 'Client pitch site — cinematic walkthrough when a deck is not enough.',
    href: 'https://darak-v2.strikestudio.net',
    cta: 'darak-v2.strikestudio.net',
  },
  {
    num: '04',
    name: 'Strike 3D Demo',
    role: 'Cinematic pitch',
    blurb: '3D / spatial demo for real-estate and experiential briefs.',
    href: 'https://strike-3d-demo.strikestudio.net',
    cta: 'strike-3d-demo.strikestudio.net',
  },
]

export function Ventures() {
  return (
    <section
      id="ventures"
      className="scroll-mt-24 border-y border-line bg-ink-2 px-5 py-20 md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="font-ui text-[11px] font-medium tracking-label text-copper uppercase">
            04 · Ventures
          </p>
          <h2 className="mt-5 font-display text-5xl text-paper md:text-6xl">
            Company &amp; tools
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-mute">
            The agency, the ops stack, and the pitch sites we ship when a PDF
            fails the brief.
          </p>
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
              <Reveal key={v.name} as="li" delayMs={i * 60}>
                {v.href ? (
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-4 py-9 transition hover:bg-ink-3/60 md:grid-cols-12 md:items-start md:gap-8 md:px-2 md:py-11"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="grid gap-4 py-9 md:grid-cols-12 md:items-start md:gap-8 md:px-2 md:py-11">
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
