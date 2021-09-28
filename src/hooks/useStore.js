import { useContext, useEffect } from 'react';
import { HOLIDAYS_API_URL } from '../constants';
import getAllEvents from '../helpers/getAllEvents';
import getDistinctYears from '../helpers/getDistinctYears';
import getOrganizedHolidays from '../helpers/getOrganizedHolidays';
import { StoreContext } from '../store';
import useFetch from './useFetch';

const useStore = () => {
  const store = useContext(StoreContext);
  const { data: countries, isLoading, error } = useFetch(HOLIDAYS_API_URL);

  useEffect(() => {
    const events = getAllEvents(countries);
    store.events = events;
    store.countries = countries;
    store.setHolidays(getOrganizedHolidays(events));
    store.setYears(getDistinctYears(events));
    store.setLoading(isLoading);
    store.setError(error);
  }, [isLoading, countries, error, store]);

  return store;
};

export default useStore;
