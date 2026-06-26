import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/solutions/do-insurance")({
  head: () => ({
    meta: [
      { title: "D&O Insurance for Nonprofits — S. Wolf & Associates" },
      {
        name: "description",
        content:
          "A practical guide to Directors & Officers (D&O) insurance for 501(c)(3) nonprofits — what it covers, board liability risks, and how to choose the right policy.",
      },
      {
        property: "og:title",
        content: "D&O Insurance for Nonprofits — A Practical Guide",
      },
      {
        property: "og:description",
        content:
          "How Directors & Officers insurance protects nonprofit boards from personal liability — coverage, claims, and policy selection.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/solutions/do-insurance" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions/do-insurance" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "D&O Insurance for Nonprofits: A Practical Guide",
          description:
            "What Directors & Officers insurance covers for 501(c)(3) organizations, common claims against nonprofit boards, and how to evaluate a policy.",
          about: "Directors and Officers liability insurance for nonprofits",
          author: { "@type": "Organization", name: "S. Wolf & Associates" },
          publisher: { "@type": "Organization", name: "S. Wolf & Associates" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is D&O insurance for nonprofits?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Directors & Officers (D&O) insurance protects the personal assets of a nonprofit's board members and executives if they are sued for decisions made in their roles. It typically covers legal defense costs, settlements, and judgments arising from alleged wrongful acts in the management of the organization.",
              },
            },
            {
              "@type": "Question",
              name: "Do small nonprofits really need D&O coverage?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Most claims against nonprofit boards come from employees, donors, members, or regulators — not the size of the budget. Without D&O, individual directors can be personally liable for defense costs even when the suit is groundless.",
              },
            },
            {
              "@type": "Question",
              name: "What does D&O insurance typically cover?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common coverage includes employment practices (wrongful termination, harassment, discrimination), breach of fiduciary duty, mismanagement of funds, failure to follow bylaws, regulatory investigations, and claims by donors or members. Coverage details vary by carrier and policy form.",
              },
            },
            {
              "@type": "Question",
              name: "How much does nonprofit D&O insurance cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Premiums vary widely based on organization size, revenue, number of employees, programs, and claims history. Many small-to-midsize nonprofits can secure meaningful limits affordably, especially when D&O is bundled with general liability through a specialized nonprofit carrier.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: DOInsurance,
});

const risks = [
  {
    t: "Employment Practices",
    b: "Wrongful termination, harassment, discrimination, and retaliation claims are the most common D&O-adjacent suits against nonprofits.",
  },
  {
    t: "Breach of Fiduciary Duty",
    b: "Allegations that directors failed to act in the organization's best interest, mismanaged funds, or ignored bylaws.",
  },
  {
    t: "Donor & Member Disputes",
    b: "Restricted-gift disputes, allegations of misused contributions, and conflicts with members or beneficiaries.",
  },
  {
    t: "Regulatory & IRS Actions",
    b: "Investigations by state attorneys general, the IRS, or the Department of Labor — defense costs add up fast.",
  },
];

const coverage = [
  {
    t: "Side A",
    b: "Pays directors and officers directly when the nonprofit cannot indemnify them (e.g., insolvency or legally barred indemnification).",
  },
  {
    t: "Side B",
    b: "Reimburses the nonprofit when it indemnifies its directors and officers for covered claims.",
  },
  {
    t: "Side C (Entity Coverage)",
    b: "Covers the organization itself for claims that name the nonprofit as a defendant alongside its directors.",
  },
  {
    t: "EPLI Endorsement",
    b: "Employment Practices Liability — often bundled with nonprofit D&O to cover the most common claim category.",
  },
];

const checklist = [
  "Confirm Side A, B, and C coverage — not just one or two",
  "Check that prior acts (retroactive date) goes back as far as possible",
  "Verify defense costs are paid outside the limit, not inside it",
  "Look for an EPLI endorsement with separate or shared limits",
  "Review exclusions — especially insured-vs-insured, ERISA, and bodily injury",
  "Confirm volunteers, committee members, and employees are insured persons",
  "Ask about extended reporting (tail) options when changing carriers",
];

function DOInsurance() {
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
            <p className="eyebrow">Solutions · Coverage Guide</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              D&amp;O Insurance for Nonprofits
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Directors &amp; Officers liability insurance protects the people who steward your
              mission. Here's a plain-language guide to what it covers, the risks nonprofit boards
              actually face, and how to evaluate a policy built for 501(c)(3) organizations.
            </p>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="container-page grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:py-24">
            <div>
              <p className="eyebrow">What it is</p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
                Personal protection for board members and executives
              </h2>
              <div className="rule-gold mt-6" />
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  D&amp;O insurance covers the personal assets of directors, officers, and — in
                  most nonprofit forms — employees and volunteers when they are sued for decisions
                  made on behalf of the organization. Without it, an individual board member can be
                  personally liable for legal defense costs, even in suits that are ultimately
                  dismissed.
                </p>
                <p>
                  For 501(c)(3) organizations, D&amp;O is rarely a luxury. Most board members are
                  volunteers giving their time; asking them to carry personal liability for the
                  decisions they make on your behalf is a fast way to lose strong governance.
                </p>
              </div>
            </div>
            <aside className="rounded-2xl border border-foreground/10 bg-[color:var(--color-navy-800)]/40 p-8">
              <p className="eyebrow">Quick facts</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>• Roughly 2 in 3 nonprofit D&amp;O claims involve employment practices.</li>
                <li>• Defense costs frequently exceed the alleged damages.</li>
                <li>• Volunteers and committee members are typically insured persons.</li>
                <li>• Coverage can extend to outside boards your directors serve on.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="risks" className="border-b border-border/60 bg-[color:var(--color-navy-900)]/40">
          <div className="container-page py-20 md:py-24">
            <p className="eyebrow">Common Claims</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl tracking-tight md:text-4xl">
              The liability risks nonprofit boards actually face
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {risks.map((r) => (
                <article
                  key={r.t}
                  className="rounded-2xl border border-foreground/10 bg-background/40 p-7"
                >
                  <h3 className="font-serif text-xl tracking-tight">{r.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{r.b}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="container-page py-20 md:py-24">
            <p className="eyebrow">How Coverage Is Structured</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl tracking-tight md:text-4xl">
              The three "sides" of a D&amp;O policy
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {coverage.map((c) => (
                <article
                  key={c.t}
                  className="rounded-2xl border border-foreground/10 bg-[color:var(--color-navy-800)]/40 p-7"
                >
                  <h3 className="font-serif text-xl tracking-tight">{c.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{c.b}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-[color:var(--color-navy-900)]/40">
          <div className="container-page grid gap-12 py-20 md:grid-cols-[1fr_1.1fr] md:py-24">
            <div>
              <p className="eyebrow">Choosing a Policy</p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
                What to look for before you sign
              </h2>
              <p className="mt-6 text-muted-foreground">
                Nonprofit D&amp;O policies vary widely. The headline limit matters less than the
                fine print — exclusions, defense-cost treatment, and who counts as an insured
                person.
              </p>
            </div>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-foreground/10 bg-background/40 px-5 py-4 text-sm text-muted-foreground"
                >
                  <span aria-hidden className="text-[color:var(--color-brass)]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="container-page py-20 md:py-24">
            <p className="eyebrow">Talk to a Specialist</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl tracking-tight md:text-4xl">
              Get D&amp;O coverage built for your mission
            </h2>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              We've placed D&amp;O coverage for hundreds of 501(c)(3) organizations across multiple
              states. Tell us about your board, programs, and budget — we'll come back with a
              policy comparison built around the risks that actually apply to you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                hash="quote"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
              >
                Request a Quote
              </Link>
              <Link
                to="/"
                hash="contact"
                className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:bg-foreground/5"
              >
                Contact the Team
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
