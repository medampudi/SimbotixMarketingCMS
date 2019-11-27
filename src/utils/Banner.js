import React from "react"
import styled from "styled-components"
import { styles } from "../utils"
export const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  font-weight: 700;
  text-align: left;
  h1 {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: "0.75rem" })};
  }
  h3 {
    color: ${styles.colors.veryLightGray};
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  align-items: center;
`
Banner.defaultProps = {
  title: "default title",
}
