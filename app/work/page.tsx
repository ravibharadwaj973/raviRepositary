import type { Metadata } from "next";
import { WorkPage } from "../components/WorkPage";

export const metadata: Metadata = {
  title: "Work | Ravi Jha",
  alternates: { canonical: "/work" },
};

export default function Work() {
  return <WorkPage />;
}
