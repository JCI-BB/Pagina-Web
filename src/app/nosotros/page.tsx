import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conocé qué es JCI, su misión, visión y el trabajo de JCI Bahía Blanca",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <p className="eyebrow">Quiénes somos</p>
          <h1>Una comunidad local conectada con una red global</h1>
          <p className="page-hero__lead">
            JCI reúne a jóvenes con iniciativa que buscan desarrollarse y
            comprometerse para generar un impacto positivo en sus comunidades
          </p>
        </Container>
      </section>
      <section className="section-space">
        <Container className="two-column">
          <SectionHeading eyebrow="JCI en pocas palabras" title="Liderazgo que se aprende con acción" />
          <div className="prose">
            <p>
              Junior Chamber International (JCI) es una organización global sin
              fines de               lucro; sus miembros encuentran oportunidades para
              desarrollar habilidades, asumir responsabilidades y convertir
              ideas en proyectos
            </p>
            <p>
              JCI Bahía Blanca forma parte de esa red desde nuestra ciudad y
              promueve espacios de aprendizaje, colaboración e iniciativa
              comunitaria para jóvenes que quieren crecer mientras contribuyen
              a su entorno
            </p>
            <a href={site.globalWebsite} target="_blank" rel="noreferrer">
              Conocé la red global en jci.cc
            </a>
          </div>
        </Container>
      </section>
      <section className="values-section section-space section-wash">
        <Container>
          <div className="values-section__grid">
            <article className="value-panel value-panel--navy">
              <p className="eyebrow eyebrow--light">Nuestra misión</p>
              <h2>{site.mission}</h2>
            </article>
            <article className="value-panel value-panel--blue">
              <p className="eyebrow eyebrow--light">Nuestra visión</p>
              <h2>{site.vision}</h2>
            </article>
          </div>
        </Container>
      </section>
      <section className="section-space">
        <Container className="two-column">
          <SectionHeading eyebrow="Nuestra forma de hacer" title="Aprender, colaborar, liderar" />
          <div className="prose">
            <p>
              La experiencia JCI propone que cada persona tome iniciativa,
              aprenda con otras y participe en proyectos reales; liderar no es
              solo ocupar un cargo: también es escuchar, construir acuerdos y
              hacerse responsable de una idea
            </p>
            <p>
              La diversidad de perspectivas y el respeto mutuo son esenciales
              para trabajar por comunidades más inclusivas y participativas;
              estos principios se expresan en las oportunidades de desarrollo
              individual, impacto comunitario, emprendimiento y cooperación
              internacional
            </p>
            <Link href="/oportunidades">Explorá las cuatro áreas de oportunidad</Link>
          </div>
        </Container>
      </section>
      <section className="local-note">
        <Container className="local-note__inner">
          <div>
            <p className="eyebrow eyebrow--light">Desde Bahía Blanca hacia el mundo</p>
            <h2>Las grandes transformaciones también empiezan en lo local</h2>
          </div>
          <p>
            La información institucional de esta página toma como referencia el
            sitio oficial local y la identidad global de JCI; los datos
            organizativos que no están publicados se mantienen fuera del sitio
          </p>
        </Container>
      </section>
    </>
  );
}
