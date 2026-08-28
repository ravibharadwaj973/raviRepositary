"use client";

import { FormEvent, useState } from "react";
import type { RequirementType } from "../types/requirements";

const requirementTypes: RequirementType[] = [
  "Business Application",
  "CRM System",
  "Automation",
  "Cloud Infrastructure",
  "API Integration",
  "Other",
];

type SubmitState = "idle" | "submitting" | "success" | "error";

export function RequirementForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/requirements", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        requirementType: formData.get("requirementType"),
        message: formData.get("message"),
      }),
    });

    const data = await response.json().catch(() => ({ message: "Something went wrong." }));

    if (!response.ok) {
      setState("error");
      setMessage(data.message || "Unable to submit requirement.");
      return;
    }

    form.reset();
    setState("success");
    setMessage("Thanks for sharing your requirement. I will connect with you as soon as possible.");
  }

  return (
    <section className="requirement-section" id="contact" aria-labelledby="requirement-title">
      <div className="requirement-copy">
        <p className="eyebrow">Let&apos;s talk</p>
        <h2 id="requirement-title">Build a better system.</h2>
        <p>
          Whether you need a business application, CRM system, automation,
          integration, or cloud infrastructure, you can get in touch to discuss
          the requirements and possible approach.
        </p>
      </div>

      <form className="requirement-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" required />
          </label>

          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="your@email.com" required />
          </label>

          <label>
            <span>Phone</span>
            <input name="phone" type="tel" placeholder="9311891503" />
          </label>

          <label>
            <span>What are you looking to build?</span>
            <select name="requirementType" defaultValue="Business Application" required>
              {requirementTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label>
          <span>Tell me about the project</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Describe the problem, workflow, requirements, or system you want to improve."
            required
          />
        </label>

        <div className="form-actions">
          <button className="primary-action requirement-submit" disabled={state === "submitting"} type="submit">
            <span>{state === "submitting" ? "Sending" : "Start a Conversation"}</span>
            <span aria-hidden="true">→</span>
          </button>
          {message && <p className={`form-message ${state}`}>{message}</p>}
        </div>

        <div className="direct-connect" aria-label="Direct contact options">
          <p>Or connect directly</p>
          <div>
            <a href="mailto:jharavi0605@gmail.com">
              <span>Email</span>
              jharavi0605@gmail.com
            </a>
            <a href="tel:9311891503">
              <span>Phone</span>
              9311891503
            </a>
            <a href="https://www.linkedin.com/in/ravi-jha-8a620b3b9/" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              Connect professionally
            </a>
            <a href="https://github.com/ravibharadwaj973" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              View my technical work
            </a>
          </div>
        </div>
      </form>
    </section>
  );
}
