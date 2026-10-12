/**
 * Warns (without failing the build) when placeholder content is still in place,
 * so the site never goes live with a dummy Fiverr link or email by accident.
 */
import { readFile } from "node:fs/promises";
import { links, reviews, profile } from "../src/data/site.js";

const warnings = [];
if (/^https:\/\/www\.fiverr\.com\/?$/.test(links.fiverr)) warnings.push("links.fiverr is still the Fiverr homepage. Set your profile or gig URL.");
if (links.email === "hello@pijonsarker.com") warnings.push("links.email is a placeholder. Set your real email address.");
if (!links.formEndpoint) warnings.push("links.formEndpoint is empty. The contact form will open the visitor's email app instead of sending directly.");
if (reviews.length === 0) warnings.push("No reviews added yet. Paste real Fiverr reviews into `reviews`.");
if (!profile.photo) warnings.push("No profile photo set (profile.photo).");

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
if (html.includes("https://pijonsarker.com/")) warnings.push("index.html still uses https://pijonsarker.com. Replace it with your real domain (also robots.txt and sitemap.xml).");

if (warnings.length) {
  console.warn("\n\x1b[33m⚠ Content checklist: update src/data/site.js before going live:\x1b[0m");
  warnings.forEach((w) => console.warn(`  • ${w}`));
  console.warn("");
} else {
  console.log("✓ Content checklist complete");
}
