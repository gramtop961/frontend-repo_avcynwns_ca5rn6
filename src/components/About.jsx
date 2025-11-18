import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 })
  }, [inView])

  return (
    <section id="about" ref={ref} className="relative bg-zinc-950 text-zinc-100 py-20 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={controls} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="w-40 h-40 md:w-56 md:h-56 rounded overflow-hidden border border-white/10 shadow-xl bg-zinc-900">
              {/* Pixelated avatar using CSS image-rendering */}
              <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&q=60&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover" style={{ imageRendering: 'pixelated' }} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">About me</h2>
            <p className="mt-4 text-zinc-300">
              I’m an MMI student focused on UI/UX design and visual communication. My work mixes
              clean, accessible interfaces with playful retro codes: ASCII textures, pixel accents,
              and subtle glitches.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 font-mono text-sm">
              <SkillBar label="UI Design" value={90} />
              <SkillBar label="UX Research" value={80} />
              <SkillBar label="Prototyping" value={85} />
              <SkillBar label="Design System" value={75} />
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {['Figma','Adobe XD','Illustrator','Photoshop','After Effects'].map(t => (
                <span key={t} className="px-2 py-1 rounded border border-white/15 text-zinc-300">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ label, value }) {
  return (
    <div>
      <div className="flex justify-between mb-1"><span>{label}</span><span>{value}%</span></div>
      <div className="h-2 bg-zinc-800 rounded">
        <div className="h-2 bg-emerald-400 rounded" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
