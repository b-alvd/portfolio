import { ArrowRight, Code, Download, Globe, Mail, Palette, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex-1">
            <section className="min-h-[100vh] -mt-10 flex items-center justify-center px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6 animate-fade-in">
                        <span className="inline-block px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-medium mb-6">Basile ALEVEQUE-DESSOLIN</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
                        Développeur Web<span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">Full Stack</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-15 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">Je développe des interfaces web modernes et esthétiques, en accordant une grande importance à l’expérience utilisateur et au design.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                        <Link to="/projects" className="group px-8 py-4 bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30 hover:border-violet-400 rounded-xl text-violet-300 font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2">
                            <Globe size={20} />
                            Voir mes projets
                        </Link>
                        <Link to="/contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-400/50 rounded-xl text-gray-300 hover:text-violet-300 font-medium transition-all duration-300 flex items-center justify-center gap-2">
                            <Mail size={20} />
                            Me contacter
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 border-y border-white/10 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <StatCard icon={<Code size={32} />} number="3+" label="Projets réalisés" />
                    <StatCard icon={<Palette size={32} />} number="15+" label="Technologies utilisées"/>
                    <StatCard icon={<Rocket size={32} />} number="8+" label="D'années d'expérience en développement"/>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-violet-400 mb-6">
                                À propos de moi
                            </h2>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                Passionné par le développement web depuis plusieurs années, je me spécialise dans la création d'applications React modernes et performantes.
                            </p>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Mon objectif est de combiner design élégant et code de qualité pour créer des expériences utilisateur exceptionnelles.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["React", "Next.js", "Tailwind CSS", "TypeScript", "SQL"].map((tech) => (
                                    <span key={tech} className="px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-lg text-violet-300 text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-violet-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                                <div className="space-y-6">
                                    <SkillBar skill="Frontend" percentage={90} />
                                    <SkillBar skill="Backend" percentage={80} />
                                    <SkillBar skill="UI/UX Design" percentage={70} />
                                    <SkillBar skill="Database" percentage={80} />
                                    <SkillBar skill="Déploiement" percentage={75} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center backdrop-blur-md bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-3xl p-12">
                    <h2 className="text-4xl font-bold text-violet-400 mb-4">
                        Travaillons ensemble
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        Un projet en tête ? Discutons-en ensemble et créons quelque chose d'incroyable.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="group px-8 py-4 bg-violet-500 hover:bg-violet-600 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2">
                            Démarrer un projet
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a href="/cv_basile_alevequedessolin.pdf" download="cv_basile_alevequedessolin.pdf" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-400/50 rounded-xl text-gray-300 hover:text-violet-300 font-medium transition-all duration-300 flex items-center justify-center gap-2">
                            <Download size={20} />
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
            </section>

            <style>
                {`
                    @keyframes fade-in {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes fade-in-up {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in {
                        animation: fade-in 0.8s ease-out forwards;
                    }
                    .animate-fade-in-up {
                        animation: fade-in-up 0.8s ease-out forwards;
                    }
                    .animation-delay-200 {
                        animation-delay: 0.2s;
                        opacity: 0;
                    }
                    .animation-delay-400 {
                        animation-delay: 0.4s;
                        opacity: 0;
                    }
                `}
            </style>
        </div>
    )
}

function StatCard({ icon, number, label }) {
    return (
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-violet-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:-translate-y-2">
            <div className="text-violet-400 mb-4 flex justify-center">
                {icon}
            </div>
            <div className="text-4xl font-bold text-violet-300 mb-2">
                {number}
            </div>
            <div className="text-gray-400 text-sm">
                {label}
            </div>
        </div>
    );
}

function SkillBar({ skill, percentage }) {
    return (
        <div>
            <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>{skill}</span>
                <span>{percentage}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
