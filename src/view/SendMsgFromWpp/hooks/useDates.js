import { useEffect } from "react";
import { nextInterestDay } from "../utilities/nextInterestDay.util";
import { registerLocale } from "react-datepicker";
import { es, enUS } from "date-fns/locale";

const languages = {
  es: { registerLocale: es, strLocale: "es" },
  en: { registerLocale: enUS, strLocale: "enUS" },
};

export const useDates = (daySelected, handleSetDateEvent) => {
  const lenguageNavigator = window.navigator.language.slice(0, 2);
  registerLocale(
    languages[lenguageNavigator].strLocale,
    languages[lenguageNavigator].registerLocale
  );

  useEffect(() => {
    handleSetDateEvent(new Date(nextInterestDay(daySelected)));
  }, [daySelected]);

  return { languages, lenguageNavigator };
};
