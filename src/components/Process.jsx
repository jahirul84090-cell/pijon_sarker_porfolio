import SectionHead from "./SectionHead.jsx";
import { steps } from "../data/site.js";

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHead kicker="How it works" title="A simple 4-step process" />
        <ol className="process-grid">
          {steps.map((s, i) => (
            <li className="process-step reveal" key={s.title}>
              <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
