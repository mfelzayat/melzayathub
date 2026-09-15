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
      className="scroll-mt-24 border-y border-line bg-ink px-5 py-20 md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="font-ui text-[11px] font-medium tracking-label text-strike uppercase">
            04 · Ventures
          </p>
          <h2 className="mt-5 font-display fluid-section font-bold text-paper">
            Company &amp; tools
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-mute">
            The agency, the ops stack, and the pitch sites we ship when a PDF
            fails the brief.
          </p>
        </Reveal>

        <ul className="grid gap-3 md:grid-cols-2">
          {ventures.map((v, i) => (
            <Reveal key={v.name} as="li" delayMs={i * 50}>
              <a
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-sm border border-line bg-ink-2 p-6 transition hover:border-strike/45 hover:bg-ink-3 md:p-8"
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-strike/0 blur-2xl transition group-hover:bg-strike/20"
                  aria-hidden
                />
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-ui text-[11px] tracking-label text-strike uppercase">
                    {v.num}
                  </span>
                  <span className="font-ui text-[10px] tracking-label text-mute uppercase">
                    {v.role}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-paper md:text-3xl">
                  {v.name}
                </h3>
                <p className="flex-1 text-base leading-relaxed text-mute">
                  {v.blurb}
                </p>
                <p className="font-ui text-[11px] tracking-label text-strike uppercase transition group-hover:text-strike-bright">
                  {v.cta} ↗
                </p>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
