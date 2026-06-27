export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-12 text-primary-foreground/80">
      <div className="container-page grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          <div className="font-serif text-base">S. WOLF</div>
          <address className="not-italic text-sm leading-relaxed">
            2338 W. Morse 1C
            <br />
            Chicago, IL 60645
          </address>
          <div className="text-sm">
            <a href="mailto:contactus@swolfways.com" className="hover:text-primary-foreground">
              contactus@swolfways.com
            </a>
            <span className="mx-2">|</span>
            <a href="tel:7737540849" className="hover:text-primary-foreground">
              773-754-0849
            </a>
          </div>
          <div className="text-sm">© 2024 by S. Wolf and Associates.</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="/privacy-policy" className="hover:text-primary-foreground">
              Privacy Policy
            </a>
            <a href="/accessibility-statement" className="hover:text-primary-foreground">
              Accessibility Statement
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
            Stay Updated with the Latest
          </div>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
