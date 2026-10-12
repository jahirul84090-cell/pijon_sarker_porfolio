import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import ExternalLink from "./ExternalLink.jsx";
import useTheme from "../hooks/useTheme.js";
import { links, nav, profile } from "../data/site.js";

export default function Header() {
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const sections = nav.map((item) => document.querySelector(item.href)).filter(Boolean);
    if (!("IntersectionObserver" in window) || sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = `#${entry.target.id}`;
          if (entry.isIntersecting) setActive(id);
          else setActive((current) => (current === id ? "" : current));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} id="top">
      <nav className="nav container" aria-label="Primary">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <ul className={`nav-links ${open ? "is-open" : ""}`} id="nav-links">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={active === item.href ? "is-active" : undefined}
                aria-current={active === item.href ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav-mobile-cta">
            <ExternalLink className="btn btn-primary btn-block" href={links.fiverr}>
              Hire me on Fiverr
            </ExternalLink>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            className="icon-btn"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <ExternalLink className="btn btn-primary btn-sm hide-sm" href={links.fiverr}>
            Hire me
          </ExternalLink>
          <button
            className={`icon-btn nav-toggle ${open ? "is-open" : ""}`}
            type="button"
            aria-controls="nav-links"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="bars" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}
