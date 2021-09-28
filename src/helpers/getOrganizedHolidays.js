import getDistinctYears from './getDistinctYears';
import getYearFromDate from './getYearFromDate';

const getOrganizedHolidays = (events) => {
  const distinctYears = getDistinctYears(events);
  const organizedHolidays = { all: events };

  distinctYears.forEach((year) => {
    const filteredHolidays = events.filter((event) => getYearFromDate(event.date) === year);
    organizedHolidays[year] = filteredHolidays;
  });

  return organizedHolidays;
};

export default getOrganizedHolidays;
