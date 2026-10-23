import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="not-found">
      <Container>
        <p className="eyebrow">404 · Página no encontrada</p>
        <h1>Este camino todavía no existe</h1>
        <p>La página que buscás no está disponible o fue movida</p>
        <Link className="button" href="/">Volver al inicio</Link>
      </Container>
    </section>
  );
}
