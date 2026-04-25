export default function PhilosophyPage() {
  return (
    <section className="rounded-3xl border border-white/15 bg-black/40 p-8 md:p-12">
      <h1 className="text-3xl font-black uppercase tracking-[0.2em]">Filosofía Team Goye</h1>
      <p className="mt-5 max-w-3xl text-white/80">
        Somos una academia forjada por la constancia. Cada clase entrena cuerpo y mente para competir con honor.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {['Honor', 'Tradición', 'Disciplina'].map((value) => (
          <div key={value} className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center">
            <p className="text-2xl font-bold theme-accent">{value}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-lg italic text-white/90">
        “No entrenamos para ser comunes, entrenamos para ser legado.”
      </p>
    </section>
  );
}
