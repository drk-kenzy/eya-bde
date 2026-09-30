import AnimatedPage from "../components/AnimatedPage";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Gift, CheckSquareOffset, Users, Calendar, Globe, Sparkle, Target, Download } from '@phosphor-icons/react';;
import { useState, useEffect } from "react";

const stats = [
  { label: "Clubs Actifs", value: "9", icon: Users },
  { label: "Axes Stratégiques", value: "3", icon: Target },
  { label: "Événements Annuels", value: "10+", icon: Calendar },
  { label: "Communauté", value: "Active", icon: Globe },
];

export default function Home() {
  const [downloads, setDownloads] = useState(142); // Initial simulated count

  // Synchronize downloads purely on client side for demo
  useEffect(() => {
    const saved = localStorage.getItem("eya_downloads");
    if (saved) {
      setDownloads(parseInt(saved, 10));
    }
  }, []);

  const handleDownload = () => {
    const newCount = downloads + 1;
    setDownloads(newCount);
    localStorage.setItem("eya_downloads", newCount.toString());
    
    // Simulate image download
    const link = document.createElement("a");
    link.href = 'https://i.imgur.com/Ol6KRak.png';
    link.target = "_blank";
    link.download = "soutien-eya-bde.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatedPage className="pt-24 pb-12">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6">
        {/* LEFT COLUMN: HERO & STATS */}
        <section className="flex-1 lg:flex-[1.2] flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex-1 flex flex-col justify-center relative overflow-hidden min-h-[500px]"
          >
            {/* Subtle Jarre background */}
            <div 
              className="absolute inset-0 z-0 opacity-[0.15] bg-cover bg-center"
              style={{ backgroundImage: "url('https://i.imgur.com/qlyBrcK.jpg')" }}
            ></div>
            
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-eyayellow/20 rounded-full blur-3xl z-0"></div>
            
            <div className="flex items-start relative z-10">
              <span className="inline-block px-3 py-1 bg-eyayellow text-eyablue text-[10px] font-bold uppercase rounded-full mb-6 tracking-widest">Élections BDE 2026-2027</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-eyablue leading-[0.9] mb-6 relative z-10">
              FAIRE <br/> BOUGER ADS <br/> <span className="text-yellow-500">ENSEMBLE</span>
            </h2>
            
            <p className="text-slate-800 font-medium text-lg leading-relaxed mb-8 max-w-xl relative z-10">
              Une vision plus participative, plus créative et plus vivante de la vie étudiante.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-auto relative z-10">
              <Link to="/projet" className="px-6 py-3 bg-eyablue text-white rounded-xl font-bold text-sm shadow-lg shadow-eyablue/20 hover:bg-blue-800 transition-colors">
                Découvrir notre projet
              </Link>
              <Link to="/pourquoi-nous" className="px-6 py-3 bg-white text-eyablue border-2 border-eyablue rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors hover:border-blue-800">
                Rejoindre l'aventure
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 shrink-0">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`p-5 rounded-2xl border ${
                  i === 0 ? "bg-eyablue text-white border-transparent" : 
                  i === 3 ? "bg-eyayellow text-eyablue border-transparent" : 
                  "bg-white border-slate-200 text-eyablue"
                } flex flex-col justify-center`}
              >
                <div className={`text-3xl font-black mb-1 ${i === 0 ? "text-eyayellow" : ""}`}>
                  {stat.value}
                </div>
                <div className={`text-[10px] md:text-xs uppercase font-bold ${
                  i === 0 || i === 3 ? "opacity-80" : "text-slate-500"
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* RIGHT COLUMN: Poster Download */}
        <section className="flex-1 lg:flex-[0.8] flex flex-col gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex-1 flex flex-col items-center justify-center min-h-[400px] overflow-hidden relative group">
            <h3 className="text-xl font-black text-eyablue mb-3 z-10 flex items-center gap-2">
               <Download size={24} className="text-eyayellow"/> Soutenir EYA
            </h3>
            <p className="text-slate-500 text-center text-sm max-w-[250px] z-10 mb-8 font-medium">
              Télécharge l'affiche et partage-la pour montrer ton soutien.
            </p>
            
            <div className="w-full max-w-[280px] bg-white rounded-2xl mb-6 relative overflow-hidden shadow-lg border-4 border-slate-50 flex flex-col items-center justify-center group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 z-10">
               <img src="https://i.imgur.com/Ol6KRak.png" alt="Affiche EYA BDE" className="w-full h-auto object-contain" />
            </div>

            <button 
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 bg-eyablue text-white rounded-xl font-bold text-sm shadow hover:bg-blue-800 transition-colors z-10 active:scale-95"
            >
              Télécharger <Download size={18} />
            </button>
            <p className="text-[10px] text-slate-400 font-bold mt-4 z-10 uppercase tracking-widest">
              {downloads.toLocaleString()} Personnes soutiennent
            </p>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-50 border border-slate-100 rounded-full scale-150 group-hover:bg-slate-100 transition-colors duration-700 z-0"></div>
          </div>
        </section>
      </div>

      {/* SECTION GOODIE MARCHÉ DE NOËL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-slate-900 via-eyablue to-blue-950 text-white rounded-3xl p-8 md:p-14 overflow-hidden border border-blue-900/50 shadow-xl"
        >
          {/* Decorative glowing backdrops */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-eyayellow/15 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-500/10 rounded-full blur-3xl pointer-events-none -ml-12 -mb-12"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-eyayellow/20 border border-eyayellow/40 rounded-full text-eyayellow text-xs font-bold uppercase tracking-wider">
                <Gift size={15} />
                <span>Goodie Exclusif • Marché de Noël ADS</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Votez pour nous et <br className="hidden sm:block" />
                <span className="text-eyayellow">vous l'aurez !</span>
              </h2>

              <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-xl">
                À l’occasion du <strong>Marché de Noël</strong> d’Africa Design School, l’équipe <strong>EYA BDE</strong> vous prépare une surprise exclusive ! Un goodie collector spécial sera offert aux étudiants qui soutiennent notre vision pour une vie étudiante vibrante et créative.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-eyayellow/20 flex items-center justify-center text-eyayellow shrink-0">
                      <Gift size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">Goodie Offert à Noël</h4>
                      <p className="text-xs text-slate-300">À récupérer sur le stand EYA au Marché de Noël</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-eyablue flex items-center justify-center text-eyayellow shrink-0">
                      <CheckSquareOffset size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">Votre Vote Compte</h4>
                      <p className="text-xs text-slate-300">Faites entendre votre voix avec l'équipe EYA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/projet"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-eyayellow text-eyablue font-black rounded-xl text-sm hover:bg-yellow-400 transition-transform active:scale-95 shadow-lg shadow-yellow-500/20"
                >
                  <CheckSquareOffset size={18} />
                  <span>Je soutiens EYA BDE</span>
                </Link>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                  Édition Limitée • Marché de Noël 2026
                </span>
              </div>
            </div>

            {/* Right: Goodie Showcase Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl relative group flex flex-col items-center">
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-red-600 text-white rounded-full text-[10px] font-black uppercase tracking-wider shadow">
                  Spécial Noël
                </div>

                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900/60 border border-white/10 flex items-center justify-center relative">
                  <img
                    src="/goodie.jpeg"
                    alt="Goodie Collector Noël"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h4 className="font-bold text-white text-sm">Goodie Exclusif EYA BDE</h4>
                  <p className="text-xs text-eyayellow font-semibold mt-0.5">Offert aux votants & supporters</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* VISION SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-eyablue text-white rounded-3xl p-10 md:p-16 overflow-hidden border border-slate-200"
        >
          {/* Subtle Background Image */}
          <div 
            className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay"
            style={{ backgroundImage: "url('https://i.imgur.com/qlyBrcK.jpg')" }}
          ></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-eyayellow">Notre Vision</h2>
            
            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-medium">
              <p>
                À Africa Design School, riche de talents, de jeunesse et d’événements, chaque activité suscite de nombreuses réactions, commentaires et idées d’amélioration. Mais trop souvent, ces contributions restent en marge de l’action collective.
              </p>
              <p>
                C’est pour transformer cela que nous portons la vision <strong className="text-white">EYA BDE</strong>. En fon, EYA signifie <span className="italic">“ça y est”</span>. Pour nous : ça y est, on ne se limite plus à commenter. Ça y est, on participe. Ça y est, on construit ensemble.
              </p>
              <p>
                Avec la jarre trouée, nous rappelons que la vie étudiante ne fonctionne que si chacun apporte sa part. Notre objectif est simple : impliquer réellement les étudiants dans des clubs, des événements et des décisions de la vie étudiante. On ne part pas de nulle part, on part de l'ancienne corde et on redynamise !
              </p>
            </div>
            
            <div className="mt-12 text-right">
              <p className="inline-block px-6 py-2 bg-white text-eyablue font-bold rounded-xl text-sm shadow-xl">
                Le Président et son équipe
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SECTION PRÉSENTATION DU LOGO DU BDE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-14 border border-slate-200 shadow-sm relative overflow-hidden"
        >
          {/* Subtle decorative background blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50/70 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
              Identité Visuelle &amp; Symbolique
            </h3>

            <h2 className="text-3xl md:text-5xl font-black text-eyablue mb-6">
              Le Logo <span className="text-eyayellow">EYA BDE</span>
            </h2>

            {/* Introductory statement */}
            <p className="text-lg md:text-xl font-bold text-slate-700 mb-10 max-w-3xl leading-relaxed">
              EYA BDE s’appuie sur une symbolique simple : réunir, construire et faire corps autour d’un même projet.
            </p>

            {/* Split layout: Logo Showcase + Text Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left: Logo display showcase card */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-sm aspect-square bg-slate-50 border-2 border-eyayellow/40 rounded-3xl p-8 flex flex-col items-center justify-center shadow-inner group hover:border-eyayellow transition-colors duration-300">
                  <div className="w-48 h-48 md:w-56 md:h-56 relative flex items-center justify-center drop-shadow-md group-hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://i.imgur.com/E7Ixr8T.png"
                      alt="Logo Officiel EYA BDE"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="mt-4 px-4 py-1.5 bg-eyablue text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-2">
                    <Sparkle size={13} className="text-eyayellow" />
                    <span>Logo Officiel • EYA BDE</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-center">
                  <span className="px-3 py-1 bg-slate-100 rounded-lg">Réunir</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg">Construire</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg">Faire Corps</span>
                </div>
              </div>

              {/* Right: Explanatory blocks */}
              <div className="lg:col-span-7 space-y-6">
                {/* Point 1: La jarre */}
                <div className="p-5 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:border-eyayellow/40 hover:bg-amber-50/20">
                  <h4 className="text-base font-bold text-eyablue mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-eyayellow"></span>
                    La jarre & la communauté
                  </h4>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed font-normal">
                    La jarre représente l’école et la communauté étudiante. Elle reprend l’idée de la jarre trouée, souvent utilisée pour représenter une union qui doit être entretenue collectivement. Ici, la jarre est volontairement fermée et contenue : elle symbolise une communauté qui se rassemble autour de ce qui la constitue.
                  </p>
                </div>

                {/* Point 2: Les traits & mains */}
                <div className="p-5 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:border-eyayellow/40 hover:bg-amber-50/20">
                  <h4 className="text-base font-bold text-eyablue mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-eyablue"></span>
                    Les mains & la convergence
                  </h4>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed font-normal">
                    Autour d’elle, les différents traits représentent les mains et les personnes qui viennent contribuer à cette construction collective. Chaque élément est différent, mais tous convergent vers le même objet. Ils traduisent l’idée que c’est par nos expériences, nos sensibilités, nos idées et nos réalités que nous pouvons construire quelque chose ensemble.
                  </p>
                </div>

                {/* Point 3: Les couleurs */}
                <div className="p-5 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:border-eyayellow/40 hover:bg-amber-50/20">
                  <h4 className="text-base font-bold text-eyablue mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-eyayellow"></span>
                    L'harmonie des couleurs
                  </h4>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed font-normal">
                    Les couleurs présentes à l’intérieur de la jarre se retrouvent également sur son enveloppe extérieure. Elles créent un lien entre ce que nous sommes individuellement et ce que nous construisons collectivement. La distinction entre les deux couleurs permet aussi de donner au symbole une dimension de communication et de rassemblement.
                  </p>
                </div>

                {/* Conclusion Callout */}
                <div className="p-5 md:p-6 bg-eyablue text-white rounded-2xl border-l-4 border-eyayellow shadow-sm">
                  <p className="text-sm md:text-base leading-relaxed font-medium">
                    « Ainsi, le logo <strong className="text-eyayellow">EYA BDE</strong> ne représente pas simplement une jarre : il représente une communauté qui se rassemble pour la tenir, la préserver et lui donner une nouvelle forme. »
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
}
