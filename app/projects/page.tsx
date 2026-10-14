import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectsPageClient } from "../components/ProjectsPageClient";
import { SiteBackground } from "../components/SiteBackground";
import { projects } from "../projectsData";

export const metadata: Metadata = {
  title: "Projects | Ravi Jha",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <SiteBackground />
      <section className="portfolio-stage is-ready">
        <Header />

        <section className="projects-page-hero" aria-labelledby="projects-page-title">
          <p className="eyebrow">All Projects</p>
          <h1 id="projects-page-title">Projects built around business systems.</h1>
          <p>
            A simple view of the systems, platforms, and workflow-focused
            applications in the portfolio.
          </p>
        </section>

        <ProjectsPageClient projects={projects} />

        <Footer />
      </section>
    </main>
  );
}
