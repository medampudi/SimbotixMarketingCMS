import React from "react";
import { customTheme } from "../theme";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SEO from "../components/SEO";
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
// import { Icons } from "grommet-icons"
import { Box, Heading, Grommet, Paragraph } from "grommet";

const Layout = ({ seoTitle, children }) => (
  <Grommet theme={customTheme} full>
    <Box direction="column" align="center" background="background-xweak">
      <SEO title={seoTitle} />
      <SiteHeader />
      {children}
      <SiteFooter />
    </Box>
  </Grommet>
);

export default Layout;
