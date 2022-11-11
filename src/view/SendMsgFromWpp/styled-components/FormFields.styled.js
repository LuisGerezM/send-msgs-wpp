import { Form } from "react-bootstrap";
import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { inputTextCssStyle } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";
import arrowDown from "assets/arrowDown.svg";

const FormCheck = styled(Form.Check)`
  ${inputTextCssStyle}
  color: ${themeColors.primaryColor};
  background-color: ${themeColors.background};
  padding: 1rem;
  cursor: pointer;
  transition: 0.5s;

  ${fadeIn}
`;

const FormInput = styled(Form.Control)`
  width: 100%;
  height: ${({ as }) => (as ? "130px" : "auto")};
  margin-bottom: 0.25rem;
  ${inputTextCssStyle}
  color: ${themeColors.primaryColor};
  background: ${themeColors.background};
  outline: 1px solid ${themeColors.secondaryColor} !important;
  padding: 1rem;
  cursor: pointer;
  transition: 0.5s;

  &:focus {
    color: ${themeColors.primaryColor};
    background-color: ${themeColors.background};
  }

  &:disabled {
    color: ${themeColors.primaryColor};
    background-color: ${themeColors.blackShadow};
    outline: ${themeColors.borderTheme} !important;
    cursor: not-allowed;
  }

  ${fadeIn}
`;

const FormSelect = styled(Form.Select)`
  ${inputTextCssStyle}
  width: 100%;
  margin-bottom: 0.25rem;
  background-color: ${themeColors.background} !important;
  color: ${themeColors.primaryColor};
  outline: 1px solid ${themeColors.secondaryColor} !important;
  padding: 1rem;
  background-image: url(${arrowDown});
  background-size: 1rem;
  cursor: pointer;
  transition: 0.5s;

  ${fadeIn}
`;

export { FormCheck, FormInput, FormSelect };
