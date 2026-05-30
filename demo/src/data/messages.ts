import { Conversation, Message } from "./types";

export const conversations: Conversation[] = [
  {
    id: "conv-1",
    participantIds: ["demo-user", "thomas"],
    subject: "Bohrmaschine ausleihen",
  },
  {
    id: "conv-2",
    participantIds: ["demo-user", "maren"],
    subject: "Nähkurs Anmeldung",
  },
  {
    id: "conv-3",
    participantIds: ["demo-user", "jonas"],
    subject: "Nachbarschaftshilfe beitreten",
  },
];

export const messages: Message[] = [
  {
    id: "msg-1",
    conversationId: "conv-1",
    senderAccountId: "demo-user",
    body: "Hallo Thomas, ich habe dein Angebot für die Bohrmaschine gesehen. Könnte ich sie am Samstag abholen?",
    sentAt: "2026-05-28T10:15:00",
  },
  {
    id: "msg-2",
    conversationId: "conv-1",
    senderAccountId: "thomas",
    body: "Klar, Samstag passt. Ich bin ab 10 Uhr da. Einfach am Gartentor klingeln, Seeufer 14.",
    sentAt: "2026-05-28T11:30:00",
  },
  {
    id: "msg-3",
    conversationId: "conv-1",
    senderAccountId: "demo-user",
    body: "Super, danke! Bringe ich am Montag zurück.",
    sentAt: "2026-05-28T11:45:00",
  },
  {
    id: "msg-4",
    conversationId: "conv-2",
    senderAccountId: "demo-user",
    body: "Hallo Maren, ist im Nähkurs noch ein Platz frei? Ich bin kompletter Anfänger.",
    sentAt: "2026-05-27T14:00:00",
  },
  {
    id: "msg-5",
    conversationId: "conv-2",
    senderAccountId: "maren",
    body: "Ja, komm einfach nächsten Mittwoch vorbei! Ich bringe eine zweite Nähmaschine mit. Du brauchst nur Stoff, den Rest habe ich da.",
    sentAt: "2026-05-27T15:20:00",
  },
  {
    id: "msg-6",
    conversationId: "conv-3",
    senderAccountId: "demo-user",
    body: "Hi Jonas, ich würde gerne bei der Nachbarschaftshilfe mitmachen. Was kann ich tun?",
    sentAt: "2026-05-29T09:00:00",
  },
  {
    id: "msg-7",
    conversationId: "conv-3",
    senderAccountId: "jonas",
    body: "Willkommen! Schau einfach in die Gruppe rein, da posten wir regelmäßig Gesuche. Wenn du was Bestimmtes kannst, trag es als Ressource ein.",
    sentAt: "2026-05-29T09:45:00",
  },
];

export function getConversation(id: string): Conversation | undefined {
  return conversations.find((c) => c.id === id);
}

export function getMessagesForConversation(conversationId: string): Message[] {
  return messages.filter((m) => m.conversationId === conversationId);
}
