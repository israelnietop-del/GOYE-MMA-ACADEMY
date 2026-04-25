import Link from 'next/link';

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/593999999999"
      target="_blank"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-black shadow-2xl transition hover:scale-105"
    >
      WhatsApp
    </Link>
  );
}
