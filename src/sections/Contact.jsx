import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

const API_URL = 'https://portfolio-email-back.vercel.app/api/contact'

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(p => ({...p, [e.target.name]: e.target.value}))

  const handleSubmit = async e => {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch(API_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
      if (data.success) setForm({ name:'', email:'', subject:'', message:'' })
    } catch { setStatus('error') }
  }

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact__inner">
          <div className="contact__info reveal-child">
            <span className="section-tag">Contact</span>
            <h2 className="section-title">Parlons de<br/><span className="contact__accent">votre projet</span></h2>
            <p className="contact__desc">Une idée, un projet, une collaboration ? Je lis tous mes messages et réponds rapidement.</p>
            <div className="contact__details">
              {[
                { href:'mailto:b-alvd@basilealeveque.fr', label:'Email', value:'b-alvd@basilealeveque.fr', color:'red',
                  icon:<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                { href:'https://github.com/b-alvd', label:'GitHub', value:'github.com/b-alvd', color:'indigo',
                  icon:<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
                { href:null, label:'Localisation', value:'France', color:'cyan',
                  icon:<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> },
              ].map(d => (
                <a key={d.label} href={d.href || undefined} target={d.href?.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" className={`contact__detail contact__detail--${d.color}`} data-hover>
                  <span className={`contact__detail-icon contact__detail-icon--${d.color}`}>{d.icon}</span>
                  <div>
                    <span className="contact__detail-label">{d.label}</span>
                    <span className="contact__detail-value">{d.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact__form-wrap glow-card reveal-child" style={{'--delay':'0.15s'}}>
            {status === 'success' ? (
              <div className="contact__success">
                <div className="contact__success-icon">✅</div>
                <h3>Message envoyé !</h3>
                <p>Je vous réponds dans les plus brefs délais.</p>
                <button className="contact__reset" onClick={() => setStatus('idle')}>Envoyer un autre ↗</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="cf-row">
                  <div className="cf-field"><label>Nom</label><input type="text" name="name" placeholder="Votre nom" value={form.name} onChange={handleChange} required /></div>
                  <div className="cf-field"><label>Email</label><input type="email" name="email" placeholder="votre@email.fr" value={form.email} onChange={handleChange} required /></div>
                </div>
                <div className="cf-field"><label>Sujet</label><input type="text" name="subject" placeholder="Sujet" value={form.subject} onChange={handleChange} required /></div>
                <div className="cf-field"><label>Message</label><textarea name="message" rows={5} placeholder="Décrivez votre projet..." value={form.message} onChange={handleChange} required /></div>
                {status==='error' && <p className="cf-error">Erreur. Réessayez ou contactez-moi par email.</p>}
                <button type="submit" className="cf-submit" disabled={status==='loading'}>
                  {status==='loading' ? <><span className="cf-spin"/> Envoi...</> : <>Envoyer <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
