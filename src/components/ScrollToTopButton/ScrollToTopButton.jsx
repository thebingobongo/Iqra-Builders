import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './ScrollToTopButton.css';
import { MdNorth } from "react-icons/md";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      <div className="flexCenter icon">
        <MdNorth size={35}/>
      </div>
    </button>
  );
};

export default ScrollToTopButton;
