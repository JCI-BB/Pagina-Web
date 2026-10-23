import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  return project
    ? { title: project.title, description: project.excerpt }
    : { title: "Iniciativa no encontrada" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return (
    <article>
      <section className="detail-hero">
        <Container>
          <Breadcrumbs items={[{ label: "Proyectos", href: "/proyectos" }, { label: project.title }]} />
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="detail-hero__lead">{project.excerpt}</p>
          <span className="status-pill">{project.status}</span>
        </Container>
      </section>
      <section className="section-space">
        <Container className="detail-content">
          <div className="prose">
            {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <aside className="detail-aside">
            <p className="eyebrow">¿Querés saber más?</p>
            <h2>Consultá los canales oficiales</h2>
            <LinkArrow href="/contacto">Contactar a JCI Bahía Blanca</LinkArrow>
          </aside>
        </Container>
      </section>
    </article>
  );
}
