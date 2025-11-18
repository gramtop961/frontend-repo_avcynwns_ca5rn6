import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const categories = ['All', 'UI/UX', 'Branding', 'Web Design', 'Motion']

export default function Projects() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState('All')

  useEffect(() => {
    const load = async () => {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/projects`)
      const data = await res.json()
      setItems(data)
    }
    load()
  }, [])

  const filtered = active === 'All' ? items : items.filter(p => p.category === active)

  return (
    <section id="projects" className="bg-black text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)} className={`px-3 py-1 rounded border text-sm ${active===c? 'border-emerald-400 text-emerald-300' : 'border-white/20 text-zinc-300 hover:border-white/40'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, idx) => (
            <ProjectCard key={p.slug} p={p} delay={idx*0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ p, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.4 }}
      className="group relative overflow-hidden rounded-lg border border-white/10 bg-zinc-900/40 hover:bg-zinc-900/60"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.images?.[0] || 'https://picsum.photos/800/600'} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.07)_0,rgba(255,255,255,0.07)_1px,transparent_1px,transparent_2px)] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{p.title}</h3>
        <p className="text-sm text-zinc-300 line-clamp-2 mt-1">{p.short_description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags?.slice(0,3).map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded border border-white/15 text-zinc-300">{t}</span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 flex items-center justify-center">
        <button className="px-4 py-2 bg-emerald-400 text-black rounded">View details</button>
      </div>
    </motion.article>
  )
}
