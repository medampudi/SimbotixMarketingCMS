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
    { name: "company", start: [0, 0], end: [0, 0] },
    { name: "links", start: [0, 1], end: [0, 1] },
    { name: "consult", start: [0, 2], end: [0, 2] },
  ],
  medium: [
    { name: "company", start: [0, 0], end: [1, 0] },
    { name: "links", start: [0, 1], end: [0, 1] },
    { name: "consult", start: [1, 1], end: [1, 1] },
  ],
  large: [
    { name: "company", start: [0, 0], end: [0, 0] },
    { name: "links", start: [1, 0], end: [1, 0] },
    { name: "consult", start: [2, 0], end: [2, 0] },
  ],
  xlarge: [
    { name: "company", start: [0, 0], end: [0, 0] },
    { name: "links", start: [1, 0], end: [1, 0] },
    { name: "consult", start: [2, 0], end: [2, 0] },
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

const SiteHeaderMock = () => {
  const size = React.useContext(ResponsiveContext)
  return (
    <Box
      fill
      tag="header"
      pad="medium"
      elevation="medium"
      justify="between"
      direction="row"
      align="stretch"
      responsive={true}
      background="background-strong"
      style={{ position: "sticky", top: 0, zIndex: 2 }}
    >
      <Responsive
        rows={rows}
        columns={columns}
        gap="small"
        areas={fixedGridAreas}
        margin="none"
      >
        <Box
          gridArea="company"
          justify="center"
          align="center"
          background="brand"
          width="large"
        >
          <Text>Lorem ipsum dolor sit amet, </Text>
        </Box>
        <Box
          gridArea="links"
          justify="center"
          align="center"
          width="large"
          background="accent-1"
        >
          <Text>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,</Text>
        </Box>
        <Box
          gridArea="consult"
          justify="center"
          align="center"
          background="accent-2"
        >
          <Text>Lorem ipsum dolor sit amet,</Text>
        </Box>
      </Responsive>
    </Box>
  )
}

const LinkWrapper = styled(Link)`
  text-decoration: none;
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
export default SiteHeaderMock
