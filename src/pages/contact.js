import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from "../utils"
import img from "../images/bcg/contactBcg.jpeg"
const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader img={img}>This is The Contact</PageHeader>
  </Layout>
)

export default ContactPage
