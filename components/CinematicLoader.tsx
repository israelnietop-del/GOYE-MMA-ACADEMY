'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CinematicLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, letterSpacing: '0.25em' }}
            className="text-center text-white"
          >
            <p className="text-xs uppercase text-ice">Cargando Experiencia Cinemática</p>
            <h2 className="mt-3 text-3xl font-bold">TEAM GOYE MMA</h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
