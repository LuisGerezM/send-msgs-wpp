import { useFormContext } from "react-hook-form";
import { FormCheck } from "view/SendMsgFromWpp/styled-components/FormFields.styled";

export const CheckField = ({ type, label, name }) => {
  const { register } = useFormContext();
  return <FormCheck type={type} label={label} {...register(name)} />;
};
