import { notFound } from 'next/navigation';
import { fighters } from '@/lib/data';

export default function FighterProfile({ params }: { params: { slug: string } }) {
  const fighter = fighters.find((entry) => entry.slug === params.slug);
  if (!fighter) return notFound();

  return (
    <article className="grid gap-8 lg:grid-cols-[340px_1fr]">
      <div className="rounded-3xl border border-white/20 bg-white/5 p-4">
        <div className="h-96 rounded-2xl bg-gradient-to-b from-zinc-500 to-zinc-800" />
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-black">{fighter.name}</h1>
        <p className="text-white/80">{fighter.history}</p>
        <p><span className="text-ice">Estilo:</span> {fighter.style}</p>
        <p><span className="text-ice">Récord:</span> {fighter.record}</p>
        <blockquote className="rounded-xl border-l-2 border-ice bg-white/5 p-4 italic">“{fighter.phrase}”</blockquote>

        <div className="grid gap-4 md:grid-cols-2">
          {fighter.videos.map((src) => (
            <iframe
              key={src}
              src={src}
              title="Video de peleador"
              className="h-52 w-full rounded-xl border border-white/20"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ))}
        </div>
      </div>
    </article>
  );
}
