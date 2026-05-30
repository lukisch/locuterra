# DECISIONS.md - Architektur- und Produktentscheidungen

> Chronologisch, neueste oben. Entscheidungen nicht löschen, sondern durch neue
> Einträge ersetzen oder revidieren.

---

## 2026-05-30: Demonstrator nutzt kein Backend — statischer Export mit Client-Side Seed-Daten

### Kontext

Die Produktions-Architektur sieht PostgreSQL + Prisma vor (Entscheidung
2026-05-16). Für den Demonstrator muss geklärt werden, ob dieselbe
Datenschicht aufgebaut wird.

### Entscheidung

Der Demonstrator nutzt **kein Backend und keine Datenbank**. Stattdessen:

- Next.js mit `output: 'export'` für statische Auslieferung
- Seed-Daten als JSON im Client, kein serverseitiger Datenspeicher
- Schreibaktionen (z. B. „Nachricht senden") sind ephemerer Client-State,
  der beim Neuladen zurückgesetzt wird

### Begründung

- Ein statischer Export ist auf GitHub Pages oder jedem Webserver hostbar,
  ohne dass ein Evaluator eine Datenbank aufsetzen muss.
- Ohne Datenspeicher gibt es keine DSGVO-Angriffsfläche — „haftungsarm"
  wird architektonisch erzwungen, nicht nur versprochen.
- Die PostgreSQL/Prisma-Entscheidung bleibt für die Produktions-Architektur
  unverändert. Dies ist eine Demo-Scoping-Entscheidung.

### Folge-Aktionen

- [ ] Next.js-Projekt mit `output: 'export'` konfigurieren
- [ ] Synthetische Seed-Daten als JSON-Module anlegen
- [ ] Client-Side State-Management für ephemere Interaktionen

---

## 2026-05-30: LOCUTERRA wechselt von DECIDE zu DEV — Demonstrator, GitHub-Veröffentlichung und Um:bruch-Bericht

### Kontext

Die Spezifikationsphase ist abgeschlossen: MVP-Schnitt, Rollenmodell,
Reichweitenmodell, Datenmodell, Datenschutz, Governance, Sicherheitsmodell,
Ressourcen-Flow, Informationskanal-Flow und Konfliktfälle sind dokumentiert.
Weitere Doku-Iteration ohne Tangibilität hat sinkenden Ertrag. Die bindende
Beschränkung ist nicht mehr „mehr Spezifikation", sondern Greifbarkeit und
Sichtbarkeit.

### Entscheidung

LOCUTERRA verlässt die DECIDE-Phase und wird als DEV-Projekt weitergeführt.
Der Weg besteht aus drei Schritten:

1. **Demonstrator bauen** — den MVP-Schnitt (Bürgerkonto, Orte, Gruppen,
   Ressourcen, Direktnachrichten) als geschlossene klickbare Demo mit
   synthetischen Seed-Daten umsetzen. Kein Echtbetrieb, keine echten Nutzer.
2. **Konzept + Demonstrator auf GitHub veröffentlichen** — als
   Open-Source-Referenz für öffentliche Organisationen, Kommunen und
   Civic-Tech-Akteure.
3. **Auf Um:bruch berichten** — zwei Blogartikel:
   - Eine fiktive Reportage, die das funktionierende System vorwegnimmt und
     ein Leben aus verschiedenen Rollen mit dem System darstellt.
   - Ein sachlicher Konzeptartikel, der die Vision erklärt, für Trägerschaft
     wirbt und das Konzept als Geschenk an öffentliche Organisationen
     positioniert.

### Bewusst nicht

- Kein eigener Echtbetrieb mit realen Nutzern — das Konzept fordert
  öffentlich-rechtliche oder gemeinnützige Trägerschaft, nicht Solo-Betrieb.
- Keine aktive Pilotpartner-Suche in dieser Phase — Um:bruch soll die
  Sichtbarkeit herstellen.

### Begründung

- Das Konzept ist reif und gut spezifiziert; was fehlt, ist Tangibilität.
- Ein geschlossener Demonstrator ist haftungsarm (synthetische Daten, kein
  Echtbetrieb) und solo machbar.
- GitHub-Veröffentlichung und Um:bruch-Bericht machen das Konzept für
  potenzielle Träger sichtbar, ohne dass Lukas selbst zum Betreiber wird.
- Die Botschaft ist: „Wir haben das Konzept, ihr müsst es nur noch bauen."

### Folge-Aktionen

- [x] Lifecycle-Wechsel: `DECIDE_LOCUTERRA` → `DEV_LOCUTERRA`
- [ ] Webapp-Demonstrator mit Next.js bootstrappen
- [ ] Synthetische Seed-Daten für eine fiktive Kommune anlegen
- [ ] GitHub-Repository initialisieren und Konzeptdateien einpflegen
- [ ] Um:bruch Blogartikel 1: Fiktive Reportage
- [ ] Um:bruch Blogartikel 2: Sachlicher Konzeptartikel mit Träger-Appell

---

## 2026-05-26: LOCUTERRA startet plattformseitig als Webapp/PWA und nicht als Native- oder Store-First-Projekt

### Kontext

Der Zielstack war bereits als Web/PWA-first festgelegt, aber es fehlte noch
eine klare operative Plattformentscheidung: Welche Linie wird tatsächlich als
erstes Produkt aufgebaut, und welche Plattformen folgen nur bei echtem Bedarf?

### Entscheidung

Die aktive Produktlinie ist die Webapp mit PWA-Fähigkeit. Android, iOS,
Windows, macOS und Linux bekommen im MVP keine eigenen frühen Codebasen,
sondern folgen höchstens als Hülle oder späterer Distributionspfad desselben
Webkerns.

### Begründung

- LOCUTERRA hat hohe Mobilitätsanforderung, aber auch viele Desktop- und
  Backoffice-Anteile; die Webapp deckt beides zuerst mit einer Codebasis ab.
- Bürger, Initiativen, Kommunen und Moderationsteams brauchen möglichst geringe
  Einstiegshürden.
- Datenschutz-, Reichweiten- und Rollenlogik bleiben konsistenter, wenn sie
  nicht früh auf mehrere Clients verteilt werden.
- Ein möglicher Windows-Store- oder nativer Pfad bleibt offen, wird aber erst
  nach einem stabilen Web/PWA-Kern entschieden.

### Folge-Aktionen

- [x] `PORTIERUNGSPLAN.md` mit Plattformrollen, Phasen und Exit-Kriterien
  anlegen.
- [ ] Webapp-MVP-Screenmap und Routenplan ausarbeiten.
- [ ] PWA-Regeln für Push, Offline, Standortfreigabe und Consent konkretisieren.
- [ ] Einspruchsstelle als Web-Backoffice-Fluss formalisieren.

---

## 2026-05-17: Governance und Moderation werden als eigenständige Betriebslogik spezifiziert

### Kontext

LOCUTERRA hat mit Rollen-, Reichweiten-, Datenschutz- und Sicherheitsmodell
bereits eine fachliche Basis. Offen war bisher noch, wie Trägerschaft,
Entscheidungswege, Moderation und Einspruch organisatorisch zusammenhängen.

### Entscheidung

Die Governance wird als eigene Spezifikation geführt. `GOVERNANCE.md`
beschreibt den bevorzugten Rahmen für öffentlich-rechtliche oder gemeinnützige
Trägerschaft, trennt Betrieb von Moderation und verankert einen klaren
Melde- und Einspruchsprozess.

### Begründung

- Das Projekt braucht eine sichtbare Trennung zwischen Trägerschaft,
  Plattformbetrieb und Einzelfallmoderation.
- Moderation soll eingreifbar, aber nicht willkürlich sein.
- Einspruch und Zweitprüfung sind für ein gemeinwohlorientiertes Netzwerk
  zentral.

### Folge-Aktionen

- [x] Governance-Modell dokumentieren.
- [x] Moderations- und Meldeprozess in derselben Betriebslogik verankern.
- [x] Konfliktfälle mit konkreten Beispielszenarien verproben.

Die Verprobung ist in `workflows/konfliktfaelle_meldung_triage_einspruch.md`
festgehalten und spiegelt sich in `GOVERNANCE.md`, `STATE.md` und
`README.md`.

---

## 2026-05-17: LOCUTERRA wird als DECIDE_LOCUTERRA klassifiziert

### Kontext

LOCUTERRA ist weiterhin ein Konzept- und Spezifikationsprojekt ohne Codebasis.
Der Projektordner trug deshalb bislang keinen Lifecycle-Prefix, obwohl die
Konvention `DECIDE` genau für diesen Zustand vorgesehen ist: strategische
Klärung statt aktiver Entwicklung.

### Entscheidung

Der Projektordner und der Lifecycle werden auf `DECIDE` festgelegt. Das Projekt
läuft ab jetzt als `DECIDE_LOCUTERRA`, bis die offenen Governance- und
Moderationsfragen so weit geklärt sind, dass ein echter Entwicklungs- oder
Release-Status sinnvoll wird.

### Begründung

- Es gibt noch keinen Quellcode und kein Git-Repository.
- Das Projekt braucht weiterhin Produkt- und Governance-Klärung, bevor ein
  Entwicklungsstatus sinnvoll wäre.
- Der `DECIDE`-Prefix macht die strategische Unsicherheit sichtbar und hält die
  spätere Umstellung auf `DEV` oder `FAST` sauber getrennt.

### Folge-Aktionen

- [x] Ordner auf `DECIDE_LOCUTERRA` umbenannt.
- [x] Projektstatus-, Aufgaben- und Registry-Dokumente synchronisiert.
- [x] Governance-Modell für die Trägerschaft ausarbeiten. Siehe
  `GOVERNANCE.md`.

## 2026-05-17: Informationskanäle werden als Abo, Begleitchat und Kontaktfreigabe getrennt modelliert

### Kontext

LOCUTERRA braucht für Informationskanäle einen eigenen Flow, der sich weder
mit Ressourcen noch mit Direktnachrichten vermischt. Ein Kanal kann sichtbar
sein, ohne dass Begleitchat oder Kontaktfreigaben bereits offen sind.

### Entscheidung

Informationskanäle werden als eigenständiges Kommunikationsmodul mit drei
getrennten Teilflüssen modelliert:

- Abonnement und Benachrichtigung
- optionaler Begleitchat
- optionale Kontaktfreigabe

Die bloße Kanalsichtbarkeit erzeugt keine automatische Chat- oder
Kontaktfreigabe. Deabonnieren beendet das Abo; Freigaben müssen separat
widerrufen werden, wenn sie nicht nur einmalig galten.

### Begründung

- Sichtbarkeit, Teilnahme und Kontaktrechte bleiben getrennt prüfbar.
- Betreiber können den Kanalfluss einfach halten, ohne Datenschutzregeln zu
  verwässern.
- Der Flow bleibt auf dem Web/PWA-first-Stack gut testbar.

### Folge-Aktionen

- [x] Informationskanal-Flow spezifizieren.
- [ ] Spätere Implementierung als eigene Abo-/Chat-/Consent-Logik verproben.

---

## 2026-05-16: Web/PWA-first ist der Zielstack für LOCUTERRA

### Kontext

LOCUTERRA soll in der Zielvision Android, iOS, Windows, Linux und macOS
ansprechen. Gleichzeitig ist das Projekt noch in der Konzeptphase und muss
früh prüfbar bleiben, ohne direkt in mehrere native Codebasen zu zerfallen.

### Entscheidung

Der technische Zielstack für den ersten MVP ist ein Web/PWA-first-Stack:

- Frontend: `TypeScript` + `React` + `Next.js`
- Oberfläche: responsive Webapp mit PWA-Fähigkeit
- Datenhaltung: `PostgreSQL`
- ORM: `Prisma`
- Validierung: `Zod`
- Tests: `Vitest` für Unit- und `Playwright` für Flow-Tests

Native Shells für iOS, Android oder Desktop werden erst später ergänzt, falls
sie für Distribution, Store-Anforderungen oder Geräteschnittstellen nötig sind.
Sie sind keine erste eigene Codebasis, sondern eine Verpackungs- oder
Erweiterungsoption für denselben Webkern.

### Begründung

- Ein gemeinsamer Webkern hält den MVP klein und nachvollziehbar.
- Die Zielplattformen bekommen trotzdem einen klaren Pfad über Browser, PWA
  und spätere Shells.
- Die Umsetzung bleibt testbar, bevor mehrere native Clients auseinanderlaufen.

### Folge-Aktionen

- [x] Zielstack festgelegt.
- [x] Architektur- und Übersichtsdocs abgeglichen.
- [x] Ressourcen-Flow konkretisieren.

## 2026-05-15: Ressourcen und Marktplatz werden strikt getrennt

### Kontext

LOCUTERRA beschreibt lokale Hilfsangebote, Orte, Gruppen und Kontaktaufnahme.
Sobald Geld, Gebühren oder Kaufabwicklung dazukommen, entsteht ein anderes
Risiko- und Regelwerk als bei nicht-kommerziellen Ressourcen.

### Entscheidung

Ressourcen bleiben im MVP fachlich und technisch getrennt von einem späteren
Marktplatzmodul. Ressourcen sind nicht-kommerziell, Marktplätze bekommen
später eine eigene Transaktionslogik, eigene Moderationsregeln und eigene
UI-Flows.

### Begründung

- Die lokale Hilfe bleibt im MVP klein und verständlich.
- Zahlungs-, Gebühren- und Streitlogik vermischen sich nicht mit einfachen
  Kontakt- und Hilfeangeboten.
- Die spätere Einführung eines Marktplatzes bleibt möglich, ohne das
  Ressourcensystem umzubauen.

### Folge-Aktionen

- [x] Trennspezifikation dokumentieren.
- [x] Architektur- und Übersichtsdocs abgleichen.
- [x] Ressourcen-Flow konkretisieren.

## 2026-05-15: Reichweite wird als hierarchische Auffindbarkeit modelliert

### Kontext

LOCUTERRA braucht für Orte, Gruppen und Kanäle eine klare Staffelung, damit
lokale Inhalte nicht unkontrolliert breit werden und Sichtbarkeit nicht mit
Kontakt- oder Detailzugriff verwechselt wird.

### Entscheidung

Reichweite wird in V0.1 als Hierarchie modelliert:
`privat`, `gruppe`, `ort`, `dorf / ortsteil`, `kommune`, `region`, `land`,
`national`, `transnational`.

Die Reichweite beschreibt nur die breiteste Auffindbarkeit eines Objekts. Sie
erlaubt nicht automatisch Kontakt, Vollsicht oder Bearbeitung. Für sensible
Inhalte gelten zusätzlich Mitgliedschaft, Einwilligung und Rollenrechte.

### Begründung

- Das Modell bleibt lokal verständlich und lässt sich später erweitern.
- Orte, Gruppen und Kanäle bekommen eine gemeinsame Sprache für Sichtbarkeit.
- Datenschutz bleibt separat wirksam, weil Auffindbarkeit und Verarbeitung
  nicht verschmelzen.

### Folge-Aktionen

- [x] Reichweitenmodell dokumentieren.
- [x] Reichweitenmodell mit Datenschutzregeln abgleichen.
- [x] Reichweitenmodell mit dem Rollenmodell abgleichen.

## 2026-05-15: Datenschutz und Einwilligung werden explizit modelliert

### Kontext

LOCUTERRA arbeitet mit realen Orten, lokalen Gruppen, Direktnachrichten und
potenziell sensiblen Kontakt- und Standortdaten. Ohne klare Regeln würden
Sichtbarkeit, Kommunikation und Datenspeicherung zu früh vermischt.

### Entscheidung

Für Version 0.1 wird Datenschutz als eigenständige Fachlogik beschrieben.
Pseudonymität ist Standard, Einwilligungen sind zweckgebunden und widerrufbar,
und Sichtbarkeit wird strikt von Datenverarbeitung getrennt. Kontaktfreigaben,
Ortsdaten, Nachrichten und Kanalabos bekommen jeweils eigene Schutzregeln.

### Begründung

- Der MVP bleibt lokal nutzbar, ohne unnötig sensible Daten offenzulegen.
- Kontakt, Ort und Kommunikation lassen sich getrennt steuern.
- Spätere Kommunal-, Institutions- und Kanalrollen bleiben anschlussfähig.

### Folge-Aktionen

- [x] Datenschutz- und Einwilligungsmodell aufsetzen.
- [x] Reichweitenmodell mit den neuen Schutzregeln abgleichen.
- [x] Technische Zielrichtung für den MVP vergleichen.

## 2026-05-13: Der MVP trennt Akteur, Konto, Objektrolle und Systemrolle

### Kontext

LOCUTERRA enthält viele Akteursarten: Bürger, Initiativen, Institutionen,
Kommunen, Organisationen und Unternehmen. Ohne Rollenschnitt würde der MVP zu
früh in komplexe Organisations- und Rechteverwaltung kippen.

### Entscheidung

Für Version 0.1 gibt es genau einen echten Login-Typ: das Bürgerkonto. Lokale
Initiativen werden als Gruppen- oder Ortsidentitäten modelliert, die von
Bürgerkonten als Stewards verwaltet werden. Das Rollenmodell trennt künftig
zwischen Akteur, Konto, Objektrolle und Systemrolle.

### Begründung

- Der Bürger-MVP bleibt kleiner und schneller testbar.
- Fake-Organisationen und Rechteeskalation werden schwerer.
- Spätere Institutionen- und Kommunalrollen bleiben anschlussfähig, ohne den
  aktuellen MVP zu überladen.

### Folge-Aktionen

- [x] Rollen- und Rechtekonzept dokumentieren.
- [x] Datenschutz- und Einwilligungsmodell auf das Rollenmodell aufsetzen.
- [x] Reichweitenmodell mit den neuen Objektrollen abgleichen.
- [x] Datenmodell mit `verification_level` und Rollen-Zuordnungen vorbereiten.

## 2026-05-12: LOCUTERRA Version 0.1 startet als lokaler Bürger-MVP

### Kontext

Der Projektumfang ist groß: Bürger, Institutionen, Kommunen, Organisationen,
Unternehmen, Kanäle, Warnungen und Marktplatzlogik. Für eine erste Version
braucht das Projekt eine klar prüfbare Eingrenzung.

### Entscheidung

Version 0.1 fokussiert auf Bürger und lokale Initiativen in einer einzelnen
Kommune oder einem Stadtteil. Im MVP stehen Orte, Gruppen, nicht-kommerzielle
Ressourcen und Direktnachrichten im Mittelpunkt.

### Begründung

- Ein lokaler Zuschnitt reduziert Komplexität bei Reichweite, Sichtbarkeit und
  Moderation.
- Ressourcen und Direktnachrichten liefern einen klaren Kern-Use-Case für
  lokale Hilfe und Austausch.
- Institutionen, Kanäle, Warnungen und Marktplatzlogik bleiben dadurch sauber
  für spätere Phasen getrennt.

### Folge-Aktionen

- [x] MVP-Scope dokumentieren.
- [x] Rollen- und Rechtekonzept ausarbeiten.
- [x] Datenschutz- und Einwilligungsmodell skizzieren.
- [x] Technische Zielrichtung für den MVP vergleichen.

## 2026-05-09: LOCUTERRA startet als Konzeptprojekt, nicht als Codeprojekt

### Kontext

Im Projektordner liegt aktuell nur ein Konzeptdokument. Die Vision ist breit:
Social Network, Ortslogik, Ressourcen, Institutionen, Kommunen, Warnungen,
Marktplätze und Sponsoring.

### Entscheidung

LOCUTERRA wird zunächst als Konzept- und Spezifikationsprojekt onboarded. Code,
Framework und Plattform werden erst entschieden, nachdem MVP-Scope,
Rollenmodell und Datenschutzmodell ausreichend klar sind.

### Begründung

- Das Projekt berührt reale Orte und personenbezogene Daten.
- Ein zu früher Stack würde Kernfragen zu Identität, Sichtbarkeit und
  Einwilligung verdecken.
- Ein kleiner MVP ist nötig, damit die Vision prüfbar wird.

### Folge-Aktionen

- [x] Onboarding-Dokumente erstellen.
- [x] MVP-Scope definieren.
- [x] Datenschutz- und Rollenmodell skizzieren.
- [x] Stack-Optionen vergleichen.

## 2026-05-09: Ressourcen und Marktplätze werden getrennt betrachtet

### Kontext

Das Konzept unterscheidet Ressourcen ohne Transaktionen von Marktplätzen, sobald
Geld eine Rolle spielt.

### Entscheidung

Das Ressourcensystem bleibt im Kern nicht-kommerziell. Marktplatzfunktionen
werden als separates Modul geplant und nicht in den ersten MVP gemischt.

### Begründung

- Geldflüsse erzeugen andere rechtliche, technische und vertrauensbezogene
  Anforderungen.
- Nicht-kommerzielle lokale Hilfe ist ein klarerer MVP.
- Die Trennung verhindert, dass einfache Ressourcenangebote sofort
  Zahlungs-, Gebühren- und Streitfalllogik brauchen.
