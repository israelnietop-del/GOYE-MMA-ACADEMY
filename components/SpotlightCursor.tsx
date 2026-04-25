'use client';

import { useEffect, useState } from 'react';

export function SpotlightCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        background: `radial-gradient(300px at ${position.x}px ${position.y}px, rgba(139,216,255,.18), transparent 60%)`
      }}
    />
  );
}
