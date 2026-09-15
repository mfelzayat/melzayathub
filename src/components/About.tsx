import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="font-ui text-[11px] font-medium tracking-label text-copper uppercase">
            02 — About
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] text-paper md:text-6xl">
            Cairo.
            <br />
            Companies.
            <br />
            Infrastructure.
          </h2>
        </Reveal>

        <div className="space-y-7 text-lg leading-relaxed text-paper-dim md:text-xl lg:col-span-7 lg:col-start-6">
          <Reveal as="p">
            Based in Cairo, Mohamed El Zayat runs Strike Media — a media company
            built for brands that need strategy, creative, and execution in the
            same room.
          </Reveal>
          <Reveal as="p" delayMs={80}>
            The work is not campaigns alone. It is the operating layer: platforms
            like StrikeMedia EMS that turn invitations, events, and live
            production into systems you can run.
          </Reveal>
          <Reveal as="p" delayMs={160} className="text-paper">
            Builder first. Operator always. Spectacle only when it earns the
            frame.
          </Reveal>
        </div>
      </div>
    </section>
  )
}
