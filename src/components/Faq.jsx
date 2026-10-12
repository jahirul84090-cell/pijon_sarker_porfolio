import { useId, useState } from "react";
import { m } from "motion/react";
import SectionHead from "./SectionHead.jsx";
import { Stagger } from "./Motion.jsx";
import { fadeUp, ease } from "../lib/motion.js";
import { faqs } from "../data/site.js";

function FaqItem({ q, a, open, onToggle }) {
  const id = useId();
  return (
    <m.div className={`faq-item ${open ? "is-open" : ""}`} variants={fadeUp}>
      <h3 className="faq-q">
        <button type="button" aria-expanded={open} aria-controls={`${id}-panel`} id={`${id}-btn`} onClick={onToggle}>
          {q}
          <span className="faq-icon" aria-hidden="true" />
        </button>
      </h3>
      {/* Answers stay in the HTML (good for SEO); closed panels are collapsed and inert. */}
      <m.div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className="faq-panel"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease }}
        inert={!open}
      >
        <p>{a}</p>
      </m.div>
    </m.div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section section-alt" id="faq">
      <div className="container faq-wrap">
        <SectionHead kicker="FAQ" title="Frequently asked questions" />
        <Stagger className="faq-list" gap={0.06}>
          {faqs.map((f, i) => (
            <FaqItem key={f.q} {...f} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
