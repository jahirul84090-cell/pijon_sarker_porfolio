import Icon from "./Icon.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { links, nav, profile } from "../data/site.js";

export default function Footer() {
  const socials = [
    { name: "Fiverr", icon: "fiverr", href: links.fiverr },
    { name: "LinkedIn", icon: "linkedin", href: links.linkedin },
    { name: "Facebook", icon: "facebook", href: links.facebook },
    { name: "WhatsApp", icon: "whatsapp", href: links.whatsapp ? `https://wa.me/${links.whatsapp}` : "" },
  ].filter((s) => s.href);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
        <div>
          <h2>Ready to grow your pipeline?</h2>
          <p>Send your target criteria and get a free sample before you order.</p>
        </div>
        <div className="footer-cta-actions">
          <ExternalLink className="btn btn-primary btn-lg btn-shine" href={links.fiverr} data-track="footer-cta">
            Hire me on Fiverr <Icon name="arrow" />
          </ExternalLink>
          <a className="btn btn-ghost btn-lg" href="#contact">
            Get a free quote
          </a>
        </div>
        </div>
      </div>

      <div className="container footer-grid">
        <div>
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="brand-name">{profile.name}</span>
          </a>
          <p className="footer-tag">Lead generation, data entry, Facebook Ads &amp; web development for growing businesses worldwide.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer-links">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="socials" aria-label="Social profiles">
          {socials.map((s) => (
            <li key={s.name}>
              <ExternalLink href={s.href} aria-label={s.name} data-track="footer-social">
                <Icon name={s.icon} />
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="container footer-bottom">
        <p suppressHydrationWarning>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#top" className="to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
