import { Reveal } from './Reveal'

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
          <a
            href="mailto:melzayat@strikemedia.net"
            className="group inline-flex flex-col gap-3 border-b-2 border-ink pb-3 transition hover:border-copper md:flex-row md:items-end md:gap-6"
          >
            <span className="font-display text-[clamp(1.5rem,4vw,2.75rem)] text-ink transition group-hover:text-copper-dim">
              melzayat@strikemedia.net
            </span>
            <span className="font-ui pb-1 text-[11px] font-semibold tracking-label text-mute uppercase transition group-hover:text-copper-dim">
              Open mail ↗
            </span>
          </a>
          <p className="mt-7 max-w-md text-base leading-relaxed text-mute">
            Email me for work, partnerships, or platforms. Keep it concrete.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
