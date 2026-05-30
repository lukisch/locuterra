import Card from "@/components/Card";
import ReachBadge from "@/components/ReachBadge";
import { places } from "@/data/places";

const placeIcons: Record<string, string> = {
  stadtteil: "\u{1F3D8}",
  treffpunkt: "\u{1F91D}",
  einrichtung: "\u{1F3DB}",
  natur: "\u{1F333}",
  platz: "\u{26F2}",
};

export default function OrtePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Orte in Grüntal</h1>
      <p className="text-gray-500 mb-6">
        Entdecke Stadtteile, Treffpunkte, Einrichtungen und Naturorte.
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {places.map((place) => (
          <Card
            key={place.id}
            href={`/orte/${place.id}`}
            emoji={placeIcons[place.placeType] || "\u{1F4CD}"}
            title={place.name}
            subtitle={place.placeType.charAt(0).toUpperCase() + place.placeType.slice(1)}
            badge={<ReachBadge level={place.visibilityScope} />}
          >
            {place.description}
          </Card>
        ))}
      </div>
    </div>
  );
}
