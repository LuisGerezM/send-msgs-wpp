const {
  REACT_APP_MONDAY: MONDAY,
  REACT_APP_TUESDAY: TUESDAY,
  REACT_APP_WEDNESDAY: WEDNESDAY,
  REACT_APP_THURSDAY: THURSDAY,
} = process.env;

const dayMessages = {
  monday: MONDAY,
  tuesday: TUESDAY,
  wednesday: WEDNESDAY,
  thursday: THURSDAY
};

const fields = {
  inputsFields: [
    {
      type: "text",
      name: "dataEmisor",
      placeholder: "Nombre del emisor",
      label: "Nombre del Emisor del mensaje ",
      disabled: true,
    },
    {
      type: "text",
      name: "dataPatient",
      placeholder: "Ingresa Nombre - Número",
      label: "Nombre - Número ",
      disabled: false,
    },
    {
      type: "text",
      as: "textarea",
      name: "msgBody",
      placeholder: "Ingresa cuerpo del mensaje",
      label: "Cuerpo del mensaje ",
      disabled: true,
    },
  ],
  selectField: {
    label: " Saludo inicial",
    name: "greeting",
    defaultOption: "Selecciona una opción",
    options: [
      {
        value: "Buenos días",
        text: "Buenos días",
      },
      {
        value: "Buenas noches",
        text: "Buenas noches",
      },
      {
        value: "Buenas tardes",
        text: "Buenas tardes",
      },
    ],
  },
  checkBox: {
    type: "checkbox",
    label: "Tengo instalada la aplicación de whatsap",
    name: "doHaveApp",
  },
};

export { dayMessages, fields };
