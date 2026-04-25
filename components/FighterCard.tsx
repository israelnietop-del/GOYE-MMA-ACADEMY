import Link from 'next/link';
import { Fighter } from '@/lib/data';

export function FighterCard({ fighter }: { fighter: Fighter }) {
  return (
    <Link href={`/fighters/${fighter.slug}`} className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5">
      {/* Placeholder visual para silueta */}
      <div className="h-56 rounded-xl bg-gradient-to-br from-zinc-500 to-zinc-700 grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:shadow-glow" />
      <div className="mt-4">
        <h3 className="translate-y-2 text-lg font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {fighter.name}
        </h3>
        <p className="text-sm text-white/70">{fighter.style}</p>
      </div>
    </Link>
  );
}
