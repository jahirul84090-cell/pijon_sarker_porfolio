/**
 * Pre-renders the React app into dist/index.html so search engines and
 * social previews get the full page content without running JavaScript.
 * Runs after `vite build` and `vite build --ssr` (see package.json).
 */
import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const { faqs } = await import(pathToFileURL(path.join(root, "src/data/site.js")).href);
const appHtml = render();

// FAQ rich results for Google, generated from the same data the page shows
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const faqScript = `<script type="application/ld+json">${JSON.stringify(faqJsonLd).replace(/</g, "\\u003c")}</script>`;

const templatePath = path.join(dist, "index.html");
const template = await readFile(templatePath, "utf8");
if (!template.includes('<div id="root"></div>')) throw new Error("Could not find the root element in dist/index.html");

const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`).replace("</head>", `  ${faqScript}\n</head>`);
await writeFile(templatePath, html);
await rm(ssrDir, { recursive: true, force: true });

console.log(`Pre-rendered dist/index.html (${(appHtml.length / 1024).toFixed(1)} kB of HTML)`);
