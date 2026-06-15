import Reveal from './Reveal.jsx';
import { FACTS, PROFILE } from '../data.js';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal className="section-label about-label">(01) — About</Reveal>

        <div className="about-grid">
          <Reveal>
            <h2>
              Bit about me...
            </h2>
            <div className="about-copy">
              <p>
                I'm a critical-thinking, user-centric software engineer,
                improving people's lives through intuitive design and smooth
                functionality. My goal is for the user to enjoy the experience
                as much as I enjoy creating it.
              </p>
              <p>
                I specialise in full-stack web applications. With 5+ years
                across design and engineering, I have a sharp eye for detail and
                the skills to ship cutting-edge experiences — asking the right
                questions at every step.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="portrait-wrap">
            <div className="portrait">
              {/* Replace /images/portrait.jpg with your photo (see /public/images) */}
              <img src={PROFILE.portrait} alt="Portrait of Ben King" />
            </div>
          </Reveal>
        </div>

        <Reveal className="facts">
          {FACTS.map((f) => (
            <div className="fact" key={f.label}>
              <div className="fact-label">{f.label}</div>
              <div className="fact-value">{f.value}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
