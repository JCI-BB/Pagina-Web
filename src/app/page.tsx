import Image from "next/image";
import Link from "next/link";
import { EventCard, NewsCard } from "@/components/cards/EditorialCard";
import { OpportunityCard } from "@/components/cards/OpportunityCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SiteHero } from "@/components/sections/SiteHero";
import { EmptyState } from "@/components/sections/EmptyState";
import { MembershipCTA } from "@/components/sections/MembershipCTA";
import { Container } from "@/components/ui/Container";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { opportunities } from "@/data/opportunities";
import { projects } from "@/data/projects";
import { events } from "@/data/events";
import { news } from "@/data/news";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <SiteHero />
      <section className="intro-section section-space">
        <Container className="intro-section__grid">
          <p className="eyebrow">Una red local, una mirada global</p>
          <div>
            <h2>
              Las ideas se convierten en impacto cuando las ponemos en acción
            </h2>
            <p>
              JCI Bahía Blanca es parte de una organización global sin fines de
              lucro; en nuestra ciudad, jóvenes con iniciativa encuentran
              oportunidades para crecer, colaborar y aportar a su comunidad
            </p>
            <LinkArrow href="/nosotros">Conocé JCI</LinkArrow>
          </div>
        </Container>
      </section>

      <section className="opportunities-section section-space section-wash">
        <Container>
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="Aprender haciendo"
              title="Cuatro maneras de crecer y generar impacto"
              description="Cada persona encuentra su propio camino; las cuatro áreas de oportunidad conectan el desarrollo personal con la acción colectiva"
            />
            <LinkArrow href="/oportunidades">Explorá las oportunidades</LinkArrow>
          </div>
          <div className="opportunity-grid">
            {opportunities.map((item) => (
              <OpportunityCard key={item.slug} opportunity={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="projects-section section-space">
        <Container>
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="Desde Bahía Blanca"
              title="Iniciativas que abren oportunidades"
              description="Estas propuestas se mencionan en el sitio institucional local; su continuidad no está confirmada, consultá los canales oficiales para conocer su estado"
            />
            <LinkArrow href="/proyectos">Ver iniciativas</LinkArrow>
          </div>
          <div className="project-grid project-grid--home">
            {projects.filter((project) => project.featured).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="impact-section">
        <Container className="impact-section__grid">
          <div className="impact-section__copy">
            <p className="eyebrow eyebrow--light">El cambio empieza cerca</p>
            <h2>Una comunidad mejor se construye en equipo</h2>
            <p>
              JCI impulsa a jóvenes a identificar desafíos, proponer ideas y
              tomar acción; en Bahía Blanca, las iniciativas locales reflejan
              distintas formas de poner el liderazgo al servicio de los demás
            </p>
            <p className="impact-section__note">
              No se publican cifras de impacto porque no hay datos actuales
              verificados disponibles
            </p>
            <LinkArrow href="/proyectos">Conocé las iniciativas locales</LinkArrow>
          </div>
          <div className="impact-section__image">
            <Image
              src="/images/jci-bahia-blanca-event.jpg"
              alt="Participantes escuchan a una expositora en una actividad publicada en el sitio institucional de JCI Bahía Blanca"
              width={900}
              height={1100}
              sizes="(max-width: 800px) 100vw, 45vw"
            />
            <span className="impact-section__caption">Fotografía institucional local</span>
          </div>
        </Container>
      </section>

      <section className="updates-section section-space">
        <Container>
          <div className="section-heading-row">
            <SectionHeading
              eyebrow="En agenda"
              title="Encontrémonos pronto"
              description="Las próximas fechas se publicarán cuando estén confirmadas por la organización"
            />
            <LinkArrow href="/eventos">Todos los eventos</LinkArrow>
          </div>
          {events.length > 0 ? (
            <div className="editorial-grid">{events.slice(0, 3).map((event) => <EventCard event={event} key={event.slug} />)}</div>
          ) : (
            <EmptyState
              title="No hay eventos próximos publicados"
              description="Seguinos en los canales oficiales para enterarte cuando se anuncien nuevas actividades"
              href={site.socialLinks[0].href}
              linkLabel="Seguir a JCI Bahía Blanca"
            />
          )}
          <div className="news-preview">
            <div className="section-heading-row">
              <SectionHeading
                eyebrow="Novedades"
                title="Lo que estamos pensando y haciendo"
              />
              <LinkArrow href="/novedades">Ir a novedades</LinkArrow>
            </div>
            {news.length > 0 ? (
              <div className="editorial-grid">{news.slice(0, 3).map((article) => <NewsCard article={article} key={article.slug} />)}</div>
            ) : (
              <EmptyState
                title="Todavía no hay novedades publicadas acá"
                description="Esta sección se actualizará con noticias institucionales verificadas"
                href={site.localWebsite}
                linkLabel="Visitar el sitio institucional"
              />
            )}
          </div>
        </Container>
      </section>

      <section className="partnership-strip">
        <Container className="partnership-strip__inner">
          <div>
            <p className="eyebrow">Alianzas que multiplican</p>
            <h2>¿Compartimos un desafío?</h2>
            <p>Conversemos sobre cómo colaborar en el desarrollo de personas y comunidades</p>
          </div>
          <Link className="button button--outline" href="/alianzas">
            Conocé las alianzas
          </Link>
        </Container>
      </section>
      <Container className="home-cta">
        <MembershipCTA />
      </Container>
    </>
  );
}

export const metadata = {
  title: "Inicio",
  description:
    "Desarrollando líderes para un mundo cambiante; conocé JCI Bahía Blanca y sus oportunidades para aprender, liderar y generar impacto",
};
