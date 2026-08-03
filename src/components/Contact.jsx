import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { PROFILE } from "../data.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const encodeForm = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name";
    if (!form.email.trim()) next.email = "Enter your email";
    else if (!EMAIL_RE.test(form.email.trim()))
      next.email = "That email looks off";
    if (!form.message.trim()) next.message = "Add a short message";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    setSubmitError(false);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeForm({ "form-name": "contact", ...form }),
    })
      .then(() => setSent(true))
      .catch(() => setSubmitError(true))
      .finally(() => setSubmitting(false));
  };

  const reset = () => {
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setSent(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-grid">
        <Reveal>
          <div className="section-label contact-label">(03) — Contact</div>
          <h2>
            Let's
            <br />
            talk.
          </h2>
          <p className="lead">Have a project or role? Send a message.</p>
          <div className="contact-links">
            <a href={`mailto:${PROFILE.email}`}>
              <span className="muted">EMAIL</span> {PROFILE.email}
            </a>
            <a
              href={PROFILE.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="muted">LINKEDIN</span>
            </a>
            <a
              href={PROFILE.github.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="muted">GITHUB</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="sent">
              <h3>Message sent &#10003;</h3>
              <p>Thanks for reaching out — I'll be in touch soon.</p>
              <button type="button" onClick={reset}>
                Send another
              </button>
            </div>
          ) : (
            <form
              className="contact-form"
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
            >
              <input type="hidden" name="form-name" value="contact" />
              <label className="field-hidden" hidden>
                <span>Don't fill this out</span>
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>

              <div className="field-row">
                <label className="field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={update("name")}
                  />
                  {errors.name && (
                    <span className="field-error">{errors.name}</span>
                  )}
                </label>
                <label className="field">
                  <span>Email</span>
                  <input
                    type="text"
                    name="email"
                    placeholder="jane@email.com"
                    value={form.email}
                    onChange={update("email")}
                  />
                  {errors.email && (
                    <span className="field-error">{errors.email}</span>
                  )}
                </label>
              </div>
              <label className="field">
                <span>Message</span>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell me about your project…"
                  value={form.message}
                  onChange={update("message")}
                />
                {errors.message && (
                  <span className="field-error">{errors.message}</span>
                )}
              </label>
              {submitError && (
                <span className="field-error">
                  Something went wrong sending that — try again, or email me
                  directly.
                </span>
              )}
              <button className="submit" type="submit" disabled={submitting}>
                {submitting ? "Sending…" : "Send message →"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
