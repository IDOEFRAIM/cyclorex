import type { MetadataRoute } from "next";
import { mainNav, siteUrl } from "@/lib/site-config";

const extraRoutes = ["/devis", "/partenaires", "/galerie"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...mainNav.map((link) => link.href), ...extraRoutes];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
