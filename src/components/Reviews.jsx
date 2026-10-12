import { m } from "motion/react";
import Icon, { FiverrLogo } from "./Icon.jsx";
import SectionHead from "./SectionHead.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { Reveal, Stagger } from "./Motion.jsx";
import { fadeUp } from "../lib/motion.js";
import { links, reviews } from "../data/site.js";

function Stars({ rating = 5 }) {
  return (
    <div className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" className={i < rating ? "" : "is-off"} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <SectionHead kicker="Reviews" title="What clients say" />

        {reviews.length > 0 && (
          <Stagger className="reviews-grid" gap={0.1}>
            {reviews.map((r) => (
              <m.figure className="review-card" key={r.name + r.text.slice(0, 20)} variants={fadeUp}>
                <Stars rating={r.rating} />
                <blockquote>“{r.text}”</blockquote>
                <figcaption>
                  <span className="review-avatar" aria-hidden="true">
                    {r.name.slice(0, 1).toUpperCase()}
                  </span>
                  <span>
                    <strong>{r.name}</strong>
                    <small>{[r.country, r.service].filter(Boolean).join(" · ")}</small>
                  </span>
                </figcaption>
              </m.figure>
            ))}
          </Stagger>
        )}

        <Reveal className="reviews-cta">
          <Stars />
          <p>Read verified buyer reviews on my Fiverr profile.</p>
          <ExternalLink className="btn btn-primary btn-shine" href={links.fiverr} data-track="reviews">
            See reviews on <FiverrLogo />
          </ExternalLink>
        </Reveal>
      </div>
    </section>
  );
}
