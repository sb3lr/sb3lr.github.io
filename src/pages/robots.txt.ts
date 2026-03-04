import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site, url }) => {
  const baseUrl =
    import.meta.env.PUBLIC_SITE_URL?.trim() ||
    site?.toString() ||
    url.origin;

  const sitemapUrl = `${baseUrl.replace(/\/$/, "")}/sitemap.xml`;
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
