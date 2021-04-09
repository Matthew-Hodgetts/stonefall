import * as React from "react"

import "normalize.css";
import "@fontsource/playfair-display";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import Hero from "../components/Hero/Hero";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="hello world"/>
      <Hero />
    </Layout>

  )
}

export default IndexPage
