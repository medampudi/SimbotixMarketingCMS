import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import img from "../images/bcg/homeBcg.jpeg"
import { HomeHeader, Banner } from "../utils"
const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner
        title="Mobile App Development Agency"
        subtitle="Talk to us to get your product up and running within no time."
      />
    </HomeHeader>
  </Layout>
)

export default HomePage
