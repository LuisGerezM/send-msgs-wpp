import { useDates } from "view/SendMsgFromWpp/hooks/useDates";
import { LabelsForm } from "view/SendMsgFromWpp/styled-components/Labels.styled";
import { DateInputForm } from "view/SendMsgFromWpp/styled-components/FormFields.styled";

export const DateInput = ({ dateEvent, daySelected, handleSetDateEvent }) => {
  const { languages, lenguageNavigator } = useDates(
    daySelected,
    handleSetDateEvent
  );

  return (
    <>
      <LabelsForm className="mt-3">Fecha </LabelsForm>
      <DateInputForm
        className="date-picker"
        name="dateEvent"
        selected={dateEvent}
        onChange={(date) => handleSetDateEvent(date)}
        dateFormat={
          languages[lenguageNavigator].strLocale === "es"
            ? "dd-MMM-yyyy"
            : "MMM-dd-yyyy"
        }
        minDate={new Date()}
        locale={languages[lenguageNavigator].strLocale}
      />
    </>
  );
};
