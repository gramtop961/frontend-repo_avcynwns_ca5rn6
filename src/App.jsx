import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const contactRef = useRef(null)
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onContactClick={scrollToContact} />
      <Hero onPrimaryCta={scrollToContact} />
      <About />
      <Projects />
      <Skills />
      <Contact ref={contactRef} />
      <Footer />

      {/* Sticky CTA */}
      <button onClick={scrollToContact} className="fixed bottom-5 right-5 z-40 px-4 py-2 rounded bg-emerald-400 text-black font-semibold shadow-lg hover:translate-y-[-1px] transition-transform">
        Contact me
      </button>
    </div>
  )
}

export default App
