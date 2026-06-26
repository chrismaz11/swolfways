import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S. Wolf & Associates — Insurance Built for Nonprofits" },
      {
        name: "description",
        content:
          "Independent insurance agency serving 800+ nonprofits since 1988. Structure · Solve · Serve. Property & casualty, employee benefits, unemployment, and RFP services.",
      },
      { property: "og:title", content: "S. Wolf & Associates — We Insure Nonprofits" },
      {
        property: "og:description",
        content:
          "Specialized coverage for 501(c)(3) organizations. Stable pricing, multi-carrier portfolios, live human answers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Approach", href: "#approach" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const solutions = [
  {
    title: "Property & Casualty",
    body: "Comprehensive protection for facilities, events, and personnel — including volunteer liability, special event coverage, and Directors & Officers (D&O) protection.",
  },
  {
    title: "Employee Benefits",
    body: "Tailored benefits packages that attract and retain talent while balancing tight budgets. Modern HR software integrations streamline onboarding and management.",
  },
  {
    title: "Unemployment Insurance",
    body: "Alternative unemployment options and risk management solutions structured to help 501(c)(3) organizations optimize claims and state tax funding.",
  },
  {
    title: "RFP Services",
    body: "Expert guidance to help boards, executive directors, and CFOs navigate complex insurance RFPs, evaluate quotes, and ensure grant compliance.",
  },
];

const structure = [
  { t: "Risk Assessment", b: "Survey decision-makers on organizational risks." },
  { t: "Employee Needs", b: "Gather staff input on coverage and priorities." },
  { t: "Cost Analysis", b: "Evaluate budgets and projected program costs." },
  { t: "Carrier Partnerships", b: "Establish partnerships with qualified carriers." },
];

const carrierCriteria = [
  { t: "Integrity", b: "Honest, transparent practices across all operations." },
  { t: "Technology", b: "Modern tools that streamline client experiences." },
  { t: "Innovation", b: "Forward-thinking solutions for evolving needs." },
  { t: "Teamwork", b: "Strong collaboration for reliable service." },
];

const programs = [
  {
    icon: "📋",
    title: "The Tool Kit",
    body: "Complimentary access to essential organizational documents — contracts, safety policies, waivers, handbooks, and HUD Continuum of Care lease agreements — developed with nonprofit and legal experts.",
  },
  {
    icon: "🤝",
    title: "Community Cares",
    body: "Agency staff volunteer directly with client organizations, assisting with project management, operational tasks, and cross-sector referrals. We bridge for-profit donors with nonprofit recipients.",
  },
  {
    icon: "🌐",
    title: "Network Services",
    body: "Leveraging 25+ years of industry connections, we structurally bridge complementary nonprofits — helping organizations share resources and collaborate on localized community solutions.",
  },
];

const team = [
  {
    name: "Polly Kosyla",
    role: "Founder",
    bio: "Polly, a Northwestern University graduate with a background in Psychology and Education, has dedicated over 25 years to providing tailored insurance solutions for nonprofits. Leveraging her deep understanding of nonprofit operations, she supports over 300 organizations across multiple states, fostering sustainability and participating in their fundraising efforts.",
    phone: "312.502.0023",
    email: "polly@swolfways.com",
  },
  {
    name: "Charlie Kosyla",
    role: "President",
    bio: "Charlie, the youngest agent at S. Wolf, brings fresh energy and a unique perspective from outside the insurance industry. His innovative approach to relationship building and commitment to understanding nonprofits' unique challenges make him a key part of their growth and success.",
    phone: "773.870.5007",
    email: "charlie@swolfways.com",
  },
  {
    name: "Trey Elder",
    role: "Nonprofit Benefit Specialist",
    bio: "Trey Elder is a Chicago-based creative and community organizer with a diverse background in music, hospitality, and nonprofit work. He co-founded Royal Hands, a creative agency, and later launched Quiet Pterodactyl, a nonprofit supporting arts and music access. Elder has booked shows, run events, and promoted artists locally and internationally. He now works as a Benefits Agent with S. Wolf and Associates and serves on committees with the Andersonville Chamber of Commerce.",
    phone: "773.531.8165",
    email: "trey@swolfways.com",
  },
  {
    name: "John Blockinger",
    role: "Account Manager | Nonprofit Retention Specialist",
    bio: "John Blockinger is the Service Manager for our Property and Casualty Insurance division, where he helps clients secure the best coverage and value. With a background in underwriting and marketing for several carriers, he brings deep industry knowledge to the table. John has built strong relationships with insurance providers and negotiates favorable terms on behalf of our clients. He also assists with policy updates and portfolio reviews. He holds the CPCU designation, recognizing his expertise in advanced insurance topics.",
    phone: "773.332.7721",
    email: "john@swolfways.com",
  },
  {
    name: "Alex Averbach",
    role: "Director of Operations",
    bio: "Alex Averbach keeps the wheels turning. As our Director of Operations, she oversees systems, strategy, and efficiency across the board—ensuring everything runs smoothly, on time, and on budget. From streamlining workflows to managing contractors, Alex is the architect of our internal excellence. While she doesn't work directly with clients, her fingerprints are on every success. Think of her as the invisible engine behind our visible results.",
    email: "alex@swolfways.com",
  },
];

const stats = [
  { n: "800+", l: "Organizations Protected", s: "Nonprofits, schools, healthcare providers, and advocacy groups nationwide" },
  { n: "300+", l: "Direct Advisory Clients", s: "Organizations personally advised by President Polly Kosyla" },
  { n: "25+", l: "Years of Expertise", s: "Deep nonprofit insurance specialization since 1988" },
  { n: "11", l: "States Served", s: "Illinois and 10 additional states across the U.S." },
];

const quoteSteps = [
  { n: "01", t: "Organizational Details", b: "Organization name and Federal Employer Identification Number (FEIN #)." },
  { n: "02", t: "Contact Information", b: "Your name, phone number, and email address." },
  { n: "03", t: "Specific Needs", b: "A brief description of how we can help or any unique risks your organization faces." },
  { n: "04", t: "Current Policy Upload", b: "Submit your existing insurance policy digitally for evaluation and follow-up adjustments." },
];

function Home() {
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
        <Hero />
        <About />
        <Solutions />
        <Approach />
        <CarrierSection />
        <Programs />
        <Team />
        <Stats />
        <Quote />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-tight">S. Wolf</span>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">& Associates</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#quote"
          className="hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90 sm:inline-block"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-page grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-16 md:py-28">
        <div>
          <span className="eyebrow">Structure · Solve · Serve</span>
          <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
            We insure<br />
            <em className="font-serif italic text-[color:var(--color-gold)]">nonprofits.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            S. Wolf & Associates is an independent insurance agency dedicated exclusively to the nonprofit sector — understanding your mission, crafting the right coverage, and standing beside your organization at every step.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90">
              Get a Quote
            </a>
            <a href="tel:7737540849" className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold tracking-wide text-foreground transition hover:border-foreground/60">
              Call 773·754·0849
            </a>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Live answers · No automated routing · Since 1988
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-md bg-[color:var(--color-gold)]/15 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-md shadow-2xl ring-1 ring-foreground/10">
            <img src={heroImg} alt="Nonprofit advisory team in a Chicago conference room" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-md bg-card p-5 shadow-xl ring-1 ring-border md:block">
            <div className="font-serif text-3xl">800+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Organizations protected</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <div className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
      {lede && <p className="mt-4 text-lg text-muted-foreground">{lede}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border bg-card">
      <div className="container-page py-24">
        <SectionHeading eyebrow="About Us" title="Built for nonprofits, not corporations." />
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="rounded-md bg-primary p-8 text-primary-foreground md:p-10">
            <h3 className="font-serif text-2xl">Why nonprofits need specialized coverage</h3>
            <p className="mt-4 leading-relaxed text-primary-foreground/85">
              Most nonprofits operate on strict or restricted budgets. Sudden premium spikes create immediate financial hardship. We customize coverage to deliver stable, predictable pricing — protecting your mission without straining your resources.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl">We serve organizations that:</h3>
            <ul className="mt-5 space-y-3 text-base">
              {[
                "Work with vulnerable populations — children, elderly, and at-risk adults",
                "Rely heavily on volunteer participation",
                "Host large fundraising and community events",
                "Employ social workers or transport clients",
                "Manage niche operations like animal rescues",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-gold)]" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="border-t border-border">
      <div className="container-page py-24">
        <SectionHeading
          eyebrow="Core Solutions"
          title="Comprehensive coverage tailored to your mission."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-md bg-border md:grid-cols-2">
          {solutions.map((s, i) => (
            <article key={s.title} className="bg-card p-8 md:p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-[color:var(--color-gold)]">0{i + 1}</span>
                <h3 className="font-serif text-2xl">{s.title}</h3>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="border-t border-border bg-card">
      <div className="container-page py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-20">
          <div>
            <span className="eyebrow">Structure</span>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Building the right foundation.</h2>
            <p className="mt-5 text-muted-foreground">
              We take the time to understand each organization's mission, operations, and risks. Through detailed assessments and open communication, every recommendation is grounded in real needs — not assumptions.
            </p>
            <p className="mt-5 rule-gold text-sm italic text-foreground/80">
              Our structured approach ensures no risk goes unexamined and no opportunity for savings is overlooked — from the first conversation to the final policy.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {structure.map((s, i) => (
              <li key={s.t} className="rounded-md border border-border bg-background p-6">
                <div className="font-serif text-sm text-[color:var(--color-gold)]">Step 0{i + 1}</div>
                <div className="mt-2 font-serif text-xl">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function CarrierSection() {
  return (
    <section className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-page py-24">
        <span className="eyebrow text-primary-foreground/70">Solve</span>
        <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Finding your best coverage.</h2>
        <div className="mt-14 grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <h3 className="font-serif text-xl text-[color:var(--color-gold)]">Carrier Selection Criteria</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {carrierCriteria.map((c) => (
                <div key={c.t} className="rounded-md border border-primary-foreground/15 p-5">
                  <div className="font-serif text-lg">{c.t}</div>
                  <p className="mt-1 text-sm text-primary-foreground/70">{c.b}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl text-[color:var(--color-gold)]">The value of trusted carriers</h3>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="font-serif text-lg">Cost Savings</dt>
                <dd className="text-sm text-primary-foreground/75">Multiple quotes often result in direct premium savings.</dd>
              </div>
              <div>
                <dt className="font-serif text-lg">Market Creation</dt>
                <dd className="text-sm text-primary-foreground/75">Carrier relationships establish new markets for hard-to-place coverages.</dd>
              </div>
              <div>
                <dt className="font-serif text-lg">Streamlined Portfolios</dt>
                <dd className="text-sm text-primary-foreground/75">Consolidating coverage under fewer carriers unlocks comprehensive protection.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="border-t border-border">
      <div className="container-page py-24">
        <SectionHeading
          eyebrow="Lend a Hand Programs"
          title="Service beyond insurance."
          lede="Three programs that extend our partnership past the policy."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="rounded-md border border-border bg-card p-8">
              <div className="text-3xl">{p.icon}</div>
              <h3 className="mt-4 font-serif text-xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="border-t border-border bg-card">
      <div className="container-page py-24">
        <SectionHeading eyebrow="Our Team" title="The people behind your coverage." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-md bg-border md:grid-cols-2 lg:grid-cols-3">
          {team.map((p) => (
            <article key={p.name} className="bg-background p-8">
              <div className="font-serif text-xl">{p.name}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[color:var(--color-gold)]">{p.role}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
              <div className="mt-5 space-y-1 text-sm">
                {p.phone && (
                  <a href={`tel:${p.phone.replace(/\./g, "")}`} className="block text-foreground/80 hover:text-[color:var(--color-gold)]">
                    {p.phone}
                  </a>
                )}
                {p.email && (
                  <a href={`mailto:${p.email}`} className="block text-foreground/80 hover:text-[color:var(--color-gold)]">
                    {p.email}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-t border-border">
      <div className="container-page py-24">
        <SectionHeading eyebrow="Our Reach" title="Protecting missions across the country." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-md bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="bg-card p-8">
              <div className="font-serif text-5xl leading-none text-[color:var(--color-gold)]">{s.n}</div>
              <div className="mt-4 font-serif text-lg">{s.l}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.s}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-muted-foreground">
          Our diverse clientele includes nonprofits, schools, healthcare providers, advocacy groups, and arts organizations — each receiving coverage as unique as their mission.
        </p>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section id="quote" className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-page py-24">
        <span className="eyebrow text-primary-foreground/70">Get a Quote</span>
        <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Start your coverage review today.</h2>
        <p className="mt-4 max-w-2xl text-primary-foreground/80">
          What we need from you to begin.
        </p>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quoteSteps.map((s) => (
            <li key={s.n} className="rounded-md border border-primary-foreground/15 p-6">
              <div className="font-serif text-3xl text-[color:var(--color-gold)]">{s.n}</div>
              <div className="mt-3 font-serif text-lg">{s.t}</div>
              <p className="mt-2 text-sm text-primary-foreground/75">{s.b}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <p className="rule-gold text-primary-foreground/90">
            We review existing policies and provide tailored coverage options — never a one-size-fits-all solution. As an independent agency, we represent multiple carriers to secure maximum value and avoid overpayment.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:contactus@swolfways.com" className="rounded-full bg-[color:var(--color-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition hover:opacity-90">
              Email Us
            </a>
            <a href="tel:7737540849" className="rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold tracking-wide transition hover:border-primary-foreground">
              773·754·0849
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="container-page py-24">
        <SectionHeading eyebrow="Get in Touch" title="Let's talk about your coverage." />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <ContactCard icon="📍" title="Visit Us" lines={["2338 W. Morse Ave, Suite 1C", "Chicago, IL 60645"]} />
          <ContactCard
            icon="📞"
            title="Call Us"
            lines={["773·754·0849", "Live answers — always"]}
            href="tel:7737540849"
          />
          <ContactCard
            icon="✉️"
            title="General Inquiries"
            lines={["contactus@swolfways.com"]}
            href="mailto:contactus@swolfways.com"
          />
        </div>
        <div className="mt-10 rounded-md border border-border bg-card p-8">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Direct team contacts</div>
          <div className="mt-4 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <a className="hover:text-[color:var(--color-gold)]" href="mailto:polly@swolfways.com">Polly Kosyla</a>
            <a className="hover:text-[color:var(--color-gold)]" href="mailto:charlie@swolfways.com">Charlie Kosyla</a>
            <a className="hover:text-[color:var(--color-gold)]" href="mailto:trey@swolfways.com">Trey Elder</a>
            <a className="hover:text-[color:var(--color-gold)]" href="mailto:john@swolfways.com">John Blockinger</a>
            <a className="hover:text-[color:var(--color-gold)]" href="mailto:alex@swolfways.com">Alex Averbach</a>
          </div>
        </div>
        <blockquote className="mt-16 max-w-3xl rule-gold">
          <p className="font-serif text-2xl italic leading-snug md:text-3xl">
            "Having insurance is important — but having the <em>right</em> insurance is essential."
          </p>
          <footer className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            — Polly Kosyla, Founder
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  lines,
  href,
}: {
  icon: string;
  title: string;
  lines: string[];
  href?: string;
}) {
  const inner = (
    <>
      <div className="text-2xl">{icon}</div>
      <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">{title}</div>
      <div className="mt-3 space-y-1">
        {lines.map((l) => (
          <div key={l} className="font-serif text-lg">{l}</div>
        ))}
      </div>
    </>
  );
  const cls = "block rounded-md border border-border bg-card p-8 transition hover:border-[color:var(--color-gold)]";
  return href ? <a href={href} className={cls}>{inner}</a> : <div className={cls}>{inner}</div>;
}

function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-12 text-primary-foreground/80">
      <div className="container-page grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          <div className="font-serif text-base">S. WOLF</div>
          <address className="not-italic text-sm leading-relaxed">
            2338 W. Morse 1C<br />
            Chicago, IL 60645
          </address>
          <div className="text-sm">
            <a href="mailto:contactus@swolfways.com" className="hover:text-primary-foreground">contactus@swolfways.com</a>
            <span className="mx-2">|</span>
            <a href="tel:7737540849" className="hover:text-primary-foreground">773-754-0849</a>
          </div>
          <div>© {new Date().getFullYear()} — Insurance built for nonprofits. Since 1988.</div>
        </div>
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/70">Stay Updated with the Latest</div>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email*"
              className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:outline-none"
            />
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 accent-[color:var(--color-gold)]"
              />
              <span>Yes, subscribe me to your newsletter.</span>
            </label>
            <button
              type="submit"
              className="rounded-full bg-[color:var(--color-gold)] px-5 py-2 text-sm font-semibold uppercase tracking-wider text-primary transition hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
