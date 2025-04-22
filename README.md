# 🔗 DIE LINKE Bonn – Linktree

Dies ist der offizielle Linktree des Kreisverbands DIE LINKE Bonn.  
Ein digitaler Aushang im Stil einer schwarzen Tafel – gestaltet mit Liebe, Haltung und einem Hauch Retro-Charme.

## 🚩 Features

- ✊ Übersicht aller Social-Media-Kanäle & Plattformen
- 📍 Verlinkung zum Parteibüro über Google Maps
- 🎨 Handgemachter Look im "Flyer auf Tafel"-Stil
- 🔁 Zufällige Anordnung & dezente Animationen beim Laden
- 🌀 Flyer wackeln leicht für ein lebendiges Erscheinungsbild

## 📂 Struktur

```
/
├── index.html               # Hauptseite
├── static/
│   ├── styles.css           # Alle Styles hier
│   ├── script.js            # Zufällige Animationen & Wackelbewegung
│   ├── image/
│   │   └── schwarzes-brett.jpg  # Hintergrundbild
│   └── fonts/               # Custom Fonts (Inter, WorkSans)
├── docker-compose.yml       # Deployment über nginx + Traefik
```

## 🚀 Deploy

### GitHub Pages / Netlify

Einfach die `index.html` und den Ordner `static/` hochladen.  
Keine weiteren Abhängigkeiten notwendig.

### Docker Compose (nginx + Traefik)

Das Projekt enthält eine `docker-compose.yml`, die einen Nginx-Container startet und über Traefik erreichbar macht (z. B. unter `tree.linkebonn.de`):

```yaml
services:
  nginx:
    image: nginx:latest
    container_name: tree.linkebonn.de
    volumes:
      - ./html:/usr/share/nginx/html:ro
    ...
```

> SSL, Routing und HTTPS-Redirects sind bereits per Traefik-Labels vorkonfiguriert.

## 🛠️ To Do / Ideen für später

- 🔍 Barrierefreiheit verbessern (z. B. `aria-labels`)
- 📸 „Aktuelles“-Sektion mit Mini-News oder Eventflyern?
- 🗳️ Feedback-Link integrieren

---

## ✊ Kontakt

**DIE LINKE Bonn**  
📬 strgleft@linkebonn.de

---

**MITMACHEN STATT NUR KLICKEN.**
