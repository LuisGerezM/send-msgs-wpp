const msgValidation = {
  required: "El campo es requerido",
  dataPatient: {
    pattern:
      'Ingresa "Nombre del paciente" - "Número válido" ; Ejemplo: Gerez Luis - 3855004185',
  },
  email: {
    pattern: "Ingresa un email válido",
  },
  phoneNumber: {
    invalidSize: "Ingresar un número válido.",
  },
};

const dataPatientPattern = /[a-zA-Z]+ - \d{10}$/;

const validationFields = {
  dataPatient: {
    required: { value: true, message: msgValidation.required },
    pattern: {
      value: dataPatientPattern,
      message: msgValidation.dataPatient.pattern,
    },
  },
  msgBody: {
    required: { value: true, message: msgValidation.required },
  },
  greeting: {
    required: { value: true, message: msgValidation.required },
  },
};

export { validationFields, dataPatientPattern };
