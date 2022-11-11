import { useFormContext } from "react-hook-form";
import { useErrorsValidationForm } from "view/SendMsgFromWpp/hooks/useErrorValidationForm";
import { FormInput } from "view/SendMsgFromWpp/styled-components/FormFields.styled";
import { LabelsForm } from "view/SendMsgFromWpp/styled-components/Labels.styled";

export const InputField = (props) => {
  const { type, placeholder, name, disabled, as, validation, label } = props;

  const { errorsValidationForm } = useErrorsValidationForm();
  const { register, errors } = useFormContext();

  return (
    <>
      <LabelsForm>{label} </LabelsForm>
      <FormInput
        className="form-control"
        type={type}
        as={as || ""}
        placeholder={placeholder}
        error={errors && errors[name]}
        disabled={disabled}
        autoComplete="off"
        {...register(name, validation[name])}
      />
      {errors && errorsValidationForm(errors, name)}
    </>
  );
};
