import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useWeatherApi from '../../hooks/useWeatherApi';
// http://websygen.github.io/owfont/#usage

import CurrentWeatherCard from '../Cards/CurrentWeatherCard/CurrentWeatherCard';

const Wrapper = styled.div`
  border: solid black 1px;
  margin: 2.4rem;
`;

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
        <Wrapper>
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
        </Wrapper>
      )}
    </div>
  );
};

Weather.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Weather;
