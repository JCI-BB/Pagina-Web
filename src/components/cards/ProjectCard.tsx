import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link
        aria-label={`Conocer más sobre ${project.title}`}
        className="project-card__visual"
        href={`/proyectos/${project.slug}`}
      >
        {project.image ? (
          <Image src={project.image} alt="" fill sizes="(max-width: 560px) 100vw, 33vw" />
        ) : (
          <span className="project-card__placeholder">Imagen institucional pendiente</span>
        )}
      </Link>
      <div className="project-card__body">
        <div className="card-meta">
          <span>{project.category}</span>
        </div>
        <h3>
          <Link href={`/proyectos/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.excerpt}</p>
        <p className="project-card__status">{project.status}</p>
        <Link className="link-arrow" href={`/proyectos/${project.slug}`}>
          Ver iniciativa
        </Link>
      </div>
    </article>
  );
}
