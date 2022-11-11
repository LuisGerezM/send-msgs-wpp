import { useFormContext } from "react-hook-form";
import { useErrorsValidationForm } from "view/SendMsgFromWpp/hooks/useErrorValidationForm";
import { FormSelect } from "view/SendMsgFromWpp/styled-components/FormFields.styled";
import { LabelsForm } from "view/SendMsgFromWpp/styled-components/Labels.styled";

export const SelectField = (props) => {
  const { name, options, label, validation } = props;

  const { errorsValidationForm } = useErrorsValidationForm();
  const { register, errors } = useFormContext();

  return (
    <>
      <LabelsForm>{label}</LabelsForm>
      <FormSelect name={name} {...register(name, validation[name])}>
        <option className="options" value="">
          Selecciona una opción
        </option>
        {options &&
          options.map((opt) => (
            <option key={opt.value} className="options" value={opt.value}>
              {opt.text}
            </option>
          ))}
      </FormSelect>
      {errors && errorsValidationForm(errors, name)}
    </>
  );
};
