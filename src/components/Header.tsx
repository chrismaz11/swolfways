import { Link } from "@tanstack/react-router";

const nav = [
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "D&O Guide", href: "/solutions/do-insurance" },
  {
    label: "Cost Guide",
    href: "/solutions/nonprofit-insurance-cost-guide",
  },
  { label: "Approach", href: "/#approach" },
  { label: "Team", href: "/#team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/#contact" },
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
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
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
