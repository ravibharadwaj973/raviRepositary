import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "../projectsData";

export function ProjectsSection() {
  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="section-heading projects-heading">
        <div>
          <p className="eyebrow">Projects</p>
          <h2 id="projects-title">Work That Speaks</h2>
        </div>
        <Link className="section-arrow-link" href="/projects" aria-label="View all projects">
          →
        </Link>
      </div>

      <div className="projects-row">
        {featuredProjects.map((project) => (
          <a
            className="project-card"
            href={project.liveUrl}
            key={project.id}
            aria-label={project.title}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-image">
              <Image
                src={project.image}
                alt={project.title}
                width={560}
                height={380}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
