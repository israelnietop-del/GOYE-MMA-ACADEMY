'use client';

import { FormEvent, useState } from 'react';
import { plans } from '@/lib/data';

type Status = 'activo' | 'pendiente';

export default function PlansPage() {
  const [status, setStatus] = useState<Status>('pendiente');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('activo');
  };

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold uppercase tracking-[0.15em]">Reservas y Planes</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.id} className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="mt-2 text-white/70">{plan.description}</p>
            <p className="mt-6 text-3xl font-black text-ice">${plan.price}</p>
            <button className="mt-4 w-full rounded-lg bg-ice/90 px-4 py-3 font-semibold text-black transition hover:bg-ice">
              Pagar (Stripe simulado)
            </button>
          </article>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-white/15 bg-black/40 p-6 md:grid-cols-2">
        <input required placeholder="Nombre" className="rounded-lg border border-white/20 bg-black/60 p-3" />
        <input required type="email" placeholder="Email" className="rounded-lg border border-white/20 bg-black/60 p-3" />
        <button className="rounded-lg bg-white px-4 py-3 font-semibold text-black">Registrar inscripción</button>
        <p className="self-center text-sm text-white/80">
          Estado de registro: <strong className="uppercase text-ice">{status}</strong>
        </p>
      </form>
    </section>
  );
}
