import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DayWeatherCard from '../Cards/DayWeatherCard/DayWeatherCard';
import useForecastApi from '../../hooks/useForecastApi';

const Wrapper = styled.div`
  border-radius: 7px;
  margin: 2.4rem;
  padding: 1.25rem;
  text-align: center;
  background-color: rgba(247, 226, 157, 0.2);
`;

const ForecastWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const H1 = styled.h1`
  font-weight: 400;
  color: #45484b;
`;

const Forecast = (props) => {
  const { city } = props;
  const [
    forecastData,
    getForecast,
    forecastApiLoading,
    forecastApiError,
  ] = useForecastApi();

  useEffect(() => {
    getForecast(city);
  }, [city, getForecast]);

  const weatherCards = forecastData.map((day) => {
    return (
      <DayWeatherCard
        key={day.dt}
        dt={day.dt}
        icon={day.weather[0].id}
        description={day.weather[0].description}
        minTemp={day.main.temp_min}
        maxTemp={day.main.temp_max}
        windSpeed={day.wind.speed}
        cloudCoverage={day.clouds.all}
      />
    );
  });

  return (
    <div>
      {!forecastApiLoading && !forecastApiError && (
        <Wrapper>
          <H1>5 day weather forecast</H1>
          <ForecastWrapper>{weatherCards}</ForecastWrapper>
        </Wrapper>
      )}
    </div>
  );
};

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Forecast;
