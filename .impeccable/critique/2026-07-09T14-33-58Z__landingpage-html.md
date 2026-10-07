---
target: landingpage.html
total_score: 23
p0_count: 2
p1_count: 2
timestamp: 2026-07-09T14-33-58Z
slug: landingpage-html
---
Method: dual-agent (A: a04c843d18a8f45c7 · B: a12fa88cabf52ded0)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Sticky section nav never shows an active/current-section state on this long scroll |
| 2 | Match System / Real World | 3 | Jargon ("RAG", token cost) appears in the hero/Kernversprechen before Modul 01 defines it |
| 3 | User Control and Freedom | 3 | No traps, but no back-to-top on a long page |
| 4 | Consistency and Standards | 4 | Genuinely uniform visual system throughout |
| 5 | Error Prevention | 2 | No forms exist, so nothing to misuse — score reflects absence, not achievement |
| 6 | Recognition Rather Than Recall | 3 | Nav is text-labeled; some eyebrow labels are more abstract than their section content |
| 7 | Flexibility and Efficiency | 2 | Anchor-nav jump links only, nothing beyond |
| 8 | Aesthetic and Minimalist Design | 2 | Decorative flourishes (orbit dots, globe rings) compete with dense jargon-heavy text |
| 9 | Error Recovery | 1 | Hero video has no `poster`/fallback; a failed load renders an empty gradient box silently |
| 10 | Help and Documentation | 1 | No FAQ, no glossary, no contact/help link anywhere |
| **Total** | | **23/40** | **Acceptable — significant improvements needed** |

## Anti-Patterns Verdict

**Start here. Does this look AI-generated? Yes — fail, not a close call.**

**LLM assessment:** Four of the skill's absolute bans are directly present, not just aesthetically reminiscent:
- **Side-stripe border** — `.check-list li` (line 689): `border-left: 2px solid var(--pink-400)`.
- **Hero-metric template** — `.impact .metrics` (lines 618–640): four big-number/small-label blocks on a gradient background, matching the ban's own description verbatim.
- **Identical card grids, used twice** — the 9-card `#kernversprechen .grid` and the 8-card `#module .module-detail-grid` share identical chrome (translucent card, 1px border, 2.5rem radius, top gradient hairline).
- **Eyebrow on every section** — `.eyebrow` appears in all 8 sections, 8-for-8, no skips — the definition of AI scaffolding per the skill's own wording.

Close cousins: `.orbit` icons above every Kernversprechen heading ("large rounded-corner icons above every heading — screams template"), and a pink/purple/deep-navy gradient hero + rounded-pill nav that reads as the saturated 2024–2026 "AI SaaS" default even though it isn't literally named in the current reflex-reject lane list. Poppins isn't on the reflex-reject font list, but a single Google-Fonts geometric sans for everything with no visible font-selection procedure applied reads the same way.

Correctly *not* a violation: the Modul 01–08 numbering is an earned sequence (the curriculum genuinely is ordered), exempting it from the numbered-marker ban.

**Deterministic scan:** 2 findings (exit code 2):
- `single-font` (warning, line 13): only font in use is Poppins.
- `numbered-section-markers` (advisory, line 0): detected sequence 01→06 across the file.

**Where the two tracks agree and disagree:** Both flag the single-font choice as worth a second look. The detector's `numbered-section-markers` hit is very likely a **false positive** — Assessment A independently examined the same Modul 01–08 sequence and concluded it's earned (a real ordered curriculum), not scaffolding; the detector fired on a derived cross-file sequence rather than a concrete "01 · label" eyebrow chip, and line 0 (no specific location) supports treating it as noise. The detector did *not* catch the four things that actually matter most here (side-stripe border, hero-metric block, eyebrow-per-section, dual identical grids) — those require design judgment the deterministic scan isn't built to make; the LLM track is doing the real work in this critique.

**Visual overlays:** Not available. No browser automation/screenshot tool is exposed in this session, so no live page injection or user-visible overlay was possible. Both assessments relied on static code reading; treat contrast numbers below as manual sRGB-luminance estimates from the file's own hex/rgba values, not live-rendered measurements.

## Overall Impression

The content is the strongest thing here — a genuinely differentiated 6-level agent-autonomy taxonomy that teaches the reader something specific, not generic AI-hype copy. But the shell around that content is assembled from a template a reader would recognize immediately: an eyebrow above every section, two dense identical card grids, a hero-metric block, a side-striped checklist. And it ends in a dead stop — there is no button, email, phone number, or contact form anywhere in the entire 1328-line file. The single biggest opportunity: a reader who gets fully convinced by good content currently has nowhere to go.

## What's Working

1. **Real domain depth, not filler copy.** The Chatbot → reusable Assistant → tool-using Assistant → goal-driven Agent → process-integrated Agent → Coding Agent ladder is a genuinely useful framework, rare in AI-generated marketing copy.
2. **`prefers-reduced-motion` is comprehensively honored** (lines 1048–1071) — it kills the JS cursor-trail pseudo-elements specifically, stops each named keyframe animation, and forces `scroll-behavior: auto`. More thorough than most hand-rolled implementations.
3. **Three real, tuned responsive breakpoints** (960px/620px/420px), each adjusting font clamps, hero-identity sizing, grid columns, and mobile-specific `overflow-wrap` — evidence of actual testing, not a single lazy stack.

## Priority Issues

**[P0] No call-to-action or contact mechanism anywhere on the page**
- **Why it matters**: Zero buttons, zero email, zero phone, zero form in the entire file. A convinced reader has no next step — this caps conversion at zero regardless of content quality.
- **Fix**: Add a persistent primary action (sticky "Termin anfragen" in `.topbar`, a CTA block under `.product-grid` in `#formate`, a closing button in `#fazit`) with a real `mailto:` link or contact form.
- **Suggested command**: `/impeccable harden`

**[P0] Eyebrow-on-every-section + two identical dense card grids form the page's AI-slop signature**
- **Why it matters**: 8/8 sections use the identical uppercase-label→heading formula; the 9-card and 8-card grids repeat identical chrome. This undermines the page's own credibility claim — a page selling AI-agent expertise visually reads as AI output.
- **Fix**: Vary the section-intro device (some sections should carry no label, heading does the work); restructure the two big grids into grouped clusters, a horizontal scroller, or progressive disclosure instead of flat 9-up/8-up.
- **Suggested command**: `/impeccable typeset` (cadence/hierarchy), `/impeccable quieter` (de-template the repetition)

**[P1] Typography ceiling and letter-spacing violate house rules, with a real overflow trigger already in the copy**
- **Why it matters**: `h1 { font-size: clamp(3.6rem, 10vw, 8.2rem); letter-spacing: -0.06em; }` — the clamp max (≈131px) exceeds the 6rem display-heading ceiling by ~37%, and -0.06em is tighter than the -0.04em floor. Long German compounds already in the copy ("Unternehmensalltag," "Wissensorganisation") plus no `text-wrap: balance` make this a live overflow risk, not hypothetical.
- **Fix**: Cap h1 clamp max to ≤6rem, relax letter-spacing to ≥-0.04em, add `text-wrap: balance` to h1–h3.
- **Suggested command**: `/impeccable typeset`

**[P1] Pink label text fails WCAG AA contrast on light backgrounds**
- **Why it matters**: `--pink-400: #ff4692` used as `.eyebrow` color and module/product-card label color computes to roughly 3.15:1 against the near-white backgrounds it sits on — below the 4.5:1 minimum. Affects 6 of 8 section eyebrows plus every module-card and product-card label.
- **Fix**: Darken the text-use pink toward the darker gradient stops already present (`#c01484`/`#9b1365`); keep the brighter pink for decorative, non-text use only.
- **Suggested command**: `/impeccable audit` (folded into the audit run below)

**[P2] Fragile hero-video asset, empty logo alt text, no footer/trust signals**
- **Why it matters**: The `#human-technology` video points to an ephemeral-looking generation-service CloudFront URL with no `poster` and no load fallback — a 404 leaves a blank dark box. The only image on the page (`assets/everience-logo.png`) has `alt=""`, so the company's name appears nowhere as readable text or accessible content. No footer exists — no Impressum, no Datenschutz, no client logos, no testimonials, which is both a legal-notice gap for a German commercial site and a trust gap exactly where `#formate` is meant to close a decision.
- **Fix**: Verify/self-host the video and add a `poster`; give the logo real alt text; add a minimal footer with Impressum/Datenschutz/contact.
- **Suggested command**: `/impeccable harden`

## Persona Red Flags

**Jordan (Confused First-Timer)**: The hero lead opens with "ChatGPT, Copilot, Claude, Gemini" then immediately "agentische Workflows und KI-taugliche Wissensorganisation" — jargon-dense within 3 seconds. "RAG" appears in Kernversprechen card 5 before Modul 01 (which promises to define foundational terms) ever explains it. No FAQ, glossary, or help link exists anywhere. Biggest red flag: after fully reading and deciding "yes," there is no button to click.

**Riley (Deliberate Stress Tester)**: The hero video's ephemeral-looking URL with no `poster` and `aria-hidden="true"` means a failed load is silently invisible — exactly what Riley would test and find a blank gradient box. `alt=""` on the only logo plus no footer means zero way to verify who's behind the page short of view-source. Clicking a `.section-map` link scrolls correctly but never shows an active state, so Riley loses their place on a long page after every jump. The long German compound headline at the 8.2rem/-0.06em clamp is exactly the overflow scenario Riley would target at 700–960px viewports.

**Casey (Distracted Mobile User)**: `.section-map { display: none }` below 960px removes the entire secondary nav with no replacement — no hamburger, no bottom sheet. The 4 `.info-pills` go full-width stacked at ≤620px, turning a compact quick-links row into a tall stack Casey must scroll past, still only leading to mid-page anchors, not a CTA. No sticky action exists in the thumb zone at any scroll depth. Autoplaying looping video ships on mobile with no lighter/data-conscious fallback.

## Minor Observations

- `.topbar`'s `backdrop-filter: blur(20px)` is the one glassmorphism use on the page, and it's the functionally-justified case (keeps a fixed nav legible over scroll) — not a ban violation, just the single acceptable instance.
- No `text-wrap: balance` on h1–h3 or `text-wrap: pretty` on body copy anywhere, despite the skill recommending both.
- No skip-link for keyboard users on a long page with a fixed, blurred topbar.
- The four `.metric` blocks mix a genuine claim ("30 Minuten bis zum ersten Assistenten") with structural inventory counts ("8 Praxis-Module") at identical visual weight, muddying what's actually being promised.
- All imagery is abstract CSS gradients/shapes or one AI-generated stock video — no real photograph, product screenshot, or instructor image anywhere, compounding the P2 trust gap.

## Questions to Consider

1. If a decision-maker reaches the bottom of this page fully convinced, what do they actually click? Right now: nothing. What would the page look like if the CTA were designed first and every section built toward it?
2. Every section follows the same eyebrow → heading → identical-card-grid formula. Strip the eyebrows — could a reader still tell "Positionierung" from "Kernversprechen" from "Human + Technology" by feel, or does the page read as one template repeated eight times?
3. This company sells hands-on AI-agent training, but the entire visual identity is generated gradients and orbs. What changes if the hero showed an actual custom-assistant screenshot, a real workflow diagram, or a photo from a past training session instead of an abstract glow?
</content>
