import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { blogPosts } from "@/lib/blog";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const baseUrl = new URL(request.url).origin;

        const items = blogPosts
          .map((post) => {
            const url = `${baseUrl}/blog/${post.slug}`;
            return [
              "    <item>",
              `      <title>${escapeXml(post.title)}</title>`,
              `      <link>${url}</link>`,
              `      <guid>${url}</guid>`,
              `      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>`,
              `      <description>${escapeXml(post.description)}</description>`,
              "    </item>",
            ].join("\n");
          })
          .join("\n");

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<rss version="2.0">',
          "  <channel>",
          "    <title>S. Wolf & Associates Blog</title>",
          `    <link>${baseUrl}/blog</link>`,
          "    <description>Practical nonprofit insurance and unemployment strategy guidance.</description>",
          ...items ? [items] : [],
          "  </channel>",
          "</rss>",
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
