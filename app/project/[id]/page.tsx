import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../projectsData";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail-page">
      <nav className="portfolio-nav">
        <Link className="portfolio-signature" href="/">
          Ravi
        </Link>
        <Link className="section-arrow-link" href="/projects">
          ←
        </Link>
      </nav>

      <section className="project-detail">
        <div className="project-detail-copy">
          <p className="eyebrow">Project</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
        <div className="project-detail-image">
          <Image
            src={project.image}
            alt={project.title}
            width={1100}
            height={720}
            priority
          />
        </div>
      </section>
    </main>
  );
}
