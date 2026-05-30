import { Place } from "./types";

export const places: Place[] = [
  {
    id: "gruental",
    name: "Grüntal",
    placeType: "stadtteil",
    parentPlaceId: null,
    description:
      "Fiktive Kleinstadt in Brandenburg mit rund 8.000 Einwohnern. Drei Ortsteile, ein See, viel Grün.",
    visibilityScope: "kommune",
    status: "active",
  },
  {
    id: "gruental-mitte",
    name: "Grüntal-Mitte",
    placeType: "stadtteil",
    parentPlaceId: "gruental",
    description:
      "Das Zentrum mit Marktplatz, Gemeindezentrum und den meisten Geschäften.",
    visibilityScope: "kommune",
    status: "active",
  },
  {
    id: "waldrand",
    name: "Waldrand",
    placeType: "stadtteil",
    parentPlaceId: "gruental",
    description:
      "Ruhiger Ortsteil am Kiefernwald. Familien, Spielplätze, kurze Wege zur Natur.",
    visibilityScope: "kommune",
    status: "active",
  },
  {
    id: "seeufer",
    name: "Seeufer",
    placeType: "stadtteil",
    parentPlaceId: "gruental",
    description:
      "Ortsteil am Grüntaler See. Kleingärten, Badestelle und der Gartenverein.",
    visibilityScope: "kommune",
    status: "active",
  },
  {
    id: "marktplatz",
    name: "Marktplatz Grüntal",
    placeType: "platz",
    parentPlaceId: "gruental-mitte",
    description:
      "Zentraler Treffpunkt. Wochenmarkt am Samstag, Veranstaltungen im Sommer.",
    visibilityScope: "dorf",
    status: "active",
  },
  {
    id: "gemeindezentrum",
    name: "Gemeindezentrum",
    placeType: "einrichtung",
    parentPlaceId: "gruental-mitte",
    description:
      "Veranstaltungsräume, Bürgerbüro und Treffpunkt für Initiativen.",
    visibilityScope: "kommune",
    status: "active",
  },
  {
    id: "bibliothek",
    name: "Stadtbibliothek Grüntal",
    placeType: "einrichtung",
    parentPlaceId: "gruental-mitte",
    description:
      "Bücher, Medien, Arbeitsplätze und regelmäßige Lesungen.",
    visibilityScope: "kommune",
    status: "active",
  },
  {
    id: "waldspielplatz",
    name: "Waldspielplatz",
    placeType: "natur",
    parentPlaceId: "waldrand",
    description:
      "Naturnaher Spielplatz mit Kletterbäumen und Sandkasten. Treffpunkt für Familien.",
    visibilityScope: "dorf",
    status: "active",
  },
  {
    id: "badestelle",
    name: "Badestelle am See",
    placeType: "natur",
    parentPlaceId: "seeufer",
    description:
      "Öffentliche Badestelle mit Liegewiese und kleinem Kiosk im Sommer.",
    visibilityScope: "kommune",
    status: "active",
  },
];

export function getPlace(id: string): Place | undefined {
  return places.find((p) => p.id === id);
}
