import Reveal from './Reveal.jsx';
import { PROJECTS } from '../data.js';

// Full-width editorial work index. Each row fills with the bold colour on
// hover (CSS :hover on .work-row), scaling the thumbnail and rotating the
// arrow.
export default function Work() {
  return (
    <section id="work" className="work">
      <div className="container">
        <Reveal className="work-head">
          <div>
            <div className="section-label">(02) — Selected work</div>
            <h2>Things I built</h2>
          </div>
        </Reveal>
      </div>

      <Reveal className="work-list">
        {PROJECTS.map((p) => (
          <div className="work-row" key={p.id}>
            <div className="work-row-inner">
              <span className="work-no">{p.no}</span>

              <div className="work-main">
                <h3>{p.name}</h3>
                <p className="work-desc">{p.desc}</p>
                <div className="work-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <a
                className="work-thumb"
                href={p.web}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.name}`}
              >
                <img src={p.image} alt={`${p.name} preview`} />
              </a>

              {p.github && (
                <a
                  className="work-github"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} source code on GitHub`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              )}

              <a
                className="work-arrow"
                href={p.web}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.name}`}
              >
                &#8594;
              </a>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
