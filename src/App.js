import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import HeroSection from './components/HeroSection';
import HideAppBar from './components/Navbar/AppBar';
function App(){
  return(
    <Router>
    <HideAppBar></HideAppBar>
    <HeroSection>  
    </HeroSection>
    </Router>
  );
}

export default App;