import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <p className="text-sm font-medium tracking-[0.2em] text-crimson uppercase">
            About
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-snow md:text-5xl">
            Operator.
            <br />
            Builder.
            <br />
            Founder.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-lg leading-relaxed text-mist md:col-span-8 md:text-xl"
        >
          <p>
            Mohamed El Zayat leads Strike Media from Cairo — shaping brands,
            digital products, and growth systems for ambitious organizations.
          </p>
          <p>
            His work sits at the intersection of media, technology, and
            market-building: from enterprise platforms to labs that test what
            comes next.
          </p>
          <p className="text-snow/90">
            Clarity over noise. Substance over spectacle. Long games over
            shortcuts.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
