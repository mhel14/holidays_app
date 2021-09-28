import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../store';

const useGetSelectedDates = (keys) => {
  const store = useContext(StoreContext);
  const [dates, setDates] = useState([]);
  const datesToDelete = [];

  useEffect(() => {
    keys.forEach((key) => {
      datesToDelete.push(store.getDate(key));
    });
    setDates(datesToDelete);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keys]);

  return dates;
};

export default useGetSelectedDates;
