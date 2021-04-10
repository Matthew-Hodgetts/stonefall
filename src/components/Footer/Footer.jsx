import React from 'react';
import "./Footer.scss";

import { BsEnvelope, BsPhone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  return ( <footer className="footer">
    <div className="container">

      <div className="icon">
        <p className="icon__icon">
          <BsPhone />
        </p>
        <p className="icon__text">
          <a href="tel:07912254032">07912254032</a>
        </p>
      </div>

      <div className="icon">
        <p className="icon__icon">
          <FiMapPin/>
        </p>
        <p className="icon__text">
          RICHMOND, NORTH YORKSHIRE
        </p>
      </div>

      <div className="icon">
        <p className="icon__icon">
          <BsEnvelope />
        </p>
        <p className="icon__text">
          <a href="mailto:stonefall46@aol.com">STONEFALL46@AOL.COM</a>
        </p>
      </div>

    </div>
  </footer> );
}

export default Footer;
