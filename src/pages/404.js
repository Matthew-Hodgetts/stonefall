import * as React from "react"

import "normalize.css";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/600.css";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";
import Testimonial from "../components/Testimonial/Testimonial";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="Stonefall Cottage"/>
      <Hero />
      <About />
      <Gallery />
      <Testimonial />
    </Layout>

  )
}

export default NotFoundPage
