// import React, { useState } from 'react';
// import KnowledgeNavbar from './KnowledgeNavbar';
// import './NFTcoursepage.css';
// import { Link } from 'react-router-dom';
// import Arrowback from '../assets/arrow-back.png';
// import './NFTcoursepage.css';
// import Topic1 from './NFTcourse/Topic1';

// function NFTcoursepage() {
  

//     return (
//         <>
//             <KnowledgeNavbar/>
//             <div className='nft-content'>
//                 <div className='nftcourse-whole-container'>
//                     <div className='whole-arrow-container'>
//                         <Link to='/knowledgeplatform'>
//                             <img className='arrow-back' src={Arrowback} alt='no-arrow-back' />
//                         </Link>
//                         <h1> NON-FUNGIBLE TOKEN</h1>
//                     </div>
//                     <div className='content-whole-container'>
//                         <div className='course-left-container'>
//                             <div className='content-tabs'>
//                                 <a className='list-course' href='#'>What are NFTs?</a>
//                             </div>
//                             <div className='content-tabs'>
//                                 <a className='list-course' href='#'>The internet of assets</a>   
//                             </div>
//                             <div className='content-tabs'>
//                                 <a className='list-course' href='#'>What are NFTs used for?</a>
//                             </div>
//                             <div className='content-tabs'>
//                                 <a className='list-course' href='#'>How do NFTs work ?</a>
//                             </div>
//                             <div className='content-tabs'> 
//                                 <a className='list-course' href='#'>Further reading</a> 
//                             </div>
//                         </div>
//                         <div className='course-right-container'>
//                             <div className='course-right-container-2'>
                               
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default NFTcoursepage;

import React, { useState } from 'react';
import KnowledgeNavbar from './KnowledgeNavbar';
import './NFTcoursepage.css';
import { Link } from 'react-router-dom';
import Arrowback from '../assets/arrow-back.png';
import './NFTcoursepage.css';
import Topic1 from './NFTcourse/Topic1'; 
import Topic2 from './NFTcourse/Topic2';
import Topic3 from './NFTcourse/Topic3';

function NFTcoursepage() {
    const [currentTopic, setCurrentTopic] = useState('Topic1'); 
    const handleTopicClick = (topic) => {
        setCurrentTopic(topic);
    };

    return (
        <>
            <KnowledgeNavbar />
            <div className='nft-content'>
                <div className='nftcourse-whole-container'>
                    <div className='whole-arrow-container'>
                        <Link to='/knowledgeplatform'>
                            <img className='arrow-back' src={Arrowback} alt='no-arrow-back' />
                        </Link>
                        <h1>NON-FUNGIBLE TOKEN</h1>
                    </div>
                    <div className='content-whole-container'>
                        <div className='course-left-container'>
                            <div className='content-tabs'>
                                <a className={`list-course ${currentTopic === 'Topic1' ? 'bold' : ''}`} href='#' onClick={() => handleTopicClick('Topic1')}>
                                    What are NFTs?
                                </a>
                            </div>
                            <div className='content-tabs'>
                                <a className={`list-course ${currentTopic === 'Topic2' ? 'bold' : ''}`} href='#' onClick={() => handleTopicClick('Topic2')}>
                                    The internet of assets
                                </a>
                            </div>
                            <div className='content-tabs'>
                                <a className={`list-course ${currentTopic === 'Topic3' ? 'bold' : ''}`} href='#' onClick={() => handleTopicClick('Topic3')}> What are NFTs used for?</a>
                            </div>
                            <div className='content-tabs'>
                                <a className='list-course' href='#'>How do NFTs work ?</a>
                            </div>
                            <div className='content-tabs'> 
                                <a className='list-course' href='#'>Further reading</a> 
                            </div>    
                        </div>
                        <div className='course-right-container'>
                            <div className='course-right-container-2'>
                                {currentTopic === 'Topic1' && <Topic1 />} 
                                {currentTopic === 'Topic2' && <Topic2/>}
                                {currentTopic === 'Topic3' && <Topic3/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NFTcoursepage;
