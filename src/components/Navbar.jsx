import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projets' },
  { href: '#experience', label: 'Expérience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = links.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="navbar__logo-name">BASILE</span>
          <span className="navbar__logo-dot">.</span>
          <span className="navbar__logo-role">DEV</span>
        </a>

        <ul className="navbar__links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                className={`navbar__link ${active === href ? 'navbar__link--active' : ''}`}
                onClick={() => handleLink(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a className="navbar__cta" onClick={() => handleLink('#contact')}>
          Me contacter
        </a>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                className={`navbar__mobile-link ${active === href ? 'active' : ''}`}
                onClick={() => handleLink(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
