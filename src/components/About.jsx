import Reveal from "./Reveal.jsx";
import { FACTS, PROFILE, CURRENT_ROLE } from "../data.js";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal className="section-label about-label">(01) — About</Reveal>

        <div className="about-grid">
          <Reveal>
            <h2>Bit about me...</h2>
            <div className="about-copy">
              <p>
                I'm a fullstack developer at ITV. Most of my job is finding the
                manual, repetitive work sitting in other teams' days and
                engineering it away — the tooling behind a device estate of
                around 5,000 machines, event-driven integrations, and workflows
                that quietly remove around a hundred support tickets a month
                from someone's to-do list. Building features from user
                conversations, developing UI designs and implementing the
                backend logic.
              </p>
              <p>
                I came into engineering from product design. I studied Creative
                Product Design at UWE, then spent a few years as a modelmaker —
                architectural models at Thirdway — and as a design engineer at
                London Electric Cars, making bespoke parts for electric vehicle
                conversions. Working with my hands before I worked in code
                changed how I build things. I care as much about how something
                feels to use as how it's put together, and I'm comfortable with
                the physical, mechanical side of a problem, not just the
                software.
              </p>
              <p>
                Before ITV I built full-stack applications with a team at
                100Devs when studying and ran freelance projects end to end,
                from first sketch to shipping. Outside work I restore old cars,
                surf year-round, and shoot photo and video when travelling.
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

        <Reveal className="role">
          <div className="role-header">
            <div className="section-label">Currently</div>
            <h3 className="role-title">
              {CURRENT_ROLE.title}
              <span className="role-company"> @ {CURRENT_ROLE.company}</span>
            </h3>
            <p className="role-desc">{CURRENT_ROLE.description}</p>
          </div>
          <div className="role-projects">
            {CURRENT_ROLE.projects.map((p) => (
              <div className="role-project" key={p.id}>
                <div className="role-project-name">{p.name}</div>
                <p className="role-project-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
