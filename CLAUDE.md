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
- `privacy.html` and `terms.html`  Legal pages with finalized content. Linked
  from the footer.
- `security.html`  Responsible Disclosure policy. Linked from the footer. See the
  Disclosure section below.

## SEO

- Every page has a UNIQUE `<title>` and `<meta name="description">` (about 150 to
  160 characters). Keep them distinct; do not reuse copy across pages.
- Every page has exactly ONE `<h1>`. Do not add a second h1; use h2 for sections.
- Every page has a `<link rel="canonical">` pointing to its own apex https URL.
  The home page canonical is `https://shepnetsecurity.com/` with no trailing
  `index.html`. The disclosure page canonical is `https://shepnetsecurity.com/security`.
- Every page has Open Graph and Twitter Card tags (og:type, og:site_name,
  og:title, og:description, og:url, og:image, twitter:card=summary,
  twitter:title, twitter:description, twitter:image). Titles and descriptions in
  those tags mirror the page's own `<title>` and meta description. The shared
  share image is `https://shepnetsecurity.com/assets/og-image.png` (1200x630,
  brand logo on an Ice background, regenerate with the same on-brand approach if
  the logo changes; no marketing claims in the image).
- `index.html` only carries a JSON-LD `ProfessionalService` block. The address is
  city only (addressLocality Atlanta, addressRegion GA, addressCountry US) with
  NO street address. `areaServed` combines the United States (schema.org Country)
  with the Greater Atlanta metropolitan area and named metro cities. Do not add
  ratings, review counts, founding dates, or price to the JSON-LD.
- `sitemap.xml` lists every canonical URL. UPDATE it (and `robots.txt` if needed)
  whenever a page is added, removed, or its canonical URL changes.
- Service-area framing: Atlanta based, serving the metro area and remotely
  nationwide. Never imply a physical office in any city other than Atlanta, and
  never list a street address anywhere (pages, JSON-LD, or share image).

## Disclosure (responsible disclosure)

- `security.html` (Responsible Disclosure) and `/.well-known/security.txt`
  (RFC 9116) both exist and must stay consistent with each other.
- Keep commitments MODEST for a solo operator: acknowledge reports as soon as
  reasonably possible. Do NOT promise a specific response time. Do NOT offer any
  monetary reward or bug bounty. Scope is strictly the shepnetsecurity.com
  website and its public pages; client systems and third-party services are out
  of scope.
- The `security.txt` `Expires` field is a hard date and must be refreshed about
  annually (12 months out, ISO 8601). When you refresh it, keep `Policy` and
  `Canonical` pointing at the apex URLs.

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
build, and publishes the repository root to GitHub Pages. Because the whole repo
root is published, static files at their repo paths are served as is at the
domain root: `robots.txt`, `sitemap.xml`, `assets/og-image.png`, and
`.well-known/security.txt`. `.nojekyll` disables Jekyll processing, which is what
allows the `.well-known` folder to be served.

The custom domain (`shepnetsecurity.com`, with `www` redirecting to the apex) is
LIVE and is held by the `CNAME` file. Keep `CNAME` in the repo: an Actions Pages
deploy whose artifact lacks a `CNAME` file can unset the custom domain and break
the live site.

DNS is hosted on Microsoft (Azure DNS) and is changed manually by the owner. Do
not automate DNS changes. Existing Microsoft 365 mail records must not be touched.
