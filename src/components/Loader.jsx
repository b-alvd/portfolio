import { useEffect, useState } from 'react'
import './Loader.css'

export default function Loader({ onDone }) {
  const [phase, setPhase] = useState('enter') // enter → progress → glitch → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('progress'), 300)
    const t2 = setTimeout(() => setPhase('glitch'), 1800)
    const t3 = setTimeout(() => setPhase('exit'), 2200)
    const t4 = setTimeout(() => onDone(), 2800)
    return () => [t1,t2,t3,t4].forEach(clearTimeout)
  }, [])

  return (
    <div className={`loader loader--${phase}`}>
      {/* Glitch layers */}
      <div className="loader__glitch-r" aria-hidden="true" />
      <div className="loader__glitch-b" aria-hidden="true" />

      <div className="loader__content">
        <div className="loader__logo">
          <img src="/logo.webp" alt="Basile" className="loader__logo-img" />
        </div>

        <div className="loader__bar-wrap">
          <div className="loader__bar" />
        </div>

        <p className="loader__label">
          <span className="loader__label-text">Chargement</span>
          <span className="loader__dots">
            <span>.</span><span>.</span><span>.</span>
          </span>
        </p>
      </div>

      {/* Scanlines */}
      <div className="loader__scanlines" aria-hidden="true" />
    </div>
  )
}
