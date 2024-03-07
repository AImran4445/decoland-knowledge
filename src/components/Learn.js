import React from 'react'
import KnowledgeNavbar from './KnowledgeNavbar'
import './Learn.css';
import Wallet from '../assets/wallet.png';
import Web3 from '../assets/web3.png';
import Blockchain from '../assets/Blockchain.png';
import { Link } from 'react-router-dom';
import Goverance from '../assets/goverance.png';
import NFT from '../assets/nft.png';
import Legal from '../assets/legal.png';
import Tokeniationimg from '../assets/tokenization.png';
 
function Learn() {
  return (
    <>
    <KnowledgeNavbar/>
    <div className='learn-content'>
    <div className='learn-whole-container'>
        <div className='learn-container'>
           <h1>Welcome to our blockchain Learning Hub</h1>
        </div>

     <div class="wrapper">
            <div class="learncard">
                <img src={Web3} alt="" />
                <div id="container">
                    <h2 id="name">Web3</h2>
                    <p id="exp">Explore the decentralized web and its boundless possibilities.</p>
                    <Link to='/coursepage'>
                      <p className='button-p'> Read more →</p>
                    </Link>
                </div>
            </div>
            <div class="learncard">
                <img src={Blockchain} alt="" />
                <div id="container">
                    <h2 id="name">Blockchain</h2>
                    <p id="exp">Discover the secure and transparent ledger technology shaping the future.</p>
                    <Link to='/coursepage'>
                      <p className='button-p'> Read more →</p>
                    </Link>
                </div>
            </div>
            <div class="learncard">
                <img src={Wallet} alt="" />
                <div id="container">
                    <h2 id="name">Wallet</h2>
                    <p id="exp">Manage your digital assets securely and effortlessly.</p>
                    <Link to='/coursepage'>
                      <p className='button-p'> Read more →</p>
                    </Link>
                </div>
            </div>
            <div class="learncard">
                <img src={Tokeniationimg} alt="" />
                <div id="container">
                    <h2 id="name">Tokenization</h2>
                    <p id="exp">Transform assets into digital tokens for enhanced liquidity and accessibility.</p>
                    <Link to='/coursepage'>
                      <p className='button-p'> Read more →</p>
                    </Link>
                </div>
            </div>
            <div class="learncard">
                <img src={NFT} alt="" />
                <div id="container">
                    <h2 id="name">NFT</h2>
                    <p id="exp">Own unique digital assets and create value in the world of non-fungible tokens.</p>
                    <Link to='/nftcoursepage'>
                      <p className='button-p'> Read more →</p>
                    </Link>
                </div>
            </div>
            <div class="learncard">
                <img src={Goverance} alt="" />
                <div id="container">
                    <h2 id="name">DAOs & Governance</h2>
                    <p id="exp">Participate in decentralized autonomous organizations, shape the future of governance.</p>
                    <Link to='/coursepage'>
                      <p className='button-p'> Read more →</p>
                    </Link>
                </div>
            </div>
            <div class="learncard">
                <img src={Legal} alt="" />
                <div id="container">
                    <h2 id="name">Legal & Regulatory Compliance</h2>
                    <p id="exp">Navigate the complex landscape of legal and regulatory requirements with ease.</p>
                    <Link to='/coursepage'>  
                         <p className='button-p'> Read more →</p>
                    </Link>
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
export default Learn