import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Linkedin, Github, Mail } from 'lucide-react';
import { profile } from "./data/profile.js";
import "./styles/styles.css";

function TopographicLines() {
  return (
    <svg className="topo" viewBox="0 0 900 600" aria-hidden="true">
      {Array.from({ length: 13 }).map((_, i) => (
        <path key={i} d={`M ${-80 + i * 12} ${120 + i * 18} C 180 ${20 + i * 8}, 240 ${260 - i * 4}, 420 ${120 + i * 16} S 720 ${120 + i * 19}, 980 ${40 + i * 11}`} />
      ))}
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a href="#home" className="wordmark">{profile.name}</a>
      <nav aria-label="Primary navigation">
        <a href="#work">WORK</a>
        <a href="#contact" className="button ghost">CONTACT</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <TopographicLines />
      <div className="hero-panel hero-left" role="img" aria-label="Portrait placeholder image"></div>
      <div className="hero-panel hero-right" role="img" aria-label="Stylized portrait placeholder image"></div>
      <div className="monogram" aria-label={`${profile.initials} monogram`}>{profile.initials}</div>
      <div className="hero-copy">
        <p className="eyebrow">{profile.location}</p>
        <h1>{profile.role}</h1>
      </div>
      <div className="scroll-cue">SCROLL</div>
    </section>
  );
}

function Statement() {
  return (
    <section className="statement section" aria-label="Personal statement">
      <div className="sticky-frame">
        <div className="cinematic-bg"></div>
        <div className="statement-copy">
          {profile.taglineLines.map((line, index) => <h2 key={line} style={{ '--i': index }}>{line}</h2>)}
          <p className="signature">{profile.signature}</p>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const text = [...profile.keywords, ...profile.keywords].join(' ◆ ');
  return <div className="marquee" aria-label="Keywords ticker"><span>{text} ◆ </span><span>{text} ◆ </span></div>;
}

function Timeline() {
  return (
    <section id="work" className="timeline section">
      <div className="section-kicker">SELECTED MOMENTS</div>
      <div className="collage-grid">
        {profile.timeline.map((item, index) => (
          <article className={`photo-card card-${index + 1}`} key={item.title}>
            <div className="image-fill"></div>
            <p className="smallcaps">{item.meta}</p>
            <h3>{item.title}</h3>
            <blockquote>{item.quote}</blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}

function SplitCTA() {
  return (
    <section className="split-cta section">
      <div className="split-image left"></div>
      <div className="split-image right"></div>
      <div className="split-overlay">
        <a href="#contact" className="headline-link"><span>{profile.ctaLeft.title}</span><small>{profile.ctaLeft.subtitle}</small><ArrowUpRight /></a>
        <a href="#contact" className="headline-link"><span>{profile.ctaRight.title}</span><small>{profile.ctaRight.subtitle}</small><ArrowUpRight /></a>
      </div>
    </section>
  );
}

function SocialCarousel() {
  return (
    <section className="social-carousel section" aria-label="What's up carousel">
      <h2>What&apos;s Up</h2>
      <div className="fan-cards">
        {profile.keywords.slice(0, 5).map((word, index) => <div className="fan-card" style={{ '--r': `${(index - 2) * 6}deg`, '--x': `${(index - 2) * 24}px` }} key={word}><span>{word}</span></div>)}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <TopographicLines />
      <h2>Let&apos;s build what&apos;s next.</h2>
      <a className="email" href={`mailto:${profile.email}`}>{profile.email}</a>
      <div className="socials">
        <a href={profile.social.linkedin} aria-label="LinkedIn"><Linkedin /></a>
        <a href={profile.social.github} aria-label="GitHub"><Github /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} {profile.name}. Personal portfolio.</p>
    </footer>
  );
}

export default function App() {
  return <><Header /><main><Hero /><Statement /><Marquee /><Timeline /><SplitCTA /><SocialCarousel /></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<App />);
