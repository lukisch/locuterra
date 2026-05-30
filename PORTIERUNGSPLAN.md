# PORTIERUNGSPLAN.md - Plattform- und Rolloutplan

> LOCUTERRA ist noch kein Codeprojekt. Dieser Plan legt deshalb zuerst den
> sinnvollen Plattformpfad fest und vermeidet zu frühe native Nebenlinien.

## Ausgangslage

LOCUTERRA ist ein gemeinwohlorientiertes, ortsbasiertes Netzwerk mit hoher
Mobilitätsanforderung:

- Bürger nutzen Orte, Gruppen, Ressourcen und Kontaktwege oft unterwegs.
- Kommunen, Initiativen und Moderationsteams arbeiten auf Desktop und Mobilgeräten.
- Informationskanäle und spätere Warnfunktionen müssen ohne Installationshürde
  erreichbar bleiben.
- Datenschutz, Rollenrechte und Reichweitenlogik dürfen nicht in mehrere
  konkurrierende Clients auseinanderlaufen.

## Entscheidung

Die aktive Linie ist **Webapp/PWA zuerst**. Android, iOS und Desktop folgen nur
als Verpackung oder Ergänzung desselben Webkerns, nicht als eigene frühe
Codebasen.

## Warum das sinnvoll ist

### Nachfrage und Reichweite

- Ein kommunales oder gemeinnütziges Netzwerk muss per Link sofort nutzbar
  sein, sonst scheitert frühe Adoption an Installationshürden.
- Bürger, Vereine und lokale Initiativen arbeiten oft mit gemischten Geräten;
  Browserzugang ist die kleinste gemeinsame Nennerfläche.

### Mobilität und Use Cases

- Ressourcen finden, Gruppen lesen, Kontakt aufnehmen oder Meldungen absetzen
  passiert häufig mobil und spontan.
- Moderation, Pflege von Kanälen und spätere Einspruchsbearbeitung brauchen
  dagegen breite Oberflächen und Backoffice-Ansichten, die zuerst als Webapp
  einfacher zu bauen und zu testen sind.

### Technische und organisatorische Gründe

- Eine Web/PWA-Basis hält Datenschutz-, Rollen- und Reichweitenlogik in einer
  gemeinsamen Codebasis.
- Tests mit `Vitest` und `Playwright` decken Bürger- und Moderationsflüsse
  plattformübergreifend ab.
- Native Shells bleiben möglich, falls Push, Share, Dateizugriff oder
  Store-Distribution später echten Zusatznutzen bringen.

## Zielbild nach Plattform

| Plattform | Rolle | Priorität | Bemerkung |
|---|---|:---:|---|
| Webapp | Primärer MVP-Kanal für Bürger, Initiativen, Kommunen und Moderation | P0 | Voller Produktkern |
| PWA | Installierbare Weboberfläche für Android, iOS und Desktop | P0 | Gleicher Webkern, Offline-/Push-Ausbau schrittweise |
| Android | Optionale Hülle für Webkern | P1 | Erst wenn PWA bei Push, Teilen oder Geräteschnittstellen nicht reicht |
| iOS | Optionale Hülle für Webkern | P1 | Gleiches Prinzip wie Android |
| Windows | Spätere Moderations-/Backoffice-Hülle oder Store-Listing | P2 | Kein eigener Produktkern |
| macOS | Browser-first, Wrapper nur bei realem Bedarf | P3 | Keine frühe Sonderlinie |
| Linux | Browser-first, Wrapper nur für Partner-/Admin-Nutzung | P3 | Keine frühe Sonderlinie |

## Webapp-MVP, der jetzt vorbereitet werden soll

Die erste echte Produktlinie soll diese Flüsse tragen:

1. Bürgerkonto mit pseudonymem Standardprofil
2. Orte und lokale Gruppen mit Reichweitenregeln
3. Nicht-kommerzielle Ressourcenangebote und Gesuche
4. Direktnachrichten und freigegebene Kontaktaufnahme
5. Kanal-Leseansicht und Abonnement-Grundfluss
6. Moderations- und Einspruchsoberflächen mindestens für den lokalen MVP

Bewusst nicht im ersten Webapp-MVP:

- Katastrophenwarnungen als operatives Modul
- Geldflüsse oder Marktplatzlogik
- getrennte native Feature-Sonderpfade

## Rollout-Phasen

### Phase 0 - Spezifikation auf Webapp zuschneiden

- Screenmap und Routenplan für Bürger-, Gruppen-, Ressourcen- und
  Moderationsflächen definieren
- PWA-Regeln für Login, Push, Offline, Standortfreigabe und Widerruf festlegen
- Einspruchsstelle als Web-Backoffice-Fluss konkret verorten

### Phase 1 - Webkern bootstrappen

- `Next.js`-Projektstruktur anlegen
- Domänenmodelle für Account, Place, Group, Resource, Message und Channel aus
  `DATENMODELL.md` ableiten
- Zentrale Policy-Layer für Sichtbarkeit, Einwilligung und Rollenrechte
  einplanen

### Phase 2 - PWA produktiv machen

- installierbare Shell, sichere Session-Strategie und Web-Push nach Consent
- Entwürfe und Meldungen bei schlechter Verbindung robust puffern
- Mobile-Layouts für Ressourcen, Gruppen und Kanal-Leseansichten optimieren

### Phase 3 - Native/Store-Hüllen nur bei echtem Mehrwert

- Android/iOS nur dann als Capacitor- oder ähnliche Shell, wenn Browsergrenzen
  bei Push, Teilen, Dateizugriff oder Onboarding messbar stören
- Windows nur dann als Wrapper oder Store-Eintrag, wenn kommunale Partner eine
  verwaltbare Desktop-Auslieferung verlangen
- macOS/Linux zunächst über Browser und PWA mitführen

## Exit-Kriterien für spätere Plattformschritte

Android/iOS oder Windows sollen erst hochgezogen werden, wenn mindestens zwei
dieser Punkte erfüllt sind:

- Der Web/PWA-Kern ist fachlich stabil für den lokalen MVP.
- Es gibt einen klaren Bedarf an Push, Share, Dateizugriff oder
  Geräteschnittstellen, den reine Browsernutzung nicht ausreichend abdeckt.
- Moderation oder kommunale Nutzung verlangt verwaltete Installationen.
- Datenschutz- und Betriebsregeln sind für Hintergrundbenachrichtigungen sauber
  definiert.

## Offene Architekturfragen

- Welche Daten dürfen lokal offline vorgehalten werden, ohne Datenschutz- oder
  Missbrauchsrisiken unnötig zu erhöhen?
- Wie weit darf Standortunterstützung im MVP gehen, bevor sie zu viel
  Bewegungsprofil-Risiko erzeugt?
- Welche Rollen dürfen Push-Nachrichten verschicken, und welche Opt-ins sind
  dafür nötig?
- Wie wird die Einspruchsstelle in der Webapp sichtbar, ohne die Bürgeroberfläche
  zu überladen?

## Nächste konkrete Schritte

- `TODO.md` und `AUFGABEN.txt` auf Webapp/PWA-first-Aufgaben ausrichten
- Screenmap und Routenplan für den MVP ausarbeiten
- PWA-Policy für Consent, Offline und Push spezifizieren
