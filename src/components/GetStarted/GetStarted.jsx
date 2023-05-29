import React, {useEffect, useState} from 'react'
import './GetStarted.css'

const GetStarted = () => {
  const [isMobile, setIsMobile] = useState(false);
  const spanText = isMobile ? "Ready to take the first step towards your real estate goals? Click the button below and let's begin the journey together. " : "Ready to take the first step towards your real estate goals? Click the button below and let's begin the journey together. Our team at Iqra Estate and Builders is eager to assist you in finding the perfect property, building your dream home, or managing your real estate investment. Experience our exceptional services and start turning your vision into reality today.";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="g-wrapper">

        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Us Today!</span>
                <span className='secondaryText'>{spanText}</span>

                <button className="button">
                    <a href="mailto:sirajzafar0@gmail.com">Email us now!</a>
                </button>
            </div>
        </div>

    </section>
  )
}

export default GetStarted