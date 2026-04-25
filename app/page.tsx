import Link from 'next/link';
import { fighters } from '@/lib/data';
import { SectionReveal } from '@/components/SectionReveal';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/35 p-8 md:p-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,216,255,.15),transparent_60%)]" />
        <h1 className="relative text-4xl font-black uppercase tracking-[0.2em] md:text-6xl">Team Goye MMA</h1>
        <p className="theme-accent relative mt-4 max-w-2xl text-white/80">
          Academia de artes marciales mixtas en Milagro, Ecuador. Honor, Tradición y Disciplina en una experiencia digital inmersiva.
        </p>
      </section>

      <SectionReveal>
        <section>
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-[0.15em]">Siluetas de Peleadores</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fighters.map((fighter) => (
              <Link
                key={fighter.slug}
                href={`/fighters/${fighter.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5"
              >
                <div className="h-64 rounded-xl bg-gradient-to-tr from-zinc-600 to-zinc-800 grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:shadow-glow" />
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/70 group-hover:text-ice">{fighter.name}</p>
              </Link>
            ))}
          </div>
        </section>
      </SectionReveal>
    </div>
  );
}
