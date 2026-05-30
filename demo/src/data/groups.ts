import { Group } from "./types";

export const groups: Group[] = [
  {
    id: "nachbarschaftshilfe",
    name: "Nachbarschaftshilfe Grüntal",
    placeId: "gruental",
    description:
      "Gegenseitige Hilfe im Alltag: Einkäufe, Gartenarbeit, Kinderbetreuung, Reparaturen. Offen für alle.",
    visibilityScope: "kommune",
    membershipPolicy: "offen",
    memberCount: 47,
    stewardAccountId: "jonas",
    status: "active",
  },
  {
    id: "gartenfreunde",
    name: "Gartenfreunde am See",
    placeId: "seeufer",
    description:
      "Kleingärtner und Hobbygärtner tauschen Tipps, Samen und Werkzeug. Gemeinsame Arbeitseinsätze.",
    visibilityScope: "dorf",
    membershipPolicy: "offen",
    memberCount: 23,
    stewardAccountId: "thomas",
    status: "active",
  },
  {
    id: "elterntreff",
    name: "Elterntreff Waldrand",
    placeId: "waldrand",
    description:
      "Eltern mit kleinen Kindern treffen sich am Waldspielplatz. Gegenseitige Betreuung und Austausch.",
    visibilityScope: "dorf",
    membershipPolicy: "offen",
    memberCount: 15,
    stewardAccountId: "maren",
    status: "active",
  },
  {
    id: "willkommen",
    name: "Willkommen in Grüntal",
    placeId: "gruental",
    description:
      "Integrations- und Kennenlerngruppe für neue Bürgerinnen und Bürger. Sprachcafé, Stadtführungen, Patenschaften.",
    visibilityScope: "kommune",
    membershipPolicy: "offen",
    memberCount: 31,
    stewardAccountId: "ayla",
    status: "active",
  },
  {
    id: "lesekreis",
    name: "Lesekreis Bibliothek",
    placeId: "bibliothek",
    description:
      "Monatliches Treffen in der Stadtbibliothek. Wir lesen und diskutieren gemeinsam.",
    visibilityScope: "kommune",
    membershipPolicy: "offen",
    memberCount: 12,
    stewardAccountId: "lina",
    status: "active",
  },
];

export function getGroup(id: string): Group | undefined {
  return groups.find((g) => g.id === id);
}
