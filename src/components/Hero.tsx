import { HubFrame } from './HubFrame'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden px-5 pb-14 pt-28 md:justify-center md:px-10 md:pb-20 md:pt-32 lg:px-14"
    >
      <div className="pointer-events-none absolute top-24 right-0 hidden h-[62%] w-px bg-line lg:block" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-7">
          <p className="mb-7 font-ui text-[11px] font-medium tracking-label text-copper uppercase">
            Cairo · Strike Media
          </p>

          <h1 className="font-display text-[clamp(3.2rem,11vw,7.75rem)] leading-[0.88] tracking-[-0.02em] text-paper">
            Mohamed
            <br />
            <span className="text-paper-dim">El Zayat</span>
          </h1>

          <div className="mt-9 flex max-w-xl flex-col gap-5 md:mt-11 md:flex-row md:items-start md:gap-8">
            <div className="hidden h-14 w-px shrink-0 bg-copper md:block" aria-hidden />
            <p className="font-display text-xl leading-snug text-paper md:text-[1.65rem]">
              Founder &amp; CEO, Strike Media. I build the company and the systems we run it on.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 md:mt-12">
            <a
              href="#ventures"
              className="font-ui border border-paper/20 bg-paper px-5 py-3 text-[11px] font-semibold tracking-label text-ink uppercase transition hover:border-copper hover:bg-copper"
            >
              Ventures
            </a>
            <a
              href="#contact"
              className="font-ui border border-paper/25 px-5 py-3 text-[11px] font-semibold tracking-label text-paper uppercase transition hover:border-copper hover:text-copper"
            >
              Contact
            </a>
            <p className="ms-1 font-ui text-[10px] tracking-label text-mute uppercase">
              Cairo
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 lg:col-span-5 lg:items-end lg:pb-2">
          <HubFrame className="h-auto w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]" />
          <p
            className="font-display text-lg italic text-mute md:text-xl lg:max-w-[16ch] lg:text-right"
            lang="ar"
            dir="rtl"
          >
            بناء ما يستحق أن يدوم
          </p>
        </div>
      </div>

      <div className="absolute inset-x-5 bottom-0 rule md:inset-x-10 lg:inset-x-14" />
    </section>
  )
}
