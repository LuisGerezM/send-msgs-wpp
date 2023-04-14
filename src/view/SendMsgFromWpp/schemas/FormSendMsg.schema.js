const { REACT_APP_MONDAY: MONDAY, REACT_APP_TUESDAY: TUESDAY, REACT_APP_WEDNESDAY: WEDNESDAY } = process.env;

const dayMessages = {
  monday: MONDAY,
  tuesday: TUESDAY,
  wednesday: WEDNESDAY,
  ELECTIONS: `Soy el Dr. Gerez Walter, su médico de confianza, quiero compartirle una gran noticia: estoy *postulándome como concejal en nuestra ciudad*. Como médico, he aprendido la importancia de la *escucha activa* y la *empatía*, habilidades que estoy comprometido a llevar a la política. Quiero conocer su *inquietudes, ideas y anhelos* para nuestra ciudad, porque unidos podemos hacer grandes cosas.

  Estoy postulándome como concejal en la *LISTA 429, "Cambia Fernandez Oro", acompañando al Intendente Sr. Laje Marcelo y Presidente de Consejo Sra. Herrera Gabriela*. Si me conocen como su médico de confianza, sabe que siempre he trabajado por *su bienestar* y ahora quiero seguir haciéndolo desde una nueva posición. Con mi visión fresca y comprometida, podemos lograr grandes cosas unidos para *construir* una ciudad más *próspera* y *segura* para todos.

  Por eso, le invito a votar por *Cambia Fernández Oro, Lista 429*. Unidos podemos hacer la diferencia y lograr una ciudad en la que todos tengamos la oportunidad de crecer y prosperar. Recuerde, usted me proporcionó su número de teléfono y ahora *le invito* a unirse a mi equipo. ¡*Unidos* podemos hacer que nuestra ciudad sea un lugar mejor para vivir! 
  `,
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
