import { m } from "motion/react";
import SectionHead from "./SectionHead.jsx";
import { Stagger } from "./Motion.jsx";
import { fadeUp, ease } from "../lib/motion.js";
import { steps } from "../data/site.js";

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHead kicker="How it works" title="A simple 4-step process" sub="Clear from the first message to the final delivery." />
        <div className="process-wrap">
          <m.span
            className="process-line"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 1.4, ease, delay: 0.2 }}
          />
          <Stagger as="ol" className="process-grid" gap={0.18}>
            {steps.map((s, i) => (
              <m.li className="process-step" key={s.title} variants={fadeUp}>
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </m.li>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
