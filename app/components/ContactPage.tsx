import { Footer } from "./Footer";
import { Header } from "./Header";
import { RequirementForm } from "./RequirementForm";
import { SiteBackground } from "./SiteBackground";

export function ContactPage() {
  return (
    <main className="contact-page">
      <SiteBackground />
      <section className="portfolio-stage is-ready">
        <Header />
        <RequirementForm />
        <Footer />
      </section>
    </main>
  );
}
