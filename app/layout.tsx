import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Rancho La Concepción | Un lugar para tu historia',
  description:
    'Naturaleza, celebraciones y tradición ecuestre en Villa Victoria, Estado de México. Descubre Rancho La Concepción.',
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
