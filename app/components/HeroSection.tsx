import Image from "next/image";

export function HeroSection() {
  return (
    <div className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Full Stack Developer / Cloud Engineer</p>
        <h1 className="intro-name">I'm Ravi Jha</h1>
        <h2>Full Stack Developer & Cloud Engineer</h2>
        <p className="hero-text">
          I build reliable software that helps businesses optimize operations,
          automate repetitive workflows, and turn marketing ideas into
          measurable digital systems.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#work">
            View skills
          </a>
          <a className="secondary-action" href="/contact">
            Contact
          </a>
        </div>
      </div>

      <div className="hero-portrait" aria-label="Ravi Jha portrait">
        <Image src="/ravi.png" alt="Ravi Jha" width={520} height={620} priority />
      </div>
    </div>
  );
}
