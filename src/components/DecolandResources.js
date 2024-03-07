import React from 'react';
import { useState } from 'react';
import KnowledgeNavbar from './KnowledgeNavbar'
import './DecolandResources.css';
import { Link } from 'react-router-dom';
import Blogs from './DecolandResources/Blogs';
import OnePagers from './DecolandResources/OnePagers';
import Articles from './DecolandResources/Articles';
import PodcastsVideos from './DecolandResources/PodcastsVideos';


function DecolandResources() {
    const [currentTabs, setCurrentTabs] = useState('blogs','pagers','podcast','articles'); 
    const handleTabsClick = (tabs) => {
        setCurrentTabs(tabs);
    };
  return (
    <>
        <KnowledgeNavbar/>
        <div className='decoland-resources-content'>
            <div className='decoland-whole-container'>
               <div className='decoland-section1-whole-container'>
                 <div className='decoland-section1-container'>
                    <div className='decoland-heading'>
                        <h1> Decoland Resources </h1>
                    </div>
                    {/* <div className='decoland-search-container'>
                        <input type='text' placeholder='search'/>
                    </div> */}
                 </div>
                 <div className='decoland-tabs-container'>
                    <ul className="nav__list decoland-resource-ul">
                        <li className="nav__item">
                            <Link  className={`nav__link decoland-link ${currentTabs === 'blogs' ? 'bold' : ''}`} href='#' onClick={() => handleTabsClick('blogs')}>
                            Infographics
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link  className={`nav__link decoland-link ${currentTabs === 'pagers' ? 'bold' : ''}`} href='#' onClick={() => handleTabsClick('pagers')} >
                            How-To
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                            className={`nav__link decoland-link ${currentTabs === 'articles' ? 'bold' : ''}`} href='#' onClick={() => handleTabsClick('articles')}
                            >
                            Presentations
                            </Link>
                        </li>
                        <li className="nav__item">
                        <Link className={`nav__link decoland-link ${currentTabs === 'podcast' ? 'bold' : ''}`} href='#' onClick={() => handleTabsClick('podcast')}>
                            Papers
                        </Link>
                        </li>
                    </ul>
                 </div>
               </div>
               <div className='decoland-section2-container'>
                  <div className='decoland-section2-heading'>
                     <h2>BLOG</h2>
                  </div>
                </div>
                  <Blogs/>
                <div className='decoland-section3-container'>
                  <div className='decoland-section3-heading'>
                     <h2>ONE PAGERS</h2>
                  </div>
                </div>
                 <OnePagers/>
                <div className='decoland-section4-container'>
                  <div className='decoland-section4-heading'>
                     <h2>ARTICLES</h2>
                  </div>
                </div>
                 <Articles/>
                <div className='decoland-section5-container'>
                  <div className='decoland-section5-heading'>
                     <h2>PODCASTS/VIDEOS</h2>
                  </div>
                </div>
               <PodcastsVideos/>
            </div>
            {/* <div>
             { currentTabs === 'blogs' && <Blogs/>}
             { currentTabs === 'pagers' && <OnePagers/>}
             { currentTabs === 'articles' && <Articles/>}
             { currentTabs === 'podcast' && <PodcastsVideos/>}
             </div> */}
            <div className='footer'>
            </div>
        </div>
    </>
  )
}

export default DecolandResources

