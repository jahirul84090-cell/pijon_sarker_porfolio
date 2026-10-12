import SectionHead from "./SectionHead.jsx";
import { faqs } from "../data/site.js";

export default function Faq() {
  return (
    <section className="section section-alt" id="faq">
      <div className="container faq-wrap">
        <SectionHead kicker="FAQ" title="Frequently asked questions" />
        <div className="faq-list">
          {faqs.map((f) => (
            <details className="faq-item reveal" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
