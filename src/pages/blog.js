import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils"
import img from "../images/bcg/menuBcg.jpeg"
const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <PageHeader img={img}>This is The Blog</PageHeader>
  </Layout>
)

export default BlogPage
