# DATENSCHUTZ.md - Datenschutz- und Einwilligungsmodell

> Dieses Dokument skizziert für LOCUTERRA V0.1, wie personenbezogene Daten,
> Einwilligungen, Kontaktfreigaben und Löschansprüche im lokalen Bürger-MVP
> behandelt werden.

## Ziel

LOCUTERRA berührt reale Orte, lokale Gruppen, Direktnachrichten und potenziell
sensible Kontakt- und Standortdaten. Deshalb darf Datenschutz nicht erst in der
UI entstehen, sondern muss als Fachlogik von Anfang an mitmodelliert werden.

Das Modell verfolgt drei Ziele:

- Pseudonymität als Standard
- explizite, zweckgebundene Einwilligungen für sensible Aktionen
- klare Trennung von Sichtbarkeit, Berechtigung und Datenspeicherung

## Leitprinzipien

1. Bürgerkonten dürfen im öffentlichen Raum pseudonym auftreten.
2. Klardaten werden nur abgefragt, wenn eine Funktion sie wirklich braucht.
3. Jede Freigabe ist zweckgebunden, zeitlich begrenzt und widerrufbar.
4. Sichtbarkeit bedeutet nicht automatisch Datennutzung.
5. Kontaktfreigaben sind kein dauerhaftes Adressbuch.
6. Orts- und Reichweitenlogik dürfen keine stillen Bewegungsprofile erzeugen.
7. Moderation und Audit bleiben minimal und anlassbezogen.

## Datentypen im MVP

### 1. Identitäts- und Profildaten

Diese Daten beschreiben das Konto und die öffentliche Außendarstellung.

- Anzeigename
- Avatar oder Symbolbild
- Kurzbeschreibung
- Sprache und lokale Präferenzen
- Verifikationsstatus

**Regel:** Der Anzeigename ist Standard, der Klarname nicht.

### 2. Orts- und Kontextdaten

LOCUTERRA arbeitet mit realen Orten, aber nicht jede Ortsinformation muss
präzise sein.

- Primärort oder Primärkommune
- Mitgliedschaft in Gruppen mit Ortsbezug
- grobe Ortszuordnung für Feeds und Reichweiten
- optionale präzisere Orte nur, wenn ein Nutzer sie aktiv freigibt

**Regel:** Präzise Standortdaten sind sensibel und dürfen nur explizit
freigegeben werden.

### 3. Kommunikationsdaten

- Direktnachrichten
- Kontaktanfragen
- Kanalabos
- Begleitchat-Zugehörigkeiten
- Reaktionen auf Inhalte oder Ressourcen

**Regel:** Inhalte und Metadaten werden getrennt betrachtet. Schon die Tatsache,
dass jemand mit wem kommuniziert, kann sensibel sein.

### 4. Kontakt- und Beziehungsdaten

- freigegebene Kontaktwege
- bestätigte Kontaktbeziehungen
- Gruppenmitgliedschaften
- Steward-Zuordnungen
- Einladungen und Freigaben

**Regel:** Eine Kontaktfreigabe ist immer nur für den konkret benannten Zweck
und Empfänger gültig.

### 5. System- und Nachweisdaten

- Audit-Events
- Moderationsentscheidungen
- Zustimmungsstatus
- Sicherheitsmarkierungen
- Lösch- und Exportvorgänge

**Regel:** Diese Daten werden so sparsam wie möglich gespeichert und dürfen
nicht zur stillen Profilbildung missbraucht werden.

## Einwilligungsmodell

Einwilligungen werden nicht als allgemeines Häkchen verstanden, sondern als
konkrete, zweckgebundene Freigaben.

### Strukturprinzip

Jede Einwilligung beantwortet vier Fragen:

| Frage | Bedeutung |
|---|---|
| Wer gibt frei? | Das auslösende Konto |
| Wofür wird freigegeben? | Konkreter Zweck |
| Für wen oder was gilt es? | Zielobjekt oder Zielgruppe |
| Wie lange gilt es? | Bis Widerruf, Ablauf oder Löschung |

### Typische Einwilligungsarten

| Zweck | Wann nötig | Wirkung |
|---|---|---|
| Profilkontakt | Wenn echte Kontaktwege sichtbar werden sollen | Freigabe der Kontaktmöglichkeit für bestimmte Gegenüber |
| Direktnachricht | Wenn eine Nachricht außerhalb eines bestehenden Kontexts gesendet wird | Erlaubt Kontaktaufnahme ohne offenen Kanal |
| Kanalabo | Wenn ein Kanal personenbezogene Folgekommunikation auslöst | Abonnement und Benachrichtigung freigeben |
| Ortsfreigabe | Wenn ein Ort präziser als der Standardkontext sichtbar werden soll | Größere Detailtiefe für Ortsdaten |
| Ressourcenkontakt | Wenn ein Anbieter über eine Ressource erreichbar sein soll | Kontaktaufnahme für genau diese Ressource |
| Steward-Zugriff | Wenn jemand eine Gruppe oder einen Ort verwalten darf | Objektrolle mit klarer Verantwortung |
| Begleitchat | Wenn ein Kanal oder eine Gruppe zusätzlichen Chat erlaubt | Zusätzliche Kommunikationsfläche freigeben |

### Wichtige Regeln

- Einwilligung ist zweckgebunden, nicht pauschal.
- Einwilligung kann jederzeit widerrufen werden.
- Widerruf stoppt neue Nutzung, löscht aber nicht automatisch jede historische
  Systemspur.
- Einwilligungen werden nicht stillschweigend in andere Zwecke übertragen.
- Eine UI-Opt-in-Aktion muss klar zeigen, was genau freigegeben wird.

## Sichtbarkeit vs. Einwilligung

LOCUTERRA trennt zwei Ebenen:

1. **Sichtbarkeit**: Wer darf ein Objekt sehen?
2. **Einwilligung**: Darf ein Objekt auch verarbeitet, kontaktiert oder
   dauerhaft verknüpft werden?

Beispiele:

- Ein Ort kann sichtbar sein, ohne dass seine präzise Geometrie offenliegt.
- Eine Gruppe kann gefunden werden, ohne dass alle Mitglieder kontaktiert
  werden dürfen.
- Eine Ressource kann angezeigt werden, ohne dass der Anbieter direkt
  angeschrieben werden darf.

## Kontaktfreigaben und Nachrichten

Kontakt und Nachrichtenaustausch sind im MVP besonders sensibel.

- Direktnachrichten brauchen eine klare Erlaubnis oder einen legitimen
  Kontext.
- Kontaktfreigaben dürfen nicht automatisch in ein dauerhaftes Adressbuch
  übergehen.
- Eine einmalige Kontaktaufnahme ist nicht dasselbe wie dauerhafte Erreichbarkeit.
- Begleitchat und Kanalkommunikation sind getrennt vom privaten Nachrichtensystem
  zu behandeln.

## Ortsdaten und Reichweite

Ortsdaten sollen helfen, lokales Handeln zu ermöglichen, nicht Überwachung.

- Standard ist der grobe Ortskontext.
- Feingranulare Positionen nur bei aktivem Bedarf.
- Ortswechsel dürfen nicht automatisch zu einem neuen Profilzustand führen.
- Eine Reichweite darf Inhalte sichtbarer machen, aber nicht mehr Daten
  freigeben als nötig.

## Aufbewahrung, Löschung und Export

### Aufbewahrung

- Personenbezogene Daten werden nur so lange aufbewahrt, wie der Zweck besteht.
- Systemnachweise werden auf das notwendige Minimum begrenzt.
- Moderations- und Sicherheitsdaten bleiben nur so lange wie zur Nachvollziehbarkeit
  nötig.

### Löschung

- Nutzer können eigene Inhalte löschen oder deaktivieren.
- Bei Kontolöschung müssen personenbezogene Daten reduziert oder entfernt werden.
- Verknüpfungen, die nur für die Funktion nötig waren, dürfen nicht unbegrenzt
  bestehen bleiben.

### Export

- Nutzer sollen ihre eigenen Inhalte und wichtigen Kontodaten exportieren können.
- Exporte müssen verständlich, strukturiert und vollständig genug für den
  persönlichen Wechsel sein.

## Missbrauchsrisiken

Das Modell schützt insbesondere vor:

- Doxxing und unerwünschter Kontaktherstellung
- Stalking über Orts- und Aktivitätsdaten
- Fake-Gruppen oder gefälschten Steward-Rollen
- Spam über Kanalabos oder Kontaktanfragen
- politischer Manipulation über Orts- oder Warnkontext
- schleichender Profilbildung aus eigentlich getrennten Datenquellen

Die ausführliche Sicherheitsanalyse und die konkreten Schutzlinien stehen in
[SICHERHEIT_UND_MISSBRAUCH.md](./SICHERHEIT_UND_MISSBRAUCH.md).

## Schutzmaßnahmen

- Pseudonyme als Standard
- separate Freigaben für Kontakt, Ort und Kommunikation
- klare Widerrufswege
- minimaler Audit-Zugriff
- anlassbezogene Moderation statt Dauerüberwachung
- keine automatische Übernahme von Kontaktfreigaben in andere Produktebenen
- keine Vermischung von Ressourcen- und Marktplatzlogik
- Warnungen, Moderation und Betreiberrechte werden in der separaten
  Sicherheits-Spezifikation konkretisiert.

## Bezug zum Datenmodell

Dieses Modell ergänzt [DATENMODELL.md](./DATENMODELL.md):

- `visibility_policy` beschreibt, wer etwas sehen darf.
- `consent` beschreibt, wer etwas wofür nutzen darf.
- `audit_event` dokumentiert sensible Aktionen ohne unnötige Detailtiefe.
- `verification_level` schaltet Verantwortung frei, nicht automatisch mehr
  Sichtbarkeit.

## Offene Folgefragen

- Welche minimalen Klardaten braucht ein Bürgerkonto wirklich?
- Soll ein Kanal im MVP direkte Kontaktfreigabe, nur Begleitchat oder beides
  unterstützen?
- Wie fein darf die Ortsauflösung in einem lokalen MVP sein, ohne den
  Datenschutz zu gefährden?
- Welche Auditdaten sind für Moderation nötig, ohne ein Überwachungssystem zu
  erzeugen?

## Ergebnis

LOCUTERRA hat damit ein erstes Datenschutz- und Einwilligungsgerüst:

- Pseudonymität ist der Standard.
- Einwilligungen sind konkret und widerrufbar.
- Sichtbarkeit und Datenverarbeitung sind getrennt.
- Kontakt, Ort und Kommunikation bleiben bewusst fein getrennte Schutzbereiche.
