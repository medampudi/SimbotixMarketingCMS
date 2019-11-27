import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import img from "../images/bcg/homeBcg.svg"
import HomeGraphic from "../components/home/home_graphic"
import { HomeHeader, Banner } from "../utils"
import DeepSkyBlue from "../components/home/blockMove"
const HomePage = () => (
  <Layout>
    <SEO title="Home" />

    <Banner
      title="Product Development Agency"
      subtitle="Talk to us to get your product up and running within no time."
    >
      <DeepSkyBlue />
    </Banner>

    <HomeGraphic />
  </Layout>
)

export default HomePage
