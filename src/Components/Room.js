import React from 'react';
import Large from "../Components/Images/large.jpg";
import Small from "../Components/Images/small.jpg";
import { motion } from "framer-motion";
import { fadeIn} from "../variants"
import Button from './Button';

const Room = () => {
  return (
    <div>
        <section className="section-container room-container" id="rooms">
      <p className="section-subheader">OUR LIVING ROOM</p>
      <h2 className="section-header">The Most Memorable Rest Time Starts Here.</h2>
      <div className="room-grid">
        <motion.div variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true}} 
          className="room-card">
          <div className="room-card-image">
            <img src={Small} alt="room"/>
            <div className="room-card-icons">
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-paint-fill"></i></span>
              <span><i className="ri-shield-star-line"></i></span>
            </div>
          </div>
          <div className="room-card-details">
            <h4>Cozy Haven Room</h4>
            <p>
              Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
            </p>
            <h5>Starting from <span>Rs. 1000/night</span></h5>
            <a href="https://wa.link/at5ion">
              <Button />
            </a>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true}}
         className="room-card" data-sr-id="11">
          <div className="room-card-image">
            <img src={Large} alt="room"/>
            <div className="room-card-icons">
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-paint-fill"></i></span>
              <span><i className="ri-shield-star-line"></i></span>
            </div>
          </div>
          <div className="room-card-details">
            <h4>Spacious Serenity Suite</h4>
            <p>
              Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
            </p>
            <h5>Starting from <span>Rs. 1500/night</span></h5>
            <a href="https://wa.link/at5ion">
              <button className="btn">BOOK NOW</button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  )
}

export default Room