import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end px-5 pb-20 pt-32 md:justify-center md:px-8 md:pb-24 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-crimson/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-crimson/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 text-sm font-medium tracking-[0.2em] text-crimson uppercase"
        >
          Cairo · Strike Media
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.75rem,10vw,6.5rem)] leading-[0.95] font-medium tracking-tight text-snow text-balance"
        >
          Mohamed
          <br />
          El Zayat
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-lg text-mist md:text-xl"
        >
          Founder &amp; CEO, Strike Media.
          <br />
          Building media, platforms, and ventures across the region.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-4 font-display text-xl italic text-fog md:text-2xl"
          lang="ar"
          dir="rtl"
        >
          بناء ما يستحق أن يدوم
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#ventures"
            className="rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-snow shadow-[0_0_40px_-8px_var(--color-crimson)] transition hover:bg-crimson-dim"
          >
            Explore ventures
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-snow backdrop-blur transition hover:border-white/30 hover:bg-white/10"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  )
}
