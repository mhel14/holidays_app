import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        if (!data.length) {
          setIsLoading(true);
          const { data: _data } = await axios.get(url, { cancelToken: source.token });
          setData(_data);
          setIsLoading(false);
        }
      } catch (err) {
        if (err.toString().includes('Network Error')) {
          setError('599');
        }
        // Other edge case error status statically handled: 403, 404, 500, 503
        setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
