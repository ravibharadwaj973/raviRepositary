export function SiteBackground() {
  return (
    <div className="site-background" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-orbit">
        <span />
      </div>
      <div className="bg-object bg-object-code">
        <span>{"<api />"}</span>
        <span>{"deploy:aws"}</span>
        <span>{"crm.sync()"}</span>
      </div>
      <div className="bg-object bg-object-cube">
        <span />
        <span />
        <span />
      </div>
      <div className="bg-object bg-object-terminal">
        <span>{"npm run build"}</span>
        <span>{"200 OK"}</span>
      </div>
      <div className="bg-object bg-object-database">
        <span />
        <span />
        <span />
      </div>
      <div className="bg-object bg-object-cloud">
        <span>{"CI/CD"}</span>
        <span>{"AWS"}</span>
      </div>
    </div>
  );
}
