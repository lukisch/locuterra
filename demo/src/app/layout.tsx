import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import DemoBanner from "@/components/DemoBanner";
import SwRegister from "@/components/SwRegister";

export const metadata: Metadata = {
  metadataBase: new URL("https://um-bruch.github.io"),
  title: "LOCUTERRA — Civic Social Network Demonstrator",
  description:
    "Open-source concept demonstrator for a public-interest, location-based civic social network.",
  keywords: [
    "LOCUTERRA",
    "civic social network",
    "location-based community platform",
    "municipal digital commons",
    "public interest social network",
    "Next.js civic tech demonstrator",
  ],
  alternates: {
    canonical: "/locuterra/",
  },
  openGraph: {
    title: "LOCUTERRA — Civic Social Network Demonstrator",
    description:
      "A public-interest, location-based civic network concept for municipalities, non-profits, and public-sector stewards.",
    url: "/locuterra/",
    siteName: "LOCUTERRA",
    images: [
      {
        url: "/locuterra/demo-preview.png",
        width: 1280,
        height: 720,
        alt: "LOCUTERRA demo home screen for the fictional municipality Grüntal",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LOCUTERRA — Civic Social Network Demonstrator",
    description:
      "Open-source concept demonstrator for a public-interest, location-based civic social network.",
    images: ["/locuterra/demo-preview.png"],
  },
  manifest: "/locuterra/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#065f46",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SwRegister />
        <DemoBanner />
        <Navigation />
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
          {children}
        </main>
        <footer className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
          LOCUTERRA Konzept-Demonstrator &mdash; Fiktive Daten, keine echten
          Personen &mdash;{" "}
          <a
            href="https://um-bruch.org"
            className="underline hover:text-emerald-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Um:bruch
          </a>
        </footer>
      </body>
    </html>
  );
}
