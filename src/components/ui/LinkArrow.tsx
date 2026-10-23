import Link from "next/link";
import type { ReactNode } from "react";

export function LinkArrow({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`link-arrow${light ? " link-arrow--light" : ""}`} href={href}>
      {children}
    </Link>
  );
}
