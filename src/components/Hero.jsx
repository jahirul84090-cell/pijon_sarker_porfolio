import { useEffect, useState } from "react";
import { AnimatePresence, m, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import Icon, { FiverrLogo } from "./Icon.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { ease } from "../lib/motion.js";
import { heroRotating, links, profile } from "../data/site.js";

const sampleRows = [
  ["J. Carter", "CEO", "j•••@acme.io"],
  ["M. Lopez", "Head of Sales", "m•••@nova.co"],
  ["A. Khan", "Founder", "a•••@brightly.com"],
  ["S. Meyer", "CMO", "s•••@orbit.de"],
];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % heroRotating.length), 2600);
    return () => clearInterval(id);
  }, [reduced]);

  const longest = heroRotating.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className="rotator">
      {/* Invisible sizer keeps the width stable while words swap */}
      <span className="rotator-sizer" aria-hidden="true">
        {longest}
      </span>
      <AnimatePresence initial={false}>
        <m.span
          key={heroRotating[index]}
          className="rotator-word"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          {heroRotating[index]}
        </m.span>
      </AnimatePresence>
    </span>
  );
}

/** Lead sheet that "verifies" its rows one by one, then repeats. */
function LeadSheet() {
  const [verified, setVerified] = useState(sampleRows.length);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let timer;
    const step = (n) => {
      setVerified(n);
      const delay = n === 0 ? 700 : n < sampleRows.length ? 900 : 4200;
      timer = setTimeout(() => step(n < sampleRows.length ? n + 1 : 0), delay);
    };
    timer = setTimeout(() => step(0), 1600);
    return () => clearTimeout(timer);
  }, [reduced]);

  return (
    <div className="sample-sheet" role="img" aria-label="Example of a verified lead list">
      <div className="sheet-row sheet-head">
        <span>Name</span>
        <span>Title</span>
        <span className="hide-xs">Email</span>
        <span>Status</span>
      </div>
      {sampleRows.map(([name, title, email], i) => {
        const done = i < verified;
        return (
          <div className={`sheet-row ${done ? "is-done" : ""}`} key={name}>
            <span>{name}</span>
            <span>{title}</span>
            <span className="hide-xs">{email}</span>
            <AnimatePresence mode="wait" initial={false}>
              <m.span
                key={done ? "ok" : "wait"}
                className={`tag ${done ? "" : "is-pending"}`}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.25 }}
              >
                {done ? (
                  <>
                    <Icon name="check" /> Verified
                  </>
                ) : (
                  <>
                    <span className="spinner" aria-hidden="true" /> Checking
                  </>
                )}
              </m.span>
            </AnimatePresence>
          </div>
        );
      })}
      <div className="sheet-progress" aria-hidden="true">
        <m.span animate={{ scaleX: verified / sampleRows.length }} transition={{ duration: 0.5, ease }} />
      </div>
    </div>
  );
}

function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 18 });

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // Entrance animations here are CSS (see .intro in global.css) so they run before JavaScript loads.
    <div className="hero-visual intro intro-visual" onPointerMove={onMove} onPointerLeave={onLeave}>
      <m.div className="hero-card" style={{ rotateX, rotateY, transformPerspective: 1100 }}>
        {children}
      </m.div>

      <div className="float-chip chip-a">
        <span className="chip-icon">
          <Icon name="mail" />
        </span>
        <span>
          <strong>Bounce-checked</strong>
          <small>Email verification</small>
        </span>
      </div>
      <div className="float-chip chip-b">
        <span className="chip-icon is-blue">
          <Icon name="table" />
        </span>
        <span>
          <strong>CSV · XLSX · Sheets</strong>
          <small>CRM-ready delivery</small>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          {profile.available && (
            <p className="eyebrow intro" style={{ "--i": 0 }}>
              <span className="dot" aria-hidden="true" /> Available for new projects
            </p>
          )}
          <h1 className="intro" style={{ "--i": 1 }}>
            Verified leads, clean data &amp; websites that <span className="grad">grow your business</span>.
          </h1>
          <p className="rotator-line intro" style={{ "--i": 2 }}>
            <span className="rotator-label">I can help with</span> <RotatingWord />
          </p>
          <p className="lead intro" style={{ "--i": 3 }}>
            I'm {profile.name}, a freelance specialist in B2B &amp; B2C lead generation, data entry, Facebook Ads and web
            development. I help founders, agencies and sales teams reach the right people and turn them into customers.
          </p>
          <div className="hero-cta intro" style={{ "--i": 4 }}>
            <ExternalLink className="btn btn-primary btn-lg btn-shine" href={links.fiverr} data-track="hero">
              Hire me on <FiverrLogo />
            </ExternalLink>
            <a className="btn btn-ghost btn-lg" href="#work">
              View my work <Icon name="arrow" />
            </a>
          </div>
          <ul className="hero-points intro" style={{ "--i": 5 }}>
            {["Manually verified data", "Fast delivery", "Free revisions"].map((p) => (
              <li key={p}>
                <Icon name="check" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <TiltCard>
          <div className="profile">
            <div className="avatar">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} width="56" height="56" />
              ) : (
                <span aria-hidden="true">{profile.initials}</span>
              )}
              <span className="avatar-status" aria-hidden="true" />
            </div>
            <div>
              <p className="profile-name">{profile.name}</p>
              <p className="profile-role">{profile.role}</p>
            </div>
          </div>
          <LeadSheet />
          <div className="hero-badges">
            <span className="badge">
              <Icon name="shield" /> Accurate &amp; GDPR-aware
            </span>
            <span className="badge">
              <Icon name="clock" /> Quick turnaround
            </span>
          </div>
        </TiltCard>
      </div>

      <a className="scroll-cue" href="#services" aria-label="Scroll to services">
        <span />
      </a>
    </section>
  );
}
