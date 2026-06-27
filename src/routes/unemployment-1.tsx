import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const Route = createFileRoute("/unemployment-1")({
  head: () => ({
    meta: [
      { title: "Unemployment Savings for Nonprofits — S. Wolf & Associates" },
      {
        name: "description",
        content:
          "See whether your 501(c)(3) may qualify to reduce unemployment cost through the reimbursable method and nonprofit-focused claims administration.",
      },
      {
        property: "og:title",
        content: "Unemployment Savings for 501(c)(3) Nonprofits",
      },
      {
        property: "og:description",
        content:
          "A practical qualification page for nonprofits exploring lower unemployment cost, stable funding, and the reimbursable method.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/unemployment-1" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/unemployment-1" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Unemployment Savings for Nonprofits",
          description:
            "Qualification overview for 501(c)(3) organizations exploring the reimbursable method as an alternative to state unemployment tax.",
          about: "Nonprofit unemployment savings and the reimbursable method",
          author: { "@type": "Organization", name: "S. Wolf & Associates" },
          publisher: { "@type": "Organization", name: "S. Wolf & Associates" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      },
    ],
  }),
  component: UnemploymentOnePage,
});

const comparison = [
  {
    title: "Current unemployment approach",
    body: "One option only: pay the state unemployment tax (SUI), regardless of whether your organization has few claims or highly seasonal staffing patterns.",
  },
  {
    title: "Lower unemployment cost",
    body: "Eligible nonprofits can self-insure under the reimbursable method, often with nonprofit-focused claims administration and stronger cost visibility.",
  },
];

const qualifiers = [
  "A registered 501(c)(3) nonprofit or governmental employer",
  "Looking to reduce or stabilize unemployment costs",
  "Willing to review claims history and staffing patterns",
  "Interested in a more structured approach than default state unemployment tax",
];

const steps = [
  {
    step: "01",
    title: "Check eligibility",
    body: "We confirm whether your organization can elect the reimbursable method under its state rules and operating structure.",
  },
  {
    step: "02",
    title: "Model the savings",
    body: "We compare your current unemployment-tax approach against reimbursable funding so leadership can review the tradeoffs clearly.",
  },
  {
    step: "03",
    title: "Set up administration",
    body: "If the fit is right, we help structure the program and claims workflow so the transition is controlled, compliant, and understandable.",
  },
];

const faqs = [
  {
    question: "What is the reimbursable method for nonprofits?",
    answer:
      "The reimbursable method allows many 501(c)(3) organizations to opt out of the standard state unemployment tax and instead reimburse the state for actual claims paid. For the right nonprofit, that can create more predictable long-term cost than default tax treatment.",
  },
  {
    question: "Who typically qualifies?",
    answer:
      "Eligibility depends on state rules, but many registered 501(c)(3) organizations and some governmental employers can explore this option. The first step is confirming legal eligibility and reviewing claims history.",
  },
  {
    question: "How much can a nonprofit save?",
    answer:
      "Savings vary by payroll, claims activity, and state rules, but some nonprofits can materially reduce unemployment cost compared with default tax funding. Any estimate should be grounded in actual claims data rather than a generic percentage alone.",
  },
  {
    question: "Does this replace claims administration?",
    answer:
      "No. The reimbursable method changes how unemployment costs are funded, but claims still need professional handling, documentation, and compliance management. Administration quality matters as much as the funding election.",
  },
];

function UnemploymentOnePage() {
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
            <p className="eyebrow">Unemployment Savings · 501(c)(3) Nonprofits</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              See if your organization qualifies
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              Your nonprofit may be overpaying for unemployment. As a 501(c)(3), you may be
              able to opt out of the state unemployment tax and use a reimbursable structure
              instead. This page is a practical starting point for evaluating fit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#quote"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
              >
                See if you qualify
              </a>
              <a
                href="/#contact"
                className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:bg-foreground/5"
              >
                Talk to the Team
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="container-page py-20 md:py-24">
            <p className="eyebrow">Why this matters</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight md:text-4xl">
              Lower unemployment cost starts with the right funding structure
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {comparison.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-foreground/10 bg-background/40 p-7"
                >
                  <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-[color:var(--color-navy-900)]/40">
          <div className="container-page grid gap-12 py-20 md:grid-cols-[1fr_1.1fr] md:py-24">
            <div>
              <p className="eyebrow">Qualification signals</p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
                Organizations that should take a closer look
              </h2>
              <p className="mt-6 text-muted-foreground">
                This is not a fit for every employer. The goal is not to force a strategy, but to
                identify when a nonprofit has the profile to benefit from a more deliberate
                unemployment approach.
              </p>
            </div>
            <ul className="space-y-3">
              {qualifiers.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-foreground/10 bg-background/40 px-5 py-4 text-sm text-muted-foreground"
                >
                  <span aria-hidden className="text-[color:var(--color-brass)]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="container-page py-20 md:py-24">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight md:text-4xl">
              A structured 3-step review for nonprofit unemployment savings
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-2xl border border-foreground/10 bg-[color:var(--color-navy-800)]/40 p-7"
                >
                  <div className="font-serif text-3xl text-[color:var(--color-brass)]">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-serif text-2xl tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-[color:var(--color-navy-900)]/40">
          <div className="container-page py-20 md:py-24">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight md:text-4xl">
              Common questions before making any change
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-foreground/10 bg-background/40 p-7"
                >
                  <h3 className="font-serif text-xl tracking-tight">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="container-page py-20 md:py-24">
            <p className="eyebrow">Next step</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight md:text-4xl">
              See if your nonprofit qualifies for a more stable unemployment strategy
            </h2>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              We can review your current unemployment approach, explain the reimbursable method in
              plain language, and help leadership understand whether this is worth pursuing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#quote"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
              >
                Request a Review
              </a>
              <Link
                to="/solutions/nonprofit-insurance-cost-guide"
                className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:bg-foreground/5"
              >
                Read Cost Guide
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
