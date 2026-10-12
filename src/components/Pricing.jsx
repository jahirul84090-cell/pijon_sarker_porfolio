import { m } from "motion/react";
import Icon from "./Icon.jsx";
import SectionHead from "./SectionHead.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { Stagger } from "./Motion.jsx";
import { fadeUp } from "../lib/motion.js";
import { links, packages } from "../data/site.js";

export default function Pricing() {
  return (
    <section className="section section-alt" id="pricing">
      <div className="container">
        <SectionHead
          kicker="Packages"
          title="Simple, transparent pricing"
          sub="Lead generation packages are below. Data entry, Facebook Ads and web projects are quoted based on scope."
        />
        <Stagger className="pricing-grid" gap={0.12}>
          {packages.map((p) => (
            <m.article
              className={`price-card ${p.featured ? "is-featured" : ""}`}
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {p.featured && <span className="ribbon">Most popular</span>}
              <h3>{p.name}</h3>
              <p className="price">
                <span className="from">from</span> ${p.price}
              </p>
              <p className="price-desc">{p.desc}</p>
              <ul className="ticks">
                {p.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" /> {f}
                  </li>
                ))}
              </ul>
              <ExternalLink
                className={`btn ${p.featured ? "btn-primary btn-shine" : "btn-ghost"} btn-block`}
                href={links.fiverr}
                data-track={`pricing-${p.name.toLowerCase()}`}
              >
                Choose {p.name}
              </ExternalLink>
            </m.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
