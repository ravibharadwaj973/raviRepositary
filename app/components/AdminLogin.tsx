"use client";

import { FormEvent, useState } from "react";

export function AdminLogin() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
      }),
    });

    const data = await response.json().catch(() => ({ message: "Login failed." }));
    setLoading(false);

    if (!response.ok) {
      setMessage(data.message || "Invalid credentials.");
      return;
    }

    window.location.reload();
  }

  return (
    <section className="admin-login-shell" aria-labelledby="admin-login-title">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <p className="eyebrow">Admin</p>
        <h1 id="admin-login-title">Requirement dashboard login</h1>
        <label>
          <span>Admin ID</span>
          <input name="username" type="text" autoComplete="username" required />
        </label>
        <label>
          <span>Password</span>
          <input name="password" type="password" autoComplete="current-password" required />
        </label>
        <button className="primary-action requirement-submit" disabled={loading} type="submit">
          <span>{loading ? "Checking" : "Login"}</span>
          <span aria-hidden="true">→</span>
        </button>
        {message && <p className="form-message error">{message}</p>}
      </form>
    </section>
  );
}
