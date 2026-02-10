import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { CONTACT, ADDRESS, SITE_URL, COMPANY } from "@/lib/constants";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Steeda Performa | Consultoria e Implementação para Marcas Próprias",
  description: "Estratégia, stack (pilha de tecnologia) e rotina de performance para marcas próprias crescerem no digital com previsibilidade. Agende um diagnóstico gratuito.",
  keywords: [
    "consultoria marcas próprias",
    "estrutura digital",
    "stack de tecnologia",
    "crm",
    "automação",
    "performance",
    "diagnóstico",
    "gestão de e-commerce",
    "vendas online",
    "bi",
    "inteligência de dados"
  ],
  alternates: {
    canonical: 'https://steedaperforma.com.br',
  },
  openGraph: {
    title: "Steeda Performa | Consultoria e Implementação para Marcas Próprias",
    description: "Processo + dados + stack (pilha de tecnologia) + rotina de performance para marcas próprias.",
    url: 'https://steedaperforma.com.br',
    siteName: 'Steeda Performa',
    images: [
      {
        url: '/og-steeda.jpg',
        width: 1200,
        height: 630,
        alt: 'Steeda Performa',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ConsultingService',
  name: COMPANY.name,
  image: `${SITE_URL}/logo.svg`,
  description: 'Consultoria e implementação estratégica para operações que buscam governança e previsibilidade.',
  url: SITE_URL,
  telephone: CONTACT.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    addressCountry: ADDRESS.country,
  },
  sameAs: [CONTACT.instagram],
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} antialiased font-body bg-bg text-ink`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
