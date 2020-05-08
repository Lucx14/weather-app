import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useWeatherApi from '../../hooks/useWeatherApi';
import LoadingModal from '../Layout/Modal/LoadingModal';
import ErrorModal from '../Layout/Modal/ErrorModal';

import CurrentWeatherCard from '../Cards/CurrentWeatherCard/CurrentWeatherCard';

const Wrapper = styled.div`
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
      {weatherApiLoading && (
        <Wrapper>
          <LoadingModal />
        </Wrapper>
      )}
      {weatherApiError && (
        <Wrapper>
          <ErrorModal />
        </Wrapper>
      )}
      {!weatherApiLoading && !weatherApiError && (
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
