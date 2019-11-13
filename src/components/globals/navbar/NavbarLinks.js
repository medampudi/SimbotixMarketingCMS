import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles, MenuButton } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/about/",
        name: "About",
      },
      {
        id: 1,
        path: "/contact/",
        name: "Contact",
      },
      {
        id: 2,
        path: "/blog",
        name: "Blog",
      },
    ],
  }

  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          )
        })}
        <li>
          <MenuButton>Strategy Session</MenuButton>
        </li>
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  margin: 10px;
  align-items: center;
  li {
    list-style-type: none;
    margin: 0px;
    button {
      padding: 0.5rem 1rem;
      @media (min-width: 768px) {
        padding: 0.5rem 1rem 0.5rem 1rem;
      }
    }
  }

  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 600;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.lightGrey};
      color: ${styles.colors.primary};
      padding-left: 1.3rem;
    }
  }
  ${styles.transObject({ time: "0.5s" })};
  height: ${props => (props.open ? "260px" : "0px")};
  overflow: hidden;
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 center;
    .nav-link {
      &:hover {
        background: ${styles.colors.veryLightGray};
        padding: 0.5rem 1rem 0.5rem 1rem;
      }
    }
  }
`
