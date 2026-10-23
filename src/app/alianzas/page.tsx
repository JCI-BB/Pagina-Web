import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Alianzas",
  description: "Explorá oportunidades de colaboración con JCI Bahía Blanca",
};

export default function AlianzasPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <p className="eyebrow">Colaborar para multiplicar</p>
          <h1>Construyamos oportunidades en conjunto</h1>
          <p className="page-hero__lead">
            Invitamos a empresas, universidades, instituciones públicas y
            organizaciones a conversar sobre desafíos compartidos
          </p>
          <a className="button" href={site.socialLinks[1].href} target="_blank" rel="noreferrer">
            Iniciar una conversación
          </a>
        </Container>
      </section>
      <section className="section-space">
        <Container className="two-column">
          <div>
            <p className="eyebrow">Una colaboración con propósito</p>
            <h2 className="large-title">Personas y organizaciones, trabajando en red</h2>
          </div>
          <div className="prose">
            <p>
              JCI crea espacios donde jóvenes pueden desarrollar liderazgo a
              través de proyectos y trabajo en equipo; las alianzas permiten
              acercar conocimientos, recursos y perspectivas para responder a
              necesidades compartidas
            </p>
            <p>
              Hay muchas formas de colaborar: compartir experiencia, abrir
              oportunidades de aprendizaje, explorar iniciativas comunitarias
              o conectar a la juventud con nuevos desafíos
            </p>
            <p>
              Cada propuesta se conversa con la organización para definir
              objetivos y posibilidades concretas; no publicamos logos ni
              nombres de socios sin confirmación institucional
            </p>
          </div>
        </Container>
      </section>
      <section className="partnership-strip">
        <Container className="partnership-strip__inner">
          <div>
            <p className="eyebrow eyebrow--light">¿Hablamos?</p>
            <h2>Contanos qué te gustaría construir</h2>
          </div>
          <a className="button button--light" href={site.socialLinks[0].href} target="_blank" rel="noreferrer">
            Contactar por Instagram
          </a>
        </Container>
      </section>
    </>
  );
}
