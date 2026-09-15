import { Reveal } from './Reveal'
import { StrikeMark } from './StrikeMark'

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-14"
    >
      <div
        className="pointer-events-none absolute -right-10 top-20 hidden opacity-30 lg:block"
        aria-hidden
      >
        <StrikeMark className="h-[380px] w-[380px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-4">
          <p className="font-ui text-[11px] font-medium tracking-label text-strike uppercase">
            03 · About
          </p>
          <h2 className="mt-5 font-display fluid-section font-bold text-paper">
            Producer.
            <br />
            CEO.
            <br />
            Same desk.
          </h2>
        </Reveal>

        <div className="space-y-6 text-lg leading-relaxed text-mute md:text-xl lg:col-span-7 lg:col-start-6">
          <Reveal as="p">
            I run Strike Media from Mohandeseen / Cairo: campaigns, films, and
            live events as engineered systems — not one-off spectacle. Brands
            hire us when the night has to land.
          </Reveal>
          <Reveal as="p" delayMs={70}>
            Advertising rewarded production. The next decade rewards the
            ability to refuse. طعم في زمن الـ AI، مش كمية — taste over volume.
          </Reveal>
          <Reveal as="p" delayMs={140}>
            When the ops stack is missing, I build it. That&apos;s StrikeMedia
            EMS: invitations, check-in, the logistics layer under the show. Ex
            Professor of ICT / e-learning (UK) — useful background, not the
            headline.
          </Reveal>
          <Reveal as="p" delayMs={200} className="text-paper-soft">
            Proof lives on the channel. Named clients. Named talent. No
            brochure.
          </Reveal>
        </div>
      </div>
    </section>
  )
}
