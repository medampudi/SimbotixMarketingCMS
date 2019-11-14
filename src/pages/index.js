import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader } from "../utils"
const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader>This is The Home header</HomeHeader>
  </Layout>
)

export default HomePage
