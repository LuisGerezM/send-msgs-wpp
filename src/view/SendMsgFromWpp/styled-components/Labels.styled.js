import { Form } from "react-bootstrap";
import styled from "styled-components";
import { inputTextCssStyle } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

export const LabelsForm = styled(Form.Label)`
  ${inputTextCssStyle}
  background-color: hsl(100, 100, 100,.25);
  color: ${themeColors.primaryColor};
  transition: 0.5s;
`;
