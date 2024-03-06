import React from 'react';
import KnowledgeNavbar from './KnowledgeNavbar';
import './NFTcoursepage.css';
import { Link } from 'react-router-dom';
import Arrowback from '../assets/arrow-back.png';
import './NFTcoursepage.css';

function NFTcoursepage() {
  return (
    <>
    <KnowledgeNavbar/>
    <div className='content'>
       <div className='nftcourse-whole-container'>
        <div className='whole-arrow-container'>
            <Link to='/knowledgeplatform'>
            <img className='arrow-back' src={Arrowback} alt='no-arrow-back' />
            </Link>
            <h1> NON-FUNGIBLE TOKEN</h1>
        </div>
        <div className='content-whole-container'>
            <div className='course-left-container'>
                <div className='content-tabs'>
                   <a className='list-course' href='#'>What are NFTs?</a>
                </div>
                <div className='content-tabs'>
                    <a className='list-course' href='#'>The internet of assets</a>   
                </div>
                <div className='content-tabs'>
                    <a className='list-course' href='#'>What are NFTs used for?</a>
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
                    <h1>
                        What are NFTs ?
                    </h1>
                    <p className='course-right-p'>
                    Non-fungible tokens (NFTs) are digital assets representing ownership or proof of authenticity of unique items or digital content, stored on a blockchain, typically Ethereum. Non-fungible tokens (NFTs) are digital assets representing ownership or proof of authenticity of unique items or digital content, stored on a blockchain, typically Ethereum.
                    </p>
                </div>
            </div>

        </div>

       </div>
    </div>
    </>
  )
}

export default NFTcoursepage