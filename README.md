# Pijon Sarker — Portfolio

Professional portfolio website for Fiverr clients: B2B & B2C lead generation, data entry, Facebook Ads, website design and web development.

Built with **React 19 + Vite** (plain JavaScript / JSX, no TypeScript), **Motion** for animation, and hand-written CSS.

## Features

- **Animation:** page-load entrance (pure CSS, so it plays before JavaScript loads), rotating service text, a lead sheet that "verifies" rows live, a 3D tilt card, drifting background glow, scroll-triggered reveals, a scrolling tools marquee, animated portfolio filter, a process line that draws itself, an animated border on the featured price, a smooth FAQ accordion, a scroll progress bar and a back-to-top button. Everything respects the visitor's "reduce motion" setting.
- **Design:** dark / light mode (follows the system setting, with a toggle), cursor spotlight on cards, responsive from phones to wide screens.
- **Portfolio images** in `public/work/` with a click-to-enlarge viewer.
- **Pre-rendered HTML:** `npm run build` renders the full page to static HTML, so Google and social previews see all content without running JavaScript. The app then hydrates in the browser.
- **SEO:** meta tags, Open Graph / Twitter preview image, JSON-LD (business + FAQ rich results), `robots.txt`, `sitemap.xml`.
- **Visitor analytics** (optional): Plausible and/or Google Analytics 4, with click tracking on every Fiverr, email, WhatsApp and LinkedIn link and on contact form submits. A cookie consent banner appears automatically when GA4 is enabled.
- **Contact form** with validation and a spam honeypot (Formspree, or opens the visitor's email app).
- **Accessibility:** skip link, keyboard focus styles, ARIA labels, focus handling in the image viewer, works without JavaScript.
- **Content checklist:** every build warns you about placeholder content still left in place.

## Getting started

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # preview the production build
npm run lint      # check code with ESLint
```

## Editing your content

Almost everything is in **`src/data/site.js`**:

| What | Where in `site.js` |
| --- | --- |
| Fiverr link, email, WhatsApp, LinkedIn, Facebook | `links` |
| Contact form backend | `links.formEndpoint` (create a free form at [formspree.io](https://formspree.io)) |
| Your photo | Put `profile.jpg` in `public/` and set `profile.photo: "./profile.jpg"` |
| Stats numbers | `stats` |
| Services | `services` |
| Portfolio projects | `projects` (optional `image` and `link`) |
| Prices / packages | `packages` |
| Client reviews | `reviews`. Add **real** reviews copied from your Fiverr profile |
| FAQ | `faqs` |
| Rotating hero text | `heroRotating` |
| Visitor analytics | `analytics` (see below) |

### Before going live, check this list

1. Set your real **Fiverr URL** and **email** in `src/data/site.js`.
2. Replace the sample **projects**, **stats** and **prices** with your real ones.
3. Add your real Fiverr **reviews** (the section shows a "See reviews on Fiverr" button until you do).
4. Replace `https://pijonsarker.com` with your real domain in `index.html`, `public/robots.txt` and `public/sitemap.xml`.
5. Replace the illustrative mockups in `public/work/` with real screenshots of your work (blur client names and emails). Keep the same file names, or update `image` in `projects`. 1200×750 WebP or JPG works best.

`npm run build` prints a checklist of anything still left as a placeholder.

### Visitor analytics

Pick one or both in `src/data/site.js` → `analytics`:

- **Plausible** (recommended: no cookies, no consent banner): create a site at [plausible.io](https://plausible.io) and set `plausibleDomain: "yourdomain.com"`.
- **Google Analytics 4** (free): create a GA4 property and set `gaMeasurementId: "G-XXXXXXXXXX"`. A consent banner appears automatically and no analytics cookies are set until the visitor accepts.

Tracked events: `fiverr_click` (with the button's location, e.g. `hero`, `pricing-standard`), `email_click`, `whatsapp_click`, `linkedin_click` and `contact_submit`.

## Deploying

The `dist/` folder is a static site, so it works on any host.

- **GitHub Pages:** go to the repo's *Settings → Pages* and set *Source* to **GitHub Actions**. Every push to `main` then builds and deploys automatically (`.github/workflows/deploy.yml`).
- **Netlify / Vercel:** import the repo. Build command `npm run build`, output directory `dist`.
- **cPanel / any web host:** run `npm run build` and upload the contents of `dist/`.
