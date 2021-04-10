import React from 'react';
import "./Gallery.scss";
// Gallery images
import img1 from "../../images/gallery-img-1.png";
import img2 from "../../images/gallery-img-2.png";
import img3 from "../../images/gallery-img-3.png";
import img4 from "../../images/gallery-img-4.png";
import img5 from "../../images/gallery-img-5.jpg";
import img6 from "../../images/gallery-img-6.jpg";

const Gallery = () => {
  return ( <section className="gallery">
    <img src={img1} alt="lol" />
    <img src={img2} alt="lol" />
    <img src={img3} alt="lol" />
    <img src={img4} alt="lol" />
    <img src={img5} alt="lol" />
    <img src={img6} alt="lol" />
  </section> );
}

export default Gallery;
