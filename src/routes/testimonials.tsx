import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import testimonialsImg from "@/assets/testimonials-hero.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — S. Wolf & Associates" },
      {
        name: "description",
        content:
          "Read what nonprofit leaders say about S. Wolf & Associates. Trusted insurance advisors serving 501(c)(3) organizations since 1988.",
      },
      { property: "og:title", content: "Client Testimonials — S. Wolf & Associates" },
      {
        property: "og:description",
        content:
          "Hear from nonprofit leaders about their experience with S. Wolf & Associates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: testimonialsImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: testimonialsImg },
    ],
  }),
  component: Testimonials,
});

const testimonials = [
  {
    quote:
      "Polly and her team have been serving our non-profit for several years and they are always very reliable. Her team is super helpful whenever we have any questions. They are very knowledgable and trusted advisors with everything non profit insurance related.",
    author: "Diego Martin Gonzalez",
  },
  {
    quote:
      "Highly professional and progressive office. Polly and her associates are one of the best in the industry.",
    author: "Brie Edwards",
  },
  {
    quote:
      "Our non-profit organization has benefitted greatly over the past several years due to the professionalism and personal attention of Polly Kosyla and her team. Our questions are always responded to immediately and she consistently acts in our best interest concerning our insurance needs. I highly recommend Polly and S. Wolf & Associates.",
    author: "David Terrazino",
  },
];

function Testimonials() {
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
        <section className="border-b border-border">
          <div className="container-page grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16 md:py-28">
            <div>
              <span className="eyebrow">Testimonials</span>
              <h1 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Trusted by the missions we serve.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                At S. Wolf & Associates, we believe the right partnerships solve problems before they
                start. That’s why we work with top-tier insurance carriers and maintain lasting
                relationships with the organizations we serve. On this page, you’ll find stories from
                our clients and a look at the trusted providers we work with. Because the company you
                keep matters when it comes to protecting your mission.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-md bg-[color:var(--color-gold)]/15 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-md shadow-2xl ring-1 ring-foreground/10">
                <img
                  src={testimonialsImg}
                  alt="Professional insurance advisors meeting with nonprofit clients"
                  className="aspect-[4/3] w-full object-cover"
                  width={1280}
                  height={960}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="container-page py-24">
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <article key={t.author} className="rounded-md border border-border bg-card p-8">
                <div className="font-serif text-3xl text-[color:var(--color-gold)]">0{i + 1}</div>
                <blockquote className="mt-6">
                  <p className="leading-relaxed text-muted-foreground">“{t.quote}”</p>
                  <footer className="mt-6 text-sm font-semibold uppercase tracking-wider text-foreground">
                    — {t.author}
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
