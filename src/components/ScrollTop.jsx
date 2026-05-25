import { useEffect, useRef, useState } from 'react'
import './ScrollTop.css'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const circleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docH = document.documentElement.scrollHeight - window.innerHeight
      const pct = docH > 0 ? scrollY / docH : 0

      setVisible(scrollY > 200)
      setProgress(pct)

      if (circleRef.current) {
        const circumference = circleRef.current.getTotalLength()
        circleRef.current.style.strokeDasharray = circumference
        circleRef.current.style.strokeDashoffset = circumference * (1 - pct)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`scroll-top ${visible ? 'scroll-top--visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retour en haut"
    >
      <svg className="scroll-top__svg" viewBox="0 0 44 44" fill="none">
        {/* Track */}
        <circle cx="22" cy="22" r="19" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
        {/* Progress */}
        <circle
          ref={circleRef}
          cx="22" cy="22" r="19"
          stroke="url(#scrollGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          transform="rotate(-90 22 22)"
        />
        <defs>
          <linearGradient id="scrollGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff3d00" />
            <stop offset="100%" stopColor="#6c63ff" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="scroll-top__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  )
}
