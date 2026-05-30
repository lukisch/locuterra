# RESSOURCEN- UND MARKTPLATZTRENNUNG

Stand: 2026-05-16

> Diese Spezifikation hält fest, wie LOCUTERRA nicht-kommerzielle Ressourcen
> und geldbasierte Marktplatzangebote voneinander trennt.

## Grundsatz

LOCUTERRA behandelt Ressourcen und Marktplätze als zwei unterschiedliche
Domänen:

- **Ressourcen** sind nicht-kommerzielle Angebote oder Gesuche.
- **Marktplätze** sind geldbasierte Angebote mit separater Transaktionslogik.

Ein Ressourceneintrag darf keine Zahlung, keinen Preis und keinen Checkout
enthalten. Sobald ein Angebot auf Geld, Provision, Gebühren, Versandkosten oder
eine verbindliche Kaufabwicklung hinausläuft, gehört es in das Marktplatzsystem.

## Ressourcenmodell

Ressourcen dienen dem lokalen Austausch und der gegenseitigen Hilfe:

- Geräte, Werkzeuge, Skills, Räume, Hilfeangebote und Gesuche
- Sichtbarkeit nach Ort, Gruppe oder Reichweite
- Kontaktaufnahme per Direktnachricht oder strukturierter Anfrage
- keine Bezahlung, keine Warenkorb-Logik, keine Buchungspflicht

Ressourcen können mit Orten, Gruppen und Konten verknüpft sein. Sie bleiben
aber fachlich unabhängig von einem späteren Handelsmodul.

## Marktplatzmodell

Der Marktplatz ist ausdrücklich ein separates Modul für kommerzielle Nutzung:

- Preis, Währung und Verfügbarkeit
- Zahlungs- und Bestelllogik
- rechtliche Angaben, Gebühren und Streitfälle
- getrennte Moderation und Vertrauensregeln

Marktplatzangebote dürfen dieselben Orte oder Reichweiten verwenden wie
Ressourcen, aber nicht dieselbe fachliche Logik oder dieselben UI-Flows.

## Trennungskriterien

Ein Eintrag ist eine Ressource, wenn:

- keine Geldforderung besteht
- keine Gebühr erhoben wird
- keine Kaufabwicklung notwendig ist
- der Fokus auf Hilfe, Teilen oder lokaler Verfügbarkeit liegt

Ein Eintrag ist ein Marktplatzangebot, wenn:

- ein Preis genannt wird
- Geld, Provision oder Gebühr fließt
- eine Kauf- oder Bestellabwicklung vorgesehen ist
- das Angebot kommerziell betrieben wird

## Auswirkungen auf das MVP

Version 0.1 bleibt bei nicht-kommerziellen Ressourcen.

- Die Ressourcenerfassung bekommt klare Felder für Typ, Reichweite und Kontakt.
- Marktplatzfelder werden im MVP nicht eingeführt.
- UI und Navigation trennen „Ressourcen“ und „Marktplatz“ sichtbar.
- Moderation für Ressourcen konzentriert sich auf Spam, Fake-Angebote und
  Missbrauch, nicht auf Zahlungsstreitfälle.

## Konkreter Flow

Die praktische Benutzerführung für das MVP steht in
[RESSOURCEN_FLOW.md](./RESSOURCEN_FLOW.md). Dort sind das Einstellen einer
Ressource, die Sichtbarkeitswahl, die Kontaktaufnahme und die Entfernung als
operativer Flow konkret beschrieben.

## Abhängigkeiten

- Orte und Gruppen dürfen beide Systeme referenzieren.
- Direktnachrichten dürfen für Ressourcen als Kontaktkanal dienen.
- Datenschutz- und Reichweitenregeln bleiben für beide Systeme getrennt.

## Offene Folgefragen

- Wie werden spätere kommerzielle Accounts gekennzeichnet?
- Welche Moderations- und Haftungsregeln gelten für den Marktplatz?
- Welche Freigabe braucht ein Wechsel von Ressource zu Marktplatzangebot?
