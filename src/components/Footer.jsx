import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-10 mt-auto">
            <div className="mx-auto max-w-6xl px-6 py-12 backdrop-blur-md bg-white/5 border-t border-white/10 rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h2 className="text-xl font-semibold text-violet-400 tracking-wide mb-3">&lt;b-alvd /&gt;</h2>
                        <p className="text-sm text-gray-400 leading-relaxed">Développeur web passionné, créant des expériences numériques modernes et élégantes.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <h3 className="text-sm font-semibold text-violet-300 uppercase tracking-wider mb-4">Navigation</h3>
                        <ul className="space-y-2 text-center">
                            <FooterLink to="/" label="Accueil" />
                            <FooterLink to="/projects" label="Projets" />
                            <FooterLink to="/contact" label="Contact" />
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <h3 className="text-sm font-semibold text-violet-300 uppercase tracking-wider mb-4">Me contacter</h3>
                        <div className="flex gap-4 mb-4">
                            <a href="https://github.com/b-alvd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-violet-300 transition-all duration-300 hover:scale-110" aria-label="GitHub"><Github size={22} /></a>
                            <a href="https://www.linkedin.com/in/b-alvd/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-violet-300 transition-all duration-300 hover:scale-110" aria-label="LinkedIn"><Linkedin size={22} /></a>
                            <a href="mailto:b-alvd@basilealeveque.fr" className="text-gray-300 hover:text-violet-300 transition-all duration-300 hover:scale-110" aria-label="Email">
                                <Mail size={22} />
                            </a>
                        </div>
                        <a href="mailto:b-alvd@basilealeveque.fr" className="text-sm text-gray-400 hover:text-violet-300 transition-colors">b-alvd@basilealeveque.fr</a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-500">
                            <p>© {new Date().getFullYear()} b-alvd. Tous droits réservés.</p>
                            <div className="flex gap-4">
                                <Link to="/mentions-legales" className="hover:text-violet-300 transition-colors">Mentions légales</Link>
                                <Link to="/privacy" className="hover:text-violet-300 transition-colors">Confidentialité</Link>
                            </div>
                        </div>

                        <button onClick={scrollToTop} className="group flex items-center gap-2 text-xs text-gray-400 hover:cursor-pointer hover:text-violet-300 transition-all duration-300" aria-label="Retour en haut">
                            <span>Retour en haut</span>
                            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ to, label }) {
    return (
        <li>
            <Link to={to} className="text-sm text-gray-400 hover:text-violet-300 transition-colors duration-300 inline-block">{label}</Link>
        </li>
    );
}
