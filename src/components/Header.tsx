import { Link } from "@tanstack/react-router";

const nav = [
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Approach", href: "/#approach" },
  { label: "Team", href: "/#team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/#contact" },
];

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "Unemployment Savings", href: "/unemployment-1" },
  { label: "D&O Guide", href: "/solutions/do-insurance" },
  {
    label: "Cost Guide",
    href: "/solutions/nonprofit-insurance-cost-guide",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-tight">S. Wolf</span>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            & Associates
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
          <details className="group relative">
            <summary className="list-none cursor-pointer text-sm text-muted-foreground transition hover:text-foreground">
              Resources
            </summary>
            <div className="absolute right-0 top-full mt-3 min-w-56 rounded-xl border border-border bg-card p-2 shadow-lg">
              {resources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
                >
                  {resource.label}
                </a>
              ))}
            </div>
          </details>
        </nav>
        <a
          href="/#quote"
          className="hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90 sm:inline-block"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
}
