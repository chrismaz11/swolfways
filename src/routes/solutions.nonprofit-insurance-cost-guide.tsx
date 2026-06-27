import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/solutions/nonprofit-insurance-cost-guide")({
  head: () => ({
    meta: [
      { title: "Nonprofit Insurance Cost Guide — S. Wolf & Associates" },
      {
        name: "description",
        content:
          "A practical nonprofit insurance cost guide for 501(c)(3) organizations. Learn typical premium ranges, what drives pricing, and how to lower cost without reducing protection.",
      },
      {
        property: "og:title",
        content: "Nonprofit Insurance Cost Guide — 2026 Planning Resource",
      },
      {
        property: "og:description",
        content:
          "Understand nonprofit insurance pricing: cost ranges, rating factors, and budget planning tips for boards and finance leaders.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "/solutions/nonprofit-insurance-cost-guide",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "/solutions/nonprofit-insurance-cost-guide",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Nonprofit Insurance Cost Guide",
          description:
            "Cost planning guide for 501(c)(3) insurance programs, including what affects premiums and how to reduce total cost of risk.",
          author: { "@type": "Organization", name: "S. Wolf & Associates" },
          publisher: { "@type": "Organization", name: "S. Wolf & Associates" },
          about: "Nonprofit insurance cost planning",
        }),
      },
    ],
  }),
  component: NonprofitInsuranceCostGuide,
});

const pricingFactors = [
  {
    title: "Organization size and annual revenue",
    body: "Higher revenue and larger operations usually increase premiums because the potential claim severity and exposure are greater.",
  },
  {
    title: "Payroll, headcount, and volunteer activity",
    body: "Employee count drives workers compensation and employment-practice risk; large volunteer programs can also increase liability exposure.",
  },
  {
    title: "Programs, services, and client population",
    body: "Direct-service programs, youth services, transportation, healthcare-adjacent work, and overnight operations often carry higher risk ratings.",
  },
  {
    title: "Property values and locations",
    body: "Building values, construction type, geographic hazards, and security controls all influence property and crime pricing.",
  },
  {
    title: "Claims history and open incidents",
    body: "Frequent or severe prior claims generally raise rates; a documented risk-management plan helps offset loss trends.",
  },
  {
    title: "Coverage structure and limits",
    body: "Higher limits, broader endorsements, lower deductibles, and specialty coverages increase premium but can reduce long-term financial risk.",
  },
];

const planningRanges = [
  {
    segment: "Small nonprofit",
    profile: "Under $1M revenue, limited staff, low-hazard operations",
    range: "$2,500 - $9,000 / year",
  },
  {
    segment: "Growing organization",
    profile: "$1M-$5M revenue, multi-program operations, active events",
    range: "$9,000 - $30,000 / year",
  },
  {
    segment: "Large or complex nonprofit",
    profile: "$5M+ revenue, multiple sites, higher-risk programming",
    range: "$30,000+ / year",
  },
];

const costControlTips = [
  "Bundle compatible coverages with nonprofit-focused carriers when possible.",
  "Use board-approved risk controls (driver screening, incident reporting, abuse prevention, cybersecurity protocols).",
  "Review payroll, property values, and operational changes before renewal to avoid incorrect rating.",
  "Set deductibles strategically to balance premium savings against cash-flow tolerance.",
  "Start renewal marketing early so carriers can underwrite thoroughly and compete.",
];

function NonprofitInsuranceCostGuide() {
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
            <p className="eyebrow">Solutions · Cost Planning</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Nonprofit Insurance Cost Guide
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Insurance cost is one of the hardest nonprofit budget variables to forecast. This
              guide explains what drives premium, typical annual ranges, and practical ways to lower
              cost without sacrificing mission-critical protection.
            </p>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="container-page py-20 md:py-24">
            <p className="eyebrow">Budget Expectations</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight md:text-4xl">
              Typical annual insurance ranges for nonprofits
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-foreground/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-[color:var(--color-navy-900)]/40">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Organization type</th>
                    <th className="px-5 py-4 font-semibold">Profile</th>
                    <th className="px-5 py-4 font-semibold">Typical annual range</th>
                  </tr>
                </thead>
                <tbody>
                  {planningRanges.map((row) => (
                    <tr key={row.segment} className="border-t border-foreground/10">
                      <td className="px-5 py-4 font-medium">{row.segment}</td>
                      <td className="px-5 py-4 text-muted-foreground">{row.profile}</td>
                      <td className="px-5 py-4">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              These ranges are directional planning benchmarks, not quotes. Final pricing depends on
              operations, claims, limits, and carrier appetite.
            </p>
          </div>
        </section>

        <section className="border-b border-border/60 bg-[color:var(--color-navy-900)]/40">
          <div className="container-page py-20 md:py-24">
            <p className="eyebrow">Pricing Drivers</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight md:text-4xl">
              What actually changes nonprofit insurance cost
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {pricingFactors.map((factor) => (
                <article
                  key={factor.title}
                  className="rounded-2xl border border-foreground/10 bg-background/40 p-7"
                >
                  <h3 className="font-serif text-xl tracking-tight">{factor.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{factor.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="container-page grid gap-10 py-20 md:grid-cols-[1fr_1.1fr] md:py-24">
            <div>
              <p className="eyebrow">Cost Control</p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
                How to reduce premium without cutting needed coverage
              </h2>
            </div>
            <ul className="space-y-3">
              {costControlTips.map((tip) => (
                <li
                  key={tip}
                  className="flex gap-3 rounded-xl border border-foreground/10 bg-[color:var(--color-navy-800)]/40 px-5 py-4 text-sm text-muted-foreground"
                >
                  <span aria-hidden className="text-[color:var(--color-brass)]">
                    ✓
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="container-page py-20 md:py-24">
            <p className="eyebrow">Next Step</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl tracking-tight md:text-4xl">
              Build a coverage budget tied to your actual risk profile
            </h2>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              We can benchmark your current program, identify avoidable spend, and map coverage to
              your board priorities, grant obligations, and operational reality.
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
                to="/solutions/do-insurance"
                className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:bg-foreground/5"
              >
                Read D&amp;O Guide
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
