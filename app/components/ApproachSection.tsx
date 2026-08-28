import { approachSteps } from "../data/portfolio";

export function ApproachSection() {
  return (
    <section className="approach-section" id="about" aria-labelledby="approach-title">
      <div className="approach-copy">
        <p className="eyebrow">Process</p>
        <h2 id="approach-title">My Approach to Systems</h2>
        <p className="approach-lead">A system is more than just an application.</p>
        <p>
          I approach software by looking at the complete workflow behind it.
          Before focusing on features or technology, I try to understand the
          problem, the people using the system, and how information moves
          through the business.
        </p>
        <p>
          From there, I work through the layers required to build a complete
          solution: application development, backend services, data management,
          integrations, cloud infrastructure, and automation.
        </p>
      </div>

      <div className="approach-flow" aria-label="System design workflow">
        {approachSteps.map((step, index) => (
          <div className="approach-step" key={step.number}>
            <div className="approach-step-header">
              <span>{step.number}</span>
              <h3>{step.title}</h3>
            </div>
            <p>{step.description}</p>
            {index < approachSteps.length - 1 && (
              <span className="approach-arrow" aria-hidden="true">
                ↓
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
