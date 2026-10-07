---
name: "Agentic AI Schulung"
description: "Everience Brand-Landingpage für den Next Symbiotic Workplace"
colors:
  signal-pink: "#ff4692"
  action-pink: "#e40d7c"
  cognition-navy: "#100138"
  interface-navy: "#1a0456"
  agent-violet: "#5122d0"
  connective-blue: "#5867c8"
  cool-lilac: "#e0dfff"
  soft-lilac: "#bab4cc"
  ink: "#05000f"
  body-grey: "#6b6b6b"
  luminous-white: "#fdfdff"
typography:
  display:
    fontFamily: "Poppins, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, min(6vw, 8vh), 4.6rem)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Poppins, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.2rem, 5.6vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Poppins, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.06rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Poppins, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.04rem, 2vw, 1.34rem)"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.15em"
rounded:
  compact: "10px"
  control: "16px"
  surface: "1.35rem"
  legacy-card: "2.5rem"
  organic-section: "clamp(2.75rem, 7vw, 6.5rem)"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "24px"
  xl: "44px"
  section-block: "clamp(76px, 11vw, 145px)"
  section-inline: "clamp(18px, 6vw, 84px)"
components:
  button-primary:
    backgroundColor: "{colors.signal-pink}"
    textColor: "{colors.luminous-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "15px 38px"
  button-final:
    backgroundColor: "{colors.luminous-white}"
    textColor: "{colors.interface-navy}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: "15px 38px"
  navigation-pill:
    backgroundColor: "{colors.interface-navy}"
    textColor: "{colors.luminous-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
  content-card:
    backgroundColor: "{colors.luminous-white}"
    textColor: "{colors.interface-navy}"
    rounded: "{rounded.legacy-card}"
    padding: "24px"
---

# Design System: Agentic AI Schulung

## Overview

**Creative North Star: "The Symbiotic Workplace"**

Die Seite wirkt wie ein kontrollierter Übergang von tiefem, konzentriertem Technologieraum zu verständlicher Handlung. Dunkles Everience-Navy schafft Fokus, Signal-Pink markiert Energie und Übergang, Weiß hält Aussagen lesbar. Die Gestaltung ist nicht „KI-futuristisch“ um ihrer selbst willen: Sie zeigt, dass Mensch, Wissen, Prozesse und Agenten als ein steuerbares System zusammenarbeiten.

Die visuelle Dramaturgie darf abschnittsweise wechseln. Hero, Human+Technology und Fazit besitzen unterschiedliche Bewegungsaufgaben, bleiben aber durch Poppins, CI-Farben, großzügige Flächen und organische Geometrien zusammengehörig. Die Marke lehnt generische „AI SaaS“-Landingpages, konkurrierende Daueranimationen und editoriale Kursivschrift als Premium-Abkürzung ausdrücklich ab.

**Key Characteristics:**

- Commitment zu tiefem Navy statt neutralem SaaS-Hintergrund
- CI-Pink als seltenes Signal, nicht als flächige Textfarbe
- Große, klare Poppins-Typografie mit responsiven `clamp()`-Skalen
- Organische Section-Silhouetten und runde Controls
- Reale Motion-Assets und Canvas-Sequenzen mit kontrollierter Last
- Ein statischer, vollständig nutzbarer Reduced-Motion-Pfad

## Colors

Die Palette verbindet konzentriertes Nachtblau mit einem präzisen pinken Energiesignal und kühlen, fast weißen Leseflächen.

### Primary

- **Signal Pink:** Primärer Markenimpuls für CTA-Energie, das obere Halbkreis-O in „SYMBIOTIC“, Fokusmomente und Partikelbewegung. Für kleinen Text auf hellem Grund ist es verboten.
- **Action Pink:** Dunklere pinke Stufe für Verläufe, stärkere Aktionszustände und Textfälle, in denen Signal Pink den erforderlichen Kontrast nicht erreicht.

### Secondary

- **Cognition Navy:** Tiefster Markenraum für Hero, Fazit, immersive Motion und großflächige Hintergründe.
- **Interface Navy:** Hauptfarbe für Überschriften, Bedienelemente und strukturelle UI-Flächen.
- **Agent Violet:** Sekundärer Technologieakzent für Übergänge und Agentenbezug.
- **Connective Blue:** Verbindungsfarbe für Hover-Zustände, Tiefenwirkung und den finalen CTA.

### Neutral

- **Luminous White:** Primäre helle Fläche und Textfarbe auf Navy.
- **Cool Lilac / Soft Lilac:** Gedämpfte Verbindungstöne für sekundäre Texte, Highlights und atmosphärische Tiefe.
- **Ink:** Maximale dunkle Text- und Schattenbasis.
- **Body Grey:** Fließtext auf hellen Flächen; nicht auf farbigen Hintergründen verwenden.

### Named Rules

**The Signal Rule.** Signal Pink markiert Übergang, Aktion oder Markenmoment. Wenn jede Karte pink leuchtet, ist das Signal verloren.

**The Contrast Rule.** Auf Weiß nutzt kleiner Text niemals Signal Pink; verwende Action Pink oder Interface Navy.

**The Navy Commitment Rule.** Immersive Abschnitte tragen echtes Navy. Kein beigefarbener oder generisch neutraler „Premium“-Ersatz.

## Typography

**Display Font:** Poppins mit System-Sans-Fallback  
**Body Font:** Poppins mit System-Sans-Fallback  
**Label Font:** Poppins in Semibold und Großbuchstaben

**Character:** Die Ein-Familien-Lösung wirkt direkt, zugänglich und technisch klar. Persönlichkeit entsteht über Gewicht, Maßstab, Raum und die typografische Markenform des geteilten O – nicht über eine zweite dekorative Schrift.

### Hierarchy

- **Display** (600, fluid bis 4.6rem, 1.03): Hero-Aussage und einzelne dominante Markenmomente.
- **Headline** (600, fluid bis 5rem, 1.03): Abschnittsüberschriften; maximal 950px breit und balanciert umbrechen.
- **Title** (600, 1.06rem, 1.2): Karten- und Modulüberschriften.
- **Body** (400, fluid 1.04–1.34rem, 1.68): Erklärtexte mit maximal 65–75ch Leselänge.
- **Label** (600, 0.76rem, 0.15em, uppercase): Nur kurze Navigations-, Modul- und Markenlabels.

### Named Rules

**The -0.04 Floor.** Große Überschriften werden nie enger als `-0.04em` gesetzt. Ältere Regeln mit `-0.06em` sind technische Schuld, kein Präzedenzfall.

**The One Family Rule.** Neue Schriften werden nicht für Atmosphäre hinzugefügt. Poppins bleibt die Markenbasis, bis eine bewusste, projektweite Typografieentscheidung getroffen wird.

**The Symbiotic O Rule.** Das O in „NEXT SYMBIOTIC WORKPLACE“ besteht aus zwei versetzten Ringhälften: oben Signal Pink, unten Weiß. Es ist gerade gesetzt, skalierbar und bleibt als Buchstabe semantisch lesbar.

## Elevation

Das System ist tonal geschichtet und erhält Tiefe durch Navy-Verläufe, Videos, Partikel, leichte Perspektive und seltene Glows. Schatten sind ambient und zustandsbezogen; sie dürfen keine generische „schwebende Karte“ erzeugen.

### Shadow Vocabulary

- **Header Depth** (`0 14px 40px rgba(5, 0, 15, 0.34)`): Trennt die fixe Navigation von bewegten Hintergründen.
- **Pink Interaction Glow** (`0 26px 60px rgba(255, 70, 146, 0.18)`): Ausschließlich im Hover-/Fokuszustand wichtiger Karten.
- **Final Action Lift** (`0 12px 34px rgba(88, 103, 200, 0.34)`): Hebt den weißen Abschluss-CTA vom Navy-Hintergrund ab.

### Named Rules

**The Flat-at-Rest Rule.** Karten bleiben im Ruhezustand tonal. Stärkerer Schatten und Perspektive erscheinen nur als Reaktion auf Interaktion.

**The No Permanent Float Rule.** Markenlogos schweben nicht endlos. Ihre Bewegung beginnt durch Hover, Tap oder einen einmaligen sichtbaren Einstieg und kehrt in einen ruhigen Zustand zurück.

## Components

### Buttons

- **Shape:** Vollständig pillenförmig (`999px`).
- **Primary:** Signal-Pink bis Action-Pink, weißer Text, kompakte Semibold-Typografie.
- **Final CTA:** Weiße Fläche auf Navy, Interface-Navy als Text; Hover wechselt zu Connective Blue und hebt sich leicht an.
- **Hover / Focus:** Sichtbare Farb- und Tiefenreaktion in etwa 220–240ms; Fokus darf nicht allein durch Motion erkennbar sein.
- **Active:** Kurzes physisches Press-Feedback durch `scale(0.97)`.

### Chips

- **Style:** Pillenform mit klarer Textrolle; transparente oder navyfarbene Fläche.
- **State:** Pink ist aktives Signal, nicht Standardfüllung jedes Chips.

### Cards / Containers

- **Corner Style:** Bestehende Inhaltskarten verwenden noch `2.5rem`; neue Karten sollen die kompaktere Surface-Rundung von `1.35rem` verwenden. Große organische Rundungen bleiben echten Sections vorbehalten.
- **Background:** Halbtransparente weiße Fläche auf hellen oder farbigen Sections.
- **Shadow Strategy:** Im Ruhezustand flach, im Hover ambienter pinker Glow plus leichte Perspektive.
- **Border:** Dünne, ruhige Navy-Transparenz; keine farbigen Seitenstreifen.
- **Internal Padding:** Typischerweise 24px mit 18px Rasterabstand.

### Navigation

- **Style:** Fixe Topbar mit weißem Everience-Logo auf dunklem Hintergrund, zentraler Pill-Navigation und klarer Anmeldung rechts.
- **Typography:** Kurze Poppins-Labels, keine monospaceartige Tech-Codierung.
- **Responsive:** Die Desktop-Section-Map verschwindet unter 960px; mobile Navigation und ein dauerhaft reales Anmeldeziel bleiben offene Produktaufgaben.

### Voxel-Dissolve Logo

- **Resting State:** Ruhiges 3D-Everience-Mark, leicht vergrößert und zentral über der Fazit-Aussage.
- **Desktop:** Hover spielt die Pixelauflösung in ca. 620ms vorwärts; Mouseleave reversiert sie.
- **Touch:** Ein sichtbarer Einstieg demonstriert den Effekt einmal; Tap wiederholt ihn und kehrt automatisch zurück.
- **Performance:** Nur Frame 1 lädt sofort. Die weiteren 21 WebP-Frames laden per IntersectionObserver kurz vor dem Fazit und werden vor Nutzung dekodiert.
- **Accessibility:** Bei Reduced Motion bleibt ausschließlich das statische Poster; der Canvas ist dekorativ.

### Symbiotic Wordmark Detail

- **Form:** Zwei gegeneinander versetzte Ringhälften ersetzen ausschließlich das O in „SYMBIOTIC“.
- **Color:** Obere Hälfte Signal Pink, untere Hälfte Weiß.
- **Typography:** Poppins Semibold, gerade, uppercase; keine Kursivschrift.
- **Behavior:** Der Typewriter rendert das Markenzeichen nach dem O-Zeichen wieder als Struktur und erhält gleichzeitig den vollständigen zugänglichen Text.

## Do's and Don'ts

### Do:

- **Do** behandeln Hero, Human+Technology und Fazit als drei klar getrennte Bewegungsaufgaben.
- **Do** laden schwere Sequenzen erst in Sichtnähe und zeigen sofort ein statisches Poster.
- **Do** bieten für Hover-Effekte immer Touch- und Reduced-Motion-Pfade.
- **Do** verwenden Signal Pink für Aktion, Übergang und Markenmomente.
- **Do** halten das Everience-Mark zwischen Interaktionen ruhig.
- **Do** bearbeiten ausschließlich `landingpage.html` als Quelle und erzeugen `vercel-static/index.html` über den Build.
- **Do** testen Desktop-Hover, Touch-Rücklauf, Reduced Motion und externe Vercel-Assets separat.

### Don't:

- **Don't** bauen generische „AI SaaS“-Landingpages aus Pink-Purple-Glows, identischen Kartenrastern und dekorativem Tech-Jargon.
- **Don't** lassen mehrere Animationen gleichzeitig um Aufmerksamkeit konkurrieren.
- **Don't** verwenden Hover-only-Interaktionen ohne Touch- oder Tastaturentsprechung.
- **Don't** bauen Scroll-gebundene Effekte, die Nutzer festhalten oder Inhalte verdecken.
- **Don't** verwenden editoriale Kursivschrift als pauschales Premium-Signal.
- **Don't** verwenden Coding-/Terminal-Ästhetik als Kostüm.
- **Don't** erstellen neue Karten mit 32px+ Rundung; die bestehende 2.5rem-Rundung ist eine Legacy-Ausnahme.
- **Don't** verwenden farbige Seitenstreifen, Gradient Text oder wiederholte Eyebrow-zu-Card-Grid-Schablonen.
- **Don't** kopieren Änderungen direkt in den generierten Vercel-Output.
