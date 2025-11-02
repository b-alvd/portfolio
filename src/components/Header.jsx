import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className={`mx-auto max-w-6xl flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-500 ${open ? "rounded-b-none" : "rounded-b-2xl"}`}>
                <h1 className="text-xl font-semibold text-violet-400 tracking-wide">
                    &lt;b-alvd /&gt;
                </h1>

                <button className="sm:hidden text-gray-300 hover:text-violet-300 transition-colors" onClick={() => setOpen(!open)}>
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>

                <ul className="hidden sm:flex gap-10 text-sm list-none">
                    <NavItem to="/" label="Accueil" />
                    <NavItem to="/projects" label="Projets" />
                    <NavItem to="/contact" label="Contact" />
                </ul>
            </nav>

            {/* Menu mobile */}
            <div className="sm:hidden backdrop-blur-md">
                <div className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                        <div className="flex flex-col items-center gap-4 py-6 bg-white/5 border-b border-white/10">
                            <ul className="flex flex-col gap-4 text-[1.15rem] list-none">
                                <NavItem to="/" label="Accueil" onClick={() => setOpen(false)} />
                                <NavItem to="/projects" label="Projets" onClick={() => setOpen(false)} />
                                <NavItem to="/contact" label="Contact" onClick={() => setOpen(false)} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function NavItem({ to, label, onClick }) {
    return (
        <li>
            <NavLink to={to} onClick={onClick} className={({ isActive }) => `transition-colors duration-300 ${isActive ? "text-violet-400" : "text-gray-300 hover:text-violet-300"}`}>
                {label}
            </NavLink>
        </li>
    );
}