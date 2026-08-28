"use client";

import type { CSSProperties, MouseEvent } from "react";
import { useState } from "react";
import { skills } from "../data/portfolio";

export function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<(typeof skills)[number] | null>(
    null,
  );
  const [popupPosition, setPopupPosition] = useState({ left: 0, top: 0 });

  const openSkill = (
    skill: (typeof skills)[number],
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    const popupWidth = Math.min(920, window.innerWidth - 32);
    const popupHeight = window.innerWidth <= 800 ? window.innerHeight - 32 : 430;
    const clickX = event.clientX;
    const clickY = event.clientY;
    const left = Math.min(
      Math.max(16, clickX - 24),
      window.innerWidth - popupWidth - 16,
    );
    const top = Math.min(
      Math.max(16, clickY - 24),
      window.innerHeight - popupHeight - 16,
    );

    setPopupPosition({ left, top });
    setActiveSkill(skill);
  };

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
            onClick={(event) => openSkill(skill, event)}
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

      {activeSkill && (
        <div
          className="skill-popup-backdrop"
          onClick={() => setActiveSkill(null)}
          role="presentation"
        >
          <article
            className="skill-popup"
            onClick={(event) => event.stopPropagation()}
            style={
              {
                "--popup-left": `${popupPosition.left}px`,
                "--popup-top": `${popupPosition.top}px`,
              } as CSSProperties
            }
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
        </div>
      )}
    </section>
  );
}
