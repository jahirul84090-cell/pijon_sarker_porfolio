import { m } from "motion/react";
import Icon from "./Icon.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { Reveal, Stagger } from "./Motion.jsx";
import { fadeUp } from "../lib/motion.js";
import useSpotlight from "../hooks/useSpotlight.js";
import { links, reasons } from "../data/site.js";

export default function WhyMe() {
  const spotlight = useSpotlight();

  return (
    <section className="section section-alt" id="why">
      <div className="container why-grid">
        <Reveal className="why-intro">
          <p className="kicker">Why work with me</p>
          <h2>Quality you can rely on, communication you can count on</h2>
          <p className="section-sub">
            Every order gets the same care: clear requirements up front, careful work, and a delivery you can use right away.
          </p>
          <ExternalLink className="btn btn-primary btn-shine" href={links.fiverr} data-track="why-me">
            Start an order <Icon name="arrow" />
          </ExternalLink>
        </Reveal>
        <Stagger as="ul" className="why-list" gap={0.1}>
          {reasons.map((r) => (
            <m.li className="why-item spotlight" key={r.title} variants={fadeUp} onPointerMove={spotlight}>
              <span className="why-icon">
                <Icon name={r.icon} />
              </span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </m.li>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
