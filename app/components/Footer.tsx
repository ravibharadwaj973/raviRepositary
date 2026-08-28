import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="footer-logo" href="/">
            RJ.
          </Link>
          <p>Software Systems & Digital Solutions</p>
          <p>
            Building applications, business systems, cloud infrastructure, and
            automation.
          </p>
        </div>

        <div className="footer-group">
          <h2>Navigation</h2>
          <a href="/">Home</a>
          <a href="/work">Work</a>
          <a href="/#work">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-group">
          <h2>Connect</h2>
          <a href="https://github.com/ravibharadwaj973" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:jharavi0605@gmail.com">Email</a>
          <a href="tel:9311891503">Phone</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Ravi Jha. All rights reserved.</p>
        <p>Software Systems & Digital Solutions</p>
      </div>
    </footer>
  );
}
