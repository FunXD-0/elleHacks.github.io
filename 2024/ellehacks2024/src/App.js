<<<<<<< Updated upstream
import './App.css'
import Hello from './components/Hello.js';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import AboutUs from './components/AboutUs.js';
import JoinUS from './components/JoinUS.js';
import MeetTheTeam from './components/MeetTheTeam.js';
=======
import React from 'react';

import { HashRouter as Router } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import JoinUS from './components/JoinUS';
import FAQ from './components/FAQ';
import MeetTheTeam from './components/MeetTheTeam'
import MeetOurSponsors from './components/MeetOurSponsors'
import Footer from './components/Footer';
>>>>>>> Stashed changes
import 'bootstrap/dist/css/bootstrap.min.css';
;

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
       <NavBar />
       <Home />
       <AboutUs/>
       <MeetTheTeam/>
       <JoinUS />;
      <Hello />
    </div>



=======
    <Router>
      <div className="App">
        <NavBar />
        <Home id="home" />
        <AboutUs id="aboutus" />
        <MeetTheTeam id="meettheteam" />
        <JoinUS id="joinus" />
        <FAQ id="faq" />
        <MeetOurSponsors id="meetoursponsors" />
        <Footer />
      </div>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
