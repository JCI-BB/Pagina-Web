import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jci",
});

export const metadata: Metadata = {
  title: {
    default: "JCI Bahía Blanca | Desarrollando líderes",
    template: "%s | JCI Bahía Blanca",
  },
  description:
    "JCI Bahía Blanca ofrece oportunidades para desarrollar liderazgo, impulsar proyectos, conectar personas y generar cambios positivos",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "JCI Bahía Blanca",
    title: "JCI Bahía Blanca | Desarrollando líderes",
    description:
      "Oportunidades para desarrollar liderazgo y generar cambios positivos en la comunidad",
  },
  icons: {
    icon: "/brand/jci-bahia-blanca-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-AR" className={plusJakartaSans.variable} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#contenido">Ir al contenido</a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
