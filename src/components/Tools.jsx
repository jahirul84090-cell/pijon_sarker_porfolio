import { tools } from "../data/site.js";

export default function Tools() {
  // The list is rendered twice so the CSS marquee can loop seamlessly.
  return (
    <section className="tools" aria-labelledby="tools-title">
      <p className="tools-title" id="tools-title">
        Tools I work with
      </p>
      <div className="marquee">
        <ul className="marquee-track">
          {tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <ul className="marquee-track" aria-hidden="true">
          {tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
