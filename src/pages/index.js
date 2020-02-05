import React from "react"
import Layout from "../components/SiteLayout"
import website from "../../website-config"
import {
  Box,
  Heading,
  Paragraph,
  Text,
  Button,
  ResponsiveContext,
} from "grommet"

const IndexPage = () => {
  const size = React.useContext(ResponsiveContext)
  const smallScreen = size === "small" || size === "xsmall"

  return (
    <Layout seoTitle={`Home - ${website.titleAlt}`}>
      <Box
        pad="medium"
        width="xlarge"
        margin="medium"
        background="background"
        align="center"
        alignContent="center"
      >
        <Heading level={2} textAlign="center" alignContent="medium">
          Hello, We are Simbotix.{" "}
        </Heading>
        <Heading level={1} textAlign="center" alignContent="medium">
          We supplement your business by serverless tech solutions.
        </Heading>
        <Text
          size={smallScreen ? "medium" : "large"}
          responsive
          textAlign="center"
          margin={smallScreen ? "medium" : "large"}
        >
          There are a number of questions that go into indentifying which
          approach is right for you. So before you are hell bent of going one
          way or the other. just spare 15 minutes of your time to understand
          what it takes.
        </Text>
        <Box pad={{ horizontal: "large", vertical: "large" }}>
          <Button
            primary
            type="button"
            color="text-strong"
            label="Book a Free 15 mins"
            href="/valuepdf"
          />
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
