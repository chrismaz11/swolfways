import { createFileRoute, redirect } from "@tanstack/react-router";
import { getBlogPostByLegacySlug } from "@/lib/blog";

export const Route = createFileRoute("/post/$legacySlug")({
  beforeLoad: ({ params }) => {
    const post = getBlogPostByLegacySlug(params.legacySlug);

    if (post) {
      throw redirect({
        to: "/blog/$slug",
        params: { slug: post.slug },
      });
    }
  },
  component: LegacyPostFallback,
});

function LegacyPostFallback() {
  return null;
}
