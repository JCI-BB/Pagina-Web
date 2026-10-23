import Link from "next/link";

export function EmptyState({
  title,
  description,
  href,
  linkLabel,
}: {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="empty-state">
      <span className="empty-state__mark" aria-hidden="true" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="link-arrow" href={href}>
          {linkLabel}
        </Link>
      </div>
    </div>
  );
}
