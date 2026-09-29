import AnimatedPage from "../components/AnimatedPage";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChatCircle, Microphone, ArrowSquareOut, Plus, Sparkle, CaretDown, Handshake, ShareNetwork } from '@phosphor-icons/react';;

export default function Project() {
  const [activeSection, setActiveSection] = useState<number | null>(0);

  return (
    <AnimatedPage className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
            Notre Philosophie
          </h3>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-eyablue mb-4"
          >
            Projet du <span className="text-eyayellow">BDE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Découvrez notre vision structurée autour de trois piliers fondamentaux.
          </motion.p>
        </div>

        <div className="space-y-6">
          {/* Bloc 1: Structuration & Organisation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
          >
            <button 
              className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              onClick={() => setActiveSection(activeSection === 1 ? null : 1)}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-eyablue rounded-xl flex items-center justify-center text-eyayellow text-sm font-bold shrink-0">H1</div>
                <div>
                  <h2 className="text-lg font-bold text-eyablue">Structuration & Organisation</h2>
                  <p className="text-slate-500 text-xs mt-1">Créer des structures internes pour faire vivre durablement la vie étudiante.</p>
                </div>
              </div>
              <CaretDown className={`transform transition-transform duration-300 text-slate-400 ${activeSection === 1 ? "rotate-180 text-eyablue" : ""}`} size={24} />
            </button>
            <AnimatePresence>
              {activeSection === 1 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 border-t border-slate-100 bg-slate-50">
                    <div>
                      <h3 className="text-xl font-bold text-eyablue mb-4 border-b-2 border-eyayellow inline-block pb-1">Les Clubs Actuils</h3>
                      <ul className="space-y-3">
                        {["English Club", "Club Lecture", "Club Musique", "Club de Danse", "Club Entrepreneurs", "Club Tourisme", "Club Sport", "Club d'Art", "Club Crochet & Création"].map((club) => (
                          <li key={club} className="flex items-center gap-2 text-gray-700">
                            <Plus size={16} className="text-eyayellow" /> {club}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-eyablue mb-4 border-b-2 border-eyayellow inline-block pb-1">Objectifs par Club</h3>
                      <ul className="space-y-4">
                        <li className="bg-eyawhite p-4 rounded-xl border border-gray-100 text-eyablue font-medium flex gap-3">
                          <span className="font-bold text-eyayellow text-xl">01.</span> 3 réunions physiques minimum
                        </li>
                        <li className="bg-eyawhite p-4 rounded-xl border border-gray-100 text-eyablue font-medium flex gap-3">
                          <span className="font-bold text-eyayellow text-xl">02.</span> 1 réunion en ligne
                        </li>
                        <li className="bg-eyawhite p-4 rounded-xl border border-gray-100 text-eyablue font-medium flex gap-3">
                          <span className="font-bold text-eyayellow text-xl">03.</span> 1 projet concret par club
                        </li>
                        <li className="bg-eyawhite p-4 rounded-xl border border-gray-100 text-eyablue font-medium flex gap-3">
                          <span className="font-bold text-eyayellow text-xl">04.</span> 1 restitution annuelle
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Bloc 2: Animation & Expérience ADS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
          >
            <button 
              className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              onClick={() => setActiveSection(activeSection === 2 ? null : 2)}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-eyablue rounded-xl flex items-center justify-center text-eyayellow text-sm font-bold shrink-0">H2</div>
                <div>
                  <h2 className="text-lg font-bold text-eyablue">Activités d'animation et d'expérience</h2>
                  <p className="text-slate-500 text-xs mt-1">Rymer l'année avec des événements marquants et fédérateurs.</p>
                </div>
              </div>
              <CaretDown className={`transform transition-transform duration-300 text-slate-400 ${activeSection === 2 ? "rotate-180 text-eyablue" : ""}`} size={24} />
            </button>
            <AnimatePresence>
              {activeSection === 2 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 md:p-8 border-t border-slate-100 bg-slate-50">
                    <div className="mb-10">
                      <h3 className="text-xl font-bold text-eyablue mb-4 border-b-2 border-eyayellow inline-block pb-1">Les Événements Clés</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Week-end d'intégration", "ADS Day", "Miss ADS", "Sports Day", "Marché de Noël", "Journées à concepts", "Gala des Juniors", "Théâtre", "Performances", "Expositions", "Pitchs projets"].map((evt) => (
                          <span key={evt} className="px-4 py-2 bg-eyablue/5 text-eyablue rounded-full text-sm font-medium">
                            {evt}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-eyablue mb-6 border-b-2 border-eyayellow inline-block pb-1">Frise Chronologique</h3>
                    <div className="relative py-8 pl-12 md:pl-0 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[11px] md:before:left-1/2 md:before:-ml-[1px] before:w-[2px] before:bg-slate-200">
                      {[
                        { month: "Octobre", evt: "Octobre Rose", desc: "Une journée de sensibilisation et de dépistage du cancer du sein suivie d'un moment de détente." },
                        { month: "Novembre", evt: "Week-end d'Intégration (WEI)", desc: "Un séjour de cohésion à Grand Popo incluant parrainage, animations de clubs et soirées DJ." },
                        { month: "Décembre", evt: "Marché de Noël", desc: "Un marché convivial accompagné du jeu de l'ami invisible et d'une remise de cadeaux." },
                        { month: "Janvier", evt: "ADS Day", desc: "Une journée de réseautage à la plage pour favoriser les rencontres entre les différentes filières." },
                        { month: "Février", evt: "Sport Day's", desc: "Cinq jours de tournois sportifs variés réunissant étudiants, professeurs et administration." },
                        { month: "14 Février", evt: "Saint-Valentin ADS", desc: "Une célébration de l'amitié et des relations avec distribution de cadeaux symboliques." },
                        { month: "Mars", evt: "Journée des droits de la femme", desc: "Des échanges avec des femmes d'impact et une célébration des femmes de l'école." },
                        { month: "Avril", evt: "Miss et Mister ADS", desc: "Un concours où les candidats vont représenter leur filière." },
                        { month: "Juin", evt: "Gala des juniors", desc: "Une grande soirée festive de fin d'année ouverte au public avec des remises de prix." },
                      ].map((item, i) => (
                        <motion.div 
                          key={item.month} 
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="relative mb-10 md:w-1/2 md:odd:ml-0 md:even:ml-auto md:odd:pr-12 md:even:pl-12 md:odd:text-right flex flex-col md:odd:items-end group"
                        >
                          <div className="hidden md:block absolute top-1/2 -mt-3 w-6 h-6 rounded-full bg-slate-200 border-4 border-white z-10 md:odd:-right-3 md:even:-left-3 shadow transition-colors duration-300 group-hover:bg-eyayellow"></div>
                          <div className="md:hidden absolute top-1/2 -mt-3 w-6 h-6 rounded-full bg-slate-200 border-4 border-white z-10 left-[-35px] shadow transition-colors duration-300 group-hover:bg-eyayellow"></div>
                          
                          <div className="bg-white hover:bg-slate-50 transition-all duration-300 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-eyayellow/50 w-full md:w-[95%] transform group-hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-eyayellow transition-colors duration-300 md:odd:right-0 md:odd:left-auto"></div>
                            <span className="text-slate-400 group-hover:text-eyayellow transition-colors duration-300 font-bold text-sm uppercase tracking-wider">{item.month}</span>
                            <h4 className="text-xl font-bold text-eyablue mt-2 mb-2">{item.evt}</h4>
                            <p className="text-sm text-slate-600 leading-relaxed md:max-w-sm">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-eyablue mb-6 border-b-2 border-eyayellow inline-block pb-1 mt-8">Événements Transversaux</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-eyawhite p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold text-eyablue mb-2">Journées à concepts</h4>
                        <span className="inline-block px-2 py-1 bg-eyayellow/20 text-eyayellow text-[10px] font-bold uppercase rounded-full mb-3">Un par mois</span>
                        <p className="text-sm text-slate-600">Des thématiques mensuelles (English Day, Styliste Day, etc.) pour valoriser les talents.</p>
                      </div>
                      <div className="bg-eyawhite p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold text-eyablue mb-2">Soirée cinéma</h4>
                        <span className="inline-block px-2 py-1 bg-eyayellow/20 text-eyayellow text-[10px] font-bold uppercase rounded-full mb-3">Fin du mois</span>
                        <p className="text-sm text-slate-600">Un rendez-vous mensuel de détente autour de films et de jeux vidéo.</p>
                      </div>
                      <div className="bg-eyawhite p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold text-eyablue mb-2">Action sociale</h4>
                        <span className="inline-block px-2 py-1 bg-eyayellow/20 text-eyayellow text-[10px] font-bold uppercase rounded-full mb-3">Bénin</span>
                        <p className="text-sm text-slate-600">Un projet collectif à impact social réalisé par les étudiants dans une localité.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Bloc 3: Gouvernance Étudiante */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
          >
            <button 
              className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              onClick={() => setActiveSection(activeSection === 3 ? null : 3)}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-eyablue rounded-xl flex items-center justify-center text-eyayellow text-sm font-bold shrink-0">H3</div>
                <div>
                  <h2 className="text-lg font-bold text-eyablue">Gouvernance Étudiante</h2>
                  <p className="text-slate-500 text-xs mt-1">Mettre l'étudiant au centre des décisions et de la communication.</p>
                </div>
              </div>
              <CaretDown className={`transform transition-transform duration-300 text-slate-400 ${activeSection === 3 ? "rotate-180 text-eyablue" : ""}`} size={24} />
            </button>
            <AnimatePresence>
              {activeSection === 3 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 border-t border-slate-100 bg-slate-50">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-eyayellow rounded-xl text-eyablue"><Microphone size={24} /></div>
                        <h3 className="text-xl font-bold text-eyablue">Écoute étudiante</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-eyawhite p-4 rounded-xl border border-gray-100">
                          <strong className="block text-eyablue mb-1">Boîte à idées</strong>
                          <span className="text-sm text-gray-600">Un espace ouvert pour proposer vos concepts.</span>
                        </div>
                        <div className="bg-eyawhite p-4 rounded-xl border border-gray-100">
                          <strong className="block text-eyablue mb-1">Plateforme numérique anonyme</strong>
                          <span className="text-sm text-gray-600">Pour s'exprimer librement et en toute sécurité.</span>
                        </div>
                        <div className="bg-eyawhite p-4 rounded-xl border border-gray-100">
                          <strong className="block text-eyablue mb-1">Remontée des plaintes</strong>
                          <span className="text-sm text-gray-600">Un système structuré pour résoudre les problèmes.</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-eyayellow rounded-xl text-eyablue"><ShareNetwork size={24} /></div>
                        <h3 className="text-xl font-bold text-eyablue">Communication</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-eyawhite p-4 rounded-xl border border-gray-100">
                          <strong className="block text-eyablue mb-1">Points focaux</strong>
                          <span className="text-sm text-gray-600">Des représentants dédiés dans chaque classe.</span>
                        </div>
                        <div className="bg-eyawhite p-4 rounded-xl border border-gray-100">
                          <strong className="block text-eyablue mb-1">Production de contenus</strong>
                          <span className="text-sm text-gray-600">Résumés, vidéos et photos des événements.</span>
                        </div>
                        <div className="bg-eyawhite p-4 rounded-xl border border-gray-100">
                          <strong className="block text-eyablue mb-1">Valorisation des projets</strong>
                          <span className="text-sm text-gray-600">Mettre en lumière le talent des étudiants.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* SECTION VISUEL DU PROJET DU BDE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-eyablue/5 rounded-full text-eyablue text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkle size={14} className="text-eyayellow" />
            <span>Projet EYA BDE • Synthèse Visuelle</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-eyablue mb-3">
            L'Avenir de la Vie Étudiante en Image
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
            Retrouvez la vision globale, les engagements et l'énergie du projet porté par l'équipe EYA BDE pour Africa Design School.
          </p>

          <div className="relative group max-w-md w-full bg-slate-50 p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="overflow-hidden rounded-2xl bg-white shadow-inner">
              <img
                src="https://i.imgur.com/gNsgLS2.png"
                alt="Affiche Projet EYA BDE"
                className="w-full h-auto object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="mt-5 flex items-center justify-center gap-3">
              <a
                href="https://i.imgur.com/gNsgLS2.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-eyablue text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-sm"
              >
                <span>Agrandir l'affiche</span>
                <ArrowSquareOut size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
}
