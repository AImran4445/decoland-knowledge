import React from 'react';
import './knowledgeplatformDiscover.css';

function KnowledgeplatformDiscover() {
  return (
    <div className='main-container'>
      <div className='left-container'>
        <h2 className='graph-heading'>Graph</h2>
        {/* Dummy graph */}
        <div className='dummy-graph'>
          {/* You can customize this with SVG or any other graph library */}
          <svg width='100' height='100'>
            <circle cx='50' cy='50' r='40' stroke='black' strokeWidth='3' fill='red' />
          </svg>
        </div>
      </div>
      <div className='right-container'>
        <h2 className='content-side'>Blockchain use cases by Civil Society</h2>
        <p className='content-paragraph'>
        Blockchain enables tracking and tracing of goods and materials throughout the supply chain, ensuring ethical sourcing, fair labor practices, and environmental sustainability. Blockchain-based voting systems can enhance the integrity ....
        </p>
        <p className='read-button'>Read more</p>
        <div className="toggle-switch">
        <input type="checkbox" className="toggle-switch-checkbox" id="toggleSwitch" />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
            <span className="toggle-switch-inner">
            <span className="toggle-switch-text">Browse</span>
            <span className="toggle-switch-text">Latest</span>
            </span>
            <span className="toggle-switch-switch"></span>
        </label>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeplatformDiscover;
