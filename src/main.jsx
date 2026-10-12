import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import { initAnalytics } from "./lib/analytics.js";
import "./styles/global.css";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The production build pre-renders the page to HTML (see scripts/prerender.js),
// so we hydrate it; in development the root is empty and we render normally.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);

initAnalytics();
