import getYearFromDate from './getYearFromDate';

const getDistinctYears = (events) => {
  const years = [];
  events.forEach((event) => {
    years.push(getYearFromDate(event.date));
  });

  return [...new Set(years)];
};

export default getDistinctYears;
