import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { PROFILE } from '../data.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Enter your name';
    if (!form.email.trim()) next.email = 'Enter your email';
    else if (!EMAIL_RE.test(form.email.trim())) next.email = 'That email looks off';
    if (!form.message.trim()) next.message = 'Add a short message';
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // TODO: wire this up to your email service / API endpoint.
      setSent(true);
    }
  };

  const reset = () => {
    setForm({ name: '', email: '', message: '' });
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
          <p className="lead">
            Got a project, a role, or just want to chat about the web? Send a
            message — I'll get back to you fast.
          </p>
          <div className="contact-links">
            <a href={`mailto:${PROFILE.email}`}>
              <span className="muted">EMAIL</span> {PROFILE.email}
            </a>
            <a href={PROFILE.linkedin.url} target="_blank" rel="noopener noreferrer">
              <span className="muted">LINKEDIN</span> {PROFILE.linkedin.label} &#8599;
            </a>
            <a href={PROFILE.github.url} target="_blank" rel="noopener noreferrer">
              <span className="muted">GITHUB</span> {PROFILE.github.label} &#8599;
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="sent">
              <h3>Message sent &#10003;</h3>
              <p>Thanks for reaching out — I'll be in touch soon.</p>
              <button type="button" onClick={reset}>Send another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="field-row">
                <label className="field">
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={update('name')}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </label>
                <label className="field">
                  <span>Email</span>
                  <input
                    type="text"
                    placeholder="jane@email.com"
                    value={form.email}
                    onChange={update('email')}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </label>
              </div>
              <label className="field">
                <span>Message</span>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project…"
                  value={form.message}
                  onChange={update('message')}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </label>
              <button className="submit" type="submit">Send message &#8594;</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
