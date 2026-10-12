import { useCallback, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import Icon from "./Icon.jsx";
import SectionHead from "./SectionHead.jsx";
import ExternalLink from "./ExternalLink.jsx";
import Lightbox from "./Lightbox.jsx";
import { Reveal } from "./Motion.jsx";
import { ease } from "../lib/motion.js";
import { projects, workFilters } from "../data/site.js";

export default function Work() {
  const [filter, setFilter] = useState("all");
  const [zoomed, setZoomed] = useState(null);
  const closeZoom = useCallback(() => setZoomed(null), []);
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead
          kicker="Portfolio"
          title="Selected work"
          sub="Examples of the projects I deliver. Full samples are available on request."
        />

        <Reveal className="filters" role="group" aria-label="Filter projects">
          {workFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter ${filter === f.id ? "is-active" : ""}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {filter === f.id && <m.span className="filter-pill" layoutId="filter-pill" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
              <span className="filter-label">{f.label}</span>
            </button>
          ))}
        </Reveal>

        <Reveal>
          <m.div className="work-grid" layout>
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((p) => (
                <m.article
                  layout
                  className="work-card"
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.94, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <div className={`work-thumb thumb-${p.category}`}>
                    {p.image ? (
                      <button type="button" className="work-zoom" onClick={() => setZoomed(p)} aria-label={`View larger image: ${p.title}`}>
                        <img src={p.image} alt={p.imageAlt || ""} loading="lazy" decoding="async" width="1200" height="750" />
                      </button>
                    ) : (
                      <Icon name={p.icon} />
                    )}
                    <span className="work-badge">{p.tag}</span>
                  </div>
                  <div className="work-body">
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
                </m.article>
              ))}
            </AnimatePresence>
          </m.div>
        </Reveal>
      </div>
      <Lightbox item={zoomed} onClose={closeZoom} />
    </section>
  );
}
