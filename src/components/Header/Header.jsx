import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link, animateScroll as scroll } from 'react-scroll';
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

import mobileLogo from '../../logos/logo1-removebg-whitetext.png'
import desktopLogo from '../../logos/logo-banner-tp.png'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const logoWidth = isMobile ? 200 : 600;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const getMenuStyles = (menuOpened) => {
    if (window.innerWidth <= 1200) {
      return {right: !menuOpened && '-100%'}
    };
  }

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };


  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>

            <img src={isMobile ? mobileLogo : desktopLogo} alt="logo" width={logoWidth} />

            <OutsideClickHandler onOutsideClick={()=> {
              setMenuOpened(false)
            }}>
              <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
                <Link
                  to="values-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  onClick={() => setMenuOpened(false)}
                  >
                    Our Values
                </Link>

                <Link
                  to="testimonials-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  onClick={() => setMenuOpened(false)}
                  >
                    Testimonials
                </Link>

                <Link
                  to="get-started-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  onClick={() => setMenuOpened(false)}
                  >
                    Get Started
                </Link>
                <Link
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  onClick={() => setMenuOpened(false)}
                  className='button'
                  >
                    Contact Us
                </Link>
              </div> 
            </OutsideClickHandler>

          <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
          </div>
        </div>

        

    </section>
  )
}

export default Header