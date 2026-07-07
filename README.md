# agentic_AI_schulung

Landingpage fuer die Agentic-AI-Schulung.

## GitHub Pages

Die GitHub-Pages-Version liegt in `docs/`.

- `docs/index.html`
- `docs/assets/everience-logo.png`

In GitHub Pages als Source auswaehlen:

- Branch: `main`
- Folder: `/docs`

## Landingpage Varianten

Diese Landingpage liegt bewusst als einfache HTML-Datei vor, aehnlich wie HTML-Slides.

## Aktuelle Arbeitsversion

- `landingpage.html`
- entspricht aktuell `landingpage-css-logo.html`
- nutzt ein lokal eingebundenes Logo und eine kostenlose HTML/CSS-Hero-Animation
- benoetigt kein React, Vite, Higgsfield oder Build-Setup

## Varianten

- `landingpage-css-logo.html`
  - Hero mit HTML/CSS-Logo-Animation
  - Logo-Datei: `assets/everience-logo.png`
  - gut als robuste, kostenlose Standalone-Version

- `landingpage-hero-video.html`
  - Hero mit dem zuvor generierten Higgsfield/Seedance-Video
  - nutzt eine externe Cloudfront-MP4-URL
  - dient als Fallback auf die fruehere Version

## Wechseln der aktiven Version

Soll die CSS-Logo-Version aktiv sein:

```powershell
Copy-Item -LiteralPath landingpage-css-logo.html -Destination landingpage.html -Force
```

Soll die Hero-Video-Version aktiv sein:

```powershell
Copy-Item -LiteralPath landingpage-hero-video.html -Destination landingpage.html -Force
```
