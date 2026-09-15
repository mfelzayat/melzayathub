import { Reveal } from './Reveal'
import { HubFrame } from './HubFrame'

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14">
      <div className="pointer-events-none absolute -right-8 top-16 hidden lg:block" aria-hidden>
        <HubFrame ghost className="h-[420px] w-auto opacity-40" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-4">
          <p className="font-ui text-[11px] font-medium tracking-label text-copper uppercase">
            02 · About
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] text-paper md:text-6xl">
            Operator
            <br />
            from Cairo
          </h2>
        </Reveal>

        <div className="space-y-6 text-lg leading-relaxed text-paper-dim md:text-xl lg:col-span-7 lg:col-start-6">
          <Reveal as="p">
            I run Strike Media from Cairo: strategy, creative, and delivery in one
            company. Brands hire us to ship work, not slide decks.
          </Reveal>
          <Reveal as="p" delayMs={70}>
            Beside the studio sits StrikeMedia EMS: QR invitations, check-in, and the
            ops stack behind live events. Same standard. Fewer handoffs.
          </Reveal>
          <Reveal as="p" delayMs={140} className="text-paper">
            If a tool is missing, I build it. When the show starts, I run the floor.
          </Reveal>
        </div>
      </div>
    </section>
  )
}
