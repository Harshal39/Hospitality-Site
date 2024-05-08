import React from 'react';
import Out from "./Images/out.jpg";
import Ayodhya from "./Images/ayodhya.webp";
import Large from "./Images/large.jpg";
import Palash from "./Images/palash.webp";
import Small from "./Images/small.jpg";
import Baranti from "./Images/baranti.webp";
import Recep from "./Images/recep.jpg";
import Flower from "./Images/flower.jpg";
import Room1 from "./Images/room1.jpg";
import Mithondam from "./Images/mithonDam.webp";
import "./Stylesheet/styles.css";

const Gallery = () => {
  return (
    <div>
        <section id="gallery">
      <div className="about-content">
        <p className="section-subheader" style={{textAlign:"center"}}>GALLERY</p> </div>
        <br/>
      <div className="container11">
        <div className="box11 a"><img src={Out} alt="Out"/></div>
        <div className="box11 b"><img src={Ayodhya} alt="Ayodhya"/></div>
        <div className="box11 c"><img src={Large} alt="Large"/></div>
        <div className="box11 d"><img src={Palash} alt="Palash"/></div>
        <div className="box11 e"><img src={Small} alt="Small"/></div>
        <div className="box11 f"><img src={Baranti} alt="Baranti"/></div>
        <div className="box11 g"><img src={Recep} alt="Recep"/></div>
        <div className="box11 h"><img src={Flower} alt="Flower"/></div>
        <div className="box11 j"><img src={Room1} alt="Room1"/></div>
        <div className="box11 i"><img src={Mithondam} alt="Mithondam"/></div>
      </div>
    </section>
    </div>
  )
}

export default Gallery