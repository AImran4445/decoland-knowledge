import React from 'react';
import './Homepage.css';
import homesectionimg from '../assets/home-1.webp';

function Homepage() {
  return (
    <>
    <div className='content'>

   
      <div className='container-section-1'>
        <img className='img-container' src={homesectionimg} alt="Sample Image"/>
        <div className='child-container-1'>
          <div className='left-child-container'>
            
          </div>
          <div className='right-child-container'>
           
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Homepage;
