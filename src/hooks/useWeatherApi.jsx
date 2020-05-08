import { useState, useCallback } from 'react';
import apiGetWeather from '../api/weather';

export default function useWeatherApi() {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getWeather = useCallback((city) => {
    setLoading(true);
    apiGetWeather(city)
      .then((result) => {
        setWeatherData({
          id: result.id,
          city: result.name,
          cloudCoverage: result.clouds.all,
          coord: result.coord,
          main: result.main,
          weather: result.weather,
          wind: result.wind,
          rain: result.rain,
          snow: result.snow,
        });
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return [weatherData, getWeather, loading, error];
}
