import { Reveal } from './Reveal'

const links = [
  {
    label: 'Email',
    href: 'mailto:melzayat@strikemedia.net',
    value: 'melzayat@strikemedia.net',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/201013609999',
    value: '+20 101 360 9999',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@mfelzayat',
    value: '@mfelzayat',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/StrikeMediaAgency',
    value: 'Strike Media Agency',
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-line bg-paper px-5 py-20 text-ink md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-ui text-[11px] font-medium tracking-label text-copper-dim uppercase">
            05 · Contact
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-ink">
            Direct line.
            <br />
            No intake forms.
          </h2>
        </Reveal>

        <Reveal delayMs={90} className="mt-10 md:mt-14">
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={l.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="group flex flex-col gap-1 py-5 transition sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-ui text-[10px] tracking-label text-mute uppercase">
                    {l.label}
                  </span>
                  <span className="font-display text-xl text-ink transition group-hover:text-copper-dim md:text-2xl">
                    {l.value} <span className="text-base text-mute group-hover:text-copper-dim">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-md text-base leading-relaxed text-mute">
            Work, partnerships, production briefs. Keep it concrete.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
