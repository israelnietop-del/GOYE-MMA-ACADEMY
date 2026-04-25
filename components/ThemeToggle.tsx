'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [imperio, setImperio] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('goye-theme') === 'imperio';
    setImperio(stored);
    document.documentElement.dataset.theme = stored ? 'imperio' : 'goye';
  }, []);

  const toggleTheme = () => {
    const next = !imperio;
    setImperio(next);
    localStorage.setItem('goye-theme', next ? 'imperio' : 'goye');
    document.documentElement.dataset.theme = next ? 'imperio' : 'goye';
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:shadow-glow"
    >
      {imperio ? 'Modo Team Goye' : 'Modo Imperio Viltrumita'}
    </button>
  );
}
