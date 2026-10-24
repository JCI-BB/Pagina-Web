import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function SiteHero() {
  return (
    <section className="hero">
      <Container className="hero__inner">
        <div className="hero__copy">
          <h1>Desarrollando líderes para un mundo cambiante</h1>
          <p className="hero__description">
            Oportunidades para desarrollar liderazgo, impulsar proyectos,
            conectar personas y generar cambios positivos en la comunidad
          </p>
          <div className="hero__actions">
            <Link className="button" href="/nosotros">Conocé JCI</Link>
            <Link className="button button--text" href="/sumate">
              Sumate a JCI
            </Link>
          </div>
          <p className="hero__footnote">Una organización local conectada con una red global</p>
        </div>
        <div className="hero__visual">
          <Image
            src="/images/jci-bahia-blanca-workshop.jpeg"
            alt="Participantes colaboran durante una actividad publicada en el sitio institucional de JCI Bahía Blanca"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 48vw"
          />
          <div className="hero__image-label">
            Fotografía institucional local
          </div>
        </div>
      </Container>
      <div className="hero__bottom-rule" aria-hidden="true" />
    </section>
  );
}
