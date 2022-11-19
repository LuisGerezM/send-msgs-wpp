export const nextInterestDay = (nextDayAccordToSelection) => {
  let day = new Date();
  let Nextday = day.getDay() === 0 ? 7 : day.getDay();
  let SumDay = 7 - Nextday;
  day.setDate(day.getDate() + SumDay + nextDayAccordToSelection);

  return day.getTime();
};
