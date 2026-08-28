import { PortfolioMark } from "./PortfolioMark";

export function LoaderScreen() {
  return (
    <section className="loader-screen" aria-label="Loading portfolio">
      <div className="code-bg" aria-hidden="true">
        <span>{"const portfolio = 'Ravi';"}</span>
        <span>{"function createMotion() {"}</span>
        <span>{"return <Loader theme='red' />;"}</span>
        <span>{"useEffect(() => animate(), []);"}</span>
        <span>{"git commit -m 'portfolio-loader'"}</span>
        <span>{"while (loading) { glow(); }"}</span>
      </div>
      <PortfolioMark />
    </section>
  );
}
