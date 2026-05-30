# SICHERHEIT_UND_MISSBRAUCH.md - Sicherheits- und Missbrauchsmodell

> Dieses Dokument beschreibt für LOCUTERRA V0.1 die wichtigsten
> Sicherheits- und Missbrauchsrisiken sowie die dazugehörigen Schutzlinien.
> Es ergänzt [DATENSCHUTZ.md](./DATENSCHUTZ.md), [ROLES_AND_RIGHTS.md](./ROLES_AND_RIGHTS.md)
> und [REICHWEITENMODELL.md](./REICHWEITENMODELL.md).

## Ziel

LOCUTERRA arbeitet mit realen Orten, öffentlichen Gruppen, Direktnachrichten,
Informationskanälen, Ressourcen und potenziell sensiblen Warnungen. Dadurch
entstehen Risiken, die über klassische App-Sicherheit hinausgehen:

- Missbrauch kann reale Personen treffen, nicht nur Konten.
- Falsche Inhalte können lokale Wirkung entfalten.
- Sichtbarkeit und Reichweite können Bewegungs- oder Kontaktmuster verraten.
- Moderation kann selbst zur Macht- oder Überwachungsfläche werden.

Das Modell verfolgt deshalb drei Ziele:

1. Risiken früh sichtbar machen.
2. Schutzmaßnahmen an konkrete Produktobjekte binden.
3. Moderation und Plattformbetrieb so klein und nachvollziehbar wie möglich
   halten.

## Grundsätze

1. Pseudonyme Konten sind der Standard.
2. Öffentliche Sichtbarkeit ist nicht automatisch Kontaktfreigabe.
3. Präzise Ortsdaten sind sensibel und standardmäßig begrenzt.
4. Warnungen und hochwirksame Mitteilungen brauchen zusätzliche Absicherung.
5. Admin- und Moderationsrechte sind von sozialen Rollen getrennt.
6. Jede Freigabe muss widerrufbar und nachvollziehbar sein.
7. Missbrauchsschutz darf nicht zu Dauerüberwachung werden.

## Bedrohungsfläche im MVP

### 1. Konten und Identitäten

Risiken:

- Fake-Konten für Spam, Manipulation oder Täuschung
- Identitätsdiebstahl und Impersonation
- massenhaft angelegte Konten zur Reichweitenstörung

Schutz:

- Basisverifikation für aktive Nutzung
- abgestufte Vertrauensstufen
- Rate-Limits für Registrierungen und kritische Aktionen
- auffällige Konten schnell einschränkbar machen

### 2. Orte und Reichweiten

Risiken:

- ungewollte Offenlegung von Aufenthalts- oder Bewegungsorten
- Stalking über Ortsbezug, Gruppenbezug oder wiederkehrende Aktivitäten
- falsche Zuordnung von Personen zu Orten oder Stewards

Schutz:

- grobe Ortskontexte als Standard
- präzise Geometrie nur bei Bedarf
- Sichtbarkeit und Berechtigung getrennt prüfen
- Ortsänderungen nicht automatisch als neues Profilsignal behandeln

### 3. Gruppen und Steward-Rollen

Risiken:

- Fake-Gruppen mit scheinbar offizieller Wirkung
- Machtmissbrauch durch zu breite Steward-Rechte
- schleichende Rechteeskalation über lokale Verantwortung

Schutz:

- Steward-Rollen an konkrete Objekte binden
- Verifikation für sensitive Gruppenrollen
- Änderungen an Gruppenzuständigkeiten protokollieren
- keine globale Wirkung aus lokaler Verantwortung ableiten

### 4. Direktnachrichten und Kontaktfreigaben

Risiken:

- unerwünschte Kontaktaufnahme
- Belästigung, Grooming oder gezielte Einschüchterung
- Kontaktfreigaben werden in dauerhafte Erreichbarkeit umgedeutet

Schutz:

- Direktnachrichten nur mit Kontext oder Freigabe
- Kontaktfreigaben zweckgebunden und widerrufbar
- keine automatische Übernahme in Adressbücher
- Blockieren und Melden leicht zugänglich machen

### 5. Informationskanäle und Warnungen

Risiken:

- Spam über Abos und Kanalfeeds
- Fake-Warnungen mit realer Außenwirkung
- politische oder soziale Manipulation über lokale Alerts

Schutz:

- Kanäle nur für klar definierte Betreiberrollen
- Warnungen nur mit zusätzlicher Autorisierung
- sichtbare Herkunft und Status jeder Meldung
- im Zweifel lieber verzögern als ungeprüft eskalieren

### 6. Ressourcen

Risiken:

- Scheinangebote, Spam oder Köderangebote
- versteckte Kommerzialisierung über eigentlich nicht-kommerzielle Ressourcen
- Missbrauch von Ressourcenanzeigen zur Kontaktanbahnung

Schutz:

- Ressourcen bleiben fachlich getrennt vom Marktplatz
- keine Preise, kein Checkout, keine Zahlungslogik im Ressourcensystem
- Melden von Fake-Angeboten und Spam priorisieren
- klare Kennzeichnung von Kontaktzwecken

### 7. Moderation und Plattformbetrieb

Risiken:

- Moderation wird zu Überwachung oder Zensur missbraucht
- Admin-Zugänge werden zur allumfassenden Einsicht genutzt
- Sicherheitsmaßnahmen werden ohne Anlass zu breit

Schutz:

- minimale Anzahl privilegierter Konten
- Audit-Pflicht für sensible Eingriffe
- Zugriff auf Klardaten nur anlassbezogen
- keine stillen Änderungen ohne Protokoll
- Widerspruchs- und Eskalationspfad für Betroffene

## Typische Missbrauchsszenarien

### Spam und Flooding

Massenhafte Inhalte, Anfragen oder Gruppen, die lokale Feeds und Kontakte
blockieren.

Gegenmaßnahmen:

- Rate-Limits
- Kontoalter und Vertrauenseinstufung
- Meldesystem
- automatische temporäre Drosselung

### Fake-Warnungen

Falsche Krisen- oder Ortsmeldungen mit hoher Reichweite.

Gegenmaßnahmen:

- mehrstufige Freigabe
- Prüfstatus sichtbar machen
- begrenzte Erstreichweite
- schnelle Rücknahme und Protokollierung

### Stalking und Doxxing

Aus Orts-, Kontakt- oder Profilinformationen werden Personen gezielt verfolgt.

Gegenmaßnahmen:

- präzise Ortsdaten minimieren
- Kontaktfreigaben begrenzen
- Profilfelder sparsam halten
- Missbrauchsmeldung und Blockierung prominent anbieten

### Impersonation

Gefälschte Institutionen, Initiativen oder Stewards erzeugen falsche
Vertrauenswirkung.

Gegenmaßnahmen:

- Verifikationsstufen
- klar sichtbare Rollenkennzeichnung
- keine automatischen Echtheitsannahmen
- Prüfhinweise in sensiblen Flows

### Manipulation über lokale Reichweite

Nutzer werden durch scheinbar lokale, aber tatsächlich fremdgesteuerte Inhalte
beeinflusst.

Gegenmaßnahmen:

- Herkunft und Betreiber klar anzeigen
- Reichweite nicht mit Glaubwürdigkeit verwechseln
- Moderation und Community-Feedback kombinieren

## Schutzlinien

### Präventiv

- sichere Standardwerte
- minimale Datenerhebung
- Zweckbindung für Freigaben
- Vertrauensstufen statt pauschaler Vollrechte

### Detektiv

- Protokollierung sensibler Aktionen
- Meldungen und Mustererkennung bei auffälligem Verhalten
- Sichtbare Statusmarker für Inhalte und Rollen

### Reaktiv

- temporäres Ausblenden
- Kontoeinschränkung
- Rücknahme von Freigaben
- Einspruchs- und Prüfweg

## Operative Regeln

1. Niemand erhält automatisch mehr Reichweite, nur weil er verifiziert ist.
2. Niemand erhält automatisch mehr Sichtbarkeit, nur weil er Steward ist.
3. Moderation darf Inhalte einschränken, aber nicht unbemerkt umschreiben.
4. Warnungen brauchen vor Veröffentlichung eine klare Zuständigkeitsregel.
5. Sicherheitsdaten werden so sparsam wie möglich gespeichert.
6. Jede starke Schutzmaßnahme braucht einen nachvollziehbaren Grund.

## Offene Folgefragen

- Welche Aktionen brauchen im MVP eine Zwei-Personen-Freigabe?
- Wie fein muss die Rate-Limitierung für Warnungen und Direktnachrichten sein?
- Welche minimalen Auditdaten sind für Einspruch und Nachvollziehbarkeit nötig?
- Wie wird verhindert, dass Verifikation als sozialer Status missverstanden wird?

## Ergebnis

LOCUTERRA hat damit ein erstes Sicherheitsgerüst:

- Risiken sind nach Produktobjekten geordnet.
- Schutzmaßnahmen sind an Rollen, Freigaben und Reichweiten gebunden.
- Missbrauchsschutz bleibt wirksam, ohne den MVP in Überwachung umzubauen.
