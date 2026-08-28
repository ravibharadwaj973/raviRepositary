import { Footer } from "./Footer";
import { Header } from "./Header";
import { SiteBackground } from "./SiteBackground";

const focusAreas = [
  {
    number: "01",
    title: "Application Development",
    description: "Building web applications, dashboards, and business platforms.",
  },
  {
    number: "02",
    title: "Business Systems",
    description: "CRM platforms, lead management, internal tools, and operational workflows.",
  },
  {
    number: "03",
    title: "Cloud & Infrastructure",
    description: "AWS architecture, Docker, CI/CD pipelines, and infrastructure automation.",
  },
  {
    number: "04",
    title: "Automation & Integration",
    description: "REST APIs, webhooks, external platform integrations, and automated workflows.",
  },
];

const projectFlow = ["Understand", "Design", "Build", "Deploy", "Improve"];

const deploymentFlow = [
  "Business Problem",
  "Application Design",
  "Frontend + Backend",
  "Database",
  "APIs & Integrations",
  "Cloud Infrastructure",
  "Deployment & Automation",
];

export function AboutPage() {
  return (
    <main className="about-page">
      <SiteBackground />
      <section className="portfolio-stage is-ready">
        <Header />

        <section className="about-hero" aria-labelledby="about-title">
          <p className="eyebrow">About me</p>
          <h1 id="about-title">
            I build software systems around real business problems.
          </h1>
          <p>
            I&apos;m Ravi Jha, a software developer focused on building
            full-stack applications, backend systems, cloud infrastructure, and
            automation. My work combines application development with the
            technical systems required to deploy, integrate, and operate
            software.
          </p>
        </section>

        <section className="about-focus-section" aria-labelledby="focus-title">
          <div className="about-section-heading">
            <p className="eyebrow">What I focus on</p>
            <h2 id="focus-title">Systems that support real work</h2>
          </div>

          <div className="about-focus-grid">
            {focusAreas.map((area) => (
              <article className="about-focus-card" key={area.number}>
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-process" aria-labelledby="approach-title">
          <div className="about-process-copy">
            <p className="eyebrow">How I approach projects</p>
            <h2 id="approach-title">Understand the workflow before building.</h2>
            <p>
              I start by understanding the problem and workflow before defining
              the system. From there, I work through the application
              architecture, development, data, integrations, infrastructure, and
              deployment.
            </p>
          </div>

          <div className="about-flow" aria-label="Project approach flow">
            {projectFlow.map((step, index) => (
              <div className="about-flow-item" key={step}>
                <span>{step}</span>
                {index < projectFlow.length - 1 && <b aria-hidden="true">↓</b>}
              </div>
            ))}
          </div>
        </section>

        <section className="deployment-section" aria-labelledby="deployment-title">
          <div className="about-section-heading">
            <p className="eyebrow">From idea to deployed system</p>
            <h2 id="deployment-title">Why development and cloud work together</h2>
          </div>

          <div className="deployment-flow" aria-label="Technical delivery flow">
            {deploymentFlow.map((step, index) => (
              <div className="deployment-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="current-focus" aria-labelledby="current-focus-title">
          <p className="eyebrow">Current focus</p>
          <h2 id="current-focus-title">Building complete business systems.</h2>
          <p>
            Currently focused on building business applications, CRM systems,
            secure data-driven platforms, cloud infrastructure, API integrations,
            and deployment automation.
          </p>
        </section>

        <Footer />
      </section>
    </main>
  );
}
