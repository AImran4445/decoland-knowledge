import React from 'react';
import './knowledgeplatformDiscover.css';
import SunburstAnyChart from './SunburstAnyChart';
import articleImage from '../assets/image-7.png';
import arrow from '../assets/arrow-button.png';
import articleimage from '../assets/image-article.png';
import podcastsImage from '../assets/image-podcasts.png';
import { Link } from 'react-router-dom';

function KnowledgeplatformDiscover() {
  return (
    <div className='main-container'>
      <div className='left-container'>
        <div className='dummy-graph'>
         <SunburstAnyChart/>
        </div>
      </div>
      <div className='right-container'>
        <h2 className='content-side'>Blockchain use cases by Civil Society</h2>
        <p className='content-paragraph'>
        Blockchain enables tracking and tracing of goods and materials throughout the supply chain, ensuring ethical sourcing, fair labor practices, and environmental sustainability. Blockchain-based voting systems can enhance the integrity ....
        </p>
        <p className='read-button'>Read more</p>
        {/* <div className="toggle-switch">
            <input type="checkbox" className="toggle-switch-checkbox" id="toggleSwitch" />
            <label className="toggle-switch-label" htmlFor="toggleSwitch">
                <span className="toggle-switch-inner">
                <span className="toggle-switch-text">Browse</span>
                <span className="toggle-switch-text">Latest</span>
                </span>
                <span className="toggle-switch-switch"></span>
            </label>
        </div> */}
        <div className='discover-3rd-container'>
              <div className='option-3rd-contianer'>
              <div class="options">
                <div class="option">
                  <input type="checkbox" id="ali" name="choice"/>
                  <label for="ali">Articles</label>
                </div>
                <div class="option">
                  <input type="checkbox" id="imran" name="choice"/>
                  <label for="imran">Case Studies</label>
                </div>
                <div class="option">
                  <input type="checkbox" id="zain" name="choice"/>
                  <label for="zain">Briefs</label>
                </div>
                <div class="option">
                  <input type="checkbox" id="salman" name="choice"/>
                  <label for="salman">Media</label>
                </div>
              </div>
              </div>
            </div>
        <div className='articles'>
            <h2 className='article-heading'> Articles </h2>
            <div className='article-1'>
            <div class="card">
          <div class="card-image">
              <img src={articleImage} alt="Image"/>
          </div>
          <div class="card-content">
              <h2>Enhancing User Experience in NFT Marketplaces</h2>
              <p>Unravel the innovative ways blockchain technology and NFTs are revolutionizing the design and functionality of UI cards within digital marketplaces. </p>
              <Link to='/articlepage'>
              <img className='arrow' src={arrow} alt='-->'/>
              </Link> 
          </div>
         </div>
            </div>
            <div className='article-1'>
            <div class="card">
          <div class="card-image">
              <img  src={articleimage} alt='Image'/>
          </div>
          <div class="card-content">
              <h2>NFT Collections</h2>
              <p>Discover the essential design principles and best practices for creating captivating UI cards tailored specifically for NFT collections. Explore the significance of visual storytelling, interactive elements.</p>
              <Link to='/articlepage'>
              <img className='arrow' src={arrow} alt='-->'/>
              </Link> 
          </div>
         </div>
            </div>
        </div>
        <div className='articles'>
            <h2 className='article-heading'> Podcasts </h2>
            <div className='article-1'>
            <div class="card">
          <div class="card-image">
              <img src={podcastsImage} alt="Image"/>
          </div>
          <div class="card-content">
              <h2>Unravel the innovative ways blockchain technology</h2>
              <p>Unravel the innovative ways blockchain technology and NFTs are revolutionizing the design and functionality of UI cards within digital marketplaces.  </p>
              <Link to='/podcasts'>
              <img className='arrow' src={arrow} alt='-->'/>
              </Link> 
          </div>
         </div>
            </div>
            <div className='article-1'>
            <div class="card">
          <div class="card-image">
              <img  src={articleimage} alt='Image'/>
          </div>
          <div class="card-content">
              <h2>NFT Collections</h2>
              <p>Discover the essential design principles and best practices for creating captivating UI cards tailored specifically for NFT collections. Explore the significance of visual storytelling, interactive elements.</p>
              <Link to='/podcasts'>
              <img className='arrow' src={arrow} alt='-->'/>
              </Link>  
          </div>
         </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default KnowledgeplatformDiscover;