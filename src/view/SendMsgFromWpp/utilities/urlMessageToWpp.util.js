const {
  REACT_APP_URL_HAVE_APP_WPP: HAVEAPPWPP,
  REACT_APP_URL_DONT_HAVE_APP_WPP: DONTHAVEAPPWPP,
} = process.env;

export const urlMessageToWpp = (
  doYouHaveAppWpp,
  patientNumber,
  messageToSend
) => {
  const possibleUrls = {
    case1: HAVEAPPWPP,
    case2: DONTHAVEAPPWPP,
  };

  const URL = possibleUrls[doYouHaveAppWpp ? "case1" : "case2"];

  const addpatientNumberInUrl = URL.replace(
    "patientNumber",
    `${patientNumber}`
  );
  const addTextInUrl = addpatientNumberInUrl.replace(
    "messageToSend",
    `${messageToSend}`
  );

  return addTextInUrl;
};
