import { useEffect, useRef } from "react";
import { AnimatePresence, m } from "motion/react";
import { ease } from "../lib/motion.js";

/** Full-screen image viewer. Closes on Escape, backdrop click or the close button. */
export default function Lightbox({ item, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!item) return;
    const previous = document.activeElement;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <m.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button ref={closeRef} type="button" className="lightbox-close" aria-label="Close image" onClick={onClose}>
            ×
          </button>
          <m.figure
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease }}
          >
            <img src={item.image} alt={item.imageAlt || item.title} width="1200" height="750" />
            <figcaption>{item.title}</figcaption>
          </m.figure>
        </m.div>
      )}
    </AnimatePresence>
  );
}
