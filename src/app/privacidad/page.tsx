import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Información sobre privacidad y el uso de este sitio institucional",
};

export default function PrivacidadPage() {
  return (
    <section className="section-space">
      <Container className="article">
        <p className="eyebrow">Información importante</p>
        <h1>Privacidad</h1>
        <p className="article__excerpt">
          Esta página describe el alcance previsto de este sitio inicial y debe
          ser revisada por la organización antes de su publicación definitiva
        </p>
        <div className="prose">
          <h2>Consultas y datos personales</h2>
          <p>
            Este sitio no incluye formularios de contacto, cuentas de usuario ni
            sistemas para almacenar consultas; si elegís contactar a JCI Bahía
            Blanca mediante un canal externo, el tratamiento de la información
            dependerá de ese canal y de las políticas de la organización que lo
            administra
          </p>
          <h2>Servicios externos</h2>
          <p>
            Los enlaces a redes sociales y a otros sitios llevan a servicios
            externos con sus propias prácticas de privacidad; revisá sus
            políticas antes de compartir información personal
          </p>
          <h2>Revisión pendiente</h2>
          <p>
            El alcance de analítica, cookies, alojamiento y cualquier servicio
            agregado al sitio debe confirmarse antes de su puesta en producción;
            este texto es informativo y no constituye asesoramiento legal ni una
            declaración de cumplimiento normativo
          </p>
          <p className="fine-print">Revisión institucional y legal pendiente antes de producción</p>
        </div>
      </Container>
    </section>
  );
}
