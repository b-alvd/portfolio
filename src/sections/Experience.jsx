import { useScrollReveal } from '../hooks/useScrollReveal'
import './Experience.css'

const experiences = [
  { year:'2025 – présent', title:'Développeur Full Stack', company:'Freelance - Indépendant', desc:'QaRt (SaaS), projets clients, ... Du prototype à la prod.', tags:['React','Next.js','Vite','TypeScript','MySQL','Lua','Figma','PHP','Git'], color:'red', current:true },
  { year:'2023 – 2024', title:'Formation "Développeur Web et Web mobile"', company:'Human Booster', desc:'Obtention d\'un diplôme de niveau Bac +2.', tags:['API REST','JavaScript','UML','Linux', 'Angular', 'PHP'], color:'cyan', current:false },
  { year:'2021 – 2023', title:'Lycée', company:'', desc:'Obtention d\'un baccalauréat STI2D option ITEC (Innovation Technologique et Écoconception.', tags:[], color:'red', current:false },
]

export default function Experience() {
  const ref = useScrollReveal()
  return (
    <section className="section experience" id="experience" ref={ref}>
      <div className="container">
        <div className="exp__header reveal-child">
          <span className="section-tag">Expérience</span>
          <h2 className="section-title">Mon parcours</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp,i) => (
            <div key={i} className="tl-item reveal-child" style={{'--delay':`${i*.1}s`}}>
              <div className="tl-line">
                <div className={`tl-dot tl-dot--${exp.color} ${exp.current?'tl-dot--current':''}`} />
                {i < experiences.length-1 && <div className="tl-connector" />}
              </div>
              <div className={`tl-card glow-card tl-card--${exp.color}`}>
                <div className="tl-meta">
                  <span className={`tl-year tl-year--${exp.color}`}>{exp.year}</span>
                  {exp.current && <span className="tl-badge">● Actuel</span>}
                </div>
                <h3 className="tl-title">{exp.title}</h3>
                <p className="tl-company">{exp.company}</p>
                <p className="tl-desc">{exp.desc}</p>
                <div className="tl-tags">
                  {exp.tags.map(t => <span key={t} className={`tl-tag tl-tag--${exp.color}`}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
