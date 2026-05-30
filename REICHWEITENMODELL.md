# REICHWEITENMODELL.md - Reichweitenmodell für Orte, Gruppen und Kanäle

> Dieses Dokument definiert für LOCUTERRA V0.1, wie weit Inhalte, Orte,
> Gruppen und Kanäle jeweils auffindbar sind. Reichweite beschreibt dabei die
> Breite des Publikums, nicht automatisch Kontakt-, Detail- oder
> Bearbeitungsrechte.

## Ziel

LOCUTERRA braucht ein klares Reichweitenmodell, weil das Projekt reale Orte,
lokale Gruppen, Informationskanäle und potenziell sensible Kontakt- und
Standortdaten berührt. Ohne eine saubere Staffelung würden Sichtbarkeit,
Mitgliedschaft und Datennutzung zu früh vermischt.

Das Modell soll drei Fragen trennen:

1. Wer darf ein Objekt finden?
2. Wer darf seine Details sehen?
3. Wer darf mit dem Objekt interagieren oder Kontakt aufnehmen?

## Grundprinzipien

1. Reichweite ist immer eine Obergrenze, keine automatische Freigabe.
2. Die strengste Regel gewinnt: Reichweite, Mitgliedschaft und Einwilligung
   werden gemeinsam geprüft.
3. Öffentliche Auffindbarkeit darf nie automatisch zu voller Datensicht führen.
4. Kontaktfreigaben bleiben getrennt von Reichweite und dürfen nicht still
   erweitert werden.
5. Ortsdaten werden nur so fein sichtbar, wie der konkrete Zweck es erfordert.
6. Wenn ein Kontext wegfällt, fällt die Sichtbarkeit auf die nächste sichere
   Stufe zurück.

## Reichweitenstufen

Die folgende Hierarchie ist für V0.1 maßgeblich:

| Stufe | Bedeutung | Typische Nutzung |
|---|---|---|
| **privat** | Nur Owner, explizit benannte Personen oder direkt Beteiligte | Entwürfe, interne Notizen, geschlossene Direktnachrichten |
| **gruppe** | Sichtbar für Mitglieder und ggf. Stewards einer konkreten Gruppe | Gruppenposts, interne Initiativen, koordinierte Hilfe |
| **ort** | Sichtbar für einen konkreten Ort oder einen klar benannten lokalen Kontext | Ortsfeed, Treffpunkt, lokaler Hinweis |
| **dorf / ortsteil** | Sichtbar für eine kleinere lokale Einheit innerhalb einer Kommune | Nachbarschaft, Dorf, Stadtteil |
| **kommune** | Sichtbar für die gesamte Kommune oder Stadt | Kommunale Hinweise, lokale Informationskanäle |
| **region** | Sichtbar für eine größere Region oder einen Landkreis | Regionales Netzwerk, Warn- und Informationskontext |
| **land** | Sichtbar für ein Bundesland oder eine vergleichbare subnationale Ebene | Landesweite Institutionen, größere Verwaltungseinheiten |
| **national** | Sichtbar im gesamten Land | Bundesweite Mitteilungen, landesweite öffentliche Angebote |
| **transnational** | Sichtbar über Ländergrenzen hinweg | Internationale Themen, überregionale Kooperationen |

### Einordnung

- `ort` ist der kleinste räumliche Reichweitenanker.
- `dorf / ortsteil` ist ein Sammelkontext für mehrere eng verbundene Orte.
- `land` ist im deutschen Kontext die Ebene eines Bundeslandes.
- `national` meint die komplette nationale Reichweite.
- `transnational` ist die breiteste Stufe und bleibt im MVP selten.

## Stufen nach Objektart

### Orte

- Ein Ort kann nur innerhalb seiner eigenen Reichweite und der Elternhierarchie
  sichtbar werden.
- Ein Ort darf nicht breiter wirken als seine fachliche Zuordnung erlaubt.
- Ortsdetails können zusammengefasst sichtbar sein, ohne dass alle Geodaten
  offenliegen.

### Gruppen

- Gruppen werden primär über Mitgliedschaft gefunden.
- Eine Gruppe kann zusätzlich über einen Ortskontext auffindbar sein, wenn sie
  an einen Ort gebunden ist.
- Private Gruppen bleiben in der Auffindbarkeit auf `privat`, selbst wenn sie
  lokal verankert sind.

### Kanäle

- Kanäle dürfen öffentlich auffindbar sein, ohne dass ihre Inhalte oder
  Begleitchats automatisch offen sind.
- Ein Kanal braucht für personenbezogene Folgekommunikation eine separate
  Einwilligung oder einen klaren Beitrittskontext.
- Die Sichtbarkeit des Kanals darf nicht mit einer Vollfreigabe des Chats
  verwechselt werden.

## Standardlogik

Für das MVP gilt:

1. Der Betreiber wählt immer die kleinstmögliche Reichweite, die den Use Case
   noch erfüllt.
2. Die UI darf eine breitere Reichweite vorschlagen, aber nicht still erhöhen.
3. Öffentliche Inhalte sollen möglichst nur Zusammenfassungen oder Basisdaten
   tragen.
4. Präzisere Ortsdaten, Kontaktdaten und personenbezogene Details bleiben
   separat geschützt.

### Beispiele

| Use Case | Empfohlene Reichweite |
|---|---|
| Private Abstimmung im Steward-Kreis | privat |
| Interne Gruppenhilfe | gruppe |
| Nachbarschaftsangebot | ort oder dorf / ortsteil |
| Lokale Veranstaltung in der Kommune | kommune |
| Regionale Warnung oder Info | region |
| Landesweite Mitteilung | land |
| Bundesweite Kampagne | national |
| Internationale Zusammenarbeit | transnational |

## Regeln für Kombinationen

### Reichweite und Mitgliedschaft

- Reichweite bestimmt die Auffindbarkeit.
- Mitgliedschaft bestimmt den Vertiefungszugang.
- Wer das Objekt nur findet, sieht noch nicht automatisch alle Details.

### Reichweite und Einwilligung

- Ein Objekt kann sichtbar sein, obwohl Kontakt oder Nachverfolgung verboten
  bleibt.
- Einwilligung ist immer zusätzlich nötig, wenn Kontaktdaten, dauerhafte
  Bindungen oder Begleitchats betroffen sind.

### Reichweite und Ortshierarchie

- Wenn ein Objekt einem Ort zugeordnet ist, kann es in Elternkontexten
  erscheinen, sofern seine Reichweite das zulässt.
- Ein Ortsobjekt ohne eindeutige Reichweite wird nicht automatisch breit
  veröffentlicht.

## Bezug zu Datenschutz und Datenmodell

- [DATENSCHUTZ.md](./DATENSCHUTZ.md) definiert, welche Daten trotz Sichtbarkeit
  geschützt bleiben.
- [DATENMODELL.md](./DATENMODELL.md) enthält mit `visibility_policy` und
  `reach_level` die logischen Träger dieses Modells.
- [ROLES_AND_RIGHTS.md](./ROLES_AND_RIGHTS.md) beschreibt, welche Rollen die
  Reichweiten überhaupt setzen oder verwalten dürfen.

## Ergebnis für V0.1

LOCUTERRA arbeitet im MVP mit einer klaren Reichweitenhierarchie:

- privat
- gruppe
- ort
- dorf / ortsteil
- kommune
- region
- land
- national
- transnational

Damit sind Orte, Gruppen und Kanäle sauber auffindbar, ohne dass Sichtbarkeit,
Mitgliedschaft und Kontaktfreigabe vermischt werden.
