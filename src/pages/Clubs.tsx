import AnimatedPage from "../components/AnimatedPage";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, MusicNotes, Briefcase, Palette, Users, Scissors, MapTrifold, CheckCircle, Barbell } from '@phosphor-icons/react';;
import { useState } from "react";

// Placeholder data for clubs - all 9 clubs required
const clubsData = [
  {
    name: "English Club",
    icon: Users,
    description: "Améliorer sa pratique de l'anglais à travers des débats, des jeux et des échanges.",
    activities: ["Sessions de speaking", "Movie nights EN", "Débats thématiques"],
    project: "English Day au campus",
  },
  {
    name: "Club Lecture",
    icon: BookOpen,
    description: "Découvrir, partager et analyser des œuvres littéraires classiques et modernes.",
    activities: ["Café littéraire mensuel", "Échange de livres", "Rencontres d'auteurs"],
    project: "Création d'une bibliothèque participative",
  },
  {
    name: "Club Musique",
    icon: MusicNotes,
    description: "Réunir les passionnés de musique pour jouer ensemble et animer le campus.",
    activities: ["Jam sessions", "Répétitions hebdos", "Ateliers instruments"],
    project: "Concert de fin d'année",
  },
  {
    name: "Club de Danse",
    icon: Users,
    description: "Explorer divers styles de danse, chorégraphies et performances urbaines ou classiques.",
    activities: ["Cours hebdos", "Création chorégraphique", "Battles amicaux"],
    project: "Spectacle de danse au Gala",
  },
  {
    name: "Club Entrepreneurs",
    icon: Briefcase,
    description: "Accompagner les étudiants dans le développement de leurs projets entrepreneuriaux.",
    activities: ["Masterclass pro", "Ateliers business plan", "Pitch sessions"],
    project: "Concours de Pitch ADS",
  },
  {
    name: "Club Tourisme",
    icon: MapTrifold,
    description: "Découvrir le patrimoine local et organiser des sorties culturelles.",
    activities: ["Sorties découvertes", "Randonnées", "Ateliers culturels"],
    project: "Voyage d'étude annuel",
  },
  {
    name: "Club Sport",
    icon: Barbell,
    description: "Organiser des sessions sportives, des tournois et promouvoir le bien-être.",
    activities: ["Matchs inter-classes", "Sessions fitness", "Initiation sportive"],
    project: "Organisation des Sport Day's",
  },
  {
    name: "Club d'Art",
    icon: Palette,
    description: "Un espace pour la création visuelle, la peinture, le dessin et l'expression.",
    activities: ["Séances plein air", "Défis de création", "Ateliers techniques"],
    project: "Grande exposition campus",
  },
  {
    name: "Club Crochet & Création",
    icon: Scissors,
    description: "S'initier aux arts manuels, à la mode DIY et partager des techniques créatives.",
    activities: ["Ateliers crochet", "Customisation", "Tricot social"],
    project: "Défilé de mode DIY",
  }
];

export default function Clubs() {
  const [showToast, setShowToast] = useState(false);

  const handleJoinClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <AnimatedPage className="pt-24 pb-20">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-eyablue text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50 border border-white/10"
          >
            <CheckCircle className="text-eyayellow" size={24} />
            <div>
               <p className="font-bold">Vote pour le BDE EYA !</p>
               <p className="text-xs text-white/80">Rejoins-nous après les élections pour intégrer ce club.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
          Vie associative
        </h3>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-eyablue mb-8"
        >
          Nos <span className="text-eyayellow">Clubs</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {clubsData.map((club, index) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col h-full hover:border-eyayellow transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-eyablue rounded-xl flex items-center justify-center text-eyayellow shrink-0">
                    <club.icon size={24} />
                 </div>
                 <h2 className="text-xl font-bold text-eyablue">{club.name}</h2>
              </div>
              
              <p className="text-slate-600 text-sm mb-6 flex-grow">{club.description}</p>
              
              <div className="space-y-4 mb-8 text-sm">
                <div>
                  <strong className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Activités</strong>
                  <div className="flex flex-wrap gap-2">
                    {club.activities.map(act => (
                      <span key={act} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold">
                        {act}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <strong className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Projet Final</strong>
                  <span className="font-semibold text-eyablue text-xs">{club.project}</span>
                </div>
              </div>

              <button 
                onClick={handleJoinClick}
                className="w-full py-3 bg-white border-2 border-eyablue text-eyablue rounded-xl font-bold text-sm hover:bg-eyablue hover:text-white transition-colors duration-300 mt-auto shadow-sm active:scale-95"
              >
                Rejoindre ce club
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}
