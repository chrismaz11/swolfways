import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { blogPosts } from "@/lib/blog";

export const Route = createFileRoute("/social-feed.json")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const baseUrl = new URL(request.url).origin;

        const payload = {
          generatedAt: new Date().toISOString(),
          source: `${baseUrl}/blog`,
          rss: `${baseUrl}/rss.xml`,
          posts: blogPosts.map((post) => ({
            slug: post.slug,
            url: `${baseUrl}/blog/${post.slug}`,
            title: post.title,
            description: post.description,
            excerpt: post.excerpt,
            publishedAt: post.publishedAt,
            category: post.category,
            tags: post.tags,
            social: {
              linkedin: `${post.social.linkedin} ${baseUrl}/blog/${post.slug}`,
              facebook: `${post.social.facebook} ${baseUrl}/blog/${post.slug}`,
              x: `${post.social.x} ${baseUrl}/blog/${post.slug}`,
              hashtags: post.social.hashtags,
            },
          })),
        };

        return Response.json(payload, {
          headers: {
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
