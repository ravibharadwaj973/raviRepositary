import type { Metadata } from "next";
import { WorkPage } from "../components/WorkPage";

export const metadata: Metadata = {
  title: "Work | Jharavi - Ravi Jha",
  description: "Explore Ravi Jha's work on Jharavi: CRM systems, cloud infrastructure, hospital management, and team collaboration applications.",
  alternates: { canonical: "/work" },
};

export default function Work() {
  return <WorkPage />;
}
