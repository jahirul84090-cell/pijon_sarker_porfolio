import { useState } from "react";
import Icon from "./Icon.jsx";
import SectionHead from "./SectionHead.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { projects, workFilters } from "../data/site.js";

export default function Work() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead
          kicker="Portfolio"
          title="Selected work"
          sub="Examples of the projects I deliver. Full samples are available on request."
        />

        <div className="filters reveal" role="group" aria-label="Filter projects">
          {workFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter ${filter === f.id ? "is-active" : ""}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="work-grid reveal" aria-live="polite">
          {visible.map((p) => (
            <article className="work-card" key={p.title}>
              <div className={`work-thumb thumb-${p.category}`}>
                {p.image ? <img src={p.image} alt="" loading="lazy" /> : <Icon name={p.icon} />}
              </div>
              <div className="work-body">
                <p className="work-tag">{p.tag}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="work-meta">
                  {p.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {p.link && (
                  <ExternalLink className="work-link" href={p.link}>
                    View project <Icon name="arrow" />
                  </ExternalLink>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
