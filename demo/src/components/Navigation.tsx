"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavActive } from "@/lib/isNavActive";

const navItems = [
  { href: "/", label: "Übersicht", icon: "\u{1F3E0}" },
  { href: "/orte", label: "Orte", icon: "\u{1F4CD}" },
  { href: "/gruppen", label: "Gruppen", icon: "\u{1F465}" },
  { href: "/ressourcen", label: "Ressourcen", icon: "\u{1F91D}" },
  { href: "/kanaele", label: "Kanäle", icon: "\u{1F4E2}" },
  { href: "/nachrichten", label: "Nachrichten", icon: "\u{1F4AC}" },
  { href: "/profil", label: "Profil", icon: "\u{1F464}" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 font-bold text-emerald-700 text-lg">
            <span className="text-2xl">{"\u{1F30D}"}</span>
            <span>LOCUTERRA</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isNavActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    active
                      ? "bg-emerald-100 text-emerald-800 font-medium"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* Mobile navigation */}
      <div className="md:hidden flex overflow-x-auto border-t border-gray-100 px-2 py-1 gap-1">
        {navItems.map((item) => {
          const active = isNavActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-shrink-0 px-3 py-1.5 rounded text-xs transition-colors ${
                active
                  ? "bg-emerald-100 text-emerald-800 font-medium"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <span className="mr-0.5">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
