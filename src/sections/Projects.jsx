import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Projects.css'

const projects = [
  {
    id: '01',
    name: 'QaRt',
    color: 'red',
    link: 'https://qart-app.fr',
    featured: true,
    desc: 'Plateforme SaaS de menus digitaux par QR code.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'Stripe'],
    details: `Les restaurateurs ont souvent du mal à maintenir leurs menus à jour et à offrir une expérience moderne à leurs clients. QaRt répond à ce problème en permettant de créer un menu digital accessible instantanément via QR code, sans application à installer.

  L'enjeu technique principal était de construire un vrai produit SaaS : gestion des abonnements Stripe avec restrictions de features par plan, système de vérification email sécurisé pour les changements de mot de passe et d'adresse email, et un panel d'administration complet avec logs horodatés pour suivre toutes les actions.

  Côté expérience utilisateur, chaque restaurant dispose de son propre univers visuel : logo, bannière, couleurs personnalisées. Les menus sont auto-traduits selon la langue du visiteur, et un QR code est généré automatiquement par menu, téléchargeable avec logo intégré pour les plans supérieurs.

  Le tout est déployé sur qart-app.fr (frontend) et api.qart-app.fr (backend) via Plesk et Phusion Passenger.`,
  },
  {
    id: '02',
    name: 'Portfolio - Smokoue',
    color: 'indigo',
    link: 'https://smokoue-portfolio.vercel.app',
    featured: true,
    desc: 'Portfolio one-page pour Smokoue, miniamaker.',
    tags: ['React', 'Vite', 'CSS', 'Framer Motion'],
    details: `Smokoue, minimaker ayant généré plus de 7 millions de vues pour ses clients, avait besoin d'un portfolio qui reflète son univers visuel et qui mette en valeur son travail de façon immersive plutôt que de se contenter d'une simple galerie d'images.

  L'enjeu principal était de créer une expérience qui capte l'attention dès l'ouverture. J'ai conçu une animation d'intro avec un fond noir, l'avatar de Smokoue qui apparaît en zoom progressif puis s'efface, avant que deux volets s'écartent latéralement pour révéler la page.

  Le portfolio lui-même repose sur un système de défilement infini : 25 miniatures réparties sur 5 lignes qui scrollent en alternance gauche/droite à des vitesses différentes, donnant un effet vivant et dynamique. Les 17 créateurs/clients défilent également en boucle avec leur photo et leur nombre d'abonnés.

  La section avant/après était techniquement le défi le plus intéressant : un slider interactif où l'utilisateur fait glisser une barre pour révéler la miniature retravaillée par Smokoue.

  Le site est entièrement responsive avec une navbar hamburger sur mobile, et intègre les métadonnées Open Graph pour générer une preview soignée lors du partage du lien.`,
  },
  {
    id: '03',
    name: 'Nebulor',
    color: 'cyan',
    link: 'https://nebulor-web.vercel.app',
    featured: true,
    desc: 'Site vitrine (amené à se développer) pour la présentation d\'un webtoon et une boutique liée à ce dernier.',
    tags: ['React', 'Vite', 'CSS', 'Framer Motion'],
    details: `Nebulor est un webtoon de LeZorin, un thriller fantastique où une prophétie sommeillant au cœur de la forêt s’éveille le jour où le dernier enfant apparaît. L’autrice avait besoin d’un site qui reflète l’univers sombre et cosmique de son œuvre, tout en servant de vitrine pour cette dernière et une future boutique.

L’identité visuelle est tirée directement de la cover : noir profond, cyan turquoise, orange brûlé, violet. Un fond étoilé animé tourne en permanence sur toutes les pages, et la typographie du titre est préservée pour rester fidèle à l’univers graphique du webtoon.

La page Personnages propose une expérience immersive en scroll snap plein écran, chaque personnage occupe toute la hauteur de l’écran, avec son image, son rang coloré et ses capacités. Une navigation latérale permet de sauter directement à n’importe quel personnage.

La boutique présente les futurs produits: affiches, stickers, merch, goodies.`,
  },
]

export default function Projects() {
  const ref = useScrollReveal()
  const [active, setActive] = useState(null)

  const opened = projects.find(p => p.id === active)

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <div className="projects__header reveal-child">
          <span className="section-tag">Projets</span>
          <h2 className="section-title">Ce que j'ai<br/>construit</h2>
          <p className="projects__sub">// projets perso, clients, communautaires</p>
        </div>

        <div className="projects__grid">
          {projects.map((p,i) => (
            <div key={p.id} className={`pcard glow-card reveal-child pcard--${p.color} ${p.featured?'pcard--featured':''}`} style={{'--delay':`${i*.08}s`}}>
              <div className={`pcard__stripe pcard__stripe--${p.color}`} />
              <div className="pcard__head">
                <span className="pcard__num">{p.id}</span>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="pcard__ext">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                )}
              </div>
              <h3 className="pcard__name">{p.name}</h3>
              <p className="pcard__desc">{p.desc}</p>
              <div className="pcard__footer">
                <div className="pcard__tags">
                  {p.tags.map(t => <span key={t} className={`ptag ptag--${p.color}`}>{t}</span>)}
                </div>
                <button className={`pcard__more pcard__more--${p.color}`} onClick={() => setActive(p.id)}>
                  En savoir plus
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {opened && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div className={`modal modal--${opened.color}`} onClick={e => e.stopPropagation()}>
            <div className={`modal__stripe modal__stripe--${opened.color}`} />
            <div className="modal__head">
              <div>
                <span className="modal__num">{opened.id}</span>
                <h3 className="modal__name">{opened.name}</h3>
              </div>
              <button className="modal__close" onClick={() => setActive(null)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div className="modal__tags">
              {opened.tags.map(t => <span key={t} className={`ptag ptag--${opened.color}`}>{t}</span>)}
            </div>
            <div className="modal__body">
              {opened.details.split('\n').map((line, i) =>
                line.trim() === '' ? <br key={i} /> :
                line.startsWith('—') ? <p key={i} className="modal__li">{line}</p> :
                line.endsWith(':') ? <p key={i} className="modal__section">{line}</p> :
                <p key={i} className="modal__text">{line}</p>
              )}
            </div>
            {opened.link && (
              <a href={opened.link} target="_blank" rel="noopener noreferrer" className={`modal__cta modal__cta--${opened.color}`}>
                Voir le projet ↗
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
