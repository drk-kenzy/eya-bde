import AnimatedPage from "../components/AnimatedPage";
import { motion } from "motion/react";
import { Heartbeat, Stack, Radio, Users, Calendar, ShareNetwork } from '@phosphor-icons/react';;

const reasons = [
  {
    title: "Une école plus vivante",
    icon: Heartbeat,
    desc: "Un campus animé au quotidien, où chaque moment libre est une opportunité de partage et de découverte."
  },
  {
    title: "Plus de clubs",
    icon: Stack,
    desc: "Neuf clubs variés pour que chacun trouve sa voie, exprime son talent et s'épanouisse au-delà des cours."
  },
  {
    title: "Plus d'événements",
    icon: Calendar,
    desc: "Une année rythmée par des temps forts mémorables, de l'intégration jusqu'au Gala de fin d'année."
  },
  {
    title: "Une meilleure communication",
    icon: Radio,
    desc: "Des informations claires, centralisées et transmises en temps réel pour ne rien manquer de la vie de l'école."
  },
  {
    title: "Plus de participation étudiante",
    icon: Users,
    desc: "Vos idées comptent. Nous mettons en place des plateformes pour vous permettre de proposer et d'agir."
  },
  {
    title: "Une véritable communauté",
    icon: ShareNetwork,
    desc: "Créer un lien fort entre les promotions, les différentes filières et fédérer l'esprit Africa Design School."
  }
];

export default function WhyUs() {
  return (
    <AnimatedPage className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
            Nos valeurs
          </h3>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-eyablue mb-4"
          >
            Pourquoi voter <span className="text-eyayellow">EYA BDE ?</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-eyayellow transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-slate-50 text-eyablue rounded-xl flex items-center justify-center mb-6 border border-slate-200 group-hover:bg-eyayellow group-hover:border-eyayellow transition-colors">
                <reason.icon size={24} />
              </div>
              <h2 className="text-xl font-bold text-eyablue mb-2">{reason.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-eyablue rounded-3xl overflow-hidden relative shadow-xl"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-eyayellow/10 rounded-full pointer-events-none"></div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                Avec <span className="text-eyayellow">EYA BDE</span>, les idées deviennent des actions.
              </h2>
              <p className="text-lg text-white/80 font-medium leading-relaxed">
                Et <span className="text-eyayellow">chacun participe</span> à faire bouger <span className="text-white">ADS ensemble.</span> Symbole de notre engagement, la jarre trouée nous rappelle que la vie étudiante ne fonctionne que si chacun apporte sa part.
              </p>
            </div>
            <div className="relative min-h-[300px] md:min-h-full">
              <div className="absolute inset-0 bg-eyablue/20 z-10"></div>
              <img 
                src="https://i.imgur.com/qlyBrcK.jpg" 
                alt="La jarre trouée" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
}
