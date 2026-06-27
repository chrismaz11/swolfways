import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/accessibility-statement")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement — S. Wolf & Associates" },
      {
        name: "description",
        content: "Read the Accessibility Statement for S. Wolf & Associates.",
      },
    ],
    links: [{ rel: "canonical", href: "/accessibility-statement" }],
  }),
  component: AccessibilityStatement,
});

function AccessibilityStatement() {
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
        <section className="border-b border-border/60">
          <div className="container-page py-20 md:py-24">
            <p className="eyebrow">Legal</p>
            <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Accessibility Statement
            </h1>

            <div className="mt-10 space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                S. Wolf &amp; Associates is committed to making this website accessible and usable
                for all visitors, including people with disabilities.
              </p>

              <p className="leading-relaxed">
                We work to improve accessibility by following recognized best practices, using clear
                structure and navigation, maintaining readable contrast and typography, and ensuring
                core functionality is available through keyboard and assistive technologies where
                possible.
              </p>

              <p className="leading-relaxed">
                If you experience difficulty accessing any part of this site, please contact us so
                we can provide the information you need and address the issue promptly.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
