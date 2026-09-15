import { motion } from 'framer-motion'
import { ArrowUpRight, FlaskConical, Radio, Server } from 'lucide-react'

const ventures = [
  {
    name: 'Strike Media',
    role: 'Founder & CEO',
    blurb:
      'Full-stack media and growth company — strategy, creative, and digital execution for brands that need to move.',
    href: 'https://strikemedia.net',
    icon: Radio,
    external: true,
  },
  {
    name: 'StrikeMedia EMS',
    role: 'Enterprise platform',
    blurb:
      'Operations and event management system powering live production workflows at scale.',
    href: 'https://ems.strikemedia.net',
    icon: Server,
    external: true,
  },
  {
    name: 'Labs',
    role: 'Exploration',
    blurb:
      'Internal experiments across product, AI, and new market formats — where ideas earn their way forward.',
    href: '#focus',
    icon: FlaskConical,
    external: false,
  },
]

export function Ventures() {
  return (
    <section id="ventures" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm font-medium tracking-[0.2em] text-crimson uppercase">
            Ventures
          </p>
          <h2 className="mt-4 font-display text-4xl text-snow md:text-5xl">
            Companies &amp; platforms
          </h2>
          <p className="mt-4 text-lg text-mist">
            Active work spanning media, enterprise software, and exploratory
            labs.
          </p>
        </motion.div>

        <ul className="grid gap-4 md:grid-cols-3">
          {ventures.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.li
                key={v.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <a
                  href={v.href}
                  {...(v.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group flex h-full flex-col rounded-2xl border border-white/8 bg-ink-elevated/80 p-6 transition hover:border-crimson/35 hover:bg-ink-soft md:p-7"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-crimson/10 text-crimson ring-1 ring-crimson/20">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    {v.external && (
                      <ArrowUpRight
                        size={18}
                        className="text-fog transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-crimson"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-2xl text-snow">{v.name}</h3>
                  <p className="mt-1 text-xs font-medium tracking-wider text-crimson uppercase">
                    {v.role}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-mist">
                    {v.blurb}
                  </p>
                </a>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
