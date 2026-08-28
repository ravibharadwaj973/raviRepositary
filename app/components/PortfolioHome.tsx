"use client";

import { useEffect, useState } from "react";
import { ApproachSection } from "./ApproachSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { LoaderScreen } from "./LoaderScreen";
import { ProjectsSection } from "./ProjectsSection";
import { RequirementForm } from "./RequirementForm";
import { SiteBackground } from "./SiteBackground";
import { SkillsSection } from "./SkillsSection";

export function PortfolioHome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 4600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <SiteBackground />
      {loading && <LoaderScreen />}

      <section className={`portfolio-stage ${loading ? "is-waiting" : "is-ready"}`}>
        <Header />
        <HeroSection />
        <SkillsSection />
        <ApproachSection />
        <ProjectsSection />
        <RequirementForm />
        <Footer />
      </section>
    </main>
  );
}
