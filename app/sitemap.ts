import type { MetadataRoute } from "next";
import { PROJECTS_DATA, INSIGHTS_DATA } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/work",
    "/systems",
    "/about",
    "/process",
    "/contact",
    "/faq",
    "/insights",
    ...PROJECTS_DATA.map((project) => `/work/${project.slug}`),
    ...INSIGHTS_DATA.map((article) => `/insights/${article.slug}`),
  ];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
