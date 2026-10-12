import { useEffect } from "react";

/** Fades `.reveal` elements in as they scroll into view. */
export default function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal:not(.is-visible)");
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}
