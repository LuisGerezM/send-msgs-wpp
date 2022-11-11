import { createRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { dayMessages } from "../schemas/FormSendMsg.schema";
import { dataPatientPattern } from "../schemas/validation.schema";
import { preparingMsgToSend } from "../utilities/preparingMsgToSend.util";

export const useFormSendMsg = () => {
  const { day } = useParams();
  const [msgToSend, setMsgToSend] = useState("");
  const [patientNumber, setPatientNumber] = useState(0);
  const [doYouHaveAppWpp, setDoYouHaveAppWpp] = useState(false);
  const [clickSubmit, setClickSubmit] = useState(false);

  const [openMsgToSend, setOpenMsgToSend] = useState(false);

  const wppBtn = createRef();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dataEmisor: "Consultorio de Flebología",
      dataPatient: "",
      msgBody: "",
      greeting: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setDoYouHaveAppWpp(data.doHaveApp);
    setValue("dataPatient", "");

    setClickSubmit(true);
  };

  useEffect(() => {
    if (clickSubmit) {
      wppBtn?.current.click();
      setClickSubmit(false);
    }
  }, [clickSubmit]);

  useEffect(() => {
    if (day) {
      setValue("msgBody", dayMessages[day]);
    }
  }, [day, setValue]);

  const dataToInterest = watch(["dataPatient", "greeting"]);

  useEffect(() => {
    if (dataPatientPattern.test(dataToInterest[0]) && dataToInterest[1]) {
      const values = getValues([
        "dataEmisor",
        "dataPatient",
        "msgBody",
        "greeting",
      ]);

      const { numPatient, message } = preparingMsgToSend(values);

      setPatientNumber("+54" + numPatient);
      setMsgToSend(message);
    } else if (dataToInterest[0] === "" || dataToInterest[1] === "") {
      setOpenMsgToSend(false);
      setMsgToSend("");
    }
  }, [dataToInterest, getValues]);

  const handleOpenMessageToSend = (value) => setOpenMsgToSend(value);

  useEffect(() => {
    if (msgToSend) handleOpenMessageToSend(true);
  }, [msgToSend]);

  return {
    register,
    errors,
    setValue,
    watch,
    handleSubmit,
    onSubmit,
    openMsgToSend,
    msgToSend,
    doYouHaveAppWpp,
    patientNumber,
    wppBtn,
  };
};
