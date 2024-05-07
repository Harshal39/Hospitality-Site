import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Button from './Button';
import "./Stylesheet/styles.css";


const HeaderLogo = () => (
  <div className="logo">
    <a href="https://wa.link/at5ion">
      <span style={{ color: 'aliceblue' }}>
        Kingsukh <br /> Guest House
      </span>
    </a>
  </div>
);

const Navigation = ({ isMenuOpen, toggleMenu }) => (
  <nav>
    <div className="nav-bar">
      <HeaderLogo />
      <div className="nav-menu-btn" onClick={toggleMenu}>
        <i className="ri-menu-line" />
      </div>
    </div>
    <ul className={isMenuOpen? "nav-links open" : "nav-links"}>
    <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#rooms">Room</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#gallery">Gallery</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
    </ul>
    <a href="https://wa.link/at5ion">
      <Button />
    </a>
  </nav>
);

const HeaderContainer = () => (
  <div className="section-container header-container" id="home">
    <motion.p
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
    >Simple - Unique - Friendly</motion.p>
    <motion.h1
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
    >Make Yourself At Home<br />In Our <span>Guest House</span>.</motion.h1>
  </div>
);

const BookingForm = () => (
  <div className="booking-form">
    <div className="input-group input-btn">
      <a href="https://wa.link/at5ion">
        <Button />
      </a>
    </div>
  </div>
);

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="header">
        <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <HeaderContainer />
      </header>
      <section className="section-container booking-container">
        <BookingForm />
      </section>
    </div>
  );
};

export default Home;