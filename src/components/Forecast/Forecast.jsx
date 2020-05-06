import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useWeatherApi from '../../hooks/useWeatherApi';

const Forecast = (props) => {
  const { city } = props;
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
          <h2>Weather in {weatherData.city}</h2>
          <div>
            <h3>Weather description: {weatherData.weather[0].description}</h3>
            <h3>general weather: {weatherData.weather[0].main}</h3>
            <h3>Icon for weather: {weatherData.weather[0].icon}</h3>
          </div>
          <h4>Current temperature: {weatherData.main.temp} degrees Celcius</h4>
          <h4>Cloud coverage: {weatherData.cloudCoverage}%</h4>
          <h4>
            Temp range: {weatherData.main.temp_min} -{' '}
            {weatherData.main.temp_max} degrees c
          </h4>
          <h4>Temp feels like {weatherData.main.feels_like} degrees c</h4>
          <h4>Humidity: {weatherData.main.humidity}%</h4>
          <h4>Pressure: {weatherData.main.pressure} hPa</h4>
          <h4>Wind speed: {weatherData.wind.speed} m/s</h4>
          <h4>Rain: {weatherData.rain}</h4>
          <h4>Snow: {weatherData.snow}</h4>
        </>
      )}
    </div>
  );
};

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Forecast;
