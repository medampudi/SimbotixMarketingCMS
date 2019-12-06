import React from "react";
import Layout from "../components/Layout";
import DeepSkyBlue from "../components/blockMove";
import website from "../../website-config";
import { Box, Heading, Grommet, Paragraph } from "grommet";

const IndexPage = () => (
  <Layout seoTitle={`Home - ${website.titleAlt}`}>
    <Box
      pad="medium"
      width="xlarge"
      height="xlarge"
      margin="medium"
      background="background"
      elevation="small"
    >
      <Heading level={1}>
        <strong>In bussiness to deliver Awesome customer experiences</strong>
      </Heading>
      <Paragraph>Hello from a Grommet page!</Paragraph>
      <DeepSkyBlue />
    </Box>
  </Layout>
);

export default IndexPage;
