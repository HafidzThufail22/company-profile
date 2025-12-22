import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LPK Sadewa - Kursus Mengemudi Profesional',
  description:
    'Belajar mengemudi bersama instruktur profesional dan berpengalaman. LPK Sadewa menyediakan kursus mengemudi mobil manual dan matic dengan jadwal fleksibel.',
  keywords: [
    'kursus mengemudi',
    'les mobil',
    'belajar mengemudi',
    'kursus mobil manual',
    'kursus mobil matic',
    'LPK Sadewa',
    'driving course',
  ],
  authors: [{ name: 'LPK Sadewa' }],
  openGraph: {
    title: 'LPK Sadewa - Kursus Mengemudi Profesional',
    description:
      'Belajar mengemudi bersama instruktur profesional. Kursus mobil manual & matic dengan jadwal fleksibel.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${plusJakarta.variable} antialiased font-[family-name:var(--font-body)]`}
      >
        {children}
      </body>
    </html>
  );
}
