import React from "react";
import { createRoot } from "react-dom/client";
import { profile } from "./data/profile.js";
import "./styles/styles.css";

function Header() {
  return (
    <header className="header">
      <a href="#home" className="brand">
        {profile.name}
      </a>

      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="home" className="hero">
          <p className="eyebrow">AI Engineer • Product Builder • Community Leader</p>
          <h1>{profile.name}</h1>
          <p className="tagline">{profile.tagline}</p>
          <p className="intro">{profile.intro}</p>
        </section>

        <section id="about" className="section">
          <p className="eyebrow">About</p>
          <h2>About Me</h2>
          <p className="section-copy">{profile.about}</p>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">Projects</p>
          <h2>Projects</h2>

          <div className="cards">
            {profile.projects.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="chips">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="card-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  )}

                  {project.repoLink && (
                    <a href={project.repoLink} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <p className="eyebrow">Skills</p>
          <h2>Skills</h2>

          <div className="skill-grid">
            {profile.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <p className="eyebrow">Contact</p>
          <h2>Connect</h2>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
