import AnimatedPage from "../components/AnimatedPage";
import { motion } from "motion/react";
import { ArrowRight, Lightning, CalendarBlank, UserCheck, Sparkle, Handshake } from '@phosphor-icons/react';;

const poles = [
  {
    title: "Bureau exécutif",
    icon: UserCheck,
    roles: ["Président", "Vice-président", "Trésorier", "Secrétaire Général"],
    desc: "L'organe de direction qui coordonne et s'assure de l'exécution du projet du BDE."
  },
  {
    title: "Pôle Clubs",
    icon: Sparkle,
    roles: ["Gestion des clubs", "Suivi des activités"],
    desc: "Dirigé par le Secrétaire Général Adjoint chargé des clubs (poste pourvu par nomination avec vous les électeurs). Accompagner les présidents de clubs, débloquer les ressources et encourager la création."
  },
  {
    title: "Pôle Intégration",
    icon: Handshake,
    roles: ["Accompagnement", "Mentorat", "Accueil"],
    desc: "Dirigé par le Secrétaire Général Adjoint à l'intégration (poste pourvu par nomination avec vous les électeurs). Il se charge de vous écouter et de vous accompagner, en s'assurant que chaque nouvel étudiant trouve sa place au sein de la famille ADS."
  },
  {
    title: "Pôle Communication & Création",
    icon: Lightning,
    roles: ["Graphiste", "Community Manager", "INSIDE ADS", "Points focaux"],
    desc: "Dirigé par le Responsable Communication. Faire vivre l'image de l'école et tenir les étudiants informés en temps réel."
  },
  {
    title: "Pôle Événements",
    icon: CalendarBlank,
    roles: ["Organisation de projets", "Logistique d'événements"],
    desc: "Concevoir et réaliser les temps forts de l'année pour une vie étudiante vibrante."
  }
];

export default function Departments() {
  return (
    <AnimatedPage className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
          Structure Exécutive
        </h3>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-eyablue mb-8"
        >
          Nos <span className="text-eyayellow">Pôles</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {poles.map((pole, index) => (
            <motion.div
              key={pole.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col hover:border-eyayellow transition-all duration-300 ${index === 0 || index === 3 || index === 4 ? 'lg:col-span-1' : ''}`}
            >
              <div className="w-16 h-16 bg-eyablue rounded-2xl flex items-center justify-center mb-6 text-eyayellow">
                <pole.icon size={32} />
              </div>
              <h2 className="text-2xl font-display font-bold text-eyablue mb-4">{pole.title}</h2>
              <p className="text-gray-600 mb-6 flex-grow">{pole.desc}</p>
              
              <div className="mb-8">
                <strong className="block text-sm uppercase tracking-wider text-eyayellow font-bold mb-3">Composition / Missions</strong>
                <ul className="space-y-2">
                  {pole.roles.map(role => (
                    <li key={role} className="flex items-center gap-2 text-eyablue font-medium bg-eyawhite px-4 py-2 rounded-lg">
                      <div className="w-2 h-2 bg-eyayellow rounded-full"></div>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-eyablue p-10 rounded-3xl text-white shadow-sm flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-black mb-6">
              Choisissez-nous et construisons ensemble.
            </h2>
            <button className="px-6 py-3 bg-white text-eyablue rounded-xl font-bold text-sm shadow-lg shadow-eyablue/20 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 mx-auto">
              Choisissez-nous et construisons ensemble la vie étudiante <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
}
