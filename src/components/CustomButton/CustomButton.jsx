import { Button } from "./styled-components/CustomButton.styled";

export const CustomtButton = ({
  type = undefined,
  buttonClass = "",
  text,
  disabledButton = false,
}) => {
  return (
    <Button className={buttonClass} type={type} disabled={disabledButton}>
      {text}
    </Button>
  );
};
