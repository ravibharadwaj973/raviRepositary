import type { Metadata } from "next";
import { ContactPage } from "../components/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Ravi Jha",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return <ContactPage />;
}
