"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { skills } from "../data/portfolio";

export function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<(typeof skills)[number] | null>(
    null,
  );

  useEffect(() => {
    if (!activeSkill) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveSkill(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeSkill]);

  return (
    <section className="skills-section" id="work" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2 id="skills-title">What I build with</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <button
            className="skill-card"
            key={skill.number}
            onClick={() => setActiveSkill(skill)}
            type="button"
          >
            <span className="skill-number">{skill.number}</span>
            <span className="skill-title-row">
              <span className="skill-title">{skill.title}</span>
              <span className="skill-arrow" aria-hidden="true">
                →
              </span>
            </span>
          </button>
        ))}
      </div>

      {activeSkill && createPortal(
        <div
          className="skill-popup-backdrop"
          onClick={() => setActiveSkill(null)}
          role="presentation"
        >
          <article
            className="skill-popup"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={`skill-visual skill-visual-${activeSkill.visual}`}>
              <div className="mock-window">
                <div className="mock-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mock-screen">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className="skill-popup-copy">
              <span className="skill-number">{activeSkill.number}</span>
              <h3>{activeSkill.title}</h3>
              <ul>
                {activeSkill.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>,
        document.body,
      )}
    </section>
  );
}
