import { Account } from "./types";

export const accounts: Account[] = [
  {
    id: "maren",
    displayName: "Maren H.",
    bio: "Alleinerziehende Mutter, Nähbegeisterte, sucht Austausch in Grüntal-Mitte.",
    avatarEmoji: "\u{1F9F5}",
    primaryPlaceId: "gruental-mitte",
    status: "active",
    joinedAt: "2026-01-15",
  },
  {
    id: "thomas",
    displayName: "Thomas B.",
    bio: "Rentner und Hobbygärtner. Leite den Gartenverein am See seit 2019.",
    avatarEmoji: "\u{1F331}",
    primaryPlaceId: "seeufer",
    status: "active",
    joinedAt: "2026-01-10",
  },
  {
    id: "ayla",
    displayName: "Ayla D.",
    bio: "Neu in Grüntal, Lehrerin, biete Türkisch-Nachhilfe und suche Anschluss.",
    avatarEmoji: "\u{1F4DA}",
    primaryPlaceId: "gruental-mitte",
    status: "active",
    joinedAt: "2026-03-01",
  },
  {
    id: "jonas",
    displayName: "Jonas H.",
    bio: "Steward der Nachbarschaftshilfe. Fahrradmechaniker und Allround-Helfer.",
    avatarEmoji: "\u{1F6B2}",
    primaryPlaceId: "waldrand",
    status: "active",
    joinedAt: "2026-01-08",
  },
  {
    id: "lina",
    displayName: "Lina S.",
    bio: "Studentin, jobbt in der Bibliothek, organisiert den Elterntreff mit.",
    avatarEmoji: "\u{1F393}",
    primaryPlaceId: "waldrand",
    status: "active",
    joinedAt: "2026-02-20",
  },
  {
    id: "demo-user",
    displayName: "Du (Demo)",
    bio: "Dein Demo-Profil in Grüntal. Klicke dich durch die Funktionen.",
    avatarEmoji: "\u{1F44B}",
    primaryPlaceId: "gruental-mitte",
    status: "active",
    joinedAt: "2026-05-30",
  },
];

export function getAccount(id: string): Account | undefined {
  return accounts.find((a) => a.id === id);
}
