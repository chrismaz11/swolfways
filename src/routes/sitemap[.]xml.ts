import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { blogPosts } from "@/lib/blog";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const baseUrl = new URL(request.url).origin;
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/blog", changefreq: "weekly", priority: "0.9" },
          { path: "/testimonials", changefreq: "monthly", priority: "0.8" },
          { path: "/unemployment-1", changefreq: "monthly", priority: "0.8" },
          { path: "/solutions/do-insurance", changefreq: "monthly", priority: "0.8" },
          {
            path: "/solutions/nonprofit-insurance-cost-guide",
            changefreq: "monthly",
            priority: "0.8",
          },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.5" },
          { path: "/accessibility-statement", changefreq: "yearly", priority: "0.5" },
          ...blogPosts.map((post) => ({
            path: `/blog/${post.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...blogPosts.flatMap((post) =>
            (post.legacySlugs ?? []).map((legacySlug) => ({
              path: `/post/${legacySlug}`,
              changefreq: "monthly" as const,
              priority: "0.4",
            })),
          ),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${baseUrl}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
