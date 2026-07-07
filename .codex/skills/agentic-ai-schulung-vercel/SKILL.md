---
name: agentic-ai-schulung-vercel
description: Repository-local workflow for the rioeverience-dot/agentic_AI_schulung landing page. Use when Codex changes, reviews, syncs, commits, pushes, or deploys this repository's Agentic AI Schulung landing page, especially requests about content edits, animations, assets, GitHub pushes, or Vercel deployments. Ensures Vercel deploys the standalone landingpage.html via vercel-static, not the React/Vite hero-video backup.
---

# Agentic AI Schulung Vercel Workflow

## Project Contract

Treat the repository root as the canonical workspace for this project:

- GitHub repository: `rioeverience-dot/agentic_AI_schulung`
- Production intent: Vercel must deploy the general standalone landing page.
- Canonical editable page: `landingpage.html`
- Vercel output page: `vercel-static/index.html`
- Vercel config: `vercel.json`
- Vercel build command: `npm run build:vercel`
- Vercel output directory: `vercel-static`
- Build sync script: `scripts/build-vercel-static.mjs`
- Logo asset copied for Vercel: `assets/everience-logo.png` to `vercel-static/assets/everience-logo.png`

Do not treat these as production entrypoints unless the user explicitly asks to change the architecture:

- `index.html` and `src/*`: React/Vite version containing the hero-video/root app.
- `landingpage-hero-video.html` and `landingpage.video-backup.html`: video backup variants.
- `docs/*`: GitHub Pages version, separate from Vercel.
- `dist/*`: Vite build output, ignored for this Vercel workflow.

## Change Workflow

1. Inspect `git status --short --branch` before editing.
2. Make user-requested page/content/animation changes in `landingpage.html` first.
3. If asset references change, keep paths valid from both repository root and `vercel-static/` after sync.
4. Run `npm.cmd run build:vercel` on Windows, or `npm run build:vercel` where `npm` is not blocked.
5. Verify `vercel-static/index.html` is updated from `landingpage.html`.
6. Confirm Vercel settings remain pinned:
   - `vercel.json` has `"buildCommand": "npm run build:vercel"`.
   - `vercel.json` has `"outputDirectory": "vercel-static"`.
7. Review the diff and avoid staging unrelated user changes.
8. Commit and push to `main` only when the user asks to publish or confirms publishing.

## Validation Commands

Prefer these checks before committing:

```powershell
npm.cmd run build:vercel
Get-FileHash landingpage.html,vercel-static\index.html -Algorithm SHA256
rg -n "buildCommand|outputDirectory|build:vercel|landingpage.html" vercel.json package.json scripts\build-vercel-static.mjs
git diff --check
git status --short --branch
```

Expected result after `build:vercel`: `landingpage.html` and `vercel-static/index.html` should usually have the same hash. If they differ, explain why before pushing.

## Git Publishing Rules

When publishing this project:

- Stage only the files needed for the requested change.
- Include `vercel-static/index.html` when it changes as a result of `build:vercel`.
- Include changed assets under `assets/` and the synced copies under `vercel-static/assets/` when relevant.
- Use a clear commit message that names the page/deployment change.
- Push `main` to `origin` so connected Vercel can deploy from GitHub.
- After push, report the commit hash and remind that Vercel should pick up the GitHub push automatically.

If `git push` fails due to network sandboxing, request escalation and retry.

## Failure Modes To Prevent

- Do not rely on Vite's default `npm run build` for Vercel unless the user intentionally moves production to the React app.
- Do not let Vercel auto-detect the React/Vite root app as the production page.
- Do not edit only `vercel-static/index.html`; changes should originate in `landingpage.html`, then be synced.
- Do not overwrite `landingpage.html` with `landingpage-hero-video.html` or backup variants unless explicitly requested.
- Do not assume GitHub Pages settings affect Vercel; `docs/` is separate.
