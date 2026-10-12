import { useCallback } from "react";

function currentTheme() {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

/**
 * Returns a toggle function. The active theme lives on <html data-theme>,
 * and CSS decides which icon to show, so pre-rendered HTML never mismatches.
 */
export default function useTheme() {
  return useCallback(() => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#0b1220" : "#ffffff");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  }, []);
}
