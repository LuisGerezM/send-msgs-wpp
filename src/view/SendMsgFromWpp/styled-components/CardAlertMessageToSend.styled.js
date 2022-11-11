import { Card } from "react-bootstrap";
import styled from "styled-components";
import { inputTextCssStyle } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

export const CardAlertMessageToSend = styled(Card)`
  ${inputTextCssStyle}
  width: 100%;
  border: ${themeColors.borderTheme};
  padding: 1rem;
  background: ${themeColors.blue} !important;
  color: ${themeColors.primaryColor} !important;
`;
