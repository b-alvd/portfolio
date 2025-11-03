import { Globe, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex-1">
            <section className="min-h-[100vh] flex items-center justify-center px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6 animate-fade-in">
                        <span className="inline-block px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-medium mb-6">Basile ALEVEQUE-DESSOLIN</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
                        Développeur Web<span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">Full Stack</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-15 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">Je crée des expériences web modernes et élégantes avec React, Node.js et une attention particulière au design.</p>
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
        </div>
    )
}
