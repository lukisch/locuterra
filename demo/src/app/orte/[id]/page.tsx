import Link from "next/link";
import { places, getPlace } from "@/data/places";
import { groups } from "@/data/groups";
import { resources } from "@/data/resources";
import ReachBadge from "@/components/ReachBadge";
import Card from "@/components/Card";

export function generateStaticParams() {
  return places.map((p) => ({ id: p.id }));
}

export default async function OrteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const place = getPlace(id);
  if (!place) return <p>Ort nicht gefunden.</p>;

  const parent = place.parentPlaceId ? getPlace(place.parentPlaceId) : null;
  const children = places.filter((p) => p.parentPlaceId === id);
  const placeGroups = groups.filter((g) => g.placeId === id);
  const placeResources = resources.filter((r) => r.placeId === id);

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/orte"
        className="text-sm text-emerald-700 hover:text-emerald-900 mb-4 inline-block"
      >
        &larr; Alle Orte
      </Link>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-bold text-gray-900">{place.name}</h1>
          <ReachBadge level={place.visibilityScope} />
        </div>
        <p className="text-gray-600">{place.description}</p>
        {parent && (
          <p className="text-sm text-gray-400 mt-2">
            Gehört zu:{" "}
            <Link
              href={`/orte/${parent.id}`}
              className="text-emerald-700 hover:underline"
            >
              {parent.name}
            </Link>
          </p>
        )}
      </div>

      {children.length > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold text-gray-800 mb-3">Unterorte</h2>
          <div className="grid gap-2">
            {children.map((c) => (
              <Card
                key={c.id}
                href={`/orte/${c.id}`}
                emoji={"\u{1F4CD}"}
                title={c.name}
                badge={<ReachBadge level={c.visibilityScope} />}
              >
                {c.description}
              </Card>
            ))}
          </div>
        </div>
      )}

      {placeGroups.length > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold text-gray-800 mb-3">Gruppen an diesem Ort</h2>
          <div className="grid gap-2">
            {placeGroups.map((g) => (
              <Card
                key={g.id}
                href={`/gruppen/${g.id}`}
                emoji={"\u{1F465}"}
                title={g.name}
                subtitle={`${g.memberCount} Mitglieder`}
                badge={<ReachBadge level={g.visibilityScope} />}
              >
                {g.description}
              </Card>
            ))}
          </div>
        </div>
      )}

      {placeResources.length > 0 && (
        <div>
          <h2 className="font-semibold text-gray-800 mb-3">Ressourcen an diesem Ort</h2>
          <div className="grid gap-2">
            {placeResources.map((r) => (
              <Card
                key={r.id}
                href={`/ressourcen/${r.id}`}
                emoji={"\u{1F91D}"}
                title={r.title}
                badge={<ReachBadge level={r.visibilityScope} />}
              >
                {r.description}
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
