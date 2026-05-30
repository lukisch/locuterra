# ROLES_AND_RIGHTS.md - Akteurs-, Rollen- und Rechtekonzept

> Diese Spezifikation übersetzt die breite LOCUTERRA-Idee in ein umsetzbares
> Rollen- und Rechtegerüst für Version 0.1.

## Ziel

LOCUTERRA braucht früh ein belastbares Rollenmodell, weil Orte, Gruppen,
Ressourcen und Nachrichten nicht nur Funktionsobjekte sind, sondern auch
Datenschutz-, Missbrauchs- und Governance-Fragen auslösen. Das Modell soll:

- den MVP klein halten,
- Rechte an reale Verantwortlichkeiten binden,
- Sichtbarkeit und Berechtigung sauber trennen,
- spätere Institutionen-, Kommunal- und Unternehmensrollen vorbereiten.

## Geltungsbereich für Version 0.1

Version 0.1 bleibt bei einem lokalen Bürger-MVP in einer einzelnen Kommune oder
einem Stadtteil. Deshalb werden nur die Rollen vollständig spezifiziert, die
für diesen Zuschnitt nötig sind:

- Bürgerkonto
- lokale Initiative als verifizierte Gruppen-/Ortsidentität
- gruppen- und ortsbezogene Steward-Rollen
- Moderation und Plattformbetrieb

Institutionen, Kommunen, gemeinnützige Organisationen und Unternehmen bleiben
im Modell sichtbar, werden aber erst in späteren Phasen als vollwertige
Produktrollen freigeschaltet.

## Modellierungsebenen

LOCUTERRA sollte Rollen auf vier Ebenen unterscheiden statt alles in einen
Kontotyp zu pressen.

| Ebene | Frage | Beispiel |
|---|---|---|
| **Akteur** | Wer handelt sozial oder rechtlich? | Bürger, Initiative, Kommune |
| **Konto** | Womit meldet sich jemand an? | Bürgerkonto |
| **Objektrolle** | Welche Verantwortung gilt für ein konkretes Objekt? | Gruppen-Steward, Orts-Steward |
| **Systemrolle** | Welche plattformweiten Sonderrechte gibt es? | Moderator, Plattform-Admin |

Diese Trennung verhindert, dass aus einer lokalen Gruppenverantwortung sofort
globale Plattformmacht wird.

## Akteursübersicht

| Akteur | Im MVP aktiv? | Darstellung im MVP | Spätere Ausbaurichtung |
|---|:---:|---|---|
| **Bürger** | Ja | Eigenes Bürgerkonto | Basisrolle bleibt erhalten |
| **Lokale Initiative** | Ja | Gruppe oder Ort mit bestätigten Stewards | Später optional als formaler Organisationstyp |
| **Institution** | Nein | Nur vorgemerkt | Eigene Kanäle, Kontaktstellen, Verifikation |
| **Kommune** | Nein | Nur vorgemerkt | Warnungen, Ortsfeeds, Bürgeranfragen |
| **Gemeinnützige Organisation** | Nein | Nur vorgemerkt | Ähnlich Institution, aber mit Community-Fokus |
| **Unternehmen** | Nein | Nur vorgemerkt | Später getrennt von Marktplatz- und Sponsoringlogik |

## Kontotypen im MVP

### 1. Bürgerkonto

Das Bürgerkonto ist der einzige echte Login-Typ in Version 0.1.

**Eigenschaften**

- persönliches Konto mit Anzeigename und Basisprofil
- Pseudonym im öffentlichen Raum erlaubt
- Primärort oder Primärkommune als Kontext für lokale Sichtbarkeit
- kann Ressourcen, Gruppen, Orte und Direktnachrichten anstoßen

**Nicht automatisch enthalten**

- keine globalen Moderationsrechte
- keine Einsicht in Klardaten anderer Nutzer
- keine institutionellen oder kommerziellen Sonderrechte

### 2. Lokale Initiative als abgeleitete Identität

Eine lokale Initiative startet im MVP nicht mit eigenem Login, sondern als
Gruppe oder Ort, der von einem oder mehreren Bürgerkonten verwaltet wird.

**Warum so modellieren**

- weniger Onboarding-Komplexität
- klarere Verantwortlichkeit
- weniger Missbrauchsfläche bei Fake-Organisationen
- bessere Anschlussfähigkeit an das lokale Bürger-MVP

**Mindestmodell**

- mindestens ein verantwortliches Bürgerkonto als Steward
- sichtbarer Name, Kurzbeschreibung und optionaler Ortsbezug
- optional verifizierter Status nach einfacher Prüfung

## Rollenbündel

### Bürger

Standardrolle für alle normalen Nutzerkonten.

**Darf**

- eigenes Profil pflegen
- Gruppen anlegen
- Ressourcen einstellen oder suchen
- privaten oder öffentlichen Orten folgen
- Direktnachrichten an erlaubte Ziele senden
- eigene Inhalte ändern, pausieren und löschen

**Darf nicht**

- fremde Inhalte moderieren
- globale Sichtbarkeit anderer Nutzer erweitern
- echte Kontaktdaten anderer ohne Freigabe sehen

### Gruppen-Steward

Verantwortlich für eine konkrete Gruppe oder Initiative.

**Darf zusätzlich**

- Gruppenprofil ändern
- Mitglieder zulassen oder entfernen
- lokale Gruppenregeln pflegen
- gruppenbezogene Ressourcen anpinnen oder entpinnen
- weitere Stewards benennen, sofern die Gruppe das erlaubt

**Darf nicht automatisch**

- Ortsrechte außerhalb der eigenen Gruppe erhalten
- plattformweite Moderation ausüben

### Orts-Steward

Verantwortlich für einen konkreten Ort, nicht für die gesamte Plattform.

**Darf zusätzlich**

- Ortsbeschreibung, Sichtbarkeit und Basisinformationen pflegen
- ortsbezogene Inhalte hervorheben
- lokale Hausregeln oder Hinweise verwalten

**Darf nicht automatisch**

- Warnungen auslösen
- andere Orte verwalten
- auf private Standortdaten außerhalb des eigenen Ortskontexts zugreifen

### Moderator

Interne Systemrolle für Trust-and-Safety-Aufgaben.

**Darf**

- gemeldete Inhalte prüfen
- Inhalte temporär ausblenden
- Konten bei Missbrauch einschränken
- Entscheidungen mit Grund dokumentieren

**Muss eingeschränkt bleiben**

- kein freier Zugriff auf Klardaten ohne Anlass
- kein stilles Editieren fremder Inhalte
- keine Produkt- oder Governance-Entscheidungen allein aus der Moderationsrolle

### Plattform-Admin

Technische oder operative Betreiberrolle.

**Darf**

- Konfiguration, Rollenzuweisung und Sicherheitsmaßnahmen verwalten
- Moderations- und Audit-Werkzeuge nutzen
- im Ausnahmefall harte Eingriffe vornehmen

**Muss besonders abgesichert werden**

- minimale Anzahl solcher Konten
- starke Authentifizierung
- Audit-Pflicht für sensible Aktionen

## Rechte-Matrix für den MVP

| Aktion | Bürger | Gruppen-Steward | Orts-Steward | Moderator | Plattform-Admin |
|---|:---:|:---:|:---:|:---:|:---:|
| Eigenes Profil bearbeiten | Ja | Ja | Ja | Ja | Ja |
| Gruppe anlegen | Ja | Ja | Ja | Optional | Optional |
| Eigene Gruppe verwalten | Nein | Ja | Optional | Nein | Ja |
| Ort anlegen | Ja, eingeschränkt | Ja, wenn berechtigt | Ja | Nein | Ja |
| Eigenen Ort verwalten | Nein | Optional | Ja | Nein | Ja |
| Ressource einstellen | Ja | Ja | Ja | Nein | Ja |
| Eigene Ressource löschen | Ja | Ja | Ja | Nein | Ja |
| Direktnachrichten senden | Ja | Ja | Ja | Optional | Optional |
| Andere Mitglieder sperren | Nein | Nur lokal, falls vorgesehen | Nur lokal, falls vorgesehen | Ja | Ja |
| Inhalte global ausblenden | Nein | Nein | Nein | Ja | Ja |
| Rollen zuweisen | Nein | Nur lokale Steward-Rollen | Nur lokale Ortsrollen | Nein | Ja |
| Auditdaten einsehen | Nein | Nein | Nein | Eingeschränkt | Ja |
| Klardaten ohne Freigabe sehen | Nein | Nein | Nein | Nur anlassbezogen | Nur anlassbezogen |

## Objektregeln

Rechte sollten nicht nur an Personen, sondern immer an Objekte gekoppelt sein.

### Gruppen

- eine Gruppe hat mindestens einen Steward
- Gruppenrechte gelten nur innerhalb dieser Gruppe
- Gruppen können öffentlich, privat oder einladungsbasiert sein

### Orte

- ein Ort braucht klare Zuständigkeit
- Orts-Stewards verwalten Ortsmetadaten, nicht automatisch alle dort sichtbaren
  Bürgerdaten
- sensible ortsbezogene Funktionen bleiben im MVP deaktiviert

### Ressourcen

- Ressourcen gehören immer einem klaren Besitzer oder einer klaren Gruppe
- Sichtbarkeit wird explizit festgelegt, nicht implizit als "öffentlich"
- kommerzielle Transaktionen bleiben ausgeschlossen

### Direktnachrichten

- nur beteiligte Konten sehen den Inhalt
- Kontaktfreigaben dürfen nicht automatisch in dauerhafte Adressbücher kippen
- spätere institutionelle Kontaktpostfächer brauchen eigenes Rechtemodell

## Verifikation und Vertrauensstufen

Das Rechtekonzept braucht einfache, nachvollziehbare Vertrauensstufen.

| Stufe | Bedeutung | MVP-Nutzung |
|---|---|---|
| **V0** | Konto angelegt, keine besondere Prüfung | Standardstart |
| **V1** | Basisbestätigung, z. B. E-Mail oder Gerät | Mindestniveau für aktive Nutzung |
| **V2** | lokale Rolle plausibilisiert, z. B. Steward einer Initiative | für Initiative-/Ortsverwaltung |
| **V3** | formale Organisations- oder Behördenprüfung | erst später relevant |

Wichtig: Verifikation erhöht nicht automatisch die Sichtbarkeit. Sie schaltet nur
Rechte frei, die ohne Verantwortungsprüfung missbrauchsanfällig wären.

## Datenschutzprinzipien für das Rollenmodell

- Pseudonymität ist der Standard für Bürger im öffentlichen Raum.
- Klardaten werden nur für klar begründete Funktionen angefordert.
- Jede sensible Rolle braucht einen dokumentierten Zweck.
- Rollenwechsel und Eskalationen müssen nachvollziehbar protokolliert werden.
- Moderations- und Adminrechte sind von sozialen Rollen getrennt zu halten.

## Konsequenzen für die nächsten Arbeitspakete

### Datenschutz- und Einwilligungsmodell

Muss definieren:

- wann ein Bürgerkonto Klardaten hinterlegen muss,
- wie Steward-Verifikation ohne unnötige Datensammlung funktioniert,
- wie Kontaktfreigaben widerrufen werden.

### Reichweitenmodell

Muss definieren:

- welche Rollen Inhalte auf welcher Ebene sichtbar machen dürfen,
- ob Orts- und Gruppenreichweiten kombiniert oder getrennt bewertet werden,
- wie Sichtbarkeit endet, wenn ein Kontext wegfällt.

### Datenmodell

Sollte mindestens vorsehen:

- `actor_type`
- `account_type`
- `verification_level`
- `scope_role_assignments`
- `visibility_policy`
- `audit_event`

## Offene Fragen

- Reicht im MVP ein Steward pro Initiative oder braucht sensible Verwaltung
  schon ein Vier-Augen-Prinzip?
- Dürfen Bürger öffentliche Orte frei anlegen oder nur als Vorschlag einreichen?
- Braucht jede lokale Initiative zwingend einen Ortsbezug?
- Wie stark sollen lokale Moderationsrechte schon im MVP dezentralisiert werden?

## Ergebnis für Version 0.1

LOCUTERRA startet mit einem bewusst kleinen Kern:

- ein echter Login-Typ: Bürgerkonto
- lokale Initiativen als abgeleitete Gruppen-/Ortsidentitäten
- objektgebundene Steward-Rollen statt großer globaler Sonderrollen
- getrennte interne Systemrollen für Moderation und Plattformbetrieb

So bleibt der MVP lokal, verständlich und datenschutzseitig kontrollierbarer,
ohne spätere Institutionen- oder Kommunalrollen zu verbauen.
