import { useState, useEffect } from 'react'
import { Menu, X, Mail } from 'lucide-react'

export default function Navbar({ onContactClick }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItem = (label, href) => (
    <a href={href} className="px-3 py-2 text-sm md:text-[15px] tracking-wide text-zinc-200/90 hover:text-white transition-colors">
      {label}
    </a>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-zinc-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-mono text-xs md:text-sm text-zinc-300 hover:text-white">
          {/* ASCII signature */}
          <span className="block leading-none">/** MMI • UI/UX */</span>
          <span className="block leading-none">/* portfolio */</span>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {navItem('About', '#about')}
          {navItem('Projects', '#projects')}
          {navItem('Skills', '#skills')}
          {navItem('Contact', '#contact')}
          <button onClick={onContactClick} className="ml-2 inline-flex items-center gap-2 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-300/30 hover:bg-emerald-400/20 px-3 py-2 text-sm transition-colors">
            <Mail size={16} /> Contact
          </button>
        </nav>

        <button className="md:hidden p-2 text-zinc-200" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-zinc-900/90 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            <a href="#about" onClick={() => setOpen(false)} className="py-2 text-zinc-200">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="py-2 text-zinc-200">Projects</a>
            <a href="#skills" onClick={() => setOpen(false)} className="py-2 text-zinc-200">Skills</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2 text-zinc-200">Contact</a>
            <button onClick={() => { setOpen(false); onContactClick?.() }} className="mt-2 inline-flex items-center gap-2 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-300/30 hover:bg-emerald-400/20 px-3 py-2 text-sm">
              <Mail size={16} /> Available for internship
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
