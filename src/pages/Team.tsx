import { useState, useEffect } from "react";
import AnimatedPage from "../components/AnimatedPage";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Envelope, Info, ArrowSquareOut, InstagramLogo, X } from '@phosphor-icons/react';;

interface TeamMember {
  role: string;
  name: string;
  image: string;
  fallback?: string;
  tagline?: string;
  quote?: string;
  bio: string[];
  instagram?: string;
  instagramHandle?: string;
  email?: string;
}

const team: TeamMember[] = [
  {
    role: "Président",
    name: "TAGNON VIANNEY ADAMBADJI",
    image: "https://i.imgur.com/7UNON3X.jpeg",
    fallback: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600",
    tagline: "Designer d'espace & Entrepreneur créatif • Candidat à la présidence",
    quote: "Construire, avec les étudiants, une vie étudiante qui nous ressemble.",
    bio: [
      "Étudiant en troisième année de Design d’espace, designer et entrepreneur créatif, Tagnon Vianney ADAMBADJI est candidat à la présidence du BDE.",
      "À travers le design d’espace, le design d’objet et, parfois, le design graphique, il transforme ses idées en projets concrets et développe un univers créatif qui lui est propre.",
      "Fondateur de Designers Afrique, un média dédié au design et aux industries culturelles et créatives, il est également à l’initiative de plusieurs projets qui témoignent de son engagement, de sa curiosité et de sa volonté de créer autour de lui.",
      "Formé au scoutisme, il y a développé le sens du collectif, de l’organisation, de la responsabilité et du leadership.",
      "Aujourd’hui, il met sa créativité, son expérience et son engagement au service de notre équipe, avec une ambition simple : construire, avec les étudiants, une vie étudiante qui nous ressemble."
    ],
    instagram: "https://www.instagram.com/tagnon_adambadji_design?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    instagramHandle: "@tagnon_adambadji_design",
    email: "vianneytagnonadambadji@gmail.com"
  },
  {
    role: "Vice Présidente et Responsable Événementiel",
    name: "Zirwath MACHIOUDI",
    image: "https://i.imgur.com/mrtzptZ.png",
    fallback: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80&w=600",
    tagline: "Responsable filière Design d'espace • Leadership & Organisation événementielle",
    quote: "Son leadership, son sens de l’organisation et son énergie au cœur de nos événements.",
    bio: [
      "Elle est étudiante et une habituée des responsabilités collectives.",
      "De ses années d’études jusqu’à aujourd’hui, elle a régulièrement occupé des rôles de responsabilité et participé à l’organisation et à la réalisation de différents projets.",
      "Actuellement responsable de la filière Design d’espace au sein de sa promotion, elle sait mobiliser, organiser et accompagner un groupe autour d’un objectif commun.",
      "Son leadership, son sens de l’organisation et son énergie seront au cœur de la conception et de la réalisation de nos événements."
    ]
  },
  {
    role: "Secrétaire Générale",
    name: "OGBA ROSYTA",
    image: "https://i.imgur.com/vD3avq4.jpeg",
    fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    tagline: "Designer numérique, Créatrice de contenus & Entrepreneuse • Secrétaire Générale",
    quote: "Organisée, créative et engagée : constamment apprendre, progresser et repousser ses propres limites.",
    bio: [
      "Elle est étudiante en troisième année de Design numérique, créatrice de contenus et entrepreneuse.",
      "Forte de plusieurs années d’expérience dans la création de contenus et la communication, elle a déjà construit et accompagné différents projets qui lui ont permis de développer sa créativité, sa rigueur et sa capacité à s’adapter.",
      "Elle est de celles qui ne se contentent pas de faire : elle cherche constamment à apprendre, à progresser et à repousser ses propres limites.",
      "Organisée, créative et engagée, elle sera un véritable pilier dans la coordination et le suivi des projets de notre équipe."
    ],
    instagram: "https://www.instagram.com/rosyta_ogba?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    instagramHandle: "@rosyta_ogba"
  },
  {
    role: "Trésorier",
    name: "METONOU PRINCE",
    image: "https://i.imgur.com/iY81k6e.jpeg",
    fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    tagline: "Étudiant en Design numérique • Rigueur, gestion & organisation",
    quote: "Une personnalité droite et structurée, garantissant la gestion rigoureuse et transparente de nos ressources.",
    bio: [
      "Il est étudiant en troisième année de Design numérique.",
      "Rigoureux, méthodique et particulièrement attentif aux détails, il est connu pour son sérieux dans la réalisation des projets qui lui sont confiés.",
      "Son parcours et son travail de mémoire lui ont notamment permis de développer des compétences liées à la gestion, à l’organisation et au suivi de projets.",
      "Une personnalité droite et structurée, qui saura apporter la rigueur nécessaire à la gestion des ressources et des projets de notre équipe."
    ]
  },
  {
    role: "Responsable Communication",
    name: "TAVARES Brayan",
    image: "https://i.imgur.com/mKJvzme.jpeg",
    fallback: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600",
    tagline: "Créatif & Directeur Artistique • Responsable Communication",
    quote: "Donner une voix, une image et une identité singulière à nos actions.",
    bio: [
      "Il est créatif, directeur artistique et habitué à évoluer aux côtés de différents acteurs de la scène artistique et culturelle.",
      "Fort d’expériences auprès de grands artistes et de personnalités du Bénin, mais également sur des projets tournés vers l’international, il a développé une véritable sensibilité à l’image, à la direction artistique et à la communication.",
      "Ses différentes réalisations témoignent d’un univers affirmé et d’une capacité à accompagner les projets et les personnes dans la construction de leur identité.",
      "Pour notre équipe, il sera celui qui donnera une voix, une image et une identité à nos actions."
    ],
    instagram: "https://www.instagram.com/brayann_n_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    instagramHandle: "@brayann_n_"
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Close modal on Escape key & disable body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMember(null);
      }
    };

    if (selectedMember) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  return (
    <AnimatedPage className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
              Le Bureau Exécutif
            </h3>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-eyablue mb-4"
            >
              Notre <span className="text-eyayellow">Équipe</span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-amber-50/70 border border-eyayellow/40 p-4 rounded-2xl flex items-start gap-4 max-w-md shadow-sm"
          >
             <div className="text-eyablue bg-eyayellow p-2 rounded-xl border border-eyayellow/30 shadow-sm shrink-0">
               <Info size={22} />
             </div>
             <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">
               Les postes de <strong className="text-eyablue">Secrétaires Généraux Adjoints</strong> viendront par <strong className="text-eyablue">nomination</strong> et c'est avec vous, les électeurs, que nous allons les gérer.
             </p>
          </motion.div>
        </div>

        {/* Member cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-eyayellow hover:shadow-md transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6 rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-eyayellow transition-colors duration-300 shadow-inner shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    if (member.fallback) {
                      e.currentTarget.src = member.fallback;
                    }
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="w-full">
                <h2 className="text-xl font-bold text-eyablue group-hover:text-blue-900 transition-colors">
                  {member.name}
                </h2>
                <h3 className="text-[11px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-2 mb-6 leading-relaxed">
                  {member.role}
                </h3>
              </div>

              {/* Action Button: Découvrir la personne */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedMember(member);
                }}
                className="w-full mt-auto py-2.5 px-4 bg-slate-50 text-slate-700 font-bold text-xs rounded-xl border border-slate-200 group-hover:bg-eyablue group-hover:text-white group-hover:border-eyablue transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Découvrir la personne</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Note sur les postes d'adjoints par nomination */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white border-2 border-eyayellow/40 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm"
        >
          <div className="w-14 h-14 bg-eyayellow/20 text-eyablue rounded-2xl flex items-center justify-center shrink-0 border border-eyayellow/40">
            <Info size={28} className="text-eyablue" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-eyablue mb-1">
              Secrétaires Généraux Adjoints (Clubs & Intégration) : Postes par nomination
            </h4>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Ces postes ne figurent pas d'avance dans cette liste : ils viendront par <strong className="text-eyablue font-bold">nomination</strong>, et c'est directement <strong className="text-eyablue font-bold">avec vous, les électeurs et étudiants</strong>, que nous allons les gérer afin de garantir une réelle représentativité et écoute au quotidien.
            </p>
          </div>
        </motion.div>
      </div>

      {/* MODAL DÉCOUVRIR LA PERSONNE */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
            >
              {/* Header with decorative top banner */}
              <div className="bg-gradient-to-r from-eyablue via-blue-900 to-eyablue p-6 sm:p-8 text-white relative shrink-0">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Fermer"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-white/20 shadow-lg shrink-0 bg-white">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        if (selectedMember.fallback) {
                          e.currentTarget.src = selectedMember.fallback;
                        }
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <span className="inline-block px-3 py-1 bg-eyayellow text-eyablue text-xs font-black uppercase rounded-full tracking-wider mb-2">
                      {selectedMember.role}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      {selectedMember.name}
                    </h2>
                    {selectedMember.tagline && (
                      <p className="text-blue-100 text-xs sm:text-sm mt-1 font-medium">
                        {selectedMember.tagline}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Body: Bio & Details */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
                {selectedMember.bio.map((paragraph, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Highlight Callout */}
                {selectedMember.quote && (
                  <div className="p-4 bg-slate-50 border-l-4 border-eyayellow rounded-r-2xl text-slate-800 text-sm italic font-medium">
                    « {selectedMember.quote} »
                  </div>
                )}

                {/* Links & Socials */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  {selectedMember.instagram && (
                    <a
                      href={selectedMember.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all hover:shadow-lg hover:scale-[1.02]"
                    >
                      <InstagramLogo size={18} />
                      <span>{selectedMember.instagramHandle || "Suivre sur Instagram"}</span>
                      <ArrowSquareOut size={14} className="opacity-80" />
                    </a>
                  )}

                  {selectedMember.email && (
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="inline-flex items-center gap-2 px-4 py-3 bg-slate-100 hover:bg-eyablue hover:text-white text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors"
                    >
                      <Envelope size={16} />
                      <span>{selectedMember.email}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedMember(null)}
                  className="px-6 py-2.5 bg-eyablue hover:bg-blue-800 text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
}
