import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/10 rounded-b-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <h1 className="text-xl font-semibold text-violet-400 tracking-wide">&lt;b-alvd /&gt;</h1>
                <ul className="flex gap-10 text-s">
                    <li>
                        <NavLink to="/" className={({ isActive }) => `transition-colors duration-300 ${isActive ? "text-violet-400" : "text-gray-300 hover:text-violet-300"}`}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => `transition-colors duration-300 ${isActive ? "text-violet-400" : "text-gray-300 hover:text-violet-300"}`}>
                            Projets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => `transition-colors duration-300 ${isActive ? "text-violet-400" : "text-gray-300 hover:text-violet-300"}`}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
