import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../DigitalVistingCard/Home';
import About from '../DigitalVistingCard/About';
import Services from '../DigitalVistingCard/Services';
import Photos from '../DigitalVistingCard/Photos';
import Video from '../DigitalVistingCard/Video';
import Contact from '../DigitalVistingCard/Contact'
function VistingCardlayout() {
  return (
    
      <div className="space-y-5">
        
          <Home /> 
          <Contact/>
          <About />
          <Services />
          <Photos />
          {<Video />}
        
      </div>
  
  );
}

export default VistingCardlayout;
