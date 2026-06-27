import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { blogPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Nonprofit Insurance Blog — S. Wolf & Associates" },
      {
        name: "description",
        content:
          "Practical articles for nonprofit leaders on insurance, unemployment savings, board oversight, and risk management.",
      },
      { property: "og:title", content: "Nonprofit Insurance Blog — S. Wolf & Associates" },
      {
        property: "og:description",
        content:
          "One publishing hub for nonprofit insurance articles, unemployment strategy, and board-level risk guidance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

function BlogIndex() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to Main Content
      </a>
      <main id="main-content" className="min-h-screen bg-background text-foreground">
        <Header />

        <section className="border-b border-border/60 bg-[color:var(--color-navy-900)]/40">
          <div className="container-page py-20 md:py-28">
            <p className="eyebrow">Blog</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Practical guidance for nonprofit insurance and operations
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              Clear, practical articles for nonprofit leaders on insurance, employee benefits,
              unemployment cost strategy, board oversight, and risk management.
            </p>
          </div>
        </section>

        <section className="container-page py-20 md:py-24">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-foreground/10 bg-card p-8 md:p-10"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="eyebrow">{post.category}</span>
                  <span>{dateFormatter.format(new Date(post.publishedAt))}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-4 font-serif text-3xl tracking-tight">
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-3xl text-muted-foreground">{post.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[color:var(--color-navy-900)]/40 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="rounded-full bg-primary px-5 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
                  >
                    Read Article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
