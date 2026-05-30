# Feature-Analyse: LOCUTERRA

## Kurzbeschreibung

LOCUTERRA ist ein Konzept für ein ortsbasiertes, gemeinwohlorientiertes Social
Network, das Bürger, Institutionen, Kommunen, Organisationen und Unternehmen
über reale Orte, Gruppen, Informationskanäle, Ressourcen und Nachrichten
verbindet.

---

## Highlights

| Feature | Beschreibung |
|---|---|
| **Ortsbasierte Vernetzung** | Gruppen, Orte und Informationen werden anhand realer Lokalität und Ebenenreichweite sichtbar. |
| **Ressourcensystem** | Bürger und Organisationen können Geräte, Skills, Gesuche und andere Ressourcen anbieten oder suchen. |
| **Informationskanäle** | Institutionen, Kommunen, Organisationen und Unternehmen können abonnierbare Feeds betreiben; Abonnement, Begleitchat und Kontaktfreigabe sind getrennt spezifiziert. |
| **Bürgerkontaktstellen** | Öffentliche Stellen und Organisationen können strukturierte Anfragen entgegennehmen. |
| **Direktnachrichten** | Kontakt zwischen Bürgern, Ressourcenanbietern, Institutionen und Unternehmen. |
| **Öffentliche und private Orte** | Orte können öffentlich, privat oder organisationsintern sein. |
| **Krisenwarnungen** | Kommunen, Regionen oder höhere Ebenen können ortsbezogene Warnungen ausgeben. |
| **Marktplatz-Abgrenzung** | Nicht-kommerzielle Ressourcen werden von geldbasierten Marktplätzen getrennt; die Spezifikation steht in `RESSOURCEN_UND_MARKTPLATZ.md`. |
| **Sponsoring-/Arena-Modell** | Unternehmen können Orte sichtbar sponsorn, ohne das Kernnetzwerk vollständig zu kommerzialisieren. |

---

## Bewertung der Ausbaustufe

### Aktueller Stand: **Konzept / Prototype-Vorphase (12%)**

| Kategorie | Bewertung (1-5) | Details |
|---|:---:|---|
| **Funktionsumfang** | 2 | Viele Ideen vorhanden, aber noch nicht priorisiert oder als MVP geschnitten. |
| **UI/UX** | 1 | Noch keine Screens, User-Flows oder Interaktionsprototypen. |
| **Stabilität** | 1 | Kein Code vorhanden. |
| **Dokumentation** | 5 | Onboarding, Architektur, Rollen-/Rechte-Spezifikation, Datenschutzmodell und Reichweitenmodell vorhanden. |
| **Datenschutz/Governance** | 4 | Rollen-, Rechte-, Datenschutz- und Governance-Basis ist modelliert; operative Moderation ist jetzt spezifiziert. |

---

## Empfohlene Erweiterungen

### Priorität: Hoch

1. Die Einspruchsstelle im MVP weiter formalisieren.
2. Die ersten Prototyp-Schnittstellen für Rollen, Sichtbarkeit und Meldung
   vorbereiten.

### Bereits entschieden

- Sicherheits- und Missbrauchsmodell in `SICHERHEIT_UND_MISSBRAUCH.md`
  dokumentiert.
- Governance- und Moderationsmodell in `GOVERNANCE.md` dokumentiert.
- Konkrete Konfliktfälle für Meldung, Triage, Sperre und Einspruch in
  `workflows/konfliktfaelle_meldung_triage_einspruch.md` verprobt.
- Technischer Zielstack: Web/PWA-first mit `TypeScript`, `React`, `Next.js`;
  native Shells später optional.
- MVP-Scope für Version 0.1: Bürger und lokale Initiativen in einer einzelnen
  Kommune; Fokus auf Orte, Gruppen, nicht-kommerzielle Ressourcen und
  Direktnachrichten.
- Rollen- und Rechtekonzept für den Bürger-MVP: Bürgerkonto als einziger
  Login-Typ, lokale Initiativen als abgeleitete Gruppen-/Ortsidentitäten.
- Reichweitenmodell für Orte, Gruppen und Kanäle: privat bis transnational,
  mit klarer Trennung von Sichtbarkeit, Mitgliedschaft und Einwilligung.
- Informationskanal- und Abonnement-Flow in `INFORMATIONSKANAL_FLOW.md`
  spezifiziert; Begleitchat und Kontaktfreigabe bleiben getrennt.
- Ressourcen und Marktplätze werden fachlich getrennt; Ressourcen bleiben im
  MVP nicht-kommerziell.
- Ressourcen-Flow für Einstellen, Sichtbarkeit, Kontakt und Entfernung ist in
  `RESSOURCEN_FLOW.md` konkretisiert.

### Priorität: Mittel

1. Datenmodell für Nutzer, Orte, Gruppen, Kanäle, Ressourcen und Nachrichten
   entwerfen.
2. Datenschutz-Details an Implementierungsflüsse koppeln.
3. Weitere Governance- und Moderationsfragen aus den Beispielszenarien ableiten.

### Priorität: Niedrig

1. Sponsoring-/Arena-System erst nach Kernnetzwerk und Governance prüfen.
2. Plattformstrategie für native Apps erst nach MVP-Prototyp festlegen.

---

## Technische Details

Framework: Web/PWA-first mit `TypeScript`, `React` und `Next.js`  
Dateigröße: kein Quellcode vorhanden  
Hauptdatei: keine  
Primärdokument: [KONZEPT.md](./KONZEPT.md)

---

## Code-Qualitätsprüfung

Nicht anwendbar, weil noch kein Quellcode existiert. Für den ersten Prototypen
sollten direkt geprüft werden:

- UTF-8-Encoding
- Startdatei oder klarer Run-Befehl
- Tests für Rollen, Rechte, Sichtbarkeit und Nachrichtenflüsse
- Trennung von Ressourcen- und Marktplatzlogik
- Datenschutzrelevante Datenfelder und Löschprozesse

---

*Analyse aktualisiert: 2026-05-17*
