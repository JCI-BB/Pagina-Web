import type { Metadata } from "next";
import { EmptyState } from "@/components/sections/EmptyState";
import { Container } from "@/components/ui/Container";
import { events } from "@/data/events";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Eventos y encuentros de JCI Bahía Blanca",
};

export default function EventosPage() {
  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "past");
  return (
    <>
      <section className="page-hero">
        <Container>
          <p className="eyebrow">Encontrarnos para aprender</p>
          <h1>Eventos y espacios para conectar</h1>
          <p className="page-hero__lead">
            Los encuentros son una oportunidad para compartir ideas, aprender y
            conocer de cerca la experiencia JCI
          </p>
        </Container>
      </section>
      <section className="section-space">
        <Container>
          <h2 className="subsection-title">Próximos eventos</h2>
          {upcomingEvents.length ? (
            <div className="editorial-grid">{upcomingEvents.map((event) => <article className="simple-card" key={event.slug}><h3>{event.title}</h3><p>{event.description}</p></article>)}</div>
          ) : (
            <EmptyState
              title="No hay fechas próximas confirmadas"
              description="Para evitar publicar información desactualizada, compartiremos las actividades una vez confirmadas por JCI Bahía Blanca"
              href={site.socialLinks[0].href}
              linkLabel="Seguir las novedades en Instagram"
            />
          )}
          {pastEvents.length > 0 && (
            <div className="past-events">
              <h2 className="subsection-title">Encuentros anteriores</h2>
              <div className="editorial-grid">{pastEvents.map((event) => <article className="simple-card" key={event.slug}><h3>{event.title}</h3><p>{event.description}</p></article>)}</div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
