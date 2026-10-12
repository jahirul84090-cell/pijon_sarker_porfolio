/**
 * Lightweight analytics wrapper.
 * Supports Plausible (cookie-free, no consent banner needed) and/or
 * Google Analytics 4 (uses Consent Mode: no cookies until the visitor accepts).
 * Configure IDs in src/data/site.js → analytics.
 */
import { analytics } from "../data/site.js";

const CONSENT_KEY = "analytics-consent";
let started = false;

export const gaEnabled = Boolean(analytics.gaMeasurementId);

function loadScript(src, attrs = {}) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.appendChild(s);
}

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY); // "granted" | "denied" | null
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* ignore */
  }
  window.gtag?.("consent", "update", { analytics_storage: value });
}

export function track(name, props = {}) {
  if (typeof window === "undefined") return;
  window.plausible?.(name, { props });
  window.gtag?.("event", name, props);
}

function linkEvent(href) {
  if (/fiverr\.com/i.test(href)) return "fiverr_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (/wa\.me|whatsapp/i.test(href)) return "whatsapp_click";
  if (/linkedin\.com/i.test(href)) return "linkedin_click";
  return null;
}

export function initAnalytics() {
  if (started || typeof window === "undefined") return;
  started = true;

  if (analytics.plausibleDomain) {
    window.plausible =
      window.plausible ||
      function (...args) {
        (window.plausible.q = window.plausible.q || []).push(args);
      };
    loadScript(analytics.plausibleSrc || "https://plausible.io/js/script.js", { "data-domain": analytics.plausibleDomain });
  }

  if (gaEnabled) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      // gtag requires the real `arguments` object
      window.dataLayer.push(arguments);
    };
    window.gtag("consent", "default", {
      analytics_storage: getConsent() === "granted" ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("config", analytics.gaMeasurementId, { anonymize_ip: true });
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analytics.gaMeasurementId)}`);
  }

  // One listener tracks every outbound contact link (Fiverr, email, WhatsApp, LinkedIn)
  document.addEventListener(
    "click",
    (e) => {
      const a = e.target.closest?.("a[href]");
      if (!a) return;
      const event = linkEvent(a.getAttribute("href"));
      if (event) track(event, { location: a.dataset.track || "other" });
    },
    { capture: true }
  );
}
