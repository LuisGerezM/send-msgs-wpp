export const preparingMsgToSend = (partsOfMessage) => {
  const emisor = partsOfMessage[0];

  const nameAndNumPatient = partsOfMessage[1].split("-");
  const namePatient = nameAndNumPatient[0].trim();
  const numPatient = nameAndNumPatient[1].trim();

  const messageBody = partsOfMessage[2];
  const greetingSelected = partsOfMessage[3];
  const message = `${greetingSelected} ${namePatient}, ${messageBody} ${emisor}`;

  return { message, numPatient };
};
