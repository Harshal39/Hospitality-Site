import React from 'react'
import Out from "../Components/Images/out.jpg";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const About = () => {
  return (
    <div>
      <section className='section-container about-container' id="about">
        <motion.div
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true}} className='about-image'>
            <img src={Out} alt="about" data-sr-id="3"/>
        </motion.div>
        <div className='about-content'>
            <motion.p
            variants={fadeIn("up",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}} className='section-subheader' data-sr-id="4">ABOUT US</motion.p>
            <motion.h2
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}} className='section-header' data-sr-id="6">The Best Holidays Start Here!</motion.h2>
            <motion.p
            variants={fadeIn("up",0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}} className='section-description' data-sr-id="7">
              Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay. <br />
            </motion.p> 
            <h4><a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></h4>
            <h4><a href="tel:+919007062180">Contact us: +91 9007062180</a></h4>
            <br />
            <div className='about-btn' data-sr-id="8">
                <a href="https://wa.link/at5ion">
                    <motion.button
                    variants={fadeIn("up",0.8)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:true, amount:0.7 }} className='btn'>BOOK NOW
                    </motion.button>
                </a>
            </div>
        </div>

      </section>
    </div>
  )
}

export default About
