import styled from "styled-components";
import { Button as ButtonBootstrap } from "react-bootstrap";
import { themeColors } from "styled-components/Theme.styled";

export const Button = styled(ButtonBootstrap)`
  background-color: ${themeColors.skyblue};
  color: ${themeColors.darkBlueTheme};
  border: 1px solid ${themeColors.skyblue};
  transition: 0.5s;
`;
