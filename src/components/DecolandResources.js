import React, { useState } from 'react';
import KnowledgeNavbar from './KnowledgeNavbar';
import './DecolandResources.css';
import AllResources from './DecolandResources/AllResources';
import Infographics from './DecolandResources/Infographics';
import { Link } from 'react-router-dom';
import HowTo from './DecolandResources/HowTo';
import Presentations from './DecolandResources/Presentations';
import Papers from './DecolandResources/Papers';
import { IoNewspaper } from 'react-icons/io5';

function DecolandResources() {
    const [currentTab, setCurrentTab] = useState('All');
    const [lastSelectedTab, setLastSelectedTab] = useState('All');
    const renderTabContent = () => {
        switch (currentTab) {
            case 'All':
                return <AllResources />;
            case 'Infographics':
                return <Infographics />;
            case 'How-To':
                return <HowTo />;
            case 'Presentations':
                return <Presentations />;
            case 'Papers':
                return <Papers />;
            default:
                return null;
        }
    };
    const handleTabsClick = (tab) => {
        setLastSelectedTab(currentTab); 
        setCurrentTab(tab);
    };
    return (
        <>
            <KnowledgeNavbar />
            <div className='decoland-resources-content'>
                <div className='decoland-whole-container'>
                    <div className='decoland-section1-whole-container'>
                        <div className='decoland-section1-container'>
                            <div className='decoland-heading'>
                                <h1> Decoland Resources </h1>
                            </div>
                        </div>
                        <div className='decoland-tabs-container'>
                            <ul className="nav__list decoland-resource-ul">
                                <li className="nav__item">
                                    <Link
                                        className={`nav__link decoland-link ${currentTab === 'All' ? 'bold' : ''}`}
                                        onClick={() => handleTabsClick('All')}
                                    >
                                        All
                                    </Link>
                                </li>
                                <li className="nav__item">
                                    <Link
                                        className={`nav__link decoland-link ${currentTab === 'Infographics' ? 'bold' : ''}`}
                                        onClick={() => handleTabsClick('Infographics')}
                                    >
                                        Infographics
                                    </Link>
                                </li>
                                {/* Add buttons for other tabs */}
                                <li className="nav__item">
                                    <Link
                                        className={`nav__link decoland-link ${currentTab === 'How-To' ? 'bold' : ''}`}
                                        onClick={() => handleTabsClick('How-To')}
                                    >
                                        How-To
                                    </Link>
                                </li>
                                <li className="nav__item">
                                    <Link
                                        className={`nav__link decoland-link ${currentTab === 'Presentations' ? 'bold' : ''}`}
                                        onClick={() => handleTabsClick('Presentations')}
                                    >
                                        Presentations
                                    </Link>
                                </li>
                                <li className="nav__item">
                                    <Link
                                        className={`nav__link decoland-link ${currentTab === 'Papers' ? 'bold' : ''}`}
                                        onClick={() => handleTabsClick('Papers')}
                                    >
                                        Papers
                                    </Link>
                                </li>
                                {/* Add buttons for other tabs */}
                            </ul>
                        </div>
                    </div>
                </div>
                {renderTabContent()}
                <div className='footer'>
                    {/* Footer content */}
                </div>
            </div>
        </>
    );
}

export default DecolandResources;
