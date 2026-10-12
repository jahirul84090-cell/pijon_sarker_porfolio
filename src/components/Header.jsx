import { useEffect, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import Icon from "./Icon.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { ease } from "../lib/motion.js";
import useTheme from "../hooks/useTheme.js";
import { links, nav, profile } from "../data/site.js";

export default function Header() {
  const toggleTheme = useTheme();
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

        <ul className="nav-links nav-desktop">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={active === item.href ? "is-active" : undefined} aria-current={active === item.href ? "true" : undefined}>
                {active === item.href && <m.span className="nav-pill" layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="nav-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="icon-btn theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle dark mode">
            <Icon name="sun" className="icon-sun" />
            <Icon name="moon" className="icon-moon" />
          </button>
          <ExternalLink className="btn btn-primary btn-sm btn-shine hide-sm" href={links.fiverr} data-track="header">
            Hire me
          </ExternalLink>
          <button
            className={`icon-btn nav-toggle ${open ? "is-open" : ""}`}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="bars" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease }}
          >
            <m.ul
              className="container"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } } }}
            >
              {nav.map((item) => (
                <m.li key={item.href} variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>
                  <a href={item.href} className={active === item.href ? "is-active" : undefined} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </m.li>
              ))}
              <m.li variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
                <ExternalLink className="btn btn-primary btn-block" href={links.fiverr} data-track="mobile-menu">
                  Hire me on Fiverr
                </ExternalLink>
              </m.li>
            </m.ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
