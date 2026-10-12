import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import Icon from "./Icon.jsx";
import ExternalLink from "./ExternalLink.jsx";
import { Reveal } from "./Motion.jsx";
import { track } from "../lib/analytics.js";
import { contactServices, links } from "../data/site.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const initialForm = { name: "", email: "", service: contactServices[0], message: "", _gotcha: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!emailPattern.test(form.email.trim())) errors.email = "Please enter a valid email address.";
  if (form.message.trim().length < 10) errors.message = "Please add a few details about your project.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((errs) => ({ ...errs, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form._gotcha) return; // bot filled the hidden field

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(`cf-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    if (!links.formEndpoint) {
      const subject = encodeURIComponent(`${form.service} enquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}`);
      track("contact_submit", { method: "email_app", service: form.service });
      window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
      setStatus({ state: "success", message: "Your email app should open with the message ready to send." });
      return;
    }

    setStatus({ state: "sending", message: "Sending…" });
    try {
      const res = await fetch(links.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      track("contact_submit", { method: "form", service: form.service });
      setForm(initialForm);
      setStatus({ state: "success", message: "Thanks! Your message was sent. I'll reply within 24 hours." });
    } catch {
      setStatus({ state: "error", message: `Sorry, something went wrong. Please email me at ${links.email}.` });
    }
  };

  const whatsappUrl = links.whatsapp ? `https://wa.me/${links.whatsapp}` : "";

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <Reveal className="contact-info">
          <p className="kicker">Contact</p>
          <h2>Let's work together</h2>
          <p className="section-sub">Tell me about your project and I'll reply within 24 hours with a plan and a quote.</p>

          <ul className="contact-list">
            <li>
              <ExternalLink href={links.fiverr} data-track="contact">
                <span className="contact-icon">
                  <Icon name="fiverr" />
                </span>
                <span>
                  <strong>Fiverr</strong>
                  <small>Order or message me</small>
                </span>
              </ExternalLink>
            </li>
            <li>
              <a href={`mailto:${links.email}`}>
                <span className="contact-icon">
                  <Icon name="mail" />
                </span>
                <span>
                  <strong>Email</strong>
                  <small>{links.email}</small>
                </span>
              </a>
            </li>
            {whatsappUrl && (
              <li>
                <ExternalLink href={whatsappUrl}>
                  <span className="contact-icon">
                    <Icon name="whatsapp" />
                  </span>
                  <span>
                    <strong>WhatsApp</strong>
                    <small>Quick chat</small>
                  </span>
                </ExternalLink>
              </li>
            )}
          </ul>
        </Reveal>

        <Reveal as="form" className="contact-form" onSubmit={onSubmit} noValidate delay={0.15}>
          <div className="field-row">
            <Field id="cf-name" label="Your name" error={errors.name}>
              <input id="cf-name" name="name" type="text" autoComplete="name" value={form.name} onChange={update} aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined} required />
            </Field>
            <Field id="cf-email" label="Email" error={errors.email}>
              <input id="cf-email" name="email" type="email" autoComplete="email" value={form.email} onChange={update} aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined} required />
            </Field>
          </div>
          <Field id="cf-service" label="Service">
            <select id="cf-service" name="service" value={form.service} onChange={update}>
              {contactServices.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>
          <Field id="cf-message" label="Project details" error={errors.message}>
            <textarea id="cf-message" name="message" rows="5" placeholder="Target audience, quantity, deadline, budget…" value={form.message} onChange={update} aria-invalid={!!errors.message} aria-describedby={errors.message ? "cf-message-err" : undefined} required />
          </Field>

          <input className="hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form._gotcha} onChange={update} />

          <button className="btn btn-primary btn-lg btn-block btn-shine" type="submit" disabled={status.state === "sending"}>
            {status.state === "sending" ? "Sending…" : "Send message"} <Icon name="arrow" />
          </button>
          <p className={`form-status is-${status.state}`} role="status" aria-live="polite">
            <AnimatePresence mode="wait">
              {status.message && (
                <m.span key={status.message} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  {status.message}
                </m.span>
              )}
            </AnimatePresence>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div className={`field ${error ? "has-error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      <AnimatePresence>
        {error && (
          <m.p
            className="field-error"
            id={`${id}-err`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {error}
          </m.p>
        )}
      </AnimatePresence>
    </div>
  );
}
