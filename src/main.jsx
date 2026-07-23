import React from "react";
import { createRoot } from "react-dom/client";
import { profile } from "./data/profile.js";
import "./styles/styles.css";

const portraitUrl = `${import.meta.env.BASE_URL}assets/vedant-portrait.png`;

function TopographicLines() {
  return (
    <svg className="topo-lines" viewBox="0 0 1000 700" aria-hidden="true">
      {Array.from({ length: 15 }).map((_, index) => (
        <path
          key={index}
          d={`M ${-160 + index * 16} ${110 + index * 22} C 120 ${20 + index * 16}, 330 ${310 - index * 8}, 520 ${144 + index * 18} S 800 ${110 + index * 22}, 1160 ${40 + index * 14}`}
        />
      ))}
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home">{profile.initials}</a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#story">Story</a>
        <a href="#skills">Skills</a>
        <a href="#contact" className="nav-pill">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <TopographicLines />
      <div className="grain" aria-hidden="true" />
      <div className="hero-split">
        <div className="hero-copy">
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="hero-line">{profile.heroLine}</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">View Work</a>
            <a className="button secondary" href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>

        <div className="portrait-stage">
          <div className="portrait-frame natural">
            <img src={portraitUrl} alt="Professional portrait of Vedant Agarwal" />
          </div>
          <div className="portrait-frame stylized">
            <img src={portraitUrl} alt="Stylized professional portrait of Vedant Agarwal" />
          </div>
          <div className="floating-badge">AI + UX</div>
        </div>
      </div>
      <div className="scroll-cue">Scroll</div>
    </section>
  );
}

function Statement() {
  return (
    <section className="statement section">
      <div className="statement-inner">
        <p className="eyebrow">Point of View</p>
        <h2>
          Products feel powerful when <span>AI workflows</span>, design clarity, and real user needs move together.
        </h2>
        <p>{profile.statement}</p>
      </div>
    </section>
  );
}

function Marquee() {
  const marqueeText = [...profile.skills, ...profile.skills].join("   •   ");
  return (
    <section className="marquee" aria-label="Skills marquee">
      <div>{marqueeText}</div>
      <div>{marqueeText}</div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="work section">
      <div className="section-heading">
        <p className="eyebrow">Featured Work</p>
        <h2>Idea to prototype. Prototype to demo.</h2>
      </div>
      <div className="project-grid">
        {profile.projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-index">0{index + 1}</div>
            <p className="project-kicker">{project.kicker}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="outcome">{project.outcome}</p>
            <div className="chips">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {project.live && (
              <a className="text-link" href={project.live} target="_blank" rel="noreferrer">View demo</a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="story section">
      <div className="section-heading">
        <p className="eyebrow">Education & Community</p>
        <h2>Learning, leading, building.</h2>
      </div>
      <div className="story-layout">
        <div className="education-card">
          <h3>Education</h3>
          {profile.education.map((item) => (
            <div className="education-item" key={item.school}>
              <strong>{item.school}</strong>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="community-list">
          {profile.community.map((item) => (
            <article className="community-item" key={item.title}>
              <p className="project-kicker">{item.meta}</p>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-heading">
        <p className="eyebrow">Capability Map</p>
        <h2>AI, cloud, design, and product execution.</h2>
      </div>
      <div className="skill-cloud">
        {profile.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      <div className="builds">
        <p className="eyebrow">Foundational Builds</p>
        {profile.buildProjects.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section">
      <TopographicLines />
      <p className="eyebrow">{profile.location}</p>
      <h2>Let’s build something meaningful.</h2>
      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statement />
        <Marquee />
        <Work />
        <Story />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} {profile.name}. Built with React, Vite, and GitHub Pages.</footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
