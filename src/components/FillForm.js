import React from 'react'
import KnowledgeNavbar from './KnowledgeNavbar'
import { Link } from 'react-router-dom';
import Arrowback from '../assets/arrow-back.png';
import './FillForm.css';
function FillForm() {
  return (
    <>
    <KnowledgeNavbar/>
    <div className='form-content'>
      <div className='form-whole-container'>
        <div className='form-container'>
          <div className='second-container'> 
            <div className='form-1st-container'>
                <Link to='/knowledgeplatform'>
                    <img className='form-arrow-back' src={Arrowback} alt='no-arrow-back' />
                </Link>
            </div>
            <div className='form-2nd-container'>
              <h2>Get the Report Now </h2> 
              <div className='paragraph'>
              <p>Download your free copy of the 2024 Crypto Market Outlook for NonProfits report</p>
            </div>
            <div className='form-input'>
              <div className='form-input-container-1'>
                <input type='text' placeholder='First Name' className='input-1'/>
                <input type='text' placeholder='Last Name' className='input-1'/>
              </div>
              <div className='form-input-container-2'>
                <input className='input-1' type='email' placeholder='Email' />
                <input className='input-1' type='text' placeholder='Job Title/Role'/>
              </div>
            </div>
            <div className='form-3rd-container'>
              <div className='text-form-3rd-container'> Which best describes you? </div>
              <div className='option-3rd-contianer'>
              <div class="options">
                <div class="option">
                  <input type="checkbox" id="ali" name="choice"/>
                  <label for="announcecments">Announcements</label>
                </div>
                <div class="option">
                  <input type="checkbox" id="imran" name="choice"/>
                  <label for="media">Media</label>
                </div>
                <div class="option">
                  <input type="checkbox" id="zain" name="choice"/>
                  <label for="donor">Donor</label>
                </div>
                <div class="option">
                  <input type="checkbox" id="salman" name="choice"/>
                  <label for="other">Other</label>
                </div>
              </div>
              </div>
            </div>
            <div class="download-btn">
              <button>Download Now</button>
            </div>
            </div>
            </div>
        </div>
      </div>
          <div className='footer'>
          </div>
      </div>
    </>
  )
}

export default FillForm