import Nav from './Nav.jsx';
import { PROFILE } from '../data.js';

// Full-bleed hero on the bold background. The middle word ("engineer") is
// rendered as an outline in the simpler Space Grotesk face for contrast.
export default function Hero() {
  return (
    <section id="top" className="hero">
      <Nav />

      <div className="hero-body">
        <div className="eyebrow anim-up" style={{ animationDelay: '0.05s' }}>
          {PROFILE.available && (
            <>
              <span className="dot" />
              <span>Open for work —  full-time</span>
            </>
          )}
        </div>

        <h1>
          <span className="anim-up" style={{ animationDelay: '0.14s' }}>Fullstack</span>
          <span className="outline anim-up" style={{ animationDelay: '0.24s' }}>engineer</span>
          <span className="anim-up" style={{ animationDelay: '0.34s' }}>from London.</span>
        </h1>
      </div>

      <div className="hero-foot anim-up" style={{ animationDelay: '0.48s' }}>
        <div className="hero-foot-text">
          <p>{PROFILE.intro}</p>
          <div className="btn-row">
            <a className="btn btn--solid" href="#work">See the work &#8595;</a>
            <a className="btn btn--ghost" href="#contact">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
