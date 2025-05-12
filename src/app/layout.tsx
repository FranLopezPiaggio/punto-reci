import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Load the Inter font with specific subsets
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'PuntoReci - Tu aplicación de reciclaje',
  description: 'Transforma tu manera de reciclar con PuntoReci. Contribuye a un mundo más sostenible.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}