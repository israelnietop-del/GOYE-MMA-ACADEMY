import Link from 'next/link';

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold uppercase tracking-[0.15em]">Contacto</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-white/15 bg-black/40 p-6">
          <p>¿Listo para entrenar? Escríbenos directo:</p>
          <Link href="https://wa.me/593999999999" target="_blank" className="inline-block rounded-lg bg-green-500 px-5 py-3 font-bold text-black">
            Abrir WhatsApp
          </Link>
          <form className="mt-5 grid gap-3">
            <input placeholder="Nombre" className="rounded-lg border border-white/20 bg-black/60 p-3" />
            <input placeholder="Email" className="rounded-lg border border-white/20 bg-black/60 p-3" />
            <textarea placeholder="Mensaje" className="rounded-lg border border-white/20 bg-black/60 p-3" rows={4} />
            <button className="rounded-lg bg-white px-4 py-3 font-semibold text-black">Enviar</button>
          </form>
        </div>
        <iframe
          title="Mapa Milagro Ecuador"
          src="https://maps.google.com/maps?q=Milagro%2C%20Ecuador&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="h-[420px] w-full rounded-2xl border border-white/20"
        />
      </div>
    </section>
  );
}
