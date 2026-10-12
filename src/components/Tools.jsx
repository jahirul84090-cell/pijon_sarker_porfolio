import { tools } from "../data/site.js";

export default function Tools() {
  return (
    <section className="tools" aria-labelledby="tools-title">
      <div className="container">
        <p className="tools-title" id="tools-title">
          Tools I work with
        </p>
        <ul className="tools-list">
          {tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
