import Icon from "./Icon.jsx";
import SectionHead from "./SectionHead.jsx";
import ExternalLink from "./ExternalLink.jsx";
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
        <div className="pricing-grid">
          {packages.map((p) => (
            <article className={`price-card reveal ${p.featured ? "is-featured" : ""}`} key={p.name}>
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
              <ExternalLink className={`btn ${p.featured ? "btn-primary" : "btn-ghost"} btn-block`} href={links.fiverr}>
                Choose {p.name}
              </ExternalLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
