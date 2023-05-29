import React from 'react'
import './Hero.css'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="blue-circle"/>
                    <motion.h1
                    initial={{y:"2rem", opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration: 2, type:"spring"}}
                    >
                        Start building <br/> your own Property <br/> Portfolio in Pakistan 
                    </motion.h1>
                </div>

                <div className="flexColStart hero-des">
                    <span className='secondaryTextDark'>Work with <span className='orangeTextSmall'> Iqra Estate and Builders </span> to <span className='orangeTextSmall'>Buy, Sell and Manage </span> property.</span>
                    <span className='secondaryTextDark'>Forget all difficulties in finding a residence for you and your loved ones.</span>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={20} /> 
                            <span>+</span>
                        </span>
                        <span className='secondaryText'> Plots Sold </span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={26000} end={26400} duration={2}/> 
                            <span>+</span>
                        </span>
                        <span className='secondaryText'> Square Feet Developed </span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={8} /> 
                            <span>+</span>
                        </span>
                        <span className='secondaryText'> Houses Built </span>
                    </div>
                </div>

            </div>


            {/* right side */}
            
            <div className="flexCenter hero-right">
                <motion.div
                initial={{x:"7rem", opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration: 1, type:"ease-in"}}j
                className="image-container">
                    <img src="./bahria-home-1.jpg" alt="" />
                </motion.div>
            </div>

        </div>
    </section>
  )
}

export default hero