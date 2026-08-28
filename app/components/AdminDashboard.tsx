"use client";

import type { RequirementSubmission } from "../types/requirements";

type AdminDashboardProps = {
  requirements: RequirementSubmission[];
};

export function AdminDashboard({ requirements }: AdminDashboardProps) {
  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.reload();
  }

  return (
    <section className="admin-dashboard" aria-labelledby="admin-dashboard-title">
      <div className="admin-dashboard-header">
        <div>
          <p className="eyebrow">Admin</p>
          <h1 id="admin-dashboard-title">Submitted requirements</h1>
        </div>
        <button className="secondary-action" onClick={logout} type="button">
          Logout
        </button>
      </div>

      <div className="admin-requirements-list">
        {requirements.length === 0 ? (
          <p className="admin-empty">No requirements submitted yet.</p>
        ) : (
          requirements.map((item) => (
            <article className="admin-requirement-card" key={item._id}>
              <div className="admin-card-top">
                <span>{item.requirementType}</span>
                <time dateTime={item.createdAt}>
                  {new Intl.DateTimeFormat("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  }).format(new Date(item.createdAt))}
                </time>
              </div>
              <h2>{item.name}</h2>
              <div className="admin-contact-row">
                {item.phone && <a href={`tel:${item.phone}`}>{item.phone}</a>}
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </div>
              <p>{item.message}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
