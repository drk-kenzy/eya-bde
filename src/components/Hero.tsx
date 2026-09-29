import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[60vh] bg-hero-gradient bg-cover bg-center text-center p-8">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        aria-labelledby="hero-title"
      >
        <h1 id="hero-title" className="text-5xl md:text-6xl font-black text-white drop-shadow-md">
          Bienvenue à EYA BDE
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white opacity-90">
          Le portail officiel du Bureau des Étudiants – où l’énergie, l’innovation et la communauté se rencontrent.
        </p>
      </motion.div>
    </section>
  );
}
