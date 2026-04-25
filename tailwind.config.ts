import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#05070d',
        steel: '#0f1629',
        ice: '#8bd8ff',
        viltrum: '#c1121f'
      },
      boxShadow: {
        glow: '0 0 35px rgba(139, 216, 255, 0.4)',
        redglow: '0 0 35px rgba(193, 18, 31, 0.35)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif']
      },
      backgroundImage: {
        smoke:
          'radial-gradient(circle at 20% 20%, rgba(99, 147, 201, 0.25), transparent 45%), radial-gradient(circle at 80% 30%, rgba(104, 130, 156, 0.2), transparent 40%), linear-gradient(120deg, #05070d 0%, #111827 65%, #05070d 100%)'
      }
    }
  },
  plugins: []
};

export default config;
