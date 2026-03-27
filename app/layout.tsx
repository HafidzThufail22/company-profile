import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LPK Sadewa - Kursus Mengemudi Profesional",
  description:
    "Belajar mengemudi bersama instruktur profesional dan berpengalaman. LPK Sadewa menyediakan kursus mengemudi mobil manual dan matic dengan jadwal fleksibel.",
  keywords: [
    "kursus mengemudi",
    "les mobil",
    "belajar mengemudi",
    "kursus mobil manual",
    "kursus mobil matic",
    "LPK Sadewa",
    "driving course",
  ],
  authors: [{ name: "LPK Sadewa" }],
  openGraph: {
    title: "LPK Sadewa - Kursus Mengemudi Profesional",
    description:
      "Belajar mengemudi bersama instruktur profesional. Kursus mobil manual & matic dengan jadwal fleksibel.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#2563EB" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={`${outfit.variable} ${plusJakarta.variable} antialiased font-[family-name:var(--font-body)] overscroll-none`}
      >
        {children}
      </body>
    </html>
  );
}
