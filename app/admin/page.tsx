import { cookies } from "next/headers";
import { AdminDashboard } from "../components/AdminDashboard";
import { AdminLogin } from "../components/AdminLogin";
import { SiteBackground } from "../components/SiteBackground";
import { ADMIN_COOKIE, isValidAdminToken } from "../lib/adminAuth";
import { getPortfolioDb } from "../lib/mongodb";
import type { RequirementSubmission } from "../types/requirements";

async function getRequirements(): Promise<RequirementSubmission[]> {
  const db = await getPortfolioDb();
  const requirements = await db
    .collection("requirements")
    .find({})
    .sort({ createdAt: -1 })
    .limit(100)
    .toArray();

  return requirements.map((item) => ({
    _id: item._id.toString(),
    name: item.name,
    phone: item.phone,
    email: item.email,
    requirementType: item.requirementType,
    message: item.message,
    status: item.status,
    createdAt: item.createdAt?.toISOString?.() || new Date().toISOString(),
  }));
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isLoggedIn = isValidAdminToken(cookieStore.get(ADMIN_COOKIE)?.value);
  const requirements = isLoggedIn ? await getRequirements() : [];

  return (
    <main className="admin-page">
      <SiteBackground />
      <section className="portfolio-stage is-ready">
        {isLoggedIn ? <AdminDashboard requirements={requirements} /> : <AdminLogin />}
      </section>
    </main>
  );
}
