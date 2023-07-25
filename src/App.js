import React from 'react';
import Home from './Home.js';
import About from './components/about';
import Skills from './components/skills';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Services from './components/services';
import Contact from './components/contact';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>

      <Home />
      <About />
      <Skills /> 
      <Resume /> 
      <Portfolio /> 
      <Services /> 
      <Contact />  
      
    
     
    </div>
  );
}

export default App;
