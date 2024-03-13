import React from 'react';
import PDFImg from '../../assets/pdf.png';
import Image1 from '../../assets/img1.png';
import Image2 from '../../assets/img2.png'; 
import { Link } from 'react-router-dom';
import '../DecolandResources.css';

function AllResources() {
  return (
    <>
      <div className='decoland-wrapper'>
      <div className='resources-card'>
         <div className='card-tag'>
            INFOGRAPHICS
         </div>
          <img className='resource-card-img' src={Image1} alt='no img' />
          <div id="container">
              <p id="exp">Lorem ipsum dolor sit amet consectetursit amet consectetur.</p>
              <Link to='/form'>
              <button className='resource-download'>
                 Downlaod
               </button></Link>
          </div>
       </div>
       <div className='resources-card'>
         <div className='card-tag'>
            PRESENTATIONS
         </div>
          <img className='resource-card-pdf' src={PDFImg} alt='no img' />
          <div id="container">
              <p id="exp">Lorem ipsum dolor sit amet consectetursit amet consectetur.</p>
              <Link to='/form'>
              <button className='resource-download'>
                 Downlaod
               </button></Link>
          </div>
       </div>
       <div className='resources-card'>
         <div className='card-tag'>
            HOW-TO
         </div>
          <img className='resource-card-img' src={Image2} alt='no img' />
          <div id="container">
              <p id="exp">Lorem ipsum dolor sit amet consectetursit amet consectetur.</p>
              <Link to='/form'>
              <button className='resource-download'>
                 Downlaod
               </button></Link>
          </div>
       </div>
       <div className='resources-card'>
         <div className='card-tag'>
            PAPERS
         </div>
          <img className='resource-card-pdf' src={PDFImg} alt='no img' />
          <div id="container">
              <p id="exp">Lorem ipsum dolor sit amet consectetursit amet consectetur.</p>
              <Link to='/form'>
              <button className='resource-download'>
                 Downlaod
               </button></Link>
          </div>
       </div>
      </div>
    </>
  )
}

export default AllResources