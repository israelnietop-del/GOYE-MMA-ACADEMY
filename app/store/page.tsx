'use client';

import { products } from '@/lib/data';

export default function StorePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold uppercase tracking-[0.15em]">Tienda de Implementos</h1>
      <div className="grid gap-5 md:grid-cols-2">
        {products.map((product) => (
          <article key={product.id} className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <div className="h-40 rounded-xl bg-gradient-to-br from-zinc-500 to-zinc-800" />
            <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
            <p className="text-white/75">Precio total: ${product.price}</p>
            <p className="text-ice">Pago inicial (50%): ${(product.price / 2).toFixed(2)}</p>
            <button
              onClick={() => alert(`Reserva simulada para ${product.name}`)}
              className="mt-4 rounded-lg bg-ice px-4 py-2 font-semibold text-black"
            >
              Reservar producto
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
