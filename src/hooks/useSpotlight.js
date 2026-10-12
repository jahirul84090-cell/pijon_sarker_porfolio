import { useCallback } from "react";

/** Returns a pointermove handler that sets --mx / --my so CSS can draw a glow under the cursor. */
export default function useSpotlight() {
  return useCallback((e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);
}
