# Orion MIS — Website v2

A premium static site for Orion MIS Ltd, built with Astro. Dark/light hybrid design, editable copy through a single JSON file, ready for Netlify deployment.

## What's here

- **Homepage** — full hybrid design (dark hero → light thesis → dark "Helix in operation" → light cases → light "one roof" → dark CTA)
- **Stub pages** — Helix, Solutions, Case studies, About (placeholder layouts ready to be filled in)
- **Contact page** — real, working layout with form (form submission not yet wired to a backend)
- **404 page**

## Editing copy

**All editable text lives in one file: `src/content/site.json`.**

This is the single most important thing to know. To change any copy on the site:

1. Open `src/content/site.json`
2. Edit the text
3. Save, commit to GitHub
4. Netlify rebuilds automatically (≈30 seconds)

That's it. No CMS, no auth, no widget. Just JSON edits.

Examples of what's editable:

- `site.tagline` — the line in the meta description and page titles
- `home.hero.h1Line1/2/3` — the homepage headline
- `home.hero.lead` — the body text under the hero
- `home.stats[]` — the four stat cards
- `home.thesis.*` — the CAPEX→OPEX section copy
- `home.operation.*` — the "Helix in operation" section, including the live KPIs and event log
- `home.cases.items[]` — the case study cards
- `home.roof.disciplines[]` — the six disciplines
- `nav.links[]`, `footer.columns[]` — navigation
- `global.phone`, `global.email`, `global.address` — site-wide contact info

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## Production build

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to any static host.

## Deploying to Netlify

Two routes:

**Option A — Drag-and-drop** (fastest)
1. Run `npm run build` locally
2. Drag the `dist/` folder onto https://app.netlify.com/drop
3. Done

**Option B — GitHub integration** (recommended)
1. Push this folder to a new GitHub repo
2. In Netlify, "Add new site" → "Import an existing project"
3. Pick the repo, accept defaults (build command `npm run build`, publish directory `dist`)
4. Done. Every push to `main` redeploys automatically.

## File map

```
src/
├── content/
│   └── site.json          ← ALL EDITABLE COPY LIVES HERE
├── layouts/
│   └── Base.astro         ← Nav + footer + meta (used by every page)
├── components/
│   └── StubPage.astro     ← Shared placeholder layout for stub pages
├── pages/
│   ├── index.astro        ← Homepage (the main one)
│   ├── helix.astro        ← Stub
│   ├── solutions.astro    ← Stub
│   ├── case-studies.astro ← Stub
│   ├── about.astro        ← Stub
│   ├── contact.astro      ← Real contact page
│   └── 404.astro          ← 404 error page
└── styles/
    └── global.css         ← Design tokens (colours, fonts, spacing)
```

## Design tokens

All colours and fonts are CSS variables in `src/styles/global.css`. The palette:

| Token | Value | Meaning |
|---|---|---|
| `--dark` | #0A1018 | Hero / data section background |
| `--darker` | #050B14 | Strip background |
| `--darkest` | #02050A | CTA / footer background |
| `--light` | #FBFAF7 | Content background |
| `--paper` | #F3F1EC | Cases section background |
| `--blue` | #1E90FF | Light-section accent |
| `--cyan` | #00D5FF | Dark-section accent |
| `--green` | #32D583 | Status OK |
| `--amber` | #FDB022 | Status warn |

Typography: DM Serif Display (headlines), DM Sans (body), JetBrains Mono (labels/data).

## What's NOT yet done

- The Helix illustration in the hero is a CSS placeholder. Replace with a real photo or render.
- The case study card images are CSS placeholders. Replace with real photos.
- The contact form has no backend — submission shows an alert. Wire to your preferred form handler (Netlify Forms, Formspree, HubSpot, etc).
- Stub pages need real content.
- Orion OS page intentionally not built yet.

## Questions?

- Want a different rhythm of dark/light? Edit the `<section>` `background` colours in `src/pages/index.astro`.
- Want to add a new page? Create `src/pages/yourname.astro`, copy from a stub, wire into `nav.links` in `site.json`.
- Want to change a colour everywhere? Edit the CSS variables in `src/styles/global.css`.
