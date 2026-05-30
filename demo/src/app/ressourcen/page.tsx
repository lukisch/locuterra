import Card from "@/components/Card";
import ReachBadge from "@/components/ReachBadge";
import { resources } from "@/data/resources";
import { getAccount } from "@/data/accounts";
import { getPlace } from "@/data/places";

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

export default function RessourcenPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Ressourcen in Grüntal
      </h1>
      <p className="text-gray-500 mb-6">
        Teilen, suchen, finden &mdash; ohne Geld, ohne Bürokratie.
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {resources.map((res) => {
          const owner = getAccount(res.ownerId);
          const place = getPlace(res.placeId);
          return (
            <Card
              key={res.id}
              href={`/ressourcen/${res.id}`}
              emoji={kindIcons[res.resourceKind] || "\u{1F91D}"}
              title={res.title}
              subtitle={`${kindLabels[res.resourceKind] || res.resourceKind} \u{00B7} ${owner?.displayName || ""} \u{00B7} ${place?.name || ""}`}
              badge={<ReachBadge level={res.visibilityScope} />}
            >
              {res.description}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
