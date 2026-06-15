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
          <p className="work-note">
            // Products, tools and experiments — full-stack apps designed and
            shipped end to end.
          </p>
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

              <div className="work-thumb">
                {/* Replace /images/<id>.jpg with a real screenshot */}
                <img src={p.image} alt={`${p.name} preview`} />
              </div>

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
