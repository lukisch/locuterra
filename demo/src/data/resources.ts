import { Resource } from "./types";

export const resources: Resource[] = [
  {
    id: "bohrmaschine",
    ownerId: "thomas",
    placeId: "seeufer",
    resourceKind: "geraet",
    title: "Bohrmaschine zum Ausleihen",
    description:
      "Bosch-Schlagbohrmaschine mit Zubehör. Gegen Abholung am Seeufer. Bitte vorher Nachricht schreiben.",
    visibilityScope: "dorf",
    status: "active",
  },
  {
    id: "naehkurs",
    ownerId: "maren",
    placeId: "gemeindezentrum",
    resourceKind: "skill",
    title: "Nähkurs für Anfänger",
    description:
      "Ich zeige euch die Grundlagen an der Nähmaschine. Mittwochs 16-18 Uhr im Gemeindezentrum. Nähmaschine bringe ich mit.",
    visibilityScope: "kommune",
    status: "active",
  },
  {
    id: "tuerkisch",
    ownerId: "ayla",
    placeId: "bibliothek",
    resourceKind: "skill",
    title: "Türkisch-Nachhilfe",
    description:
      "Einzelunterricht oder Kleingruppe. Alle Level. In der Bibliothek oder online.",
    visibilityScope: "kommune",
    status: "active",
  },
  {
    id: "fahrradanhaenger",
    ownerId: "jonas",
    placeId: "waldrand",
    resourceKind: "geraet",
    title: "Fahrradanhänger für Kindertransport",
    description:
      "Thule Chariot, Zweisitzer. Für Tagesausflüge oder regelmäßige Nutzung. Abholung Waldrand.",
    visibilityScope: "kommune",
    status: "active",
  },
  {
    id: "suche-klavier",
    ownerId: "maren",
    placeId: "gruental-mitte",
    resourceKind: "suche",
    title: "Suche Klavierlehrer für Anfänger",
    description:
      "Mein Sohn (9) möchte Klavier lernen. Suche jemanden, der Einzelunterricht gibt. Gerne auch Tausch gegen Nähkurs.",
    visibilityScope: "kommune",
    status: "active",
  },
  {
    id: "suche-heckenschnitt",
    ownerId: "thomas",
    placeId: "seeufer",
    resourceKind: "suche",
    title: "Hilfe beim Heckenschnitt gesucht",
    description:
      "Meine Hecke ist 40 Meter lang und ich schaffe es nicht mehr allein. Wer hat eine Heckenschere und Zeit?",
    visibilityScope: "dorf",
    status: "active",
  },
  {
    id: "gemeinderaum",
    ownerId: "jonas",
    placeId: "gemeindezentrum",
    resourceKind: "raum",
    title: "Gemeinderaum für Initiativen",
    description:
      "Der kleine Saal im Gemeindezentrum kann für Treffen, Workshops oder Versammlungen genutzt werden. Terminabsprache über mich.",
    visibilityScope: "kommune",
    status: "active",
  },
  {
    id: "lernhilfe",
    ownerId: "lina",
    placeId: "bibliothek",
    resourceKind: "hilfe",
    title: "Lernhilfe Mathe und Deutsch",
    description:
      "Ich helfe Schülerinnen und Schülern der Klassen 5-10 bei Mathe und Deutsch. Dienstags und donnerstags in der Bibliothek.",
    visibilityScope: "kommune",
    status: "active",
  },
];

export function getResource(id: string): Resource | undefined {
  return resources.find((r) => r.id === id);
}
