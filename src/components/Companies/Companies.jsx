import React from 'react'
import './Companies.css'

const Companies = () => {
  return (
    <section className="contact-wrapper">
        <div className="paddings innerWidth flexCenter contact-container">
            <img src='./10-years-experience.png' alt='' />
            <img src='./bahria-logo.png' alt='' />
            <img src='./dha-logo.png' alt='' />
            <img srcset="./Pakistan-288w.png 288w"
            sizes="(min-width: 780px) 144px, (min-width: 640px) calc(20vw - 34px), calc(20vw - 18px)"
            src="./Pakistan-288w.png" alt=""/>
        </div>
    </section>
  )
}

export default Companies