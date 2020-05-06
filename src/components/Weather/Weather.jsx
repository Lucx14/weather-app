import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useWeatherApi from '../../hooks/useWeatherApi';
// http://websygen.github.io/owfont/#usage

import CurrentWeatherCard from '../Cards/CurrentWeatherCard/CurrentWeatherCard';

const Weather = (props) => {
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
        <CurrentWeatherCard
          city={weatherData.city}
          icon={weatherData.weather[0].id}
          temp={weatherData.main.temp}
          description={weatherData.weather[0].description}
          windSpeed={weatherData.wind.speed}
          cloudCover={weatherData.cloudCoverage}
          pressure={weatherData.main.pressure}
          humidity={weatherData.main.humidity}
        />
      )}
    </div>
  );
};

Weather.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Weather;
