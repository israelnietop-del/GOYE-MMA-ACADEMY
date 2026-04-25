import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const links = [
  ['Inicio', '/'],
  ['Peleadores', '/fighters'],
  ['Planes', '/plans'],
  ['Tienda', '/store'],
  ['Videos', '/videos'],
  ['Filosofía', '/philosophy'],
  ['Contacto', '/contact'],
  ['Admin', '/admin']
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm text-white">
        <Link href="/" className="font-semibold uppercase tracking-[0.3em]">
          Team Goye MMA
        </Link>
        <div className="flex flex-wrap items-center gap-4">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="opacity-80 transition hover:text-ice hover:opacity-100">
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
