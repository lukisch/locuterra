import { Channel } from "./types";

export const channels: Channel[] = [
  {
    id: "gemeinde-info",
    name: "Gemeinde Grüntal informiert",
    operatorId: "jonas",
    placeId: "gruental",
    description:
      "Offizieller Informationskanal der Gemeinde: Termine, Beschlüsse, Bauvorhaben und Hinweise.",
    visibilityScope: "kommune",
    subscriberCount: 312,
    posts: [
      {
        id: "post-1",
        title: "Straßensperrung Lindenallee ab 2. Juni",
        body: "Die Lindenallee wird vom 2. bis 15. Juni wegen Kanalbauarbeiten gesperrt. Umleitung über Birkenweg.",
        postedAt: "2026-05-29",
      },
      {
        id: "post-2",
        title: "Bürgersprechstunde am 5. Juni",
        body: "Die nächste offene Bürgersprechstunde findet am 5. Juni von 16 bis 18 Uhr im Gemeindezentrum statt.",
        postedAt: "2026-05-28",
      },
    ],
  },
  {
    id: "nachbarschafts-kanal",
    name: "Nachbarschaftshilfe aktuell",
    operatorId: "jonas",
    placeId: "gruental",
    description:
      "Neuigkeiten, Hilfegesuche und Erfolgsgeschichten aus der Nachbarschaftshilfe.",
    visibilityScope: "kommune",
    subscriberCount: 89,
    posts: [
      {
        id: "post-3",
        title: "Erfolg: Thomas' Hecke ist geschnitten!",
        body: "Drei Helfer haben sich am Samstag gemeldet. Die 40-Meter-Hecke steht jetzt wieder ordentlich. Danke an alle!",
        postedAt: "2026-05-27",
      },
    ],
  },
];

export function getChannel(id: string): Channel | undefined {
  return channels.find((c) => c.id === id);
}
