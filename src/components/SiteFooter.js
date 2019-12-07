import React from "react"
import { Box, Grid, Heading, ResponsiveContext, Text, Anchor } from "grommet"
import { Link } from "gatsby"
import { FaAws, FaWhatsapp } from "react-icons/fa"
import styled from "styled-components"

const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto", "auto"],
  xlarge: ["auto", "auto", "auto"],
}

const rows = {
  small: ["auto", "auto", "auto"],
  medium: ["auto", "auto"],
  large: ["auto"],
  xlarge: ["auto"],
}
// Set the different areas you need for every size
const fixedGridAreas = {
  small: [
    { name: "title", start: [0, 0], end: [0, 0] },
    { name: "internal", start: [0, 1], end: [0, 1] },
    { name: "social", start: [0, 2], end: [0, 2] },
  ],
  medium: [
    { name: "title", start: [0, 0], end: [1, 0] },
    { name: "internal", start: [0, 1], end: [0, 1] },
    { name: "social", start: [1, 1], end: [1, 1] },
  ],
  large: [
    { name: "title", start: [0, 0], end: [0, 0] },
    { name: "internal", start: [1, 0], end: [1, 0] },
    { name: "social", start: [2, 0], end: [2, 0] },
  ],
  xlarge: [
    { name: "title", start: [0, 0], end: [0, 0] },
    { name: "internal", start: [1, 0], end: [1, 0] },
    { name: "social", start: [2, 0], end: [2, 0] },
  ],
}

const Responsive = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      // Take into consideration if not array is sent but a simple string
      let columnsVal = columns
      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size]
        }
      }

      let rowsVal = rows
      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size]
        }
      }

      // Also if areas is a simple array not an object of arrays for
      // different sizes
      let areasVal = areas
      if (areas && !Array.isArray(areas)) areasVal = areas[size]

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      )
    }}
  </ResponsiveContext.Consumer>
)

const SiteFooter = () => {
  const size = React.useContext(ResponsiveContext)
  return (
    <Box
      fill
      responsive={true}
      background="background-strong"
      elevation="medium"
    >
      <Responsive
        rows={rows}
        columns={columns}
        gap="small"
        areas={fixedGridAreas}
        margin="medium"
      >
        <Box
          gridArea="title"
          justify="center"
          align={
            size === "xsmall" || size === "small" || size === "medium"
              ? "center"
              : "start"
          }
        >
          <Heading level={2} margin={{ bottom: "medium" }} color="text-strong">
            Simbotix
          </Heading>
          <Text>
            &#169; 2020, Simbotix Private Limited,
            {size === "xsmall" || size === "small" || size === "medium" ? (
              " "
            ) : (
              <br />
            )}
            Built for and hosted on <FaAws /> , Costs &lt; <strong>$5</strong>.
            Ask us How?
          </Text>
        </Box>
        <Box gridArea="internal" justify="center" align="center">
          <Heading level={2}>Company</Heading>
          <LinkWrapper to="/blog">Blog</LinkWrapper>
          <LinkWrapper to="/about">About</LinkWrapper>
          <LinkWrapper to="/contact">Contact</LinkWrapper>
          <LinkWrapper to="/refunds">Cancellations</LinkWrapper>
          <LinkWrapper to="/privacy">Privacy Policy</LinkWrapper>
          <LinkWrapper to="/terms">Terms of Service</LinkWrapper>
        </Box>
        <Box gridArea="social" justify="center" align="center">
          <Heading level={2}> Follow Us</Heading>
          <AnchorWrapper href="https://www.facebook.com/simbotix/">
            Facebook
          </AnchorWrapper>
          <AnchorWrapper href="https://www.linkedin.com/company/simbotix/">
            LinkedIn
          </AnchorWrapper>
          <AnchorWrapper href="https://twitter.com/simbotix">
            Twitter
          </AnchorWrapper>
          <AnchorWrapper href="mailto:contact@simbotix.com">
            Email
          </AnchorWrapper>
          <AnchorWrapper href="tel:+918096783968">Phone</AnchorWrapper>
          <AnchorWrapper href="https://wa.me/918096783968">
            WhatsApp <FaWhatsapp />
          </AnchorWrapper>
        </Box>
      </Responsive>
    </Box>
  )
}

const LinkWrapper = styled(Link)`
  text-decoration: none;
  text-emphasis: ;
  margin: 0.5rem;
  color: inherit;
  :visited {
    color: inherit;
  }
`
const AnchorWrapper = styled(Anchor)`
  text-decoration: none;
  margin: 0.5rem;
  color: inherit;
  :visited {
    color: inherit;
  }
`
export default SiteFooter
