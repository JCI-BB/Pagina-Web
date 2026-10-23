import Link from "next/link";
import type { Opportunity } from "@/types";

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <Link
      className="opportunity-card"
      href={`/oportunidades#${opportunity.slug}`}
    >
      <span className="opportunity-card__content">
        <span className="opportunity-card__title">{opportunity.title}</span>
        <span className="opportunity-card__description">{opportunity.description}</span>
      </span>
    </Link>
  );
}
