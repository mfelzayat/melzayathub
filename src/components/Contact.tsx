import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-crimson/25 bg-gradient-to-br from-ink-elevated via-ink-soft to-ink p-8 md:p-14"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-crimson/15 blur-3xl" />

        <p className="relative text-sm font-medium tracking-[0.2em] text-crimson uppercase">
          Contact
        </p>
        <h2 className="relative mt-4 max-w-lg font-display text-4xl text-snow md:text-5xl">
          Let&apos;s talk about what&apos;s next.
        </h2>
        <p className="relative mt-5 max-w-md text-lg text-mist">
          Partnerships, ventures, and thoughtful collaborations — reach out
          directly.
        </p>

        <a
          href="mailto:melzayat@strikemedia.net"
          className="relative mt-10 inline-flex items-center gap-3 rounded-full bg-crimson px-6 py-3.5 text-sm font-semibold text-snow shadow-[0_0_40px_-8px_var(--color-crimson)] transition hover:bg-crimson-dim"
        >
          <Mail size={18} strokeWidth={2} />
          melzayat@strikemedia.net
        </a>
      </motion.div>
    </section>
  )
}
