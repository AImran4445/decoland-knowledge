import React from 'react'
import { Link } from 'react-router-dom'
import ResourceImage from '../../assets/resources.png';
import arrow from '../../assets/arrow-button.png';
import '../DecolandResources.css';

function Articles() {
  return (
    <>
    <div className='blogs-list'>
    <div className='decoland-wrapper'>
       <div className='resources-card'>
          <img className='resource-card-img' src={ResourceImage} alt='no img' />
          <div id="container">
              <h3 id="name">Enhancing User Experience in NFT Marketplaces</h3>
              <p id="exp">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines.</p>
              <Link to='/page'>
              <img className='arrow deco-arrow' src={arrow} alt='-->'/>
              </Link> 
              <button className='resource-download'>Downlaod</button>
          </div>
       </div>
       <div className='resources-card'>
          <img className='resource-card-img' src={ResourceImage} alt='no img' />
          <div id="container">
              <h3 id="name">Enhancing User Experience in NFT Marketplaces</h3>
              <p id="exp">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines.</p>
              <Link to='/page'>
              <img className='arrow deco-arrow' src={arrow} alt='-->'/>
              </Link> 
              <button className='resource-download'>Downlaod</button>
          </div>
       </div>
       <div className='resources-card'>
          <img className='resource-card-img' src={ResourceImage} alt='no img' />
          <div id="container">
              <h3 id="name">Enhancing User Experience in NFT Marketplaces</h3>
              <p id="exp">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines.</p>
              <Link to='/page'>
              <img className='arrow deco-arrow' src={arrow} alt='-->'/>
              </Link> 
              <button className='resource-download'>Downlaod</button>
          </div>
       </div>
       <div className='resources-card'>
          <img className='resource-card-img' src={ResourceImage} alt='no img' />
          <div id="container">
              <h3 id="name">Enhancing User Experience in NFT Marketplaces</h3>
              <p id="exp">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines.</p>
              <Link to='/page'>
              <img className='arrow deco-arrow' src={arrow} alt='-->'/>
              </Link> 
              <button className='resource-download'>Downlaod</button>
          </div>
       </div>
    </div>
</div>

    </>
  )
}

export default Articles