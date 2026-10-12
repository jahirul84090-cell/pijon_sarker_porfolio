import Icon from "./Icon.jsx";
import SectionHead from "./SectionHead.jsx";
import ExternalLink from "./ExternalLink.jsx";
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
          <div className="reviews-grid">
            {reviews.map((r) => (
              <figure className="review-card reveal" key={r.name + r.text.slice(0, 20)}>
                <Stars rating={r.rating} />
                <blockquote>“{r.text}”</blockquote>
                <figcaption>
                  <strong>{r.name}</strong>
                  <span>{[r.country, r.service].filter(Boolean).join(" · ")}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="reviews-cta reveal">
          <Stars />
          <p>Read verified buyer reviews on my Fiverr profile.</p>
          <ExternalLink className="btn btn-primary" href={links.fiverr}>
            <Icon name="fiverr" /> See reviews on Fiverr
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
