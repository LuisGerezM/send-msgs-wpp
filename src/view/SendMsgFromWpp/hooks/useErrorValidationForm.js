import styled from "styled-components";
import { smallTextCssStyle } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

export const useErrorsValidationForm = () => {
  const errorsValidationForm = (errors, errorKey) => {
    return errors[errorKey] ? (
      <ErrorsValidationFormStyled className="ErrorsValidationFormStyled">
        {errors[errorKey].message}
      </ErrorsValidationFormStyled>
    ) : (
      ""
    );
  };

  return { errorsValidationForm };
};

const ErrorsValidationFormStyled = styled.div`
  color: ${themeColors.red};
  font-weight: bold;
  ${smallTextCssStyle};
  transition: 0.5s;
`;
