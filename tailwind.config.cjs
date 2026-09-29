// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      colors: {
        eyablue: 'var(--color-eyablue)',
        eyayellow: 'var(--color-eyayellow)',
        eyawhite: 'var(--color-eyawhite)',
      },
      backdropBlur: { xs: '2px' },
      boxShadow: { glass: '0 4px 30px rgba(0,0,0,0.1)' },
      backgroundImage: { 'hero-gradient': 'linear-gradient(135deg, var(--color-eyablue) 0%, var(--color-eyayellow) 100%)' }
    }
  },
  plugins: []
};
