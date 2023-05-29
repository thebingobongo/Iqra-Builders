import React from 'react';
import { Element } from 'react-scroll';
import './App.css'
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Companies from './components/Companies/Companies.jsx';
import Values from './components/Values/Values.jsx';
import Contact from './components/Contact/Contact.jsx';
import GetStarted from './components/GetStarted/GetStarted.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.jsx';
import Testimonials from './components/Testimonials/Testimonials';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Element name="companies-section">
        <Companies />
      </Element>
      <Element name="values-section">
        <Values />
      </Element>
      <Element name="testimonials-section">
        <Testimonials/>
      </Element>
      <Element name="contact-section">
        <Contact />
      </Element>
      <Element name="get-started-section">
        <GetStarted />
      </Element>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}


export default App;
