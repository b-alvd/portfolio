import { useScrollReveal } from '../hooks/useScrollReveal'
import './Stack.css'

const categories = [
  { label:'Frontend', color:'red',    techs:[{name:'React / Next',level:80}, {name:'React / Vite',level:90},{name:'TypeScript',level:75},{name:'CSS / Tailwind',level:100},{name:'React Native',level:50}] },
  { label:'Backend',  color:'indigo', techs:[{name:'React / Next',level:80}, {name:'Node.js',level:80},{name:'PHP',level:70},{name:'MySQL',level:75},{name:'REST API',level:70}] },
  { label:'Outils',   color:'cyan',   techs:[{name:'Git / GitHub',level:85},{name:'Déploiement',level:80},{name:'Docker',level:15},{name:'Figma',level:100},{name:'Linux / CLI',level:70}] },
]

export default function Stack() {
  const ref = useScrollReveal()
  return (
    <section className="section stack" id="stack" ref={ref}>
      <div className="container">
        <div className="stack__header reveal-child">
          <span className="section-tag">Stack</span>
          <h2 className="section-title">Technologies</h2>
          <p className="stack__sub">// mes outils au quotidien</p>
        </div>
        <div className="stack__grid">
          {categories.map((cat,i) => (
            <div key={cat.label} className={`stack__card glow-card reveal-child stack__card--${cat.color}`} style={{'--delay':`${i*.12}s`}}>
              <div className={`stack__accent stack__accent--${cat.color}`} />
              <h3 className="stack__label">{cat.label}</h3>
              <ul className="stack__list">
                {cat.techs.map(t => (
                  <li key={t.name} className="stack__item">
                    <div className="stack__item-top">
                      <span className="stack__item-name">{t.name}</span>
                      <span className={`stack__item-pct stack__item-pct--${cat.color}`}>{t.level}%</span>
                    </div>
                    <div className="stack__bar-bg">
                      <div className={`stack__bar stack__bar--${cat.color}`} style={{'--w':`${t.level}%`}} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
