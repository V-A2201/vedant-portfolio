import React from "react";
import { createRoot } from "react-dom/client";
import { profile } from "./data/profile.js";
import "./styles/styles.css";

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Go to top">
        VA
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#journey">Journey</a>
        <a href="#skills">Skills</a>
        <a href="#contact" className="nav-cta">Contact</a>
      </nav>
    </header>
  );
}

function TopographicLines() {
  return (
    <svg className="topo-lines" viewBox="0 0 900 520" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, index) => (
        <path
          key={index}
          d={`M ${-120 + index * 14} ${90 + index * 24} C 120 ${10 + index * 18}, 300 ${240 - index * 9}, 470 ${120 + index * 18} S 760 ${110 + index * 17}, 980 ${30 + index * 13}`}
        />
      ))}
    </svg>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-panel">
      <TopographicLines />
      <div className="grain" aria-hidden="true" />
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">AI Engineer • Product Builder • Community Leader</p>
          <h1>{profile.name}</h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#work" className="button primary">View Work</a>
            <a href="#contact" className="button secondary">Connect</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract cinematic portrait placeholder">
          <div className="portrait-card card-a">
            <span>AI</span>
          </div>
          <div className="portrait-card card-b">
            <span>UX</span>
          </div>
          <div className="monogram">VA</div>
        </div>
      </div>
      <div className="scroll-cue">Scroll</div>
    </section>
  );
}

function Statement() {
  return (
    <section className="statement section-panel">
      <div className="statement-inner">
        <p className="eyebrow">Point of View</p>
        <h2>
          I build products where <span>AI systems</span>, thoughtful design, and real user problems meet.
        </h2>
        <p>{profile.about}</p>
      </div>
    </section>
  );
}

function Marquee() {
  const text = [...profile.skills, ...profile.skills].join("   •   ");
  return (
    <section className="marquee" aria-label="Skills ticker">
      <div>{text}</div>
      <div>{text}</div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section id="work" className="work section-panel">
      <div className="section-heading">
        <p className="eyebrow">Featured Work</p>
        <h2>Projects built from idea to demo.</h2>
      </div>

      <div className="project-stack">
        {profile.projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">0{index + 1}</div>
            <div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="chips">
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer">Live Demo</a>}
                {project.repoLink && <a href={project.repoLink} target="_blank" rel="noreferrer">GitHub</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="journey section-panel">
      <div className="section-heading">
        <p className="eyebrow">Journey</p>
        <h2>Learning, building, leading.</h2>
      </div>
      <div className="timeline">
        {profile.timeline.map((item) => (
          <div className="timeline-item" key={item.year + item.title}>
            <span>{item.year}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills section-panel">
      <div className="section-heading">
        <p className="eyebrow">Capability Map</p>
        <h2>AI, product, cloud, and design.</h2>
      </div>
      <div className="skill-grid">
        {profile.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section-panel">
      <TopographicLines />
      <p className="eyebrow">Contact</p>
      <h2>Let’s build something meaningful.</h2>
      <div className="contact-row">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
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
        <FeaturedWork />
        <Journey />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} {profile.name}. Built with React, Vite, and GitHub Pages.</footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
