# SCREENMAP.md — Webapp-MVP-Screenmap und Routenplan

> Dieser Routenplan beschreibt alle Screens der LOCUTERRA-Webapp v0.1.
> Grundlage: PORTIERUNGSPLAN.md, ROLES_AND_RIGHTS.md, DATENMODELL.md.
> Stack: Next.js 15 App Router, statisches Export (`output: export`),
> Basis-Pfad `/locuterra`.

---

## Routentabelle

| Route | Datei in `demo/src/app/` | Screen-Titel | Zugriffsebene | Status |
|---|---|---|---|---|
| `/locuterra/` | `page.tsx` | Feed / Startseite | Alle | Implementiert |
| `/locuterra/orte` | `orte/page.tsx` | Orte-Liste | Alle | Implementiert |
| `/locuterra/orte/[id]` | `orte/[id]/page.tsx` | Ort-Detail | Alle | Implementiert |
| `/locuterra/gruppen` | `gruppen/page.tsx` | Gruppen-Liste | Alle | Implementiert |
| `/locuterra/gruppen/[id]` | `gruppen/[id]/page.tsx` | Gruppe-Detail | Alle | Implementiert |
| `/locuterra/ressourcen` | `ressourcen/page.tsx` | Ressourcen-Liste | Alle | Implementiert |
| `/locuterra/ressourcen/[id]` | `ressourcen/[id]/page.tsx` | Ressource-Detail | Alle | Implementiert |
| `/locuterra/kanaele` | `kanaele/page.tsx` | Kanal-Liste | Alle | Implementiert |
| `/locuterra/kanaele/[id]` | `kanaele/[id]/page.tsx` | Kanal-Detail | Alle | **Ergänzt (Loop 12)** |
| `/locuterra/nachrichten` | `nachrichten/page.tsx` | Direktnachrichten | Eingeloggt (Demo) | Implementiert |
| `/locuterra/profil` | `profil/page.tsx` | Eigenes Profil | Eingeloggt (Demo) | Implementiert |

## Screen-Beschreibungen

### Feed / Startseite (`/locuterra/`)

- Einstiegsscreen der Webapp
- Zeigt einen lokalisierten Inhaltsüberblick
- Verlinkt auf alle Hauptbereiche (Orte, Gruppen, Ressourcen, Kanäle)

### Orte (`/locuterra/orte` und `/locuterra/orte/[id]`)

- Liste: Alle Orte in Grüntal mit Reichweiten-Badge und Beschreibung
- Detail: Ort mit Adresse, Gruppen, Ressourcen und Kanälen die diesem Ort zugeordnet sind

### Gruppen (`/locuterra/gruppen` und `/locuterra/gruppen/[id]`)

- Liste: Verfügbare lokale Gruppen mit Mitgliederanzahl, Typ und Reichweite
- Detail: Gruppeninfo, Mitgliederauszug, Steward, Beitreten-Button (Demo)

### Ressourcen (`/locuterra/ressourcen` und `/locuterra/ressourcen/[id]`)

- Liste: Verfügbare nicht-kommerzielle Ressourcen mit Reichweiten-Badge
- Detail: Ressource mit Anbieterkontakt (Demo), Ort, Beschreibung

### Informationskanäle (`/locuterra/kanaele` und `/locuterra/kanaele/[id]`)

- Liste: Offizielle Kanäle mit Abonnentenzahl, Betreiber, Reichweite und letztem Beitrag
- Detail: Kanal mit vollständiger Beitragsliste, Abonnieren-Button (Demo)

### Nachrichten (`/locuterra/nachrichten`)

- Direktnachrichtenübersicht (Demo: statische Mockdaten)
- Zugriffsschutz: im MVP nur als Demo, kein echter Login

### Profil (`/locuterra/profil`)

- Eigenes Bürgerkonto: Anzeigename, Avatar, Primärort, Mitgliedschaften
- Im MVP statische Demo-Daten

## Mobile Navigation (Bottom-Bar)

Die `Navigation`-Komponente (`demo/src/components/Navigation.tsx`) implementiert
eine Bottom-Navigation für Mobile mit 5 festen Einträgen:

| Position | Label | Ziel-Route | Icon |
|---|---|---|---|
| 1 | Feed | `/locuterra/` | 🏠 |
| 2 | Orte | `/locuterra/orte` | 📍 |
| 3 | Gruppen | `/locuterra/gruppen` | 👥 |
| 4 | Kanäle | `/locuterra/kanaele` | 📢 |
| 5 | Profil | `/locuterra/profil` | 👤 |

Ressourcen und Nachrichten sind über den Feed und die Listen-Screens erreichbar,
nicht in der primären Bottom-Bar, um die Navigationsdichte zu reduzieren.

## Fehlende Screens (Phase 1+, Backlog)

| Screen | Route (geplant) | Zweck |
|---|---|---|
| Moderations-Backoffice | `/locuterra/moderation` | Einspruchsstelle für Stewards |
| Einspruch-Formular | `/locuterra/einspruch` | Bürger-seitige Einspruchseinreichung |
| Kanal abonnieren | In Kanal-Detail (Modal) | Kanalabo mit Consent-Dialog |
| Warnmeldungen | `/locuterra/warnungen` | Krisenmodul (Backlog, eigenes Modul) |
| Login / Registrierung | `/locuterra/login` | Echter Auth-Flow (Phase 1) |
| Einstellungen | `/locuterra/einstellungen` | Permissions, Notifications, Datenschutz |

## Navigationsprinzipien (Mobile)

1. **Bottom-Bar für Primärnavigation:** Maximal 5 Einträge, immer sichtbar.
2. **Zurück-Navigation:** Innerhalb von Detail-Screens über „← Zurück"-Link.
3. **Touch-Targets:** Mindestens 44×44 pt (Apple HIG) / 48dp (Material).
4. **Aktiver Zustand:** Aktuell aktiver Tab visuell hervorgehoben.
5. **Kein Hamburger-Menü im MVP:** Alle Hauptbereiche direkt erreichbar.

## Revisionsvermerk

Stand: 2026-06-11 — Erstversion für MVP v0.1 (Loop Run 12).
Nächste Revision: nach Implementierung von Login/Auth und Moderationsbackoffice.
