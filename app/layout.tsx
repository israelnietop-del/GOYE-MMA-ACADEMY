import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { CinematicLoader } from '@/components/CinematicLoader';
import { SpotlightCursor } from '@/components/SpotlightCursor';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Team Goye MMA | Milagro, Ecuador',
  description: 'Experiencia inmersiva para la academia Team Goye MMA.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <CinematicLoader />
        <SpotlightCursor />
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-10">{children}</main>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
