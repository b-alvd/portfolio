import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen text-gray-100 overflow-x-hidden bg-[#080808] bg-noise">
        <div className="pointer-events-none fixed -left-32 -top-32 sm:-left-64 sm:-top-48 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] rounded-full blur-[160px] sm:blur-[220px] opacity-30 bg-gradient-to-tr from-indigo-500 via-violet-500 to-transparent mix-blend-screen animate-blob"></div>
        <div className="pointer-events-none fixed -right-32 bottom-8 sm:-right-64 sm:bottom-16 w-[450px] h-[450px] sm:w-[800px] sm:h-[800px] rounded-full blur-[180px] sm:blur-[240px] opacity-25 bg-gradient-to-br from-purple-700 via-violet-500 to-transparent mix-blend-screen animate-blob animation-delay-2000"></div>

        <Header />

        <main className="relative z-10 flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <style>{`
          .animation-delay-2000 { animation-delay: 2s; }
          @keyframes blob {
            0%,100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-20px) scale(1.05); }
          }
          .animate-blob { animation: blob 12s ease-in-out infinite; }
        `}</style>
      </div>
    </BrowserRouter>
  );
}

export default App;
