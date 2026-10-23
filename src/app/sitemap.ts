import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const routes = [
  "",
  "/nosotros",
  "/oportunidades",
  "/proyectos",
  "/eventos",
  "/novedades",
  "/sumate",
  "/alianzas",
  "/contacto",
  "/privacidad",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configuredSiteUrl) return [];

  const siteUrl = configuredSiteUrl.replace(/\/$/, "");
  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/proyectos/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
