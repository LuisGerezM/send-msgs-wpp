import styled from "styled-components";
import { themeColors } from "styled-components/Theme.styled";
import { NavLink } from "react-router-dom";
import { inputTextCssStyle } from "styled-components/App.styled";

const NavLinkReactRouter = styled(NavLink)`
  ${inputTextCssStyle}
  color: ${themeColors.primaryColor}!important;

  &.active {
    color: ${themeColors.blue} !important;
  }
`;

export { NavLinkReactRouter };
