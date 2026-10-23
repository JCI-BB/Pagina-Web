import Link from "next/link";
import Image from "next/image";
import type { Event, NewsArticle } from "@/types";

export function EventCard({ event }: { event: Event }) {
  return (
    <article className="editorial-card">
      <div className="editorial-card__image editorial-card__image--event">
        {event.image ? (
          <Image src={event.image} alt="" fill sizes="(max-width: 560px) 100vw, 33vw" />
        ) : (
          <span className="editorial-card__placeholder">Imagen pendiente</span>
        )}
      </div>
      <div className="editorial-card__body">
        <p className="card-meta">{event.date ?? "Fecha a confirmar"}</p>
        <h3><Link href={`/eventos/${event.slug}`}>{event.title}</Link></h3>
        <p>{event.description}</p>
        <Link className="link-arrow" href={`/eventos/${event.slug}`}>
          Más información
        </Link>
      </div>
    </article>
  );
}

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="editorial-card">
      <div className="editorial-card__image editorial-card__image--news">
        {article.image ? (
          <Image src={article.image} alt="" fill sizes="(max-width: 560px) 100vw, 33vw" />
        ) : (
          <span className="editorial-card__placeholder">Imagen pendiente</span>
        )}
      </div>
      <div className="editorial-card__body">
        <p className="card-meta">
          {article.category}
          {article.publishedAt &&
            ` · ${new Date(article.publishedAt).toLocaleDateString("es-AR")}`}
        </p>
        <h3><Link href={`/novedades/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <Link className="link-arrow" href={`/novedades/${article.slug}`}>
          Leer nota
        </Link>
      </div>
    </article>
  );
}
