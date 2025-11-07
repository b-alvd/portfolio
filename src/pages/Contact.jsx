import { useState } from "react";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("https://portfolio-email-back-steel.vercel.app/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                throw new Error("Erreur serveur");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        }

        setTimeout(() => setStatus(""), 5000);
    };

    return (
        <div className="px-6 py-12 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-violet-400 mb-4">Contactez-moi</h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">Une question ? Un projet ? N'hésitez pas à me contacter, je réponds généralement sous 24h.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-6">
                    <ContactCard icon={<User size={24} />} title="Nom" content="Basile ALEVEQUE-DESSOLIN" link="https://basilealeveque.fr"/>
                    <ContactCard icon={<Mail size={24} />} title="Email" content="b-alvd@basilealeveque.fr" link="mailto:b-alvd@basilealeveque.fr" />
                    <ContactCard icon={<Phone size={24} />} title="Téléphone" content="+33 7 81 84 01 05" link="tel:+33781840105"/>
                    <ContactCard icon={<MapPin size={24} />} title="Localisation" content="Lyon, France"/>

                    <div className="backdrop-blur-md bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-violet-300 font-semibold">Disponible</span>
                        </div>
                        <p className="text-gray-400 text-sm">Actuellement disponible pour de nouveaux projets freelance</p>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-violet-400/50 transition-all duration-500">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-violet-300 mb-2">Nom complet</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all" placeholder="Jean Dupont"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-violet-300 mb-2">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all" placeholder="jean@exemple.com"/>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-violet-300 mb-2">Sujet</label>
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all" placeholder="Proposition de collaboration"/>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-violet-300 mb-2">
                                    Message
                                </label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all resize-none" placeholder="Décrivez votre projet ou votre message..."></textarea>
                            </div>

                            <button type="submit" disabled={status === "sending"} className="group w-full px-8 py-4 bg-violet-500 hover:bg-violet-600 disabled:bg-violet-500/50 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2">
                                {status === "sending" ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Envoi en cours...
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        Message envoyé !
                                    </>
                                ) : (
                                    <>
                                        Envoyer le message
                                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            {status === "sending" && (
                                <div className="p-4 bg-yellow-200 border border-yellow-300 rounded-xl text-yellow-800 text-center animate-fade-in">
                                    ⏳ Envoi en cours...
                                </div>
                            )}

                            {status === "success" && (
                                <div className="p-4 bg-green-200 border border-green-300 rounded-xl text-green-800 text-center animate-fade-in">
                                    ✅ Message envoyé ! Un email de confirmation a été envoyé à votre adresse.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="p-4 bg-red-200 border border-red-300 rounded-xl text-red-800 text-center animate-fade-in">
                                    ❌ Oups… Une erreur est survenue. Veuillez réessayer.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}

function ContactCard({ icon, title, content, link }) {
    const Wrapper = link ? 'a' : 'div';
    const props = link ? { href: link, target: link.startsWith('http') ? '_blank' : undefined, rel: link.startsWith('http') ? 'noopener noreferrer' : undefined } : {};

    return (
        <Wrapper {...props} className="block backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-[17px] hover:border-violet-400/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:-translate-y-1">
            <div className="flex items-start gap-4">
                <div className="text-violet-400 mt-1">
                    {icon}
                </div>
                <div>
                    <h3 className="text-violet-300 font-semibold mb-1">{title}</h3>
                    <p className="text-gray-400 text-sm">{content}</p>
                </div>
            </div>
        </Wrapper>
    );
}
