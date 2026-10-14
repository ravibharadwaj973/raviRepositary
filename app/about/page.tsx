import type { Metadata } from "next";
import { AboutPage } from "../components/AboutPage";

export const metadata: Metadata = {
  title: "About Ravi Jha | Jharavi",
  description: "Jharavi is Ravi Jha's full-stack development portfolio. Learn about his business applications, backend systems, AWS infrastructure, and automation. His Google Business profile is named ravi.tech.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return <AboutPage />;
}
