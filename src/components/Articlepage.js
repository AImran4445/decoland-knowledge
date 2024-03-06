import React from 'react';
import KnowledgeNavbar from './KnowledgeNavbar';
import NFTImage from '../assets/nft-img.png';
import { Link } from 'react-router-dom';
import Arrowback from '../assets/arrow-back.png';
import './Articlepage.css';
import Article from '../assets/ticle.png';


function Articlepage() {
  return (
    <>
      <KnowledgeNavbar/>
      <div className='content'>
      <div className='article-whole-container'>
        <div className='article-container'>
              <div className='article-1st-container'>
               <div className='article-left-side'>
                  <div className='article-left-inner-1'>
                    <Link to='/knowledgeplatform'>
                      <img className='arrow-back' src={Arrowback} alt='no-arrow-back' />
                    </Link>
                  </div>
                  <div className='article-left-inner-2'>
                     <img className='article-word' src={Article} alt='no-image' />
                  </div>
                  <div className='article-left-inner-3'>
                    <h2> Enhancing User Experience in NFT Marketplaces </h2>
                  </div>
                  <div className='article-left-inner-4'>
                    <Link to='/form'>
                      <div className='Download'> Download </div> 
                    </Link>
                  </div>
                  <div className='article-left-inner-5'>
                    <span className='Date'>
                    Sunday , 1 Jan 2023
                    </span>
                  </div>
               </div>   
               <div className='article-right-side'>
                 <img className='right-side-image' src={NFTImage} alt='no-image' />
               </div> 
            </div>
            <div className='article-2-container'>
                 <p>
                 A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. 
                 <br/>
                It is a starkly binary legal question: yes or no. Training AI models on copyrighted material either infringes the copyright or doesn’t. And the two possible outcomes point toward very different future worlds. <br/>
                What would it mean if the AI companies’ lawyers prevail, and courts find that AI models may freely ingest copyright-protected material? Having been trained on authors’ work, AI models will sooner or later be able to do almost exactly what all those authors do, and more, millions of times faster. So AI models’ owners, and not authors, will own most of the fruits of creative labor. <br/>
                At that point things could get very weird. Disenfranchised authors might start sharing their work only in the shadows by forbidding recordings, banning reviews, and so on. Luddite subcultures might form around efforts to keep creative work off the record and out of the systems. <br/>
                On the other hand, suppose that courts find that the AI companies have violated authors’ rights. Their potential liability, civil and possibly even criminal, could be as unprecedented as the technology itself. <br/> This is because copyright provides for steep statutory damages: a minimum of $750 damages per copyright violation.[1] Given the unimaginable reams of copyrighted works that have presumably already been incorporated into systems like GPT-4 and Claude, you don’t even need to do the math. AI companies, even gigantic ones, could be bankrupted by the damages they owe to—well, all of us. <br/>
                Of course, destroying the companies is not what most stakeholders want. But the public and the government should appreciate just how much leverage they might have to achieve public-interested outcomes, like a grand settlement resulting in some kind of public governance rights or equity stake. <br/>
                Leaving aside what companies might already owe, if copyrights are infringed by AI training, the future simply looks different. Content creators, including ordinary people producing copyrightable digital footprints (students, employees, social media users, etc.), could have huge leverage over the future of the technology. If they organize and bargain collectively (instead of getting “picked off” by individual agreements) they will hold the strings to datasets that are necessary ingredients to the world’s most powerful AIs. The public will have a seat at the table. <br/>
                Europe has already given us one sketchy glimpse of what that might look like. Drafts of the EU’s AI Act, now jeopardized by stalled negotiations, have suggested the bloc may give copyright holders the ability to programmatically “opt-out” of their works’ use in AI training. The artists Holly Herndon and Mat Dr yhurst have already set up an organization through which many artists have done just that. It could be a sign of things to come and the EU’s regulations are an important factor in this conversation. <br/>
                Another possibility must be noted. If it becomes clear that AI cannot be lawfully trained on all publicly available information, it could create an opening for actors beyond the reach of the law. Given the possible military applications of the technology, state actors will not want that to happen. This would nudge the state security apparatus even further into the AI business.
                 </p>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Articlepage