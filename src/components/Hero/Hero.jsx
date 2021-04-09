import React from 'react';
import "./Hero.scss";

import heroBg from "../../images/hero-bg.jpg";
import logo from "../../images/logo.png";


const Hero = () => {
    return ( <div className="hero" style={{backgroundImage: `url(${heroBg})`}}>
        <img src={logo} alt="Stonefall cottage" className="hero__logo"/>
    </div> );
}
 
export default Hero;