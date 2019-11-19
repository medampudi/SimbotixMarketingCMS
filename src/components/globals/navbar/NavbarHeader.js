import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/logo_header_large.svg"
import { FaAlignJustify } from "react-icons/fa"
import styled from "styled-components"
export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/" className="logo-icon">
          <img src={logo} alt="Simbotix Logo"></img>
        </Link>

        <FaAlignJustify
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        ></FaAlignJustify>
      </HeaderWrapper>
    )
  }
}
const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none !important;
    border-style: none;
    &:hover {
      text-decoration: none !important;
    }
  }
  img {
    margin-bottom: 0;
    text-decoration: none !important;
  }
  .toggle-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
