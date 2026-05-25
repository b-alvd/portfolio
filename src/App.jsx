import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Stack from './sections/Stack'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Ticker from './components/Ticker'
import ScrollTop from './components/ScrollTop'
import Loader from './components/Loader'
import './App.css'

export default function App() {
  const [loading, setLoading] = useState(true)

  // Glow cards mouse tracking
  useEffect(() => {
    const handler = (e) => {
      document.querySelectorAll('.glow-card').forEach(card => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
        card.style.setProperty('--my', `${e.clientY - rect.top}px`)
      })
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
