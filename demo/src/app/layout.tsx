import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import DemoBanner from "@/components/DemoBanner";

export const metadata: Metadata = {
  title: "LOCUTERRA — Demonstrator",
  description:
    "Konzept-Demonstrator für ein gemeinwohlorientiertes, ortsbasiertes Social Network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
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
