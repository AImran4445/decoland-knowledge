import React from 'react';
import KnowledgeNavbar from './KnowledgeNavbar';
import { Link } from 'react-router-dom';
import Arrowback from '../assets/arrow-back.png';
import podcastImage from '../assets/podcastwali.png'
import './Podcast.css';
import pausebutton from '../assets/Pause-button.png';

function Podcasts() {
  return (
   <>
     <KnowledgeNavbar/>
     <div className='content'>
      <div className='podcast-whole-container'>
        <div className='podcast-container'>
                  <div className='podcast-left-inner-1'>
                    <Link to='/knowledgeplatform'>
                      <img className='arrow-back' src={Arrowback} alt='no-arrow-back' />
                    </Link>
                  </div>
            <div className='podcast-1st-container'>
               <div className='podcast-left-side'>
                <div className='pause-button'>
                   <img src={pausebutton} alt='pause-button' />
                </div>
                  <div className='podcast-left-inner-3'>
                    <h2> Unravel the innovative ways </h2>
                  </div>
               </div>   
               <div className='podcast-right-side'>
                 <img className='right-side-image' src={podcastImage} alt='no-image' />
               </div> 
            </div>
            <div className='podcast-middle-container'>
            <div className="podcast-switch">
            <input type="checkbox" className="podcast-switch-checkbox" id="toggleSwitch" />
            <label className="podcast-switch-label" htmlFor="toggleSwitch">
                <span className="podcast-switch-inner">
                <span className="podcast-switch-text"> Transcript </span>
                <span className="podcast-switch-text"> Episode Details </span>
                </span>
                <span className="podcast-switch-switch"></span>
            </label>
           </div>  
              <div className='podcast-left-inner-5'>
                   <span className='Date'>
                      Sunday , 1 Jan 2023
                    </span>
              </div>
            </div>
            <div className='podcast-2-container'>
              <p>
                In today’s episode, host Matt Prewitt talks to Deepti Doshi, a leading voice in the intersection of social media, community organizing, and leadership development. <br/>
                They discuss the influences and principles that have guided her through her expansive career — from grassroots organizing in Mumbai’s dense urban landscape to the glossy executive offices of Facebook where she established the Facebook Community Leadership Program, to her most recent position as Co-Director of New_ Public — a community of thinkers, designers and technologists imagining and building the digital public spaces of the future.<br/>
                They go on to examine the significant challenge of designing and operating online spaces that respect and amplify the voices of those who have been historically disenfranchised, as well as the problems of finding the right metrics to measure the success of these groups.<br/>
                They then point out the need to invest in and compensate community stewards and admins of online communities; a generally thankless, but indispensable role that is growing with deeper significance, as we struggle to take control of our online lives.
                We hope you enjoy this deep and thoughtful exchange.<br/>
                And now, here is Matt Prewitt and Deepti Doshi.<br/>
                MATT PREWITT (02:15.842)<br/>
                Hello, Deepti, how are you?<br/>
                DEEPTI DOSHI (02:22.560)<br/>
                I'm good, Matt. <br/>
                MATT PREWITT (02:21.922)<br/>
                So we'd love to, maybe we can start off with you telling us a little bit about your journey, your path to the work that you're doing now.<br/>
                DEEPTI DOSHI (02:40.764)<br/>
                Yeah, sure. You and I have been able to talk about some pieces of this, but really, I guess, I don't know how far back you want to really go, but the story really starts with just like personally seeing through my own family's life and experience and then that of my grandparents too, just like the value of relationships andyou know, how important it is that we have them just for the daily health of our lives, getting through tough times, and not only relationships with like the people that are expected, but the unexpected relationships. My dad is bipolar and so we often, I mean, we grew up with a lot of hecticness and it was often people who were like the least expected to kind of show up for us that were kind of the backbone of how it is that my brother, sister and I got to grow up. And then my parents immigrated here from India. And so we went back every summer and we witnessed my grandfather bring home somebody from the street to eat lunch with him every day. And..<br/>
                Yeah, just really living a life and growing up, seeing the value of these relationships being built in these unexpected ways. And so that took, that, yeah, that is the  foundational curiosity, I think, that leads me to do the work it is, that we do at New_ Public, but along the way, you know, when it really comes to this work as a community organizer. And so started my career really thinking about how markets could serve the poor in the developing world better than aid and really then began to see the limits of the markets to address some of these kind of systemic power challenges that these, that all democracies, really, face and led me to take some time to think about that at grad school with Marshall Ganz. And I really found that the community organizing model answered a lot of these questions around how power can be distributed in a more equitable way and how voice can be, yeah, voice can really, how you create those right environments and containers for voice to really, of the most marginalized, to really have a stronger sense of its power. Um, and so, yeah, anyways, went back to India to create , which was a community organizing platform that brought the rich and the poor together. For, you know, I don't know if you've been to India or not, but the rich literally live on top of the poor as opposed to how we live here in kind of more gentrified horizontal ways. And so the idea was, um, our democracy in India could only be successful if we began to see each other in one another and, and, you know, the rich can't, it was, well, it wasn't going to be successful if the rich continue to kind of privatize and pull themselves out of the core things that is that require society to function. And so we took the energy around safety and particularly women's safety in 2012 after this very famous Nirbhaya rape case which you may or may not remember, to kind of galvanize the energy of the populace whether you are rich or poor to kind of work together on improving safety in your neighborhood that evolved into a whole bunch of sanitation campaigns where ordinary citizens would kind of work together with their local government. 
              </p>
            </div>
        </div>
      </div>
      </div>
   </>
  )
}

export default Podcasts