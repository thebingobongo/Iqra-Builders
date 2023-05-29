import React from 'react'
import './Contact.css'
import { MdCall, MdOutgoingMail, MdWhatsapp } from 'react-icons/md'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>We would love to hear from you!</span>
                <span className='secondaryTextDark'>Whether you have questions about our services, want to discuss your property needs, or are ready to embark on your real estate journey, our team at Iqra Estate and Builders is here to assist you. </span>
            
            
                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call in Canada</span>
                                    <span className='secondaryText'>+1 647-507-7252</span>
                                </div>
                            </div>
                            <a href="tel:+16475077252" rel="noopener" className='flexCenter button'>
                                Call Now
                            </a>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call in Pakistan</span>
                                    <span className='secondaryText'>+92 331-588-9777</span>
                                </div>
                            </div>
                            <a href="tel:+923315889777" rel="noopener" className='flexCenter button'>
                                Call Now
                            </a>
                        </div>


                    </div>

                    {/* second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdOutgoingMail size={30}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Send an Email</span>
                                    <span className='secondaryText'>ziraja72@gmail.com</span>
                                </div>
                            </div>
                            <a href="mailto:ziraja72@gmail.com" rel="noopener" className='flexCenter button'>
                                Email Now
                            </a>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdWhatsapp size={30}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryTextContact'>WhatsApp Group</span>
                                    <span className='secondaryText'>Join our Group!</span>
                                </div>
                            </div>
                            <a href="https://chat.whatsapp.com/HVFyLZtgcVwHUMlEK7zxYS" target="_blank" rel="noopener noreferrer" className="flexCenter button">
                                WhatsApp Link
                            </a>
                        </div>


                    </div>
                </div>
            
            
            </div>

            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./bahria-homes-3.jpg" alt="" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact