import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos e iniciativas",
  description: "Conocé iniciativas de JCI Bahía Blanca mencionadas en su sitio institucional",
};

export default function ProyectosPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <p className="eyebrow">Ideas en acción</p>
          <h1>Proyectos e iniciativas de nuestra comunidad</h1>
          <p className="page-hero__lead">
            Una selección de iniciativas mencionadas en el sitio institucional
            de JCI Bahía Blanca; su vigencia debe confirmarse con la organización
          </p>
        </Container>
      </section>
      <section className="section-space">
        <Container>
          <p className="notice">
            <strong>Información a verificar:</strong> las iniciativas que siguen
            fueron publicadas por JCI Bahía Blanca, pero no hay confirmación
            pública de que estén activas actualmente
          </p>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
