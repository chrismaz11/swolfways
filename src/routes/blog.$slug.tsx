import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    const title = post ? `${post.title} — S. Wolf & Associates` : "Blog Article — S. Wolf & Associates";
    const description =
      post?.description ??
      "Practical nonprofit insurance guidance from S. Wolf & Associates.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: post
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                description: post.description,
                datePublished: post.publishedAt,
                author: { "@type": "Organization", name: "S. Wolf & Associates" },
                publisher: { "@type": "Organization", name: "S. Wolf & Associates" },
                keywords: post.tags.join(", "),
              }),
            },
          ]
        : [],
    };
  },
  component: BlogPostPage,
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background text-foreground">
          <section className="container-page py-24">
            <p className="eyebrow">Blog</p>
            <h1 className="mt-4 font-serif text-4xl tracking-tight">Article not found</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              The article you are looking for does not exist or may have been moved.
            </p>
            <div className="mt-8">
              <Link
                to="/blog"
                className="rounded-full bg-primary px-5 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
              >
                View Blog
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

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

        <article>
          <section className="border-b border-border/60 bg-[color:var(--color-navy-900)]/40">
            <div className="container-page py-20 md:py-28">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="eyebrow">{post.category}</span>
                <span>{dateFormatter.format(new Date(post.publishedAt))}</span>
                <span>{post.readingTime}</span>
              </div>
              <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{post.excerpt}</p>
            </div>
          </section>

          <section className="container-page grid gap-12 py-20 md:grid-cols-[1fr_320px] md:py-24">
            <div className="space-y-12">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-3xl tracking-tight">{section.heading}</h2>
                  <div className="mt-5 space-y-4 text-muted-foreground">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-6 space-y-3">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-xl border border-foreground/10 bg-card px-5 py-4 text-sm text-muted-foreground"
                        >
                          <span aria-hidden className="text-[color:var(--color-brass)]">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-foreground/10 bg-[color:var(--color-navy-900)]/40 p-6">
                <p className="eyebrow">Need a practical review?</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Talk with S. Wolf & Associates about nonprofit insurance, benefits, unemployment
                  cost strategy, and renewal planning.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/#quote"
                    className="rounded-full bg-primary px-5 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
                  >
                    Request a Quote
                  </a>
                  <Link
                    to="/unemployment-1"
                    className="rounded-full border border-foreground/20 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:bg-foreground/5"
                  >
                    Unemployment Guide
                  </Link>
                </div>
              </div>
            </aside>
          </section>
        </article>

        <section className="border-t border-border/60 bg-[color:var(--color-navy-900)]/40">
          <div className="container-page py-20 md:py-24">
            <p className="eyebrow">More from the blog</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <article key={item.slug} className="rounded-2xl border border-foreground/10 bg-card p-7">
                  <h2 className="font-serif text-2xl tracking-tight">
                    <Link to="/blog/$slug" params={{ slug: item.slug }} className="hover:underline">
                      {item.title}
                    </Link>
                  </h2>
                  <p className="mt-4 text-sm text-muted-foreground">{item.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
