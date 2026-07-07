import React, { useEffect, useRef } from 'react';
import { GlobeScene, HandConnectionScene, HeroScene } from './Scene.jsx';

const generatedVideos = {
  logo: {
    jobId: 'd214b47b-cfaa-4add-a33b-ed34bcd128b3',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3G93ZFsZZNJ5bVNDWZcFzUKhPsg/hf_20260706_225652_d214b47b-cfaa-4add-a33b-ed34bcd128b3.mp4',
  },
  hands: {
    jobId: '65b1f0b1-4ffd-48e3-acf4-8b6ae0aef5c8',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3G93ZFsZZNJ5bVNDWZcFzUKhPsg/hf_20260706_225706_65b1f0b1-4ffd-48e3-acf4-8b6ae0aef5c8.mp4',
  },
};

const expertise = [
  ['Generative AI', 'LLMs, RAG, Copilots und Custom Assistants verstehen und gezielt einsetzen.'],
  ['Agentic Workflows', 'Von Triggern, Tools und Entscheidungen zu wiederholbaren KI-Prozessen.'],
  ['Knowledge Management', 'Wissen so strukturieren, dass Assistenten und Agenten damit arbeiten koennen.'],
  ['Service Desk AI', 'Tickets, KB-Artikel und Supportprozesse mit KI produktiver machen.'],
  ['Governance & EU AI Act', 'Datenschutz, Freigaben, Rollen und Human-in-the-loop sauber verankern.'],
  ['Cost Control', 'Tokenkosten, Kontextfenster und Modellwahl wirtschaftlich kontrollieren.'],
  ['Coding Agents', 'Automatisierung und interne Mini-Tools ohne Entwicklerjargon nutzen.'],
  ['Intelligent Workplace', 'Microsoft 365, SharePoint, Copilot und interne Services verbinden.'],
  ['Transformation Roadmap', 'Realistische Use Cases priorisieren und erste Schritte belastbar planen.'],
];

const modules = [
  'KI-Welt verstehen',
  'Chatbots vs. Assistenten vs. Agenten',
  'Eigene Assistenten bauen',
  'Coding Agents fuer Nicht-Programmierer',
  'Agentische Workflows automatisieren',
  'KI-taugliche Wissensstrukturen',
  'Tokens sparen und Kosten senken',
  'Governance, Datenschutz und EU AI Act',
];

const products = [
  ['Executive Briefing', '2 Stunden', 'Fuer Entscheider, IT-Leitung und Bereichsleitung. Marktueberblick, Risiken, Chancen und Roadmap.'],
  ['Practitioner Workshop', '1 Tag', 'Fuer Projektleiter, Knowledge Manager, Service Desk Manager und Fachbereiche. Mit Use Cases und Praxisuebungen.'],
  ['Agent Builder Bootcamp', '2 Tage', 'Fuer Power User, Process Owner und KI-Verantwortliche. Mit eigenem Agenten- oder Workflow-Prototyp.'],
  ['Inhouse-Schulung', '1 Tag+', 'Massgeschneidert fuer Teams, Prozesse, Wissensbestaende und Governance-Anforderungen.'],
];

function useMagneticButtons() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const buttons = [...document.querySelectorAll('[data-magnetic]')];
    const cleanups = buttons.map((button) => {
      const onMove = (event) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        button.style.transform = `translate(${x * 0.12}px, ${y * 0.16}px)`;
      };
      const onLeave = () => {
        button.style.transform = 'translate(0, 0)';
      };
      button.addEventListener('mousemove', onMove);
      button.addEventListener('mouseleave', onLeave);
      return () => {
        button.removeEventListener('mousemove', onMove);
        button.removeEventListener('mouseleave', onLeave);
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
}

function useScrollParallax() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        rootRef.current?.style.setProperty('--scrollY', `${window.scrollY}`);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return rootRef;
}

export default function App() {
  useMagneticButtons();
  const rootRef = useScrollParallax();

  return (
    <main ref={rootRef}>
      <nav className="nav" aria-label="Hauptnavigation">
        <a className="brand" href="#top" aria-label="Zur Startsektion">
          <span className="brand-mark" aria-hidden="true" />
          Agentic AI Schulung
        </a>
        <div className="nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#impact">Impact</a>
          <a href="#formate">Formate</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <HeroScene />
        <div className="logo-video-stage" aria-hidden="true">
          {generatedVideos.logo.src ? (
            <video src={generatedVideos.logo.src} autoPlay muted loop playsInline />
          ) : (
            <div className="living-logo">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content parallax-soft">
          <p className="eyebrow">Von Prompts zu Agentic AI</p>
          <h1>Welcome to a Symbiotic Future</h1>
          <p className="lead">
            Eine praxisnahe B2B-Schulung fuer Unternehmen, die aus ChatGPT, Copilot, Claude
            oder Gemini produktive KI-Assistenten, Agenten und kontrollierbare Workflows machen wollen.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#kontakt" data-magnetic>Schulung anfragen</a>
            <a className="button ghost" href="#expertise" data-magnetic>Inhalte erkunden</a>
          </div>
          <div className="hero-proof" aria-label="Kernthemen">
            <span>Agenten</span>
            <span>Wissensorganisation</span>
            <span>Governance</span>
            <span>Kostenkontrolle</span>
          </div>
        </div>
      </section>

      <section className="intro section">
        <div>
          <p className="eyebrow">Positionierung</p>
          <h2>Vom Knowledge Management zur Agentic AI Organisation.</h2>
        </div>
        <p>
          Der Markt bewegt sich weg von generischen Prompt-Kursen. Unternehmen fragen jetzt:
          Wie integrieren wir KI in Prozesse? Wie organisieren wir Wissen KI-tauglich? Wie bleiben
          Datenschutz, EU AI Act, Kosten und Qualitaet beherrschbar? Genau hier setzt diese Schulung an.
        </p>
      </section>

      <section id="expertise" className="section expertise-section">
        <div className="section-heading">
          <p className="eyebrow">Expertise Matrix</p>
          <h2>Neun Felder fuer produktive, verantwortungsvolle KI-Arbeit.</h2>
        </div>
        <div className="expertise-grid">
          {expertise.map(([title, text], index) => (
            <article className="expertise-card" key={title} style={{ '--i': index }}>
              <div className="mini-orbit" aria-hidden="true">
                <span />
                <span />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="impact" className="impact-section">
        <div className="impact-copy">
          <p className="eyebrow">Global Impact</p>
          <h2>Skalierbar denken. Verantwortlich umsetzen.</h2>
          <p>
            Die Schulung verbindet Service Desk, Knowledge Management, Conversational AI,
            Prozessautomatisierung und Governance zu einem belastbaren Betriebsmodell fuer Agentic AI.
          </p>
          <div className="metrics">
            <div><strong>5</strong><span>Autonomie-Level</span></div>
            <div><strong>8</strong><span>Praxis-Module</span></div>
            <div><strong>30</strong><span>Minuten bis zum ersten Assistenten</span></div>
            <div><strong>4</strong><span>Schulungsformate</span></div>
          </div>
        </div>
        <div className="globe-wrap" aria-label="Animierter Netzwerk-Globus">
          <GlobeScene />
          <div className="globe-tooltips" aria-hidden="true">
            <span>Service Desk</span>
            <span>Knowledge Base</span>
            <span>Workflows</span>
          </div>
        </div>
      </section>

      <section id="human-tech" className="section split human-tech-section">
        <div className="copy-panel">
          <p className="eyebrow">Human + Technology</p>
          <h2>Menschen behalten die Kontrolle. Agenten uebernehmen die Wiederholung.</h2>
          <p>
            Ein Agent verfolgt Ziele, plant Zwischenschritte, nutzt Werkzeuge und kann Aufgaben ueber
            mehrere Schritte ausfuehren. In der Schulung lernen Teams, wo Autonomie hilft, wo Freigaben
            notwendig sind und welche Prozesse zuerst automatisiert werden sollten.
          </p>
          <ul className="check-list">
            <li>Human-in-the-loop und Eskalationsregeln</li>
            <li>Output-Formate, Qualitaetssicherung und Monitoring</li>
            <li>RAG-faehige Wissensquellen statt Copy-Paste-Prozesse</li>
          </ul>
        </div>
        <div className="hand-video-wrap">
          {generatedVideos.hands.src ? (
            <video src={generatedVideos.hands.src} autoPlay muted loop playsInline />
          ) : (
            <HandConnectionScene />
          )}
          <div className="connection-caption">
            <span>Human judgment</span>
            <span>Agentic execution</span>
          </div>
        </div>
      </section>

      <section className="learning-section">
        <div className="section-heading">
          <p className="eyebrow">Learning Journey</p>
          <h2>Vom gemeinsamen Verstaendnis zum eigenen KI-Agenten.</h2>
        </div>
        <div className="module-strip">
          {modules.map((module, index) => (
            <div className="module-chip" key={module}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {module}
            </div>
          ))}
        </div>
      </section>

      <section id="formate" className="section people-section">
        <div className="people-visual" aria-hidden="true">
          <div className="human-core" />
          <div className="assistant-card card-a">Workshop</div>
          <div className="assistant-card card-b">Use Case</div>
          <div className="assistant-card card-c">Governance</div>
        </div>
        <div>
          <p className="eyebrow">Careers, People, Growth</p>
          <h2>Teams lernen nicht nur Tools, sondern neue Arbeitsweisen.</h2>
          <p>
            Fuer Geschaeftsfuehrung, IT-Leitung, Knowledge Manager, Service Desk Manager,
            Digitalisierungsverantwortliche, Process Owner und Fachbereiche. Mit konkreten Uebungen,
            realistischen Use Cases und einer klaren Sprache ohne Entwicklerjargon.
          </p>
          <div className="product-grid">
            {products.map(([title, duration, text]) => (
              <article className="product-card" key={title}>
                <span>{duration}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="final-cta">
        <div className="cta-network" aria-hidden="true" />
        <p className="eyebrow">Next Symbiotic Workplace</p>
        <h2>Build the next symbiotic workplace.</h2>
        <p>
          Entwickeln Sie aus ersten KI-Erfahrungen belastbare Agenten, saubere Wissensstrukturen,
          wirtschaftliche Workflows und Governance, die im Unternehmensalltag funktioniert.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="mailto:kontakt@example.com?subject=Agentic%20AI%20Schulung%20anfragen" data-magnetic>Contact</a>
          <a className="button light" href="#formate" data-magnetic>Explore Expertise</a>
        </div>
      </section>
    </main>
  );
}
