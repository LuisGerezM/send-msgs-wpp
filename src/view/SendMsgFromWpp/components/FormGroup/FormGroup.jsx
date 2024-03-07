import { Form } from "react-bootstrap";

export const FormGroup = ({ children, groupClass = "" }) => {
  return <Form.Group className={groupClass}>{children}</Form.Group>;
};
