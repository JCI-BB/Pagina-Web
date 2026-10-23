import type { Metadata } from "next";
import { MembershipCTA } from "@/components/sections/MembershipCTA";
import { Container } from "@/components/ui/Container";
import { membershipFaq } from "@/data/faq";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sumate",
  description: "Conocé cómo participar en JCI Bahía Blanca y desarrollar tu liderazgo",
};

export default function SumatePage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <p className="eyebrow">Tu lugar está por descubrirse</p>
          <h1>Sumate a una comunidad que aprende haciendo</h1>
          <p className="page-hero__lead">
            Si tenés ganas de desarrollar habilidades, trabajar en equipo y
            aportar a tu entorno, JCI puede ser un espacio para vos
          </p>
          <a className="button" href={site.socialLinks[0].href} target="_blank" rel="noreferrer">
            Consultá por Instagram
          </a>
        </Container>
      </section>
      <section className="section-space">
        <Container className="two-column">
          <div>
            <p className="eyebrow">Una experiencia para crecer</p>
            <h2 className="large-title">Aprendé, liderá y hacé que pase</h2>
          </div>
          <div className="prose">
            <p>
              JCI es para jóvenes que quieren desafiarse, compartir ideas y
              aportar su energía a proyectos colectivos; no hace falta tener un
              cargo o experiencia previa: la participación es una oportunidad
              para aprender en el camino
            </p>
            <ul>
              <li>Desarrollá habilidades de comunicación y liderazgo</li>
              <li>Trabajá con otras personas en proyectos e iniciativas</li>
              <li>Conectá con oportunidades locales, nacionales y globales</li>
              <li>Convertí tus ideas en acciones con propósito</li>
            </ul>
          </div>
        </Container>
      </section>
      <section className="join-steps section-space section-wash">
        <Container>
          <p className="eyebrow">Cómo empezar</p>
          <h2 className="large-title">Un primer mensaje abre la conversación</h2>
          <div className="steps-grid">
            <article><h3>Conocé JCI</h3><p>Escribinos por un canal oficial y contanos qué te interesa</p></article>
            <article><h3>Conversá con el equipo</h3><p>Te orientamos sobre las oportunidades y actividades vigentes</p></article>
            <article><h3>Presentá tu solicitud</h3><p>El reglamento local establece una solicitud escrita con documentación requerida, evaluada por la comisión directiva local</p></article>
          </div>
          <p className="fine-print">
            Los requisitos y formularios vigentes se solicitan directamente a la
            organización; no envíes documentos personales a través de este sitio
          </p>
        </Container>
      </section>
      <section className="section-space">
        <Container className="faq-layout">
          <div>
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="large-title">Lo que querés saber antes de empezar</h2>
          </div>
          <div className="faq-list">
            {membershipFaq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
      <Container className="home-cta"><MembershipCTA /></Container>
    </>
  );
}
