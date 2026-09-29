import { MapPin, Envelope } from '@phosphor-icons/react';;

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img src="https://i.imgur.com/E7Ixr8T.png" alt="EYA BDE Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="font-bold text-xl tracking-tight leading-none text-eyablue">EYA BDE</h1>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Africa Design School</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm max-w-md mt-4 leading-relaxed">
              Une vision plus participative, plus créative et plus vivante de la vie étudiante.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-slate-900 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 hover:text-eyablue text-slate-600 transition-colors text-sm font-medium">
                <Envelope size={16} className="text-eyablue shrink-0" />
                <a href="mailto:vianneytagnonadambadji@gmail.com" className="hover:underline">
                  vianneytagnonadambadji@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                <MapPin size={16} className="text-eyablue shrink-0 mt-0.5" />
                <span>Campus Africa Design School, Cotonou, Bénin</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">
            EYA ! Ça y est. On construit ensemble.
          </p>
          <div className="text-[10px] font-bold text-eyablue uppercase tracking-widest text-center">
            ADS DAY • MARCHE DE NOËL • GALA DES JUNIORS
          </div>
        </div>
      </div>
    </footer>
  );
}
