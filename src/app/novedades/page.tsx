import type { Metadata } from "next";
import { NewsCard } from "@/components/cards/EditorialCard";
import { EmptyState } from "@/components/sections/EmptyState";
import { Container } from "@/components/ui/Container";
import { news } from "@/data/news";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Novedades",
  description: "Noticias, historias y actualizaciones institucionales de JCI Bahía Blanca",
};

export default function NovedadesPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <p className="eyebrow">Ideas para compartir</p>
          <h1>Novedades de JCI Bahía Blanca</h1>
          <p className="page-hero__lead">
            Noticias, aprendizajes e historias de una comunidad que se desarrolla haciendo
          </p>
        </Container>
      </section>
      <section className="section-space">
        <Container>
          {news.length ? (
            <div className="editorial-grid">{news.map((article) => <NewsCard article={article} key={article.slug} />)}</div>
          ) : (
            <EmptyState
              title="Aún no hay novedades publicadas"
              description="Cuando haya noticias institucionales verificadas, las vas a encontrar en este espacio"
              href={site.localWebsite}
              linkLabel="Visitar el sitio institucional local"
            />
          )}
        </Container>
      </section>
    </>
  );
}
