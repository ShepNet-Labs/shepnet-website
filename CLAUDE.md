# CLAUDE.md, ShepNet Security website

Guidance for all future edits to this repository. Read this before changing copy,
design, or structure.

## What this is

A small static marketing site for ShepNet Security, a solo, founder led
cybersecurity consulting practice in Atlanta, Georgia. The site leads with a
single offering: the Security Baseline Assessment. Built with plain HTML and a
Tailwind CSS production build. No CDN, no JavaScript trackers, no analytics, no
third party network calls.

## Content rules (STRICT)

These are non negotiable. Apply them to every page and every edit.

- NO em dashes anywhere in site copy. Use commas, periods, or restructure the
  sentence. (En dashes are also avoided.)
- NEVER claim 24/7 monitoring, managed services, SOC services, MSP or MSSP
  offerings, or any guarantee of security outcomes.
- Position the practice as: assess, design, build, document, hand off. A
  consultant with a clear start and finish, not an operator of ongoing services.
- NO "team", "we as a company", or staff language. This is solo and founder led.
  First person ("I") is fine on the About page. The brand voice elsewhere refers
  to "ShepNet Security".
- NO client counts and NO claims about the number of engagements completed.
- DO NOT publish any price, dollar figure, rate, or labor estimate anywhere.
- Footer reads "ShepNet Security" only. No legal entity name, no DBA line.
- Plain business language. Lead with risk and clarity. Minimize acronyms. The
  reader is a non technical small business owner.

## Internal business data

Internal business data (pricing, labor budgets, financials, client lists,
engagement notes) must NEVER be added to this repository. It is a public repo.
The `.gitignore` blocks an `/internal/` folder and `*.pricing.*` style files as a
backstop, but the rule is: keep all of it out entirely.

## Brand system

### Color palette (Tailwind theme tokens, defined in `tailwind.config.js`)

| Token    | Hex     | Role                                          |
|----------|---------|-----------------------------------------------|
| ebony    | #1B1C1B | primary ink, dark section backgrounds         |
| charcoal | #322E2D | secondary / body text                         |
| stone    | #686462 | muted / caption text                          |
| sable    | #926840 | deep gold accent                              |
| tan      | #E5B576 | gold highlight (CTA, accent)                  |
| ivory    | #E5DFDC | warm light background                         |
| ice      | #F4F3F2 | lightest background / page base               |

Usage rules:
- Light overall theme. Page base is Ice (#F4F3F2) or white. Warm sections use
  Ivory. The hero is light with Ebony headline text and a gold CTA.
- Body text is Ebony or Charcoal on light backgrounds (full contrast).
- Gold (Sable and Tan) is the SINGLE accent: primary CTA button, link accents,
  and one signature rule. NEVER use gold for body text. Gold is for large or UI
  elements only, to keep WCAG AA contrast.
- Introduce NO colors outside this palette.
- Maintain WCAG AA contrast for all text.

### Signature device

The Sable to Tan to Sable horizontal gradient (`bg-brand-rule` / the
`.brand-rule` component) is used exactly ONCE per page: the thin rule directly
under the site header. Do not add it elsewhere. Do not overuse it.

### Typography

- Font family: Figtree, self hosted in `assets/fonts/` (figtree-regular.ttf,
  figtree-bold.ttf, figtree-italic.ttf). Loaded via `@font-face` in
  `src/input.css`. Do NOT switch to a font CDN.
- Bold for headings, Regular for body, Italic for pull quotes and emphasis.
- Text forward site. Let type and whitespace carry the design.

### Logos

All brand SVG variants live in `assets/logos/`. Naming: "color_dark" / "ebony" =
dark artwork for LIGHT backgrounds; "color_light" / "ivory" = light artwork for
DARK backgrounds. "inline" = horizontal, "stacked" = vertical, "logomark" =
symbol only.

Usage map:
- Site header (light background): `shepnet_logo_inline_color_dark.svg`
- Dark sections and the footer: `shepnet_logo_inline_color_light.svg`
- Favicon and compact mark: derived from `shepnet_logo_logomark_color_dark.svg`
  (see `assets/logos/favicon.svg`, a square padded version)
- Stacked and other variants are kept as alternates for future use.

## Design direction

- Clean, professional, text forward, credibility led.
- Mobile first. Most visitors arrive on a phone to tap call or email, so on small
  screens those actions stay reachable with minimal scrolling (see contact.html).
- Minimal graphics. No illustrations, no stock photos, no "AI generated" art. The
  logo and the gold accent are the visual identity.
- Quality floor: responsive, visible keyboard focus states, honor
  `prefers-reduced-motion`, accessible contrast, semantic HTML.
- Spend boldness in ONE place (the signature gradient rule under the header).
  Keep everything else quiet and disciplined.

## Pages

- `index.html`  Home, led by the Security Baseline Assessment, CTA to Contact.
- `about.html`  Solo founder led practice, credentials (CISSP, CCNP Security,
  CMMC CCP, 19+ years), Atlanta based.
- `contact.html`  Two thumb friendly buttons: click to call (tel:+14049463659,
  displayed 404-946-3659) and click to email. The email is lightly obfuscated:
  it is assembled at runtime by a small inline script and never appears as a
  plain string in the markup. That script is not a tracker.
- `privacy.html` and `terms.html`  Legal placeholders with a marked block where
  the owner pastes final content. Linked from the footer.

## Build and deploy

Prerequisites: Node 22 (see `.nvmrc`), then `npm install` once.

```bash
npm install        # install Tailwind (one time)
npm run build      # production build: src/input.css -> css/styles.css (minified)
npm run watch      # rebuild on change while editing
npm run preview    # serve the site locally at http://localhost:8080
npm run dev        # build then preview
```

Always run `npm run build` after editing HTML class names or `src/input.css`, and
commit the regenerated `css/styles.css`.

Deployment is automatic. On push to `main`, the GitHub Actions workflow
(`.github/workflows/deploy.yml`) installs Node, runs the production Tailwind
build, and publishes the repository root to GitHub Pages. The custom domain is
configured by the `CNAME` file (`shepnetsecurity.com`); `www` redirects to the
apex. `.nojekyll` disables Jekyll processing.

DNS is hosted on Microsoft (Azure DNS) and is changed manually by the owner. Do
not automate DNS changes. Existing Microsoft 365 mail records must not be touched.
