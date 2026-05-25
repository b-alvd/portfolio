import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }
    const hover = (e) => {
      const el = e.target.closest('a,button,[data-hover]')
      document.body.classList.toggle('cursor-hover', !!el)
    }
    let raf
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', hover)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', hover)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div id="cursor">
      <div id="cursor-dot"  ref={dotRef}  style={{ position:'fixed', pointerEvents:'none', zIndex:99999 }} />
      <div id="cursor-ring" ref={ringRef} style={{ position:'fixed', pointerEvents:'none', zIndex:99998 }} />
    </div>
  )
}
