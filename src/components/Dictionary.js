import React from 'react';
import KnowledgeNavbar from './KnowledgeNavbar';
import './Dictionary.css';

function Dictionary() {
  return (
    <>
       <KnowledgeNavbar/>
       <div className='dictioanry-content'>
        <div className='dictionary-whole-container'>
          <div className='decoland-section1-whole-container'>
                 <div className='decoland-section1-container'>
                    <div className='decoland-heading'>
                        <h1> Crypto dictionary </h1>
                    </div>
                 </div>
            </div>
        </div> 
       </div>
    </>
  )
}

export default Dictionary