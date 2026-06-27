import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — S. Wolf & Associates" },
      {
        name: "description",
        content: "Read the Privacy Policy for S. Wolf & Associates.",
      },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
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
            <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Privacy Policy</h1>

            <div className="mt-10 space-y-10 text-muted-foreground">
              <section>
                <h2 className="font-serif text-2xl text-foreground">A Legal Disclaimer</h2>
                <p className="mt-3 leading-relaxed">
                  The information on this page is provided as a general overview and does not
                  constitute legal advice. Because privacy requirements vary by jurisdiction and
                  business model, you should consult qualified legal counsel to ensure your privacy
                  practices and disclosures are appropriate for your organization.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground">Privacy Policy - The Basics</h2>
                <p className="mt-3 leading-relaxed">
                  A privacy policy explains how a website collects, uses, stores, processes, and
                  shares personal information from visitors and customers. It also describes the
                  site&apos;s commitment to protecting personal data and the safeguards used to
                  support privacy.
                </p>
                <p className="mt-4 leading-relaxed">
                  Different jurisdictions have different legal requirements for privacy disclosures.
                  You are responsible for ensuring your policy complies with the laws applicable to
                  your operations, users, and location.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground">
                  What to Include in the Privacy Policy
                </h2>
                <p className="mt-3 leading-relaxed">
                  A strong policy typically covers: what information is collected and how; why the
                  information is collected; retention and security practices; whether and how data is
                  shared with third parties; how users can access, update, or request deletion of
                  data; and any specific practices related to children&apos;s information.
                </p>
                <p className="mt-4 leading-relaxed">
                  If needed, this page can be expanded with contact details, cookie practices,
                  jurisdiction-specific rights, and opt-out instructions.
                </p>
              </section>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
