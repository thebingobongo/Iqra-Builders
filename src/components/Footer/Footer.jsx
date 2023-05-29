import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo1.png" className='logo-image' alt="" />
                <span className='secondaryText'>
                    Our vision is to make all people <br/>  forget all difficulties in finding a residence <br/> for them and their loved ones.
                </span>
            </div>

            {/* right side */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>
                    Raja Zafar Iqbal, CEO <br />
                    +92 331-588-9777, +1 647-507-7252 <br />
                    ziraja@email.com <br />
                    Rawalpindi, Pakistan
                </span>


            </div>
        </div>

        {/* promo at end */}
        <a href="mailto:sirajzafar0@gmail.com" className="paddings innerWidth flexCenter f-promo" >
            Built by Siraj Raja. Contact for info at sirajzafar0@gmail.com
        </a>

    </section>
  )
}

export default Footer