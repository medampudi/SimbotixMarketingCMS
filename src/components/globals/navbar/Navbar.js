import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import { styles } from "../../../utils"
import styled from "styled-components"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }
  render() {
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
      </NavWrapper>
    )
  }
}
const NavWrapper = styled.nav`
  justify-content: space-between;
  background: ${styles.colors.mainWhite};
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
