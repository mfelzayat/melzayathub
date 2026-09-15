export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden px-5 pb-16 pt-28 md:justify-center md:px-10 md:pb-24 md:pt-32 lg:px-14"
    >
      {/* Asymmetric frame marks — not blurs */}
      <div
        className="pointer-events-none absolute top-24 right-0 hidden h-[70%] w-px bg-line lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-28 right-8 hidden font-ui text-[10px] tracking-label text-mute uppercase lg:block"
        aria-hidden
      >
        Issue / Hub
        <br />
        Vol. 2026
      </div>

      <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-8">
          <p className="mb-8 font-ui text-[11px] font-medium tracking-label text-copper uppercase">
            Cairo · Strike Media
          </p>

          <h1 className="font-display text-[clamp(3.4rem,12vw,8.5rem)] leading-[0.88] tracking-[-0.02em] text-paper">
            Mohamed
            <br />
            <span className="text-paper-dim">El Zayat</span>
          </h1>

          <div className="mt-10 flex max-w-2xl flex-col gap-6 md:mt-12 md:flex-row md:items-start md:gap-10">
            <div className="hidden h-16 w-px shrink-0 bg-copper md:block" aria-hidden />
            <p className="font-display text-2xl leading-snug text-paper md:text-[1.85rem]">
              I build media companies and the systems underneath them.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-8 lg:col-span-4 lg:items-end lg:pb-3">
          <p
            className="font-display text-right text-xl italic text-mute md:text-2xl lg:max-w-[14ch]"
            lang="ar"
            dir="rtl"
          >
            بناء ما يستحق أن يدوم
          </p>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="#ventures"
              className="font-ui border border-paper/20 bg-paper px-5 py-3 text-[11px] font-semibold tracking-label text-ink uppercase transition hover:bg-copper hover:border-copper"
            >
              Ventures
            </a>
            <a
              href="#contact"
              className="font-ui border border-paper/25 px-5 py-3 text-[11px] font-semibold tracking-label text-paper uppercase transition hover:border-copper hover:text-copper"
            >
              Contact
            </a>
          </div>
          <p className="font-ui text-[10px] tracking-label text-mute uppercase lg:text-right">
            Founder &amp; CEO
          </p>
        </div>
      </div>

      <div className="absolute inset-x-5 bottom-0 rule md:inset-x-10 lg:inset-x-14" />
    </section>
  )
}
