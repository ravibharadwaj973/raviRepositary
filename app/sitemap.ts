import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { projects } from "./projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicPaths = ["/", "/work", "/about", "/projects", "/contact"];

  return [
    ...publicPaths.map((path) => ({ url: new URL(path, SITE_URL).href })),
    ...projects.map((project) => ({
      url: `${SITE_URL}/project/${project.id}`,
    })),
  ];
}
