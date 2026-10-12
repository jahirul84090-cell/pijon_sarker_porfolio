import { useEffect, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { gaEnabled, getConsent, setConsent } from "../lib/analytics.js";
import { ease } from "../lib/motion.js";

/** Only shown when Google Analytics is configured and the visitor hasn't chosen yet. */
export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!gaEnabled || getConsent()) return;
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const choose = (value) => {
    setConsent(value);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <m.div
          className="consent"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie preferences"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.45, ease }}
        >
          <p>I use privacy-friendly analytics cookies to understand which pages help visitors. No ads, no selling of data.</p>
          <div className="consent-actions">
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => choose("denied")}>
              Decline
            </button>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => choose("granted")}>
              Accept
            </button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
