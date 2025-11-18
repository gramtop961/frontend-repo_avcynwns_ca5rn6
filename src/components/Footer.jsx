export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <pre className="font-mono text-emerald-300 text-xs">{` _  _ __  __ ___ 
| \| |  \/  |_ _|
| .` + ` | |\/| || | 
|_|\_|_|  |_|___|
`}</pre>
          <div className="text-sm">
            <nav className="flex gap-3">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#skills" className="hover:text-white">Skills</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <p className="mt-3 text-zinc-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
