import { m } from "motion/react";
import Icon from "./Icon.jsx";
import SectionHead from "./SectionHead.jsx";
import { Stagger } from "./Motion.jsx";
import { fadeUp } from "../lib/motion.js";
import useSpotlight from "../hooks/useSpotlight.js";
import { services } from "../data/site.js";

export default function Services() {
  const spotlight = useSpotlight();

  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead
          kicker="Services"
          title="Everything you need to find customers and win them"
          sub="From targeted prospect lists to ads and your website, one reliable freelancer handles it end to end."
        />

        <Stagger className="services-grid" gap={0.07}>
          {services.map((s) => (
            <m.article className="service-card spotlight" key={s.title} variants={fadeUp} onPointerMove={spotlight}>
              <div className="service-icon">
                <Icon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="ticks">
                {s.points.map((p) => (
                  <li key={p}>
                    <Icon name="check" /> {p}
                  </li>
                ))}
              </ul>
            </m.article>
          ))}

          <m.article className="service-card service-cta" variants={fadeUp}>
            <span className="cta-glow" aria-hidden="true" />
            <h3>Need something custom?</h3>
            <p>Tell me about your project and I'll send a tailored plan and quote within 24 hours.</p>
            <a className="btn btn-light" href="#contact">
              Get a free quote <Icon name="arrow" />
            </a>
          </m.article>
        </Stagger>
      </div>
    </section>
  );
}
