import { videoCategories } from '@/lib/data';

export default function VideosPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold uppercase tracking-[0.15em]">Videos y Peleas</h1>
      {Object.entries(videoCategories).map(([category, videos]) => (
        <div key={category} className="space-y-3">
          <h2 className="text-xl font-semibold text-ice">{category}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((src) => (
              <iframe
                key={src}
                src={src}
                title={`Video ${category}`}
                className="h-52 w-full rounded-xl border border-white/20 bg-black"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
