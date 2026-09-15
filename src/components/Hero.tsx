import { motion, useReducedMotion } from 'motion/react'
import { StrikeMark } from './StrikeMark'

export function Hero() {
  const reduce = useReducedMotion()
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        }

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden px-5 pb-16 pt-28 md:justify-center md:px-10 md:pb-24 md:pt-32 lg:px-14"
    >
      <div className="relative mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-8">
          <motion.p
            className="mb-6 font-ui text-[11px] font-medium tracking-label text-strike uppercase"
            {...enter(0.05)}
          >
            Cairo · Strike Media
          </motion.p>

          <motion.h1
            className="font-display fluid-display font-bold text-paper"
            {...enter(0.12)}
          >
            Mohamed
            <br />
            <span className="text-paper-soft/80">El Zayat</span>
          </motion.h1>

          <motion.div
            className="mt-8 flex max-w-2xl flex-col gap-5 md:mt-10 md:flex-row md:items-start md:gap-7"
            {...enter(0.22)}
          >
            <div
              className="hidden h-16 w-px shrink-0 bg-strike md:block"
              aria-hidden
            />
            <div>
              <p className="font-display text-xl font-medium leading-snug text-paper md:text-[1.55rem]">
                Co-Founder &amp; CEO, Strike Media · Producer
              </p>
              <p className="mt-3 text-base leading-relaxed text-mute md:text-lg">
                I stage the launch nights and films brands hire for — Egyptian
                A-list, real estate, auto, tech.{' '}
                <span className="text-paper-soft">Taste over volume</span> in
                the AI age.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3 md:mt-12"
            {...enter(0.32)}
          >
            <a
              href="#work"
              className="font-ui border border-strike bg-strike px-6 py-3 text-[11px] font-semibold tracking-label text-paper uppercase transition hover:bg-strike-bright hover:border-strike-bright strike-glow"
            >
              Work
            </a>
            <a
              href="#contact"
              className="font-ui border border-line px-6 py-3 text-[11px] font-semibold tracking-label text-paper uppercase transition hover:border-strike hover:text-strike"
            >
              Contact
            </a>
            <a
              href="https://www.youtube.com/@mfelzayat"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-1 font-ui text-[10px] tracking-label text-mute uppercase transition hover:text-strike"
            >
              YouTube ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col items-start gap-6 lg:col-span-4 lg:items-end lg:pb-2"
          {...enter(0.28)}
        >
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-full bg-strike/20 blur-3xl"
              aria-hidden
            />
            <StrikeMark className="relative h-36 w-36 sm:h-44 sm:w-44 lg:h-48 lg:w-48" />
          </div>
          <p
            className="font-display text-lg font-medium text-mute md:text-xl lg:max-w-[16ch] lg:text-right"
            lang="ar"
            dir="rtl"
          >
            طعم في زمن الـ AI، مش كمية
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-x-5 bottom-0 rule md:inset-x-10 lg:inset-x-14" />
    </section>
  )
}
