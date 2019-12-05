/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import {
  Grommet,
  Heading,
  Box,
  Image,
  ResponsiveContext,
  Button,
  defaultProps,
} from "grommet"
import { Header } from "grommet-controls"
import logo from "../images/logo_red.svg"
import { FaAlignJustify } from "react-icons/fa"
import { customTheme } from "../theme"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <Grommet theme={customTheme} full>
      <Header position="sticky" background="light-1">
        <ResponsiveContext.Consumer>
          {size => (
            <>
              <HeaderMainLink to="/">
                <Box direction="row" justify="center" gap="small">
                  <Image
                    width="40px"
                    height="40px"
                    src={logo}
                    alt="Simbotix Logo"
                  ></Image>

                  <Heading level={2} margin="none">
                    Simbotix
                  </Heading>
                </Box>
              </HeaderMainLink>
              <Box direction="row" gap="large" align="center">
                <HeaderSubLink to="/about">
                  <Heading level={4} margin="none">
                    About
                  </Heading>
                </HeaderSubLink>
                <HeaderSubLink to="/contact">
                  <Heading level={4} margin="none">
                    Contact
                  </Heading>
                </HeaderSubLink>
                <HeaderSubLink to="/blog">
                  <Heading level={4} margin="none">
                    Blog
                  </Heading>
                </HeaderSubLink>

                <Button
                  label="Free Consultation"
                  href="/valuepdf"
                  margin="none"
                />
              </Box>
            </>
          )}
        </ResponsiveContext.Consumer>
      </Header>

      <Box align="center">{children}</Box>
    </Grommet>
  )
}

const HeaderMainLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: none;

  a.Heading {
  color: "${defaultProps.theme.global.colors["dark-1"]}";
  }
`
const HeaderSubLink = styled(HeaderMainLink)``

const coloredButton = {
  button: {
    border: {
      color: "brand",
      radius: "4px",
    },
  },
}

// const HeaderButton = styled(Button)`
//   color: ${props =>
//     props.primary ? "${defaultProps.theme.global.colors["light-1"]}" : "${defaultProps.theme.global.colors.brand}"};
// `

export default Layout
