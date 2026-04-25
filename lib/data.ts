export type Fighter = {
  slug: string;
  name: string;
  style: string;
  record: string;
  phrase: string;
  history: string;
  videos: string[];
};

export const fighters: Fighter[] = [
  {
    slug: 'kael-drago',
    name: 'Kael Drago',
    style: 'Striker explosivo + Muay Thai',
    record: '12W - 3L',
    phrase: 'Cada ronda es un juramento de honor.',
    history:
      'Kael empezó en Team Goye con disciplina militar y hoy guía a los nuevos atletas en táctica de combate de pie.',
    videos: ['https://www.youtube.com/embed/9M6B7f7A3hY', 'https://www.youtube.com/embed/Z4M3g5GfYMg']
  },
  {
    slug: 'dana-frost',
    name: 'Dana Frost',
    style: 'Grappling + BJJ de presión',
    record: '9W - 1L',
    phrase: 'La calma vence antes de la llave.',
    history:
      'Con base en judo y jiu-jitsu, Dana domina la transición al suelo y representa la línea técnica del equipo.',
    videos: ['https://www.youtube.com/embed/odM92ap8_c0']
  },
  {
    slug: 'taro-zen',
    name: 'Taro Zen',
    style: 'Mixto creativo + cardio alto',
    record: '15W - 5L',
    phrase: 'Disciplina hoy, victoria mañana.',
    history:
      'Taro es uno de los peleadores más activos de Milagro, con una preparación física intensa y enfoque táctico.',
    videos: ['https://www.youtube.com/embed/rfscVS0vtbw']
  }
];

export const plans = [
  { id: 'basic', name: 'Plan Básico', price: 20, description: '2 clases por semana + acondicionamiento base.' },
  { id: 'middle', name: 'Plan Intermedio', price: 35, description: '4 clases semanales + sparring guiado.' },
  { id: 'premium', name: 'Plan Premium', price: 50, description: 'Acceso total + seguimiento personalizado.' }
];

export const products = [
  { id: 1, name: 'Guantes Pro Training', price: 45 },
  { id: 2, name: 'Vendas Elásticas MMA', price: 12 },
  { id: 3, name: 'Shorts Performance', price: 28 },
  { id: 4, name: 'Canilleras Sparring', price: 40 }
];

export const videoCategories = {
  Entrenamientos: ['https://www.youtube.com/embed/4fE5KqY7zqs', 'https://www.youtube.com/embed/jfKfPfyJRdk'],
  Combates: ['https://www.youtube.com/embed/6XK4S8OQPuU'],
  Highlights: ['https://www.youtube.com/embed/DV9f3Jbe7hI']
};
