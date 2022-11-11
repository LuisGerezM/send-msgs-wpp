import { CustomtButton } from "components/CustomButton/CustomButton";
import { Form } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { useFormSendMsg } from "view/SendMsgFromWpp/hooks/useFormSendMsg";
import { fields } from "view/SendMsgFromWpp/schemas/FormSendMsg.schema";
import { validationFields } from "view/SendMsgFromWpp/schemas/validation.schema";
import { urlMessageToWpp } from "view/SendMsgFromWpp/utilities/urlMessageToWpp.util";
import { AlertMessageToSend } from "../AlertMessageToSend/AlertMessageToSend";
import AnchorWpp from "../AnchorWpp/AnchorWpp";
import { CheckField } from "../CheckField/CheckField";
import { FormGroup } from "../FormGroup/FormGroup";
import { InputField } from "../InputField/InputField";
import { SelectField } from "../SelectField/SelectField";

export const FormSendMsg = () => {
  const {
    register,
    errors,
    watch,
    handleSubmit,
    onSubmit,
    openMsgToSend,
    msgToSend,
    doYouHaveAppWpp,
    patientNumber,
    wppBtn,
  } = useFormSendMsg();

  return (
    <FormProvider {...{ register, errors, watch }}>
      <Form
        className="col col-12 col-sm-8 d-flex flex-column align-items-center justify-content-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormGroup groupClass="col col-12 my-3">
          <SelectField {...fields.selectField} validation={validationFields} />
          {fields.inputsFields &&
            fields.inputsFields.map((field) => (
              <Form.Group key={field.name} className="my-3">
                <InputField {...field} validation={validationFields} />
              </Form.Group>
            ))}
        </FormGroup>

        <AlertMessageToSend
          openMsgToSend={openMsgToSend}
          msgToSend={msgToSend}
        />

        <FormGroup className="mb-3">
          <CheckField
            type={fields.checkBox.type}
            label={fields.checkBox.label}
            name={fields.checkBox.name}
          />
        </FormGroup>

        <CustomtButton buttonClass="col col-6" text="Enviar" type="submit" />
      </Form>

      <AnchorWpp
        url={urlMessageToWpp(doYouHaveAppWpp, patientNumber, msgToSend)}
        ref={wppBtn}
      />
    </FormProvider>
  );
};
