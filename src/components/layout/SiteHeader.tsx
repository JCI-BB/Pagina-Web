"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNavigation } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [openAtPath, setOpenAtPath] = useState<string | null>(null);
  const menuOpen = openAtPath === pathname;
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenAtPath(null);
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target;
      if (
        target instanceof Node &&
        !menuRef.current?.contains(target) &&
        !toggleRef.current?.contains(target)
      ) {
        setOpenAtPath(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label="JCI Bahía Blanca, inicio">
          <Image
            className="brand__logo"
            src="/brand/jci-bahia-blanca-primary.png"
            alt=""
            width={160}
            height={160}
            priority
          />
        </Link>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpenAtPath(menuOpen ? null : pathname)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          ref={menuRef}
          className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
          id="primary-navigation"
          aria-label="Navegación principal"
        >
          {mainNavigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className="site-nav__link"
                href={item.href}
                key={item.href}
                onClick={() => setOpenAtPath(null)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            className="button button--small"
            href="/sumate"
            onClick={() => setOpenAtPath(null)}
          >
            Sumate
          </Link>
        </nav>
      </div>
    </header>
  );
}
