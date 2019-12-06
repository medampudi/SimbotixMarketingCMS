import React from "react";
import { Box, Heading, Image, Button, ResponsiveContext } from "grommet";
import logo from "../images/logo_red.svg";
import { Link } from "gatsby";

import styled from "styled-components";
const SiteHeader = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box
      fill
      tag="header"
      pad="medium"
      elevation="medium"
      justify="between"
      direction="row"
      align="top"
      responsive={true}
      background="background-strong"
      style={{ position: "relative" }}
    >
      <HeaderStyledLink align="center" to="/">
        {size !== "small" && (
          <Heading level={2} margin="none" color="text-strong">
            Simbotix
          </Heading>
        )}
        {(size === "small" || size === "xsmall") && (
          <Image width="40px" height="40px" src={logo} />
        )}
      </HeaderStyledLink>

      <Box direction="row" margin="none">
        <Box
          align="center"
          justify="between"
          pad={{ horizontal: "small", vertical: "none" }}
          direction="row"
        >
          <HeaderStyledLink
            weight="bold"
            size="medium"
            align="center"
            to="/about"
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
          >
            Blog
          </HeaderStyledLink>
        </Box>
        <Box
          align="center"
          pad={{ horizontal: "medium", vertical: "none" }}
          direction="row"
        >
          <HeaderStyledButton
            primary
            label={size === "small" ? "Free Consult." : "Free Consultation"}
            href="/valuepdf"
          />
        </Box>
      </Box>
    </Box>
  );
};

const HeaderStyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :visited {
    color: inherit;
  }
`;

const HeaderStyledButton = styled(Button)`
  text-decoration: none;
  border-color: inherit;
  background-color: "text-strong";
  color: inherit;
`;

export default SiteHeader;
