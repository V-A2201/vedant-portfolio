import React from "react";
import { createRoot } from "react-dom/client";
import { Github, Linkedin, Mail } from "lucide-react";
import Section from "./components/Section.jsx";
import { profile } from "./data/profile.js";
import "./styles/styles.css";

function Header() {
  return (
    <header className="header">
      #home
        {profile.name}
      </a>

      <nav>
        #aboutAbout</a>
        #projectsProjects</a>
        #skillsSkills</a>
        #contactContact</a>
      </nav>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />

      <section id="home" className="hero">
        <div>
          <p className="eyebrow">AI Engineer • Product Builder • Community Leader</p>
          <h1>{profile.name}</h1>
          <p className="tagline">{profile.tagline}</p>
          <p>{profile.intro}</p>
        </div>
      </section>

      <Section id="about" eyebrow="ABOUT" title="About Me">
        <p>{profile.about}</p>
      </Section>

      <Section id="projects" eyebrow="PROJECTS" title="Projects">
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
                  {project.liveLink}
                    Live
                  </a>
                )}

                {project.repoLink && (
                  {project.repoLink}
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="SKILLS" title="Skills">
        <div className="skill-grid">
          {profile.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="CONTACT" title="Connect">
        <div className="contact-links">
          {`mailto:${profile.email}`}
            <Mail size={18} />
            Email
          </a>

          {profile.links.github}
            <Github size={18} />
            GitHub
          </a>

          {profile.links.linkedin}
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </Section>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);