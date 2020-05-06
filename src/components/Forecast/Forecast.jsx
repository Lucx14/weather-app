import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useWeatherApi from '../../hooks/useWeatherApi';

const Forecast = (props) => {
  const { city } = props;

  // const [weatherData, setWeatherData] = useState({});
  const [
    weatherData,
    getWeather,
    weatherApiLoading,
    weatherApiError,
  ] = useWeatherApi();

  useEffect(() => {
    getWeather(city);
  }, [city, getWeather]);

  return (
    <div>
      {weatherApiLoading && <h1>API LOADING!!!!</h1>}
      {weatherApiError && <h1>API ERROR!!!!</h1>}
      {!weatherApiLoading && (
        <>
          <h1>Forecast</h1>
          <h2>{weatherData.city}</h2>
          <h4>Temperature: {weatherData.main.temp} degrees Celcius</h4>
        </>
      )}
    </div>
  );
};

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Forecast;
