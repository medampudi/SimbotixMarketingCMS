import React from "react"
// import Layout from "../components/layout"
import SEO from "../components/seo"
import DeepSkyBlue from "../components/home/blockMove"
import Layout from "../components/layout"
// import { Icons } from "grommet-icons"
import { Box, Heading, Paragraph } from "grommet"
const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Box width="xxlarge" pad="large">
      <Heading level={1}>
        <strong>Hello World</strong>
      </Heading>
      <Paragraph>Hello from a Grommet page!</Paragraph>
      <DeepSkyBlue />
    </Box>
  </Layout>
)

export default HomePage
