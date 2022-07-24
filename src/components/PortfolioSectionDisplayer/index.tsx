import { useState } from 'react';

enum PortfolioSections {
  animation='animation',
  illustration='illustration',
}

const PortfolioSectionDisplayer: () => JSX.Element = () => {
  const [currentPortfolio, setCurrentPortfolio] = useState<PortfolioSections>(PortfolioSections.animation);

  return (
    <main>
      <div>
        <h3>My Portfolio</h3>
        <p>This is my art portfolio, this portfolio resumes the best of my work, please enjoy</p>
      </div>
      <div>
        <>
          <ul>
            <li>
              <button onClick={() => setCurrentPortfolio(PortfolioSections.animation)}>Animation</button>
            </li>
            <li>
              <button onClick={() => setCurrentPortfolio(PortfolioSections.illustration)}>Illustration</button>
            </li>
          </ul>
          <div>{PortfolioSections[currentPortfolio]}</div>
        </>
      </div>
    </main>
  );
}

export { PortfolioSectionDisplayer };