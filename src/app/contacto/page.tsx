import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Canales oficiales para contactar a JCI Bahía Blanca",
};

export default function ContactoPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <p className="eyebrow">Estamos para conversar</p>
          <h1>Conectemos</h1>
          <p className="page-hero__lead">
            ¿Querés conocer JCI, sumarte o explorar una alianza? Encontrá los
            canales oficiales de JCI Bahía Blanca
          </p>
        </Container>
      </section>
      <section className="section-space">
        <Container className="contact-grid">
          <div>
            <p className="eyebrow">Canales oficiales</p>
            <h2 className="large-title">Elegí cómo iniciar la conversación</h2>
            <p className="contact-note">
              No encontramos una dirección de correo publicada y verificable
              durante la consulta; por eso no incluimos un email ni un
              formulario sin servicio de envío
            </p>
          </div>
          <div className="contact-links">
            {site.socialLinks.map((item) => (
              <a href={item.href} key={item.href} target="_blank" rel="noreferrer">
                <span>{item.label}</span>
              </a>
            ))}
            <a href={site.localWebsite} target="_blank" rel="noreferrer">
              <span>Sitio institucional local</span>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
