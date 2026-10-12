import Icon from "./Icon.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { links, reasons } from "../data/site.js";

export default function WhyMe() {
  return (
    <section className="section section-alt" id="why">
      <div className="container why-grid">
        <div className="why-intro reveal">
          <p className="kicker">Why work with me</p>
          <h2>Quality you can rely on, communication you can count on</h2>
          <p className="section-sub">
            Every order gets the same care: clear requirements up front, careful work, and a delivery you can use right away.
          </p>
          <ExternalLink className="btn btn-primary" href={links.fiverr}>
            Start an order <Icon name="arrow" />
          </ExternalLink>
        </div>
        <ul className="why-list">
          {reasons.map((r) => (
            <li className="why-item reveal" key={r.title}>
              <span className="why-icon">
                <Icon name={r.icon} />
              </span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
