import Image from "next/image";
import Link from "next/link";
import { workCases } from "../data/work";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SiteBackground } from "./SiteBackground";

export function WorkPage() {
  return (
    <main className="work-page">
      <SiteBackground />
      <section className="portfolio-stage is-ready">
        <Header />

        <section className="work-hero" aria-labelledby="work-title">
          <p className="eyebrow">Work</p>
          <h1 id="work-title">Systems Built for Real Business Workflows</h1>
          <p>
            A focused collection of software, infrastructure, and secure
            business systems showing how I approach full-stack development,
            cloud deployment, integrations, and automation.
          </p>
        </section>

        <section className="work-list" aria-label="Selected work case studies">
          {workCases.map((work) => (
            <article className="work-case" key={work.number}>
              <div className="work-case-media">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={880}
                  height={560}
                  priority={work.number === "01"}
                />
              </div>

              <div className="work-case-copy">
                <span className="work-number">{work.number}</span>
                <h2>{work.title}</h2>
                <p className="work-category">{work.category}</p>
                <p className="work-summary">{work.summary}</p>
                <p className="work-focus">{work.focus}</p>
                <ul>
                  {work.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="work-live-link" href={work.liveUrl} target="_blank" rel="noreferrer">
                  <span>View live system</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </section>

        <div className="work-back-link">
          <Link className="primary-action requirement-submit" href="/projects">
            <span>See more projects</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link className="secondary-action" href="/">
            <span>Back home</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <Footer />
      </section>
    </main>
  );
}
