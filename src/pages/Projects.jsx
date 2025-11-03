import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
    return (
        <div className="px-6 py-12 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-violet-400 mb-4">Mes projets</h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">Une sélection de mes réalisations les plus récentes, alliant design moderne et code de qualité.</p>
            </div>

            <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <motion.div key={project.id} variants={item}>
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

function ProjectCard({ project }) {
    return (
        <div className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-violet-300 mb-2 group-hover:text-violet-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 text-xs bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30">{tag}</span>
                    ))}
                </div>

                <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-violet-300 transition-all duration-300 hover:border-violet-400/50">
                        <Github size={16} />
                        Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30 rounded-lg text-sm text-violet-300 hover:text-violet-200 transition-all duration-300">
                        <ExternalLink size={16} />
                        Demo
                    </a>
                </div>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-violet-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
        </div>
    );
}
