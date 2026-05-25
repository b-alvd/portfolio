import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow-r" aria-hidden="true" />
      <div className="hero__glow-i" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__left">
          <div className="hero__eyebrow animate-fade-up" style={{animationDelay:'.05s'}}>
            <span className="hero__eyebrow-dot" />
            <span>Disponible - Freelance</span>
            <span className="hero__eyebrow-slash">//</span>
            <span>Full Stack</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__t1 animate-fade-up" style={{animationDelay:'.1s'}}>Développeur</span>
            <span className="hero__t2 animate-fade-up" style={{animationDelay:'.18s'}}>Web Full</span>
            <span className="hero__t3 animate-fade-up" style={{animationDelay:'.26s'}}>
              Stack_
              <span className="hero__t3-fill" aria-hidden="true">Stack_</span>
            </span>
          </h1>

          <p className="hero__sub animate-fade-up" style={{animationDelay:'.36s'}}>
            Basile ALEVEQUE - interfaces soignées,<br/>
            architectures solides. Du prototype au déploiement.
          </p>

          <div className="hero__actions animate-fade-up" style={{animationDelay:'.46s'}}>
            <a className="hero__btn hero__btn--contact"
               onClick={() => document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})}>
              Me contacter →
            </a>
            <a className="hero__btn hero__btn--primary"
               onClick={() => document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'})}>
              Voir les projets →
            </a>
            <a className="hero__btn hero__btn--ghost"
               href="https://github.com/b-alvd" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>

          <div className="hero__stats animate-fade-up" style={{animationDelay:'.56s'}}>
            {[['3+','ans d\'exp'],['3+','projets'],['FS','Full Stack']].map(([n,l]) => (
              <div key={l} className="hero__stat">
                <span className="hero__stat-n">{n}</span>
                <span className="hero__stat-l">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__right animate-fade-up" style={{animationDelay:'.3s'}}>
          <div className="hero__card">
            <div className="hero__card-row"><span className="hero__card-arrow">▸</span><span>React · Vite · TypeScript</span></div>
            <div className="hero__card-row"><span className="hero__card-arrow">▸</span><span>Next.js · Node.js · MySQL</span></div>
            <div className="hero__card-row"><span className="hero__card-arrow">▸</span><span>Lua · FiveM</span></div>
          </div>

          <div className="hero__badges">
            <span className="hero__badge hero__badge--red">Projets perso</span>
            <span className="hero__badge hero__badge--indigo">Clients</span>
            <span className="hero__badge hero__badge--cyan">Communautaires</span>
          </div>

          <div className="hero__card hero__card--status">
            <span className="hero__status-dot" />
            <span className="hero__status-code">
              available_for_work <span className="hero__status-eq">=</span> <span className="hero__status-val">true</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
