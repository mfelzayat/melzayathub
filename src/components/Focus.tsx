import { motion } from 'framer-motion'
import {
  GraduationCap,
  HeartPulse,
  Landmark,
  Plane,
} from 'lucide-react'

const areas = [
  {
    title: 'Fintech',
    copy: 'Payments, trust layers, and financial products that meet real market friction.',
    icon: Landmark,
  },
  {
    title: 'Healthcare',
    copy: 'Access, operations, and digital care experiences built for regional realities.',
    icon: HeartPulse,
  },
  {
    title: 'Education',
    copy: 'Learning systems and platforms that scale quality without losing clarity.',
    icon: GraduationCap,
  },
  {
    title: 'Tourism',
    copy: 'Destination brands and guest journeys — from discovery to lasting memory.',
    icon: Plane,
  },
]

export function Focus() {
  return (
    <section id="focus" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="text-sm font-medium tracking-[0.2em] text-crimson uppercase">
            Focus
          </p>
          <h2 className="mt-4 max-w-xl font-display text-4xl text-snow md:text-5xl">
            Where attention goes
          </h2>
        </motion.div>

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-2">
          {areas.map((a, i) => {
            const Icon = a.icon
            return (
              <motion.li
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="bg-ink-elevated p-7 md:p-9"
              >
                <Icon
                  size={22}
                  strokeWidth={1.6}
                  className="text-crimson"
                  aria-hidden
                />
                <h3 className="mt-5 font-display text-2xl text-snow">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">
                  {a.copy}
                </p>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
