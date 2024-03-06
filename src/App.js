import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Ourmission from './components/mission'; // Import your components for each route
import Homepage from './components/Homepage';
import Knowledgeplatform from './components/Knowledgeplatform';
import "./App.css";
import { useLocation } from "react-router-dom";
import Articlepage from './components/Articlepage';
import FillForm from './components/FillForm';
import Podcasts from './components/Podcasts';
import Learn from './components/Learn';
import NFTcoursepage from './components/NFTcoursepage';


function App() {
  const location = useLocation();
  const showNavbarAndFooter =
  location.pathname === "/" ;

  return (
    <>
    {showNavbarAndFooter && <Navbar />}
    <Routes>
          <Route path='/' element = {<Homepage />} />
          <Route path="/mission" element={<Ourmission />} />
          <Route path="/knowledgeplatform" element={<Knowledgeplatform />} />
          <Route path='/articlepage' element = {<Articlepage/>}/>
          <Route path='/podcasts' element ={<Podcasts/>}/>
          <Route path='/form' element = {<FillForm/>}/>
          <Route path='/learn' element = {<Learn/>}/>
          <Route path='/nftcoursepage' element = {<NFTcoursepage/>} />
     </Routes>
    </>
  );
}

export default App;
