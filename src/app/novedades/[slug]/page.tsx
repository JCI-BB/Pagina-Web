import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { news } from "@/data/news";

export function generateStaticParams() {
  return news.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((entry) => entry.slug === slug);
  return article ? { title: article.title, description: article.excerpt } : { title: "Novedad no encontrada" };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = news.find((entry) => entry.slug === slug);
  if (!article) notFound();
  return (
    <article className="section-space">
      <Container className="article">
        <Breadcrumbs items={[{ label: "Novedades", href: "/novedades" }, { label: article.title }]} />
        <p className="eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p className="article__excerpt">{article.excerpt}</p>
        {article.publishedAt && <p className="card-meta">{new Date(article.publishedAt).toLocaleDateString("es-AR")}</p>}
        <div className="prose">{article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </Container>
    </article>
  );
}
