import type { Metadata } from "next";
import { ContactPage } from "../components/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Jharavi - Ravi Jha",
  description: "Contact Ravi Jha through Jharavi to discuss business applications, CRM systems, cloud infrastructure, and automation. Google Business profile: ravi.tech.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return <ContactPage />;
}
