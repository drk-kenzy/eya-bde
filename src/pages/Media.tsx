import AnimatedPage from "../components/AnimatedPage";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Camera, ChatCircle, VideoCamera } from '@phosphor-icons/react';;

// Empty media frames to showcase the functionality without dummy images
const mediaItems = [
  { type: "photo", category: "Événement" },
  { type: "video", category: "Coulisses" },
  { type: "interview", category: "Interview" },
  { type: "photo", category: "Campus" },
  { type: "photo", category: "Événement" },
  { type: "video", category: "Short" },
];

export default function Media() {
  const [filter, setFilter] = useState("all");

  const filteredMedia = filter === "all" ? mediaItems : mediaItems.filter(m => m.type === filter);

  return (
    <AnimatedPage className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner requesting support */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full bg-eyayellow rounded-3xl p-8 mb-12 flex flex-col items-center text-center shadow-sm"
        >
            <h2 className="text-2xl md:text-3xl font-black text-eyablue mb-2">Construisons ensemble notre galerie !</h2>
            <p className="text-eyablue font-medium max-w-lg mb-0 text-sm md:text-base">
               Votez pour nous afin que nous puissions remplir cet espace avec nos meilleurs souvenirs, événements et moments forts de l'année.
            </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
              Galeries
            </h3>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black text-eyablue mb-4"
            >
              Inside <span className="text-eyayellow">ADS</span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-2 mt-8 md:mt-0"
          >
            <button 
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${filter === "all" ? "bg-eyablue text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-eyayellow"}`}
            >
              Tout
            </button>
            <button 
              onClick={() => setFilter("photo")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-colors ${filter === "photo" ? "bg-eyablue text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-eyayellow"}`}
            >
              <Camera size={16} /> Photos
            </button>
            <button 
              onClick={() => setFilter("video")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-colors ${filter === "video" ? "bg-eyablue text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-eyayellow"}`}
            >
              <VideoCamera size={16} /> Vidéos
            </button>
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AnimatePresence>
            {filteredMedia.map((item, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={i}
                className="group relative rounded-3xl overflow-hidden aspect-square bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center cursor-pointer transition-colors hover:border-eyablue"
              >
                <div className="text-slate-400 group-hover:text-eyablue transition-colors">
                    {item.type === "photo" && <Camera size={48} opacity={0.5} />}
                    {item.type === "video" && <VideoCamera size={48} opacity={0.5} />}
                    {item.type === "interview" && <ChatCircle size={48} opacity={0.5} />}
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white border border-slate-200 text-eyablue text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-eyablue font-bold text-sm bg-white p-3 rounded-xl border border-slate-200 text-center shadow-lg">
                    Emplacement {item.type} réservé
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="bg-eyablue text-white rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-eyayellow/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="w-16 h-16 bg-eyayellow rounded-full flex items-center justify-center text-eyablue mb-6 shadow-xl relative z-10">
               <Camera size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">Célébrons vos Anniversaires !</h2>
            <p className="text-white/80 max-w-xl mx-auto leading-relaxed relative z-10">
               Parce que chaque membre de la communauté ADS compte, nous célèbrerons par communication votre anniversaire sur nos réseaux et plateformes. Vous êtes l'âme de l'école !
            </p>
        </div>
      </div>
    </AnimatedPage>
  );
}
