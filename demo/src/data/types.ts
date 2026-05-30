export type ReachLevel =
  | "privat"
  | "gruppe"
  | "ort"
  | "dorf"
  | "kommune"
  | "region"
  | "land"
  | "national"
  | "transnational";

export type AccountStatus = "active" | "hidden" | "archived";

export interface Account {
  id: string;
  displayName: string;
  bio: string;
  avatarEmoji: string;
  primaryPlaceId: string;
  status: AccountStatus;
  joinedAt: string;
}

export interface Place {
  id: string;
  name: string;
  placeType: "stadtteil" | "treffpunkt" | "einrichtung" | "natur" | "platz";
  parentPlaceId: string | null;
  description: string;
  visibilityScope: ReachLevel;
  status: "active";
}

export interface Group {
  id: string;
  name: string;
  placeId: string;
  description: string;
  visibilityScope: ReachLevel;
  membershipPolicy: "offen" | "einladung" | "genehmigung";
  memberCount: number;
  stewardAccountId: string;
  status: "active";
}

export interface Resource {
  id: string;
  ownerId: string;
  placeId: string;
  resourceKind: "geraet" | "skill" | "suche" | "raum" | "hilfe";
  title: string;
  description: string;
  visibilityScope: ReachLevel;
  status: "active" | "archiviert";
}

export interface Message {
  id: string;
  conversationId: string;
  senderAccountId: string;
  body: string;
  sentAt: string;
}

export interface Conversation {
  id: string;
  participantIds: string[];
  subject: string;
}

export interface Channel {
  id: string;
  name: string;
  operatorId: string;
  placeId: string;
  description: string;
  visibilityScope: ReachLevel;
  subscriberCount: number;
  posts: ChannelPost[];
}

export interface ChannelPost {
  id: string;
  title: string;
  body: string;
  postedAt: string;
}
