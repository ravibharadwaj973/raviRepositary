"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { projects } from "../projectsData";

type ProjectsPageClientProps = {
  projects: typeof projects;
};

const PAGE_SIZE = 4;

export function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleProjects = useMemo(
    () => projects.slice(0, visibleCount),
    [projects, visibleCount],
  );
  const hasMore = visibleCount < projects.length;

  return (
    <>
      <section className="all-projects-grid" aria-label="All projects">
        {visibleProjects.map((project, index) => (
          <a
            className="all-project-card"
            href={project.liveUrl}
            key={project.id}
            target="_blank"
            rel="noreferrer"
          >
            <div className="all-project-image">
              <Image src={project.image} alt={project.title} width={720} height={460} />
            </div>
            <div className="all-project-copy">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </div>
          </a>
        ))}
      </section>

      <div className="projects-pagination">
        <p>
          Showing {visibleProjects.length} of {projects.length} projects
        </p>
        {hasMore && (
          <button
            className="primary-action requirement-submit"
            onClick={() => setVisibleCount((count) => Math.min(count + PAGE_SIZE, projects.length))}
            type="button"
          >
            <span>Add more</span>
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </>
  );
}
