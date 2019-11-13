/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Navbar from "../components/globals/navbar"
import { styles } from "../utils"
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
    </>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  color:${styles.colors.mainBlack};
  background:${styles.colors.veryLightGray};
  /* border-width:3px;
  border-style:solid;
  border-color:${styles.colors.primary}; */
}
`
export default Layout
