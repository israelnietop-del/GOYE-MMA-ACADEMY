import { FighterCard } from '@/components/FighterCard';
import { fighters } from '@/lib/data';

export default function FightersPage() {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold uppercase tracking-[0.15em]">Peleadores</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fighters.map((fighter) => (
          <FighterCard key={fighter.slug} fighter={fighter} />
        ))}
      </div>
    </section>
  );
}
