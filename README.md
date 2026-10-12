# Pijon Sarker — Portfolio

Professional portfolio website for Fiverr clients: B2B & B2C lead generation, data entry, Facebook Ads, website design and web development.

Built with **React 19 + Vite** (plain JavaScript / JSX, no TypeScript) and hand-written CSS.

## Features

- Responsive layout for phones, tablets and desktops
- Dark / light mode (follows the visitor's system setting, with a toggle)
- Sections: hero, stats, services, tools, portfolio with filters, why me, process, pricing, reviews, FAQ and contact
- Contact form with validation and spam honeypot (Formspree, or opens the visitor's email app)
- SEO: meta description, Open Graph / Twitter preview image, JSON-LD structured data, `robots.txt`, `sitemap.xml`
- Accessibility: skip link, keyboard focus styles, ARIA labels and reduced-motion support
- Small production bundle (~80 kB gzipped JS)

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

### Before going live, check this list

1. Set your real **Fiverr URL** and **email** in `src/data/site.js`.
2. Replace the sample **projects**, **stats** and **prices** with your real ones.
3. Add your real Fiverr **reviews** (the section shows a "See reviews on Fiverr" button until you do).
4. Replace `https://pijonsarker.com` with your real domain in `index.html`, `public/robots.txt` and `public/sitemap.xml`.

## Deploying

The `dist/` folder is a static site, so it works on any host.

- **GitHub Pages:** go to the repo's *Settings → Pages* and set *Source* to **GitHub Actions**. Every push to `main` then builds and deploys automatically (`.github/workflows/deploy.yml`).
- **Netlify / Vercel:** import the repo. Build command `npm run build`, output directory `dist`.
- **cPanel / any web host:** run `npm run build` and upload the contents of `dist/`.
