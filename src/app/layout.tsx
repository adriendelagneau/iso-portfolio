import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://adrien-delagneau.fr";
const TITLE = "Adrien Delagneau — Portfolio 3D";
const DESCRIPTION =
  "Portfolio 3D interactif d'Adrien Delagneau, développeur front-end — projets, compétences et coordonnées.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: TITLE,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: TITLE,
  },
};

export const viewport: Viewport = {
  themeColor: "#383836",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <Link
          href="/mentions-legales"
          className="text-foreground/30 hover:text-foreground/70 fixed bottom-2 left-2 z-50 text-[10px] transition-colors"
        >
          Mentions légales
        </Link>
        <Analytics />
      </body>
    </html>
  );
}
