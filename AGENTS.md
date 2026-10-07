# Landingpage Agentic AI Schulung

Landingpage für die Agentic-AI-Schulung von Everience. Repo `rioeverience-dot/agentic_AI_schulung`
(GitHub, Branch `main`); Vercel baut automatisch aus GitHub.

Projekt-Memory: `.agents/memory/MEMORY.md` (lokal, nicht im Repo) – vor Änderungen lesen.

## Wo was liegt
- `landingpage.html` – die eine bearbeitbare Seite (Standalone, Assets per Skript inline).
- `vercel-static/index.html` – Vercel-Ausgabe, erzeugt von `npm run build:vercel`
  (`scripts/build-vercel-static.mjs`); unter Windows `npm.cmd run build:vercel`.
- Nicht produktiv: `index.html` + `src/*` (React/Vite-Variante), `landingpage-hero-video.html`,
  `landingpage.video-backup.html` (Backups), `docs/*` (GitHub Pages), `dist/*`.
- `wordpress-export/` – WordPress-Einbettung als Nebenprojekt; nie committen (steht in
  `.git/info/exclude`), Ablauf und Fehlertabelle in dessen README.

## Regeln
- Ablauf für Änderungen, Build und Deploy: Projekt-Skill `agentic-ai-schulung-vercel`
  (`.agents/skills/agentic-ai-schulung-vercel/SKILL.md`).
- Jede Änderung responsive mitprüfen (Breakpoints 960 px und 620 px, `prefers-reduced-motion`) und
  danach beide Builds erzeugen: `node scripts/inline-assets.mjs` und `npm run build:vercel`.
- Sprachumschaltung DE/FR/EN bleibt in-place (kein Reload, keine URL-Query); Texte immer in allen
  drei Sprachen pflegen.
- Hero und Sektion „Human + Technology“ nur auf ausdrücklichen Wunsch ändern.
- Committen und pushen nur, wenn Rio es verlangt; fremde, uncommittete Änderungen nicht mit-stagen.
- WordPress-Export: Skill `wordpress-einbetten`.
