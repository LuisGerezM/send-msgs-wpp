import { Form } from "react-bootstrap";
import styled, { css } from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { inputTextCssStyle } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";
import arrowDown from "assets/arrowDown.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormCheck = styled(Form.Check)`
  ${inputTextCssStyle}
  color: ${themeColors.primaryColor};
  background-color: ${themeColors.background};
  padding: 1rem;
  cursor: pointer;
  transition: 0.5s;

  ${fadeIn}
`;

const focus = css`
  color: ${themeColors.primaryColor};
  background-color: ${themeColors.background};
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
    ${focus}
  }

  &:disabled {
    color: ${themeColors.primaryColor};
    background-color: ${themeColors.blackShadow};
    outline: ${themeColors.borderTheme} !important;
    cursor: not-allowed;
  }

  ${fadeIn}
`;

const DateInputForm = styled(DatePicker)`
  width: 100%;
  margin-bottom: 0.25rem;
  ${inputTextCssStyle}
  color: ${themeColors.primaryColor};
  background: ${themeColors.background};
  outline: 1px solid ${themeColors.secondaryColor} !important;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5s;

  &:focus {
    ${focus}
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

export { FormCheck, FormInput, FormSelect, DateInputForm };
