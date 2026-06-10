# PWA-Policy und MVP-Screenmap — Implementierungsplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Drei offene Phase-0-Aufgaben für LOCUTERRA abschließen: `PWA_POLICY.md` als verbindliche Leitplanken für PWA-Funktionen, `SCREENMAP.md` als vollständiger Routenplan, und die fehlende `kanaele/[id]`-Detailroute im Next.js-Demonstrator.

**Architecture:** Zwei neue Markdown-Dokumente im Projektordner (`DEV_LOCUTERRA/`) werden durch Node.js-Tests in `demo/tests/pwa.test.mjs` abgesichert, die das Vorhandensein der Pflichtabschnitte prüfen. Die fehlende Kanal-Detail-Seite folgt dem Pattern der bestehenden `gruppen/[id]/page.tsx`.

**Tech Stack:** Next.js 15, TypeScript, Node.js `node:test` + `node:assert/strict`, Markdown.

---

## Dateiübersicht

| Aktion | Datei | Zweck |
|---|---|---|
| Neu | `DEV_LOCUTERRA/PWA_POLICY.md` | Verbindliche PWA-Regeln für Push, Offline, Standort, Consent |
| Neu | `DEV_LOCUTERRA/SCREENMAP.md` | MVP-Screenmap und Routenplan |
| Neu | `demo/src/app/kanaele/[id]/page.tsx` | Kanal-Detailseite (fehlt bisher) |
| Ändern | `demo/tests/pwa.test.mjs` | Neue Test-Suites für die drei neuen Artefakte |

---

### Task 1: Tests für PWA_POLICY.md und SCREENMAP.md schreiben

**Dateien:**
- Ändern: `demo/tests/pwa.test.mjs`

- [ ] **Schritt 1: Test-Blöcke am Ende von `demo/tests/pwa.test.mjs` ergänzen**

Folgenden Block ans Ende der Datei anhängen (nach dem letzten bestehenden Test):

```javascript
// --- PWA_POLICY.md ---

const pwaPolicy = resolve(root, '..', 'PWA_POLICY.md');

test('PWA_POLICY.md existiert', () => {
  assert.ok(existsSync(pwaPolicy), 'PWA_POLICY.md fehlt im Projektordner');
});

test('PWA_POLICY.md enthält Abschnitt Web Push', () => {
  const c = readFileSync(pwaPolicy, 'utf-8');
  assert.ok(c.includes('Web Push') || c.includes('Push-Benachrichtigung'),
    'Kein Web-Push-Abschnitt in PWA_POLICY.md');
});

test('PWA_POLICY.md enthält Abschnitt Offline', () => {
  const c = readFileSync(pwaPolicy, 'utf-8');
  assert.ok(c.includes('Offline'), 'Kein Offline-Abschnitt in PWA_POLICY.md');
});

test('PWA_POLICY.md enthält Abschnitt Standort', () => {
  const c = readFileSync(pwaPolicy, 'utf-8');
  assert.ok(c.includes('Standort') || c.includes('Geolocation'),
    'Kein Standort-Abschnitt in PWA_POLICY.md');
});

test('PWA_POLICY.md enthält Abschnitt Consent/Einwilligung', () => {
  const c = readFileSync(pwaPolicy, 'utf-8');
  assert.ok(c.includes('Consent') || c.includes('Einwilligung'),
    'Kein Consent-Abschnitt in PWA_POLICY.md');
});

// --- SCREENMAP.md ---

const screenmap = resolve(root, '..', 'SCREENMAP.md');

test('SCREENMAP.md existiert', () => {
  assert.ok(existsSync(screenmap), 'SCREENMAP.md fehlt im Projektordner');
});

test('SCREENMAP.md enthält alle 5 Hauptrouten', () => {
  const c = readFileSync(screenmap, 'utf-8');
  for (const route of ['/orte', '/gruppen', '/ressourcen', '/kanaele', '/nachrichten']) {
    assert.ok(c.includes(route), `SCREENMAP.md: Route "${route}" fehlt`);
  }
});

test('SCREENMAP.md erwähnt Mobile-Navigation', () => {
  const c = readFileSync(screenmap, 'utf-8');
  assert.ok(c.includes('Navigation') || c.includes('Bottom-Bar') || c.includes('nav'),
    'SCREENMAP.md: Kein Abschnitt zur mobilen Navigation');
});

// --- kanaele/[id] Route ---

test('kanaele/[id]/page.tsx existiert', () => {
  assert.ok(
    exists('src/app/kanaele/[id]/page.tsx'),
    'demo/src/app/kanaele/[id]/page.tsx fehlt'
  );
});

test('kanaele/[id]/page.tsx enthält generateStaticParams', () => {
  assert.ok(
    read('src/app/kanaele/[id]/page.tsx').includes('generateStaticParams'),
    'kanaele/[id]/page.tsx: generateStaticParams fehlt'
  );
});

test('kanaele/[id]/page.tsx enthält getChannel', () => {
  assert.ok(
    read('src/app/kanaele/[id]/page.tsx').includes('getChannel'),
    'kanaele/[id]/page.tsx: getChannel-Import fehlt'
  );
});
```

- [ ] **Schritt 2: Tests fehlschlagen lassen**

```powershell
cd "C:\Users\User\OneDrive\.TOPICS\.SOFTWARE\UMBRUCH\DEV_LOCUTERRA\demo"
node --test tests/pwa.test.mjs 2>&1 | Select-String -Pattern "(FAIL|pass|fail)" | Select-Object -Last 20
```

Erwartetes Ergebnis: Die neu hinzugefügten Tests schlagen fehl (PWA_POLICY.md fehlt, SCREENMAP.md fehlt, kanaele/[id]/page.tsx fehlt).

---

### Task 2: PWA_POLICY.md schreiben

**Dateien:**
- Neu: `DEV_LOCUTERRA/PWA_POLICY.md`

- [ ] **Schritt 3: `DEV_LOCUTERRA/PWA_POLICY.md` erstellen**

Vollständiger Inhalt der Datei:

```markdown
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
```

- [ ] **Schritt 4: Tests für PWA_POLICY.md erfolgreich laufen lassen**

```powershell
cd "C:\Users\User\OneDrive\.TOPICS\.SOFTWARE\UMBRUCH\DEV_LOCUTERRA\demo"
node --test tests/pwa.test.mjs 2>&1 | Select-String "(PWA_POLICY|✓|✗|FAIL|pass)" | Select-Object -Last 10
```

Erwartetes Ergebnis: Die 5 PWA_POLICY-Tests sind grün.

---

### Task 3: SCREENMAP.md schreiben

**Dateien:**
- Neu: `DEV_LOCUTERRA/SCREENMAP.md`

- [ ] **Schritt 5: `DEV_LOCUTERRA/SCREENMAP.md` erstellen**

Vollständiger Inhalt:

```markdown
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
```

- [ ] **Schritt 6: Tests für SCREENMAP.md erfolgreich laufen lassen**

```powershell
cd "C:\Users\User\OneDrive\.TOPICS\.SOFTWARE\UMBRUCH\DEV_LOCUTERRA\demo"
node --test tests/pwa.test.mjs 2>&1 | Select-String "(SCREENMAP|✓|✗|pass|fail)" | Select-Object -Last 10
```

Erwartetes Ergebnis: Die 3 SCREENMAP-Tests sind grün.

---

### Task 4: kanaele/[id]/page.tsx implementieren

**Dateien:**
- Neu: `demo/src/app/kanaele/[id]/page.tsx`

- [ ] **Schritt 7: Verzeichnis anlegen und `kanaele/[id]/page.tsx` schreiben**

```powershell
mkdir "C:\Users\User\OneDrive\.TOPICS\.SOFTWARE\UMBRUCH\DEV_LOCUTERRA\demo\src\app\kanaele\[id]" 2>$null
```

Vollständiger Inhalt der Datei `demo/src/app/kanaele/[id]/page.tsx`:

```typescript
import Link from "next/link";
import { channels, getChannel } from "@/data/channels";
import { getPlace } from "@/data/places";
import ReachBadge from "@/components/ReachBadge";

export function generateStaticParams() {
  return channels.map((c) => ({ id: c.id }));
}

export default async function KanalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const channel = getChannel(id);
  if (!channel) return <p>Kanal nicht gefunden.</p>;

  const place = getPlace(channel.placeId);

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/kanaele"
        className="text-sm text-emerald-700 hover:text-emerald-900 mb-4 inline-block"
      >
        &larr; Alle Kanäle
      </Link>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{"\u{1F4E2}"}</span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl font-bold text-gray-900">{channel.name}</h1>
              <ReachBadge level={channel.visibilityScope} />
            </div>
            <p className="text-sm text-gray-400 mt-0.5">
              {channel.subscriberCount} Abonnenten
              {place ? ` \u{00B7} ${place.name}` : ""}
            </p>
          </div>
        </div>
        <p className="text-gray-600 mt-3">{channel.description}</p>
        <div className="mt-5">
          <button
            disabled
            className="bg-emerald-200 text-emerald-600 px-4 py-2 rounded-lg text-sm cursor-not-allowed"
          >
            Abonnieren (Demo)
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">
            Beiträge ({channel.posts.length})
          </h2>
        </div>
        <div className="divide-y divide-gray-50">
          {channel.posts.map((post) => (
            <div key={post.id} className="p-6">
              <p className="text-xs text-gray-400 mb-1">{post.postedAt}</p>
              <h3 className="font-medium text-gray-900">{post.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Schritt 8: Alle Tests laufen lassen**

```powershell
cd "C:\Users\User\OneDrive\.TOPICS\.SOFTWARE\UMBRUCH\DEV_LOCUTERRA\demo"
node --test tests/pwa.test.mjs 2>&1 | Select-String "(pass|fail|FAIL)" | Select-Object -Last 5
```

Erwartetes Ergebnis: Alle 3 kanaele/[id]-Tests grün.

---

### Task 5: Next.js-Build verifizieren und committen

**Dateien:** alle vier geänderten/neuen Dateien

- [ ] **Schritt 9: Alle Node.js-Tests grün (Gesamtlauf)**

```powershell
cd "C:\Users\User\OneDrive\.TOPICS\.SOFTWARE\UMBRUCH\DEV_LOCUTERRA\demo"
node --test tests/pwa.test.mjs
```

Erwartetes Ergebnis: Alle Tests grün (zuvor 24, jetzt 24 + 5 + 3 + 3 = 35 Tests).

- [ ] **Schritt 10: Next.js-Build ohne Fehler**

```powershell
cd "C:\Users\User\OneDrive\.TOPICS\.SOFTWARE\UMBRUCH\DEV_LOCUTERRA\demo"
npm run build 2>&1 | Select-String "(error|Error|Build|Route)" | Select-Object -Last 20
```

Erwartetes Ergebnis: Build clean, keine TypeScript-Fehler, neue Route `/kanaele/[id]` erscheint in der Routenliste.

- [ ] **Schritt 11: AUFGABEN.txt aktualisieren**

In `DEV_LOCUTERRA/AUFGABEN.txt` die folgenden Tasks auf `[x]` setzen:
- `[ ] PWA-Regeln für Push, Offline, Standortfreigabe und Consent definieren`
- `[ ] Webapp-MVP-Screenmap und Routenplan definieren`

Und unter ERLEDIGT ergänzen:
```
[x] PWA-Regeln für Push, Offline, Standortfreigabe und Consent definieren - Aufwand: MITTEL
    Ergebnis: `PWA_POLICY.md` legt für MVP v0.1 verbindlich fest: Web Push
    ausgeschlossen (Phase 1+), Offline-Cache ohne personenbez. Daten, Geolocation
    ausgeschlossen (Phase 1+), kein Cookie-Banner nötig, Permission-Anfragen
    nur contextual. Tests: 5 Node.js-Tests in demo/tests/pwa.test.mjs.

[x] Webapp-MVP-Screenmap und Routenplan definieren - Aufwand: MITTEL
    Ergebnis: `SCREENMAP.md` dokumentiert 11 Routes (10 bestehend + kanaele/[id]
    neu), Bottom-Bar-Navigation, Screen-Beschreibungen und 4 fehlende Phase-1-Screens.
    `demo/src/app/kanaele/[id]/page.tsx` als fehlende Detail-Route ergänzt.
    Tests: 6 Node.js-Tests in demo/tests/pwa.test.mjs.
```

- [ ] **Schritt 12: STATE.md aktualisieren**

In `DEV_LOCUTERRA/STATE.md`:
- `updated:` → `2026-06-11`
- `updated_by:` → `Claude/Loop Run 12`
- `Letzte bedeutsame Aktion:` → Beschreibung der Loop-12-Änderungen
- In der `Next:`-Liste die erledigten Tasks auf `[x]` setzen

- [ ] **Schritt 13: Commit und Push**

```powershell
cd "C:\Users\User\OneDrive\.TOPICS\.SOFTWARE\UMBRUCH\DEV_LOCUTERRA"
git add PWA_POLICY.md SCREENMAP.md AUFGABEN.txt STATE.md
git add demo/tests/pwa.test.mjs
git add demo/src/app/kanaele/
git commit -m "feat: PWA_POLICY.md, SCREENMAP.md und kanaele/[id]-Route (Loop 12)"
git push
```

Erwartetes Ergebnis: Commit und Push nach um-bruch/locuterra erfolgreich.

---

## Selbst-Review

### Spec-Abdeckung

| Aufgabe (AUFGABEN.txt) | Task im Plan |
|---|---|
| PWA-Regeln für Push | Task 2 (PWA_POLICY.md §1) |
| PWA-Regeln für Offline | Task 2 (PWA_POLICY.md §2) |
| PWA-Regeln für Standortfreigabe | Task 2 (PWA_POLICY.md §3) |
| PWA-Regeln für Consent | Task 2 (PWA_POLICY.md §4) |
| Webapp-MVP-Screenmap | Task 3 (SCREENMAP.md) |
| Routenplan | Task 3 (SCREENMAP.md Routentabelle) |
| fehlende kanaele/[id]-Route | Task 4 |

Alle Anforderungen abgedeckt. ✓

### Placeholder-Check

Keine TBD, TODO, „handle edge cases", „similar to Task N" im Plan. ✓

### Typ-Konsistenz

- `getChannel(id: string)` in channels.ts definiert und in Task 4 korrekt verwendet. ✓
- `generateStaticParams` Pattern von `gruppen/[id]/page.tsx` 1:1 übernommen. ✓
- Test-Assertions verwenden konsistent `pwaPolicy` / `screenmap` Variablen. ✓
