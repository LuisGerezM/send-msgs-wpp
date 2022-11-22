export const nextInterestDay = (nextDayAccordToSelection) => {
  let day = new Date();
  let getDay = day.getDay() === 0 ? 7 : day.getDay();

  if (getDay < nextDayAccordToSelection) {
    let restDay = nextDayAccordToSelection - getDay;
    day.setDate(day.getDate() + restDay);
  } else {
    let SumDay = 7 - getDay;
    day.setDate(day.getDate() + SumDay + nextDayAccordToSelection);
  }

  return day.getTime();
};
