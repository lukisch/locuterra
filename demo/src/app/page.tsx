import Link from "next/link";
import { places } from "@/data/places";
import { groups } from "@/data/groups";
import { resources } from "@/data/resources";
import { channels } from "@/data/channels";

const stats = [
  { label: "Orte", count: places.length, href: "/orte", icon: "\u{1F4CD}" },
  { label: "Gruppen", count: groups.length, href: "/gruppen", icon: "\u{1F465}" },
  { label: "Ressourcen", count: resources.length, href: "/ressourcen", icon: "\u{1F91D}" },
  { label: "Kanäle", count: channels.length, href: "/kanaele", icon: "\u{1F4E2}" },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold text-emerald-800 mb-2">
          Willkommen in Grüntal
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          LOCUTERRA verbindet deine Nachbarschaft: Finde Orte, tritt Gruppen bei,
          teile Ressourcen und tausche dich direkt aus &mdash; lokal und
          gemeinwohlorientiert.
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-emerald-300 hover:shadow transition-all"
          >
            <div className="text-3xl mb-1">{s.icon}</div>
            <div className="text-2xl font-bold text-emerald-700">{s.count}</div>
            <div className="text-sm text-gray-500">{s.label}</div>
          </Link>
        ))}
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Neuigkeiten aus Grüntal
        </h2>
        <div className="space-y-3">
          {channels.flatMap((ch) =>
            ch.posts.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-gray-200 rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {ch.name}
                  </span>
                  <span className="text-xs text-gray-400">{post.postedAt}</span>
                </div>
                <h3 className="font-medium text-gray-900">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{post.body}</p>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <h3 className="font-semibold text-emerald-800 mb-1">
            Ressourcen teilen
          </h3>
          <p className="text-sm text-emerald-700 mb-3">
            Biete Geräte, Skills oder Hilfe an &mdash; oder finde, was du brauchst.
          </p>
          <Link
            href="/ressourcen"
            className="text-sm font-medium text-emerald-700 hover:text-emerald-900"
          >
            Alle Ressourcen ansehen &rarr;
          </Link>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 className="font-semibold text-blue-800 mb-1">
            Gruppen entdecken
          </h3>
          <p className="text-sm text-blue-700 mb-3">
            Finde Initiativen in deiner Nähe und werde Teil der Gemeinschaft.
          </p>
          <Link
            href="/gruppen"
            className="text-sm font-medium text-blue-700 hover:text-blue-900"
          >
            Gruppen durchstöbern &rarr;
          </Link>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <h3 className="font-semibold text-amber-800 mb-1">
            Orte erkunden
          </h3>
          <p className="text-sm text-amber-700 mb-3">
            Entdecke Treffpunkte, Einrichtungen und Plätze in Grüntal.
          </p>
          <Link
            href="/orte"
            className="text-sm font-medium text-amber-700 hover:text-amber-900"
          >
            Orte ansehen &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
