import type { Metadata } from "next";
import { AboutPage } from "../components/AboutPage";

export const metadata: Metadata = {
  title: "About | Ravi Jha",
  alternates: { canonical: "/about" },
};

export default function About() {
  return <AboutPage />;
}
