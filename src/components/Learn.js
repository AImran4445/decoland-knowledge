import React, { useState } from 'react';
import KnowledgeNavbar from './KnowledgeNavbar';
import './Learn.css';
import Learnsource from '../assets/learn-vid.png';
import Header from '../assets/header.png';
import TickButton from '../assets/tick.png'; 
import CrossImg from '../assets/cross.png';

function Learn() {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
    } else {
      setShowPopup(true);
    }
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <KnowledgeNavbar />
      <div className='learn-content'>
        <div className='learn-whole-container'>
          <div className="wrapper">
            <div className='wrapper-left-container'>
              <div className='left-whole-wrapper'>
                <h1>COMING SOON</h1>
                <span>Your entry point to Web3 and Blockchain </span>
                <div className='input-whole-container'>
                  <p>Subscribe for updates</p>
                  <div className='input-wraper-container'>
                    <input
                      type='email'
                      className='input-class'
                      placeholder='Email Address'
                      value={email}
                      onChange={handleChange}
                    />
                    <button className='learn-subscribe' onClick={handleSubmit}>
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='wrapper-right-container'>
              {/* <img src={PauseButton} alt='tick' className='pauseButton' /> */}
              <video className='video-img' controls>
                  <source src={Learnsource} type='video/mp4' />
              </video>
           </div>
          </div>
        </div>
        <div className='footer'></div>
      </div>

      {showPopup && (
        <div className='popup'>
          <div className='popup-content'>
            <img className='close' onClick={closePopup} src= {CrossImg} alt='no img'/>
            <img src={TickButton} alt='tick' className='tick-button' />
            <img src={Header} alt='no-img' className='popup-img' />
            <span>Thank you for subscribing to our newsletter!</span>
            <p>You will now receive regular updates and exclusive content from our official email.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Learn;
