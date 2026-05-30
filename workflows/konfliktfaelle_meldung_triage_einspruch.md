# Konfliktfälle Meldung, Triage und Einspruch

Stand: 2026-05-17

> Dieses Playbook verprobt drei reale Konfliktlagen für LOCUTERRA V0.1.
> Ziel ist nicht juristische Vollprüfung, sondern eine robuste fachliche
> Untergrenze für Meldung, Triage, Sperre und Einspruch.

## Zweck

Die Governance ist erst dann belastbar, wenn konkrete Fälle zeigen, ob
Meldung, Sofortmaßnahme, Sperre und Zweitprüfung sauber auseinanderhalten
werden. Dieses Playbook prüft deshalb:

- welche Meldekategorien im MVP ausreichen,
- welche Maßnahmen minimal wirksam sind,
- wann eine Sperre nur objektbezogen statt kontobezogen sein darf,
- wie ein Einspruch eine Entscheidung bestätigen, abschwächen oder aufheben
  kann.

## Bewertungsmaßstab

Für alle Fälle gelten dieselben Leitlinien:

1. Erst schützen, dann klären.
2. Die kleinste wirksame Maßnahme wählen.
3. Sichtbarkeit, Reichweite und Kontaktzugriff getrennt behandeln.
4. Sensible Eingriffe befristen und protokollieren.
5. Die Zweitprüfung darf nicht dieselbe Person übernehmen, die die
   Erstentscheidung getroffen hat.

## Fall 1: Spam im lokalen Kanal

### Ausgangslage

Ein Konto postet in einem kommunalen Informationskanal innerhalb weniger
Minuten mehrere nahezu identische Nachrichten mit externen Links. Einige
Abonnenten melden die Beiträge als Spam und Flooding.

### Triage

- Kategorie: Spam / Flooding
- Risiko: niedrig bis mittel
- Sofortige Außenwirkung: Feeds werden zugespammt, aber keine persönliche
  Gefährdung

### Sofortmaßnahme

- Beiträge aus dem sichtbaren Feed ausblenden
- das Konto für den betroffenen Kanal für 24 Stunden sperren
- Wiederholungen im selben Zeitraum drosseln

### Entscheidung

Die Maßnahme bleibt kanalbezogen. Es gibt keine globale Kontosperre, weil der
Fall lokal begrenzt ist und eine vollständige Sperre unverhältnismäßig wäre.

### Einspruch

Der Betreiber legt Einspruch ein und argumentiert, die Nachrichten seien lokale
Veranstaltungshinweise gewesen.

### Zweitprüfung

Die Zweitprüfung erkennt den Informationswert einzelner Hinweise an, bestätigt
aber die Spam-Einstufung wegen der massenhaften Wiederholung und der
identischen Linkstruktur. Die Sperre wird nicht aufgehoben, aber die Drosselung
wird auf den betroffenen Kanal begrenzt.

### Ergebnis

- Meldung: berechtigt
- Triage: korrekt
- Sperre: befristet und objektbezogen
- Einspruch: teilweise erfolgreich, weil die Maßnahme präziser gefasst wird

## Fall 2: Fake-Initiative mit irreführender Außenwirkung

### Ausgangslage

Eine neu angelegte Gruppe tritt mit Namen und Beschreibung so auf, als sei sie
eine offizielle Nachbarschaftsinitiative. Mehrere Nutzer melden die Gruppe,
weil echte Zuständigkeit und Verifikation fehlen.

### Triage

- Kategorie: Rollenmissbrauch / Impersonation / Fake-Initiative
- Risiko: mittel bis hoch
- Sofortige Außenwirkung: Vertrauen in eine vermeintlich offizielle Stelle
  könnte fehlgeleitet werden

### Sofortmaßnahme

- die Gruppe bleibt sichtbar, erhält aber einen deutlichen Unverifiziert-Hinweis
- Kontakt- und Beitrittsoptionen werden vorläufig eingeschränkt
- die öffentliche Reichweite wird auf den kleinsten sinnvollen Rahmen
  zurückgenommen

### Entscheidung

Die Gruppe wird bis zur Prüfung der Verantwortung als vorläufig nicht bestätigt
geführt. Ziel ist nicht Löschung um jeden Preis, sondern eine sichere Pause,
bis die Trägerschaft oder lokale Zuständigkeit belegt ist.

### Einspruch

Der Steward legt Einspruch ein und weist auf eine bestehende lokale Initiative
mit dokumentierter Trägerstruktur hin.

### Zweitprüfung

Die Zweitprüfung bestätigt die lokale Legitimation teilweise. Die Gruppe bleibt
nicht als offiziell verifiziert freigeschaltet, erhält aber eine
vorläufige Bestätigung mit sichtbarem Statushinweis und begrenzter
Kontaktfreigabe.

### Ergebnis

- Meldung: berechtigt
- Triage: korrekt
- Sperre: keine Totalsperre, sondern vorläufige Einschränkung
- Einspruch: erfolgreich, weil die Verifikation nachgereicht werden kann

## Fall 3: Datenschutzverletzung durch veröffentlichte Kontaktdaten

### Ausgangslage

In einem Ressourceneintrag werden private Telefonnummer und exakte Wohnadresse
einer Person veröffentlicht, obwohl diese Daten nicht freigegeben wurden. Die
betroffene Person meldet den Eintrag.

### Triage

- Kategorie: Datenschutz / Doxxing / unerwünschte Kontaktaufnahme
- Risiko: hoch
- Sofortige Außenwirkung: unmittelbare Gefährdung von Privatsphäre und
  möglicher Belästigung

### Sofortmaßnahme

- den Eintrag sofort ausblenden
- die Kontaktwege deaktivieren
- die exakten Kontaktdaten aus der öffentlichen Ansicht entfernen
- den Fall protokollieren

### Entscheidung

Die Daten bleiben nicht öffentlich sichtbar. Das veröffentlichende Konto erhält
eine befristete Sperre für das Einstellen sensibler Inhalte, weil hier nicht nur
ein Versehen, sondern eine konkrete Schutzverletzung vorliegt.

### Einspruch

Der Urheber des Eintrags legt Einspruch ein und behauptet, die Angaben seien
öffentlich zugänglich gewesen.

### Zweitprüfung

Die Zweitprüfung bestätigt nur den unscharfen öffentlichen Ortstext, nicht
aber die private Telefonnummer und die Wohnadresse. Der Einspruch wird
teilweise zurückgewiesen. Der Inhalt bleibt entfernt, und nur der unkritische
Rest darf nach Redaktion wieder erscheinen.

### Ergebnis

- Meldung: berechtigt
- Triage: korrekt
- Sperre: befristet, weil eine Schutzverletzung vorlag
- Einspruch: abgelehnt für die sensiblen Daten, allenfalls teilweise Erfolg
  für redigierte Restinhalte

## Querschnittsergebnisse

Aus den drei Fällen ergeben sich für das MVP vier klare Regeln:

1. `Sperre` muss objektbezogen bleiben, solange kein schwerer, breiter oder
   wiederholter Missbrauch vorliegt.
2. `Einspruch` ist auch bei klaren Verstößen sinnvoll, weil er den Umfang einer
   Maßnahme präzisieren kann.
3. Verifikation darf eine falsche Außenwirkung nicht automatisch heilen, aber
   sie kann eine vorläufige Einschränkung in eine bestätigte Rolle überführen.
4. Datenschutzverstöße brauchen die schnellste und engste Maßnahme, weil die
   Schadenswirkung sofort eintritt.

## Folgefrage

Nach dieser Verprobung bleibt für das MVP vor allem offen:

- Wie stark wird die Einspruchsstelle formalisiert?
- Welche Maßnahmen brauchen im MVP zwingend eine zweite Person?
- Wann darf eine Sperre automatisch auslaufen und wann nicht?

## Verweis

Die Ergebnisse werden in `GOVERNANCE.md`, `DECISIONS.md`, `STATE.md` und
`README.md` gespiegelt.
