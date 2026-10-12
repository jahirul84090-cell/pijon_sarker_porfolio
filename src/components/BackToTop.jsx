import { useEffect, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import Icon from "./Icon.jsx";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <m.a
          href="#top"
          className="back-to-top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
        >
          <Icon name="arrow" className="rot-up" />
        </m.a>
      )}
    </AnimatePresence>
  );
}
