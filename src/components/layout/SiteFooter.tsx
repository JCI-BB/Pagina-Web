import Link from "next/link";
import Image from "next/image";
import { mainNavigation, site } from "@/data/site";
import { opportunities } from "@/data/opportunities";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <div className="site-footer__about">
            <Link className="brand brand--footer" href="/" aria-label="JCI Bahía Blanca, inicio">
              <Image
                className="brand__logo"
                src="/brand/jci-bahia-blanca-white.png"
                alt=""
                width={112}
                height={112}
              />
            </Link>
            <p>{site.description}</p>
          </div>
          <div>
            <h2 className="site-footer__heading">Explorá</h2>
            <ul className="footer-links">
              {mainNavigation.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/alianzas">Alianzas</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
              <li>
                <Link href="/privacidad">Privacidad</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="site-footer__heading">Áreas de oportunidad</h2>
            <ul className="footer-links">
              {opportunities.map((item) => (
                <li key={item.slug}>
                  <Link href={`/oportunidades#${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="site-footer__heading">Conectá</h2>
            <ul className="footer-links">
              {site.socialLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={site.globalWebsite} target="_blank" rel="noreferrer">
                  JCI global
                </a>
              </li>
              <li>
                <a href={site.localWebsite} target="_blank" rel="noreferrer">
                  Sitio institucional local
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} JCI Bahía Blanca</span>
          <span>Desarrollando líderes para un mundo cambiante</span>
        </div>
      </Container>
    </footer>
  );
}
