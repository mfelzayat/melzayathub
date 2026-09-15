import { Reveal } from './Reveal'
import { StrikeMark } from './StrikeMark'

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
      className="scroll-mt-24 px-5 py-20 md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="overflow-hidden rounded-sm border border-line bg-ink-2">
          <div className="grid lg:grid-cols-12">
            <div className="relative border-b border-line p-8 md:p-10 lg:col-span-5 lg:border-b-0 lg:border-r">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse 70% 60% at 20% 20%, color-mix(in oklab, #e8282c 28%, transparent), transparent 70%)',
                }}
                aria-hidden
              />
              <div className="relative">
                <StrikeMark className="mb-8 h-14 w-14" />
                <p className="font-ui text-[11px] font-medium tracking-label text-strike uppercase">
                  05 · Contact
                </p>
                <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-[0.98] tracking-tight text-paper">
                  Direct line.
                  <br />
                  No intake forms.
                </h2>
                <p className="mt-6 max-w-sm text-base leading-relaxed text-mute">
                  Work, partnerships, production briefs. Keep it concrete.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ul>
                {links.map((l) => (
                  <li key={l.label} className="border-b border-line last:border-b-0">
                    <a
                      href={l.href}
                      target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={
                        l.href.startsWith('mailto:')
                          ? undefined
                          : 'noopener noreferrer'
                      }
                      className="group flex flex-col gap-1 px-6 py-6 transition hover:bg-ink-3/80 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 md:px-10"
                    >
                      <span className="font-ui text-[10px] tracking-label text-mute uppercase">
                        {l.label}
                      </span>
                      <span className="font-display text-xl font-semibold tracking-tight text-paper transition group-hover:text-strike md:text-2xl">
                        {l.value}{' '}
                        <span className="text-base text-mute group-hover:text-strike">
                          ↗
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
