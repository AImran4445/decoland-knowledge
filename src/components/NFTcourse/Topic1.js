import React from 'react'
import { useState } from 'react';
import NFTCourseImage from '../../assets/nft-course.png';
import DownloadpopupImage from '../../assets/downlaod-popup.png'; 
import CrosspopupImage from '../../assets/cross-popup.png';
import '../NFTcoursepage.css';

function Topic1() {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
  return (
    <>
      <div className='Topic1-whole-container'>
             <h1>
             What are NFTs ?
              </h1>
              <p className='course-right-p'>
                Non-fungible tokens (NFTs) are digital assets representing ownership or proof of authenticity of unique items or digital content, stored on a blockchain, typically Ethereum. Non-fungible tokens (NFTs) are digital assets representing ownership or proof of authenticity of unique items or digital content, stored on a blockchain, typically Ethereum.
                </p>
              <img onClick={togglePopup} src={NFTCourseImage} alt='no-img'/>
             {showPopup && (
               <div className='popup'>
                  <div className='popup-container'>
                         <div className='popup-cross-download-button'>
                                <button className='download-popup'><img src={DownloadpopupImage} alt='no img' /></button>
                                <button className='cross-button' onClick={togglePopup}> <img src={CrosspopupImage} alt='no img' /></button>
                          </div>
                                 <img src={NFTCourseImage} alt='no-img' />
                        </div>
                 </div>
                )}
                <h1>
                    The internet of assets ?
                </h1>
                <p>
                    NFTs represent the concept of a decentralized network where digital assets, each unique and distinguishable, can be owned...
                </p>
      </div>  
    </>
  )
}
export default Topic1