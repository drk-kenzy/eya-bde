import { Link, useLocation } from "react-router-dom";
import { List, X } from '@phosphor-icons/react';;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Notre Équipe", path: "/equipe" },
  { name: "Projet du BDE", path: "/projet" },
  { name: "Clubs", path: "/clubs" },
  { name: "Pôles", path: "/poles" },
  { name: "Inside ADS", path: "/media" },
  { name: "Pourquoi EYA ?", path: "/pourquoi-nous" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 h-20 flex items-center shrink-0 shadow-sm">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4 z-50">
          <Link to="/" className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="https://i.imgur.com/E7Ixr8T.png" alt="EYA BDE Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">    
              <h1 className="font-bold text-lg tracking-tight leading-none text-eyablue">EYA BDE</h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Africa Design School</p>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-600 uppercase tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-eyablue transition-colors ${
                location.pathname === link.path
                  ? "text-eyablue border-b-2 border-eyayellow"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/pourquoi-nous"
            className="ml-4 bg-eyablue text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_4px_14px_0_rgba(30,58,138,0.39)] hover:bg-blue-800 transition-all hover:shadow-[0_6px_20px_rgba(30,58,138,0.23)] hover:-translate-y-[1px]"
          >
            Rejoindre l'aventure
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 p-2 text-eyablue"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-eyablue z-40 flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xl font-display font-medium ${
                    location.pathname === link.path ? "text-eyayellow" : "text-eyawhite"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/projet"
                className="mt-4 px-6 py-3 bg-eyayellow text-eyablue text-center rounded-full font-bold text-lg"
              >
                Notre Projet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
