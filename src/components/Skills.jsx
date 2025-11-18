import { motion } from 'framer-motion'

const services = [
  { title: 'UI Design', desc: 'Interfaces, visual hierarchy, components' },
  { title: 'UX Research', desc: 'Interviews, testing, insights' },
  { title: 'Prototyping', desc: 'Interactive flows, micro-interactions' },
  { title: 'Design System', desc: 'Tokens, components, guidelines' },
  { title: 'Brand Identity', desc: 'Logo, color, typography, assets' },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-zinc-950 text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Skills & Services</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i*0.05, duration: 0.4 }}
              className="rounded-lg border border-white/10 bg-zinc-900/40 p-5"
            >
              <pre className="font-mono text-emerald-300 text-xs mb-3">{`[${'='.repeat(8)}]`}</pre>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-zinc-300 mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
