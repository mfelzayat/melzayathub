import { Reveal } from './Reveal'

const areas = ['Fintech', 'Healthcare', 'Education', 'Tourism']

export function Focus() {
  return (
    <section id="focus" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-12 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-ui text-[11px] font-medium tracking-label text-copper uppercase">
              04 — Focus
            </p>
            <h2 className="mt-4 font-display text-4xl text-paper md:text-5xl">
              Where the work points
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mute md:text-right">
            Four sectors. One operating instinct — build for markets that move
            people and capital.
          </p>
        </Reveal>

        {/* Tight strip — not four identical cards */}
        <Reveal>
          <ul className="flex flex-col border-y border-line sm:flex-row sm:divide-x sm:divide-line">
            {areas.map((title, i) => (
              <li
                key={title}
                className="flex flex-1 items-baseline justify-between gap-4 border-b border-line px-0 py-6 last:border-b-0 sm:flex-col sm:justify-center sm:gap-3 sm:border-b-0 sm:px-6 sm:py-10 md:px-8"
              >
                <span className="font-ui text-[10px] tracking-label text-copper uppercase">
                  0{i + 1}
                </span>
                <span className="font-display text-2xl text-paper md:text-3xl">
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
