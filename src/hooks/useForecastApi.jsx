import { useState, useCallback } from 'react';
import apiGetForecast from '../api/forecast';

export default function useForecastApi() {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getForecast = useCallback((city) => {
    setLoading(true);
    apiGetForecast(city)
      .then((result) => {
        setForecastData(result.list);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, []);

  return [forecastData, getForecast, loading, error];
}
