export const preparingMsgToSend = (partsOfMessage, dateEvent) => {
  // const nextDay = new Date(dateEvent).toLocaleString().split(",");

  const emisor = partsOfMessage[0];

  const nameAndNumPatient = partsOfMessage[1].split("-");
  const namePatient = nameAndNumPatient[0].trim();
  const numPatient = nameAndNumPatient[1].trim();

  const messageBody = partsOfMessage[2];
  const greetingSelected = partsOfMessage[3];
  // const message = `${greetingSelected} ${namePatient}, ${messageBody.replace("-date-", nextDay[0])} ${emisor}`;

  const message = messageBody;

  return { message, numPatient };
};
