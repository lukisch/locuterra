# PWA_POLICY.md — PWA-Regeln für LOCUTERRA MVP

> Dieses Dokument legt verbindlich fest, welche Progressive-Web-App-Fähigkeiten
> im LOCUTERRA-MVP erlaubt, optional oder ausgeschlossen sind.
> Grundlage: DATENSCHUTZ.md, SICHERHEIT_UND_MISSBRAUCH.md, PORTIERUNGSPLAN.md.

---

## 1. Web Push Notifications

**Status MVP v0.1:** Ausgeschlossen.

### Begründung

- iOS Safari unterstützt Web Push erst ab iOS 16.4+ und nur in installierten PWAs.
- Für Nutzer, die die App nicht installieren (Mehrzahl), gibt es keine Pushes.
- DSGVO-konforme Einwilligungs- und Widerrufsmechanismen erfordern eigene UI-Flows,
  die den MVP-Fokus übersteigen.
- Web Push ist kein Zugangsweg zu Kern-Inhalten; ein Fehlen blockiert keinen MVP-Usecase.

### Regeln für spätere Versionen

- Push-Erlaubnis DARF NICHT beim App-Start oder beim ersten Aufruf angefragt werden.
  (Führt zu hoher Ablehnungsrate; erzeugt Misstrauen.)
- Push-Anfragen sind NUR contextual: unmittelbar vor dem Abonnieren eines Kanals,
  mit kurzem Erklärungstext warum.
- Push-Scope: Ausschließlich Updates abonnierter Kanäle. Keine Systemnachrichten,
  keine Onboarding-Erinnerungen, keine Werbepushes.
- Separate DSGVO-Einwilligung pro Kanal-Push, widerrufbar in den Profileinstellungen.
- Plattformverhalten: iOS 16.4+ in installierter PWA unterstützt Push;
  Android Chrome unterstützt Push ohne Installation.

---

## 2. Offline-Verhalten

**Status MVP v0.1:** Basis-Offline implementiert (Service Worker sw.js, Cache-first).

### Gecachte Inhalte (statisch, MVP)

Der Service Worker cacht die App-Shell und alle statischen Seiten:

| Pfad | Gecacht | Offline verfügbar |
|---|---|---|
| `/locuterra/` | Ja | Ja |
| `/locuterra/orte` | Ja | Ja |
| `/locuterra/gruppen` | Ja | Ja |
| `/locuterra/kanaele` | Ja | Ja |
| `/locuterra/ressourcen` | Ja | Ja |
| `/locuterra/nachrichten` | Ja | Nur statische Hülle |
| `/locuterra/profil` | Ja | Nur statische Hülle |
| CSS, JS, Icons, Manifest | Ja | Ja |

### Nicht gecacht (Datenschutz- oder Aktualitätsgründe)

- **Direktnachrichten-Inhalte:** Enthalten personenbezogene Kommunikation;
  dürfen nicht dauerhaft im Browser-Cache liegen.
- **Echtzeit-Warnungen und Krisenmeldungen:** Aktualität ist sicherheitsrelevant;
  veraltete Offline-Meldungen wären gefährlich.
- **Profildetails:** Personenbezogene Daten sollen nicht im App-Cache persistieren.

### Offline-Hinweis-Pflicht

Wenn die App offline ist und gecachte Inhalte anzeigt, MUSS sie einen sichtbaren
Hinweis zeigen: „Offline — Inhalte können veraltet sein."

Kein stilles Offline-Fallback ohne Nutzerinformation.

### Regel

Der Service-Worker-Cache darf keine personenbezogenen oder kommunikationsbezogenen
Inhalte enthalten. Cache-Invalidierung (CACHE_NAME-Versionierung) muss bei
jeglicher Änderung an gecachten Inhalten erfolgen.

---

## 3. Standortfreigabe (Geolocation API)

**Status MVP v0.1:** Ausgeschlossen.

### Begründung

- Standortdaten sind nach DSGVO besonders sensibel (Erwägungsgrund 75,
  Risiko für Grundrechte und Grundfreiheiten natürlicher Personen).
- Das Missbrauchspotenzial ist hoch: Stalking, Bewegungsprofile, Ortsdoxing.
  Siehe SICHERHEIT_UND_MISSBRAUCH.md.
- Für den MVP reicht eine grobe Ortszuordnung (Primärkommune/PLZ), die der
  Nutzer selbst einträgt.

### Regeln für spätere Versionen

- `navigator.geolocation.getCurrentPosition()` und `watchPosition()` DÜRFEN
  NICHT automatisch beim App-Start oder beim Laden einer Seite aufgerufen werden.
- Der Aufruf ist AUSSCHLIESSLICH nach aktivem Nutzer-Trigger erlaubt
  (z. B. Button „Orte in meiner Nähe suchen").
- Vor dem Aufruf MUSS ein erklärender UI-Text stehen, der den Zweck der
  Ortsabfrage benennt.
- Präzision: Maximal Ortsteils-/PLZ-Level. GPS-Exaktkoordinaten dürfen nicht
  serverseitig gespeichert werden.
- Kein Hintergrund-Geo-Tracking (`watchPosition` ohne sichtbare Nutzeraktion).
- Widerruf: Jederzeit über Browserpermissions und Profileinstellungen.

---

## 4. Consent-Management

### Welche Browser-APIs brauchen Einwilligung im MVP

| API | DSGVO-Relevanz | MVP-Status | Wann Einwilligung |
|---|---|---|---|
| Web Push (`Notification.requestPermission`) | Ja | Ausgeschlossen | Contextual bei Kanalabo |
| Geolocation (`navigator.geolocation`) | Ja | Ausgeschlossen | Contextual bei Ort-Suche |
| `localStorage` / `sessionStorage` | Nein — funktionsnotwendig | Aktiv | Keine gesonderte Einwilligung |
| Service Worker / App-Cache | Nein — funktionsnotwendig | Aktiv | Keine gesonderte Einwilligung |
| IndexedDB | Nur wenn personenbez. | Nicht aktiv | Contextual bei Feature-Einführung |

### Kein Cookie-Banner im MVP

`localStorage` und App-Cache sind technisch notwendig für die Grundfunktion
(ePrivacy-RL Art. 5 Abs. 3 / TTDSG § 25 Abs. 2: technisch notwendige Speicherungen
benötigen keine gesonderte Einwilligung — rechtliche Endprüfung durch Fachperson
erforderlich). Es werden keine Tracking-, Analyse- oder Werbedienste
eingesetzt. Ein Cookie-Banner ist daher im MVP nicht erforderlich.

Sobald externe Analysedienste oder Werbe-Cookies eingesetzt werden, muss ein
DSGVO-konformer Consent-Manager ergänzt werden.

### Allgemeine Einwilligungsprinzipien

Diese Regeln gelten für jede Permission-Anfrage im LOCUTERRA-Frontend:

1. **Zweckgebunden:** Pro API ein eigener Einwilligungsdialog mit klarer Zweckbenennung.
2. **Freiwillig:** Das Ablehnen einer Permission darf die Kernfunktionen nicht sperren.
3. **Zeitpunkt contextual:** Permissions NIEMALS beim App-Start anfragen —
   immer unmittelbar vor der Funktion, die sie braucht.
4. **Erklärungstext:** Vor jedem Permission-Dialog ein kurzer UI-Text,
   der erklärt, wozu die Berechtigung genutzt wird.
5. **Widerrufbar:** Über Browserpermissions (immer) und Profileinstellungen (zusätzlich).
6. **Informiert:** Kein „Erlauben Sie alles"-Pauschal-Dialog.

### Referenz

Die fachliche Einwilligungslogik für Profil-, Orts-, Kontakt- und Kanalfreigaben
ist in DATENSCHUTZ.md beschrieben. Diese Policy-Datei ergänzt sie um
Browser-API-spezifische Regeln.

---

## Revisionsvermerk

Stand: 2026-06-11 — Erstversion für MVP v0.1 (Phase 0).
Zuständig: LOCUTERRA-Entwicklungsteam.
Nächste Revision: nach Implementierung von Web Push oder Geolocation.
