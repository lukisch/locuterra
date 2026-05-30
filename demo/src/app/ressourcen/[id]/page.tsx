import Link from "next/link";
import { resources, getResource } from "@/data/resources";
import { getAccount } from "@/data/accounts";
import { getPlace } from "@/data/places";
import ReachBadge from "@/components/ReachBadge";

const kindLabels: Record<string, string> = {
  geraet: "Gerät",
  skill: "Können",
  suche: "Suche",
  raum: "Raum",
  hilfe: "Hilfe",
};

const kindIcons: Record<string, string> = {
  geraet: "\u{1F527}",
  skill: "\u{1F4A1}",
  suche: "\u{1F50D}",
  raum: "\u{1F3E0}",
  hilfe: "\u{2764}",
};

export function generateStaticParams() {
  return resources.map((r) => ({ id: r.id }));
}

export default async function RessourcenDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const resource = getResource(id);
  if (!resource) return <p>Ressource nicht gefunden.</p>;

  const owner = getAccount(resource.ownerId);
  const place = getPlace(resource.placeId);

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/ressourcen"
        className="text-sm text-emerald-700 hover:text-emerald-900 mb-4 inline-block"
      >
        &larr; Alle Ressourcen
      </Link>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-3xl mt-1">
            {kindIcons[resource.resourceKind] || "\u{1F91D}"}
          </span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl font-bold text-gray-900">
                {resource.title}
              </h1>
              <ReachBadge level={resource.visibilityScope} />
            </div>
            <p className="text-sm text-gray-400 mt-0.5">
              {kindLabels[resource.resourceKind] || resource.resourceKind}
            </p>
          </div>
        </div>
        <p className="text-gray-600">{resource.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {owner && (
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h2 className="font-semibold text-gray-900 mb-2 text-sm">
              Anbieter
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{owner.avatarEmoji}</span>
              <div>
                <p className="font-medium text-gray-900">
                  {owner.displayName}
                </p>
                <p className="text-xs text-gray-500">{owner.bio}</p>
              </div>
            </div>
          </div>
        )}
        {place && (
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h2 className="font-semibold text-gray-900 mb-2 text-sm">Ort</h2>
            <Link
              href={`/orte/${place.id}`}
              className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900"
            >
              <span>{"\u{1F4CD}"}</span>
              <span>{place.name}</span>
            </Link>
            <p className="text-xs text-gray-500 mt-1">{place.description}</p>
          </div>
        )}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="font-semibold text-gray-900 mb-2">Kontakt aufnehmen</h2>
        <p className="text-sm text-gray-600 mb-3">
          In einer echten Version würdest du hier eine Direktnachricht an den
          Anbieter senden können.
        </p>
        <button
          disabled
          className="bg-emerald-200 text-emerald-600 px-4 py-2 rounded-lg text-sm cursor-not-allowed"
        >
          Nachricht schreiben (Demo)
        </button>
      </div>
    </div>
  );
}
