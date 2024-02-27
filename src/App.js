import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Ourmission from './components/mission'; // Import your components for each route
import Homepage from './components/Homepage';
import Knowledgeplatform from './components/Knowledgeplatform';
import "./App.css";
import { useLocation } from "react-router-dom";



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
          <Route path="/Knowledgeplatform" element={<Knowledgeplatform />} />
         
     </Routes>
    </>
  );
}

export default App;
