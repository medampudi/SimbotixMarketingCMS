import React from "react"
import { Box, Heading, Image, Button, ResponsiveContext } from "grommet"
import logo from "../images/logo_red.svg"
import { Link } from "gatsby"

import styled from "styled-components"
const SiteHeader = () => {
  const size = React.useContext(ResponsiveContext)
  const isSmallScreen = size === "small" || size === "xsmall"

  return (
    <Box
      fill
      tag="header"
      pad="medium"
      elevation="medium"
      justify="between"
      align="center"
      direction={isSmallScreen ? "column" : "row"}
      background="background-strong"
      style={{ position: "sticky", top: 0, zIndex: 2 }}
    >
      <HeaderStyledLink align="center" to="/" margin="none">
        <Box direction="row">
          <Image width="40px" height="40px" src={logo} alt="Simbotix Logo" />
          <Heading
            level={2}
            margin={{ left: "small", top: "none", bottom: "none" }}
            color="text-strong"
          >
            Simbotix
          </Heading>
        </Box>
      </HeaderStyledLink>

      <Box direction="row" margin="none" responsive={true}>
        <Box
          align="center"
          justify="between"
          margin={isSmallScreen ? "large" : "none"}
          pad={{ horizontal: "small", vertical: "none" }}
          direction="row"
        >
          <HeaderStyledLink
            weight="bold"
            size="medium"
            align="center"
            to="/about"
            color="text-strong"
          >
            About
          </HeaderStyledLink>
        </Box>
        <Box
          align="center"
          justify="between"
          pad={{ horizontal: "medium", vertical: "none" }}
          direction="row"
        >
          <HeaderStyledLink
            weight="bold"
            size="medium"
            align="center"
            to="/contact"
            color="text-strong"
          >
            Contact
          </HeaderStyledLink>
        </Box>
        <Box
          align="center"
          justify="between"
          pad={{ horizontal: "medium", vertical: "none" }}
          direction="row"
        >
          <HeaderStyledLink
            weight="bold"
            size="medium"
            align="center"
            to="/blog"
            color="text-strong"
          >
            Blog
          </HeaderStyledLink>
        </Box>
      </Box>
      <Box
        align="center"
        pad={{ horizontal: "medium", vertical: "none" }}
        direction="row"
      >
        <Button
          primary
          color="text-strong"
          label="Free Consultation"
          href="/valuepdf"
        />
      </Box>
    </Box>
  )
}

const HeaderStyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    color: ;
  }
  :visited {
    color: inherit;
  }
`

const HeaderStyledButton = styled(Button)`
  text-decoration: none;
  border-color: inherit;
  background-color: "background";
  color: inherit;
`

export default SiteHeader
