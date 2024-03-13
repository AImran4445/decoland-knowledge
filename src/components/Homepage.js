import React from 'react';
import './Homepage.css';
import homesectionimg from '../assets/home-1.webp';
function Homepage() {
  return (
    <>
      <div className='content'>
        <div className='container-section-1'>
          <img className='img-container' src={homesectionimg} alt="Sample-Imag"/>
          <div className='child-container-1'>
            <div className='left-child-container'>
              Revolutionizing Funding for Social Impact
            </div>
            <div className='right-child-container'>
              We're leveraging tech and Web3 to democratize funding for civil society.
            </div>
          </div>
        </div>
        <div className='btn-container'>
          <button>Get in touch →</button>
        </div>
      </div>
    </>
  );
}
export default Homepage;
