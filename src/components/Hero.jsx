import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onPrimaryCta }) {
  return (
    <section id="home" className="relative min-h-[90vh] pt-16 overflow-hidden bg-black text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient veil so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28">
        {/* ASCII title */}
        <motion.pre
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-[10px] md:text-xs text-emerald-300/80 leading-[1.1] mb-6 whitespace-pre overflow-x-auto"
        >{`   __  __ __  __ ___ 
  /  \/  |  \/  |_ _|
  | |\/| | |\/| || | 
  | |  | | |  | || | 
  |_|  |_|_|  |_|___|
`}</motion.pre>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          UI/UX Designer & Visual Communication
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-2xl mt-4 text-zinc-300"
        >
          MMI student crafting clean interfaces with a retro‑digital twist. I blend
          modern UX with ASCII, pixel art and dither textures to create playful yet
          functional experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 flex items-center gap-3"
        >
          <button onClick={onPrimaryCta} className="px-5 py-3 rounded bg-emerald-400 text-black font-semibold hover:translate-y-[-1px] hover:shadow-[0_0_0_3px_rgba(16,185,129,0.35)] transition-transform">
            Available for internship
          </button>
          <a href="#projects" className="px-5 py-3 rounded border border-white/30 text-white hover:bg-white/10">View my projects</a>
        </motion.div>

        {/* scroll hint */}
        <div className="mt-16 text-sm text-zinc-400 font-mono">-- scroll to explore --</div>
      </div>
    </section>
  )
}
