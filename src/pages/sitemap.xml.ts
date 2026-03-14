import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const staticRoutes = ["/", "/achievements", "/tools", "/tutorials"];

const toAbsoluteUrl = (baseUrl: string, path: string) =>
  new URL(path, `${baseUrl.replace(/\/$/, "")}/`).toString();

export const GET: APIRoute = async ({ site, url }) => {
  const baseUrl =
    import.meta.env.PUBLIC_SITE_URL?.trim() ||
    site?.toString() ||
    url.origin;

  const tutorials = await getCollection("tutorials");
  const tools = await getCollection("cybertools");

  const urls = [
    ...staticRoutes,
    ...tutorials.map((entry) => `/tutorials/${entry.slug}`),
    ...tools.map((entry) => `/tools/${entry.slug}`),
  ]
    .map((path) => toAbsoluteUrl(baseUrl, path))
    .map(
      (loc) => `<url><loc>${loc}</loc><changefreq>weekly</changefreq></url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
