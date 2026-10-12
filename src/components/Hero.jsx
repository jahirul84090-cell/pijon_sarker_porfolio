import Icon from "./Icon.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { links, profile } from "../data/site.js";

const sampleRows = [
  ["J. Carter", "CEO", "j•••@acme.io"],
  ["M. Lopez", "Head of Sales", "m•••@nova.co"],
  ["A. Khan", "Founder", "a•••@brightly.com"],
  ["S. Meyer", "CMO", "s•••@orbit.de"],
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          {profile.available && (
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" /> Available for new projects
            </p>
          )}
          <h1>
            Verified leads, clean data &amp; websites that <span className="grad">grow your business</span>.
          </h1>
          <p className="lead">
            I'm {profile.name}, a freelance specialist in B2B &amp; B2C lead generation, data entry, Facebook Ads and web
            development. I help founders, agencies and sales teams reach the right people and turn them into customers.
          </p>
          <div className="hero-cta">
            <ExternalLink className="btn btn-primary btn-lg" href={links.fiverr}>
              <Icon name="fiverr" /> Hire me on Fiverr
            </ExternalLink>
            <a className="btn btn-ghost btn-lg" href="#work">
              View my work <Icon name="arrow" />
            </a>
          </div>
          <ul className="hero-points">
            {["Manually verified data", "Fast delivery", "Free revisions"].map((p) => (
              <li key={p}>
                <Icon name="check" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-card">
          <div className="profile">
            <div className="avatar">
              {profile.photo ? <img src={profile.photo} alt={profile.name} width="56" height="56" /> : <span aria-hidden="true">{profile.initials}</span>}
            </div>
            <div>
              <p className="profile-name">{profile.name}</p>
              <p className="profile-role">{profile.role}</p>
            </div>
          </div>

          <div className="sample-sheet" role="img" aria-label="Example of a verified lead list">
            <div className="sheet-row sheet-head">
              <span>Name</span>
              <span>Title</span>
              <span className="hide-xs">Email</span>
              <span>Status</span>
            </div>
            {sampleRows.map(([name, title, email]) => (
              <div className="sheet-row" key={name}>
                <span>{name}</span>
                <span>{title}</span>
                <span className="hide-xs">{email}</span>
                <span className="tag">Verified</span>
              </div>
            ))}
          </div>

          <div className="hero-badges">
            <span className="badge">
              <Icon name="shield" /> Accurate &amp; GDPR-aware
            </span>
            <span className="badge">
              <Icon name="clock" /> Quick turnaround
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
