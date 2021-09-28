import React, { createContext } from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import { PropTypes } from 'prop-types';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalObservable(() => (
    {
      events: [],
      years: [],
      holidays: [],
      isLoading: false,
      error: '',
      year: 'all',
      get yearsCount() {
        return store.years.length;
      },
      getDate(key) {
        const selectedEvent = store.events.find((event) => event.key === key);
        return selectedEvent.date;
      },
      setError(error) {
        store.error = error;
      },
      setYear(year) {
        store.year = year;
      },
      setYears(years) {
        store.years = years;
      },
      setLoading(isLoading) {
        store.isLoading = isLoading;
      },
      setHolidays(holidays) {
        store.holidays = holidays;
      },
    }
  ));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
