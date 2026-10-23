import Link from "next/link";

export function MembershipCTA() {
  return (
    <section className="membership-cta">
      <div className="membership-cta__shape" aria-hidden="true" />
      <div className="membership-cta__content">
        <p className="eyebrow eyebrow--light">Tu próxima etapa empieza acá</p>
        <h2>El liderazgo se aprende haciendo</h2>
        <p>
          Sumate a una comunidad de personas que aprende, impulsa proyectos y
          trabaja para generar cambios positivos
        </p>
        <Link className="button button--light" href="/sumate">
          Conocé cómo sumarte
        </Link>
      </div>
    </section>
  );
}
