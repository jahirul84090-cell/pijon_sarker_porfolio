import Icon from "./Icon.jsx";
import SectionHead from "./SectionHead.jsx";
import { services } from "../data/site.js";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead
          kicker="Services"
          title="Everything you need to find customers and win them"
          sub="From targeted prospect lists to ads and your website, one reliable freelancer handles it end to end."
        />

        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card reveal" key={s.title}>
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
            </article>
          ))}

          <article className="service-card service-cta reveal">
            <h3>Need something custom?</h3>
            <p>Tell me about your project and I'll send a tailored plan and quote within 24 hours.</p>
            <a className="btn btn-primary" href="#contact">
              Get a free quote <Icon name="arrow" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
