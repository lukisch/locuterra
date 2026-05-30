# PATTERNS.md - Wiederverwendbare Regeln

## Sichtbarkeit immer explizit modellieren

### WRONG

```text
Eine Ressource ist einfach öffentlich sichtbar.
```

**Problem:** LOCUTERRA hängt an Ort, Gruppe, Rolle und Ebenenreichweite. Ein
unklares "öffentlich" ist zu grob.

### RIGHT

```text
Ressource sichtbar für: Gruppe X, Ort Y, Ebenenreichweite Dorf, Dauer 30 Tage.
```

**Warum:** Sichtbarkeit ist Kernlogik und Datenschutzschutz zugleich.

## Ressourcen nicht mit Marktplätzen vermischen

### WRONG

```text
Ressource einstellen, Preis hinzufügen, Zahlung später ergänzen.
```

**Problem:** Preis und Zahlung ändern das Modul grundlegend.

### RIGHT

```text
Ressource: nicht-kommerziell.
Marktplatzangebot: separates Objekt mit eigenen Regeln.
```

**Warum:** So bleiben lokale Hilfe und kommerzielle Transaktionen sauber
getrennt.

## Krisenwarnungen als Hochrisiko-Modul behandeln

### WRONG

```text
Jede Kommune kann einfach eine Push-Nachricht an alle am Ort senden.
```

**Problem:** Fake-Warnungen, Fehlalarme, Zuständigkeit und Audit sind kritisch.

### RIGHT

```text
Warnungen brauchen verifizierte Absender, Zuständigkeitsbereich, Audit,
Widerruf/Korrektur und klare Empfängerlogik.
```

**Warum:** Warnungen können reales Verhalten auslösen.

