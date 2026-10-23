import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { opportunities } from "@/data/opportunities";

export const metadata: Metadata = {
  title: "Oportunidades",
  description: "Conocé las cuatro áreas de oportunidad para crecer y generar impacto con JCI",
};

export default function OportunidadesPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <p className="eyebrow">Cuatro áreas de oportunidad</p>
          <h1>Encontrá tu forma de poner el liderazgo en acción</h1>
          <p className="page-hero__lead">
            Crecimiento personal y profesional, acción comunitaria y una mirada
            global: elegí dónde querés empezar
          </p>
        </Container>
      </section>
      <section className="opportunity-detail-list section-space">
        <Container>
          {opportunities.map((item) => (
            <article className="opportunity-detail" id={item.slug} key={item.slug}>
              <div className="opportunity-detail__main">
                <p className="eyebrow">{item.shortTitle}</p>
                <h2>{item.title}</h2>
                <p className="opportunity-detail__intro">{item.description}</p>
                <p>{item.detail}</p>
                <Link className="link-arrow" href="/sumate">
                  Quiero conocer más
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
