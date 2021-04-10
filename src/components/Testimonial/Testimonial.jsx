import React from 'react';
import "./Testimonial.scss";

import { FaQuoteLeft} from "react-icons/fa";



const Testimonial = () => {
  return ( <
  section className="testimonial">
  <div className="testimonial__icon">
    <FaQuoteLeft/>
  </div>
    <p className="testimonial__content">
    EXCELLENTLY PRESENTED PROPERTY. VERY CLEAN AND WELL DECORATED. WELL EQUIPPED WITH LARGE TV IN LOUNGE AND TVS IN BEDROOMS. LOVELY PATIO AND OUTLOOK. LOTS OF WALKS AND NEAR TO AMENITIES OF RICHMOND. REALLY ENJOYED OUR STAY.
    </p>
    <p className="testimonial__author">DIANNE S</p>
  </section> );
}

export default Testimonial;
