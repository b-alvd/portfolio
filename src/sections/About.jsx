import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

export default function About() {
  const ref = useScrollReveal()
  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container about__inner">
        <div className="about__text reveal-child">
          <span className="section-tag">À propos</span>
          <h2 className="section-title">
            Du code propre,<br/>
            des produits <span className="about__accent">qui claquent</span>
          </h2>
          <p className="about__desc">
            Passionné par le web depuis plusieurs années, je construis des interfaces soignées et des
            architectures solides. J'aime autant le détail visuel côté front que la robustesse côté back.
          </p>
          <p className="about__desc">
            SaaS de A à Z, applications web React, API. Je m'investis à fond dans chaque projet,
            de la maquette au déploiement.
          </p>
          <div className="about__tags">
            {['Full Stack','UI/UX','Freelance','Dev Web'].map(t => (
              <span key={t} className="about__tag">{t}</span>
            ))}
          </div>
          <div className="about__links">
            <a href="https://github.com/b-alvd" target="_blank" rel="noopener noreferrer" className="about__link" data-hover>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="mailto:b-alvd@basilealeveque.fr" className="about__link" data-hover>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email
            </a>
          </div>
        </div>

        <div className="about__card glow-card reveal-child" style={{'--delay':'0.15s'}}>
          <div className="about__card-header">
            <div className="about__dots">
              <span style={{background:'#ef4444'}}/><span style={{background:'#f59e0b'}}/><span style={{background:'#22c55e'}}/>
            </div>
            <span className="about__filename">basile.config.js</span>
            <span className="about__live">● LIVE</span>
          </div>
          <pre className="about__code"><code>{`export default {
  name: "Basile ALEVEQUE",
  role: "Full Stack Developer",
  location: "France",

  stack: {
    front:  ["React", "Vite", "TS", "CSS"],
    back:   ["Next.js", "Node.js", "MySQL"],
    autres: ["Lua", "FiveM"],
  },

  building: ["QaRt", "Clients"],
  learning: ["Docker"],

  available: true, // 🟢 open to work
}`}</code></pre>
        </div>
      </div>
    </section>
  )
}
