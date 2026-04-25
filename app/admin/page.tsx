'use client';

import { FormEvent, useMemo, useState } from 'react';
import { fighters, plans } from '@/lib/data';

export default function AdminPage() {
  const [localFighters, setLocalFighters] = useState(fighters.map((f) => f.name));
  const [planPrices, setPlanPrices] = useState(plans.map((p) => ({ ...p })));

  const totalFighters = useMemo(() => localFighters.length, [localFighters]);

  const addFighter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    if (!name) return;
    setLocalFighters((prev) => [...prev, name]);
    event.currentTarget.reset();
  };

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold uppercase tracking-[0.15em]">Panel Admin (Básico)</h1>

      <div className="rounded-2xl border border-white/15 bg-black/40 p-6">
        <h2 className="text-lg font-semibold">Agregar peleador</h2>
        <form onSubmit={addFighter} className="mt-3 flex flex-col gap-3 md:flex-row">
          <input name="name" placeholder="Nombre del peleador" className="flex-1 rounded-lg border border-white/20 bg-black/60 p-3" />
          <button className="rounded-lg bg-ice px-4 py-2 font-semibold text-black">Agregar</button>
        </form>
        <p className="mt-4 text-sm text-white/80">Total peleadores cargados: {totalFighters}</p>
      </div>

      <div className="rounded-2xl border border-white/15 bg-black/40 p-6">
        <h2 className="text-lg font-semibold">Editar precios de planes</h2>
        <div className="mt-4 space-y-3">
          {planPrices.map((plan, idx) => (
            <label key={plan.id} className="flex items-center justify-between gap-3">
              <span>{plan.name}</span>
              <input
                type="number"
                value={plan.price}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setPlanPrices((prev) => prev.map((item, i) => (i === idx ? { ...item, price: value } : item)));
                }}
                className="w-32 rounded-lg border border-white/20 bg-black/60 p-2"
              />
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}
