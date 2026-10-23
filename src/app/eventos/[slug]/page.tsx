import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { events } from "@/data/events";

export function generateStaticParams() {
  return events.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((entry) => entry.slug === slug);
  return event ? { title: event.title, description: event.description } : { title: "Evento no encontrado" };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((entry) => entry.slug === slug);
  if (!event) notFound();
  return (
    <section className="detail-hero">
      <Container>
        <Breadcrumbs items={[{ label: "Eventos", href: "/eventos" }, { label: event.title }]} />
        <p className="eyebrow">Evento</p>
        <h1>{event.title}</h1>
        {event.date && <p className="detail-hero__lead">{event.date}{event.location && ` · ${event.location}`}</p>}
        <p className="detail-hero__lead">{event.description}</p>
        {event.registrationUrl && <a className="button" href={event.registrationUrl}>Más información</a>}
      </Container>
    </section>
  );
}
