import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DayWeatherCard from '../Cards/DayWeatherCard/DayWeatherCard';
import useForecastApi from '../../hooks/useForecastApi';

const ForecastWrapper = styled.div`
  border: 1px solid green;
  display: flex;
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
      {forecastApiLoading && <h1>API LOADING!!!</h1>}
      {forecastApiError && <h1>API ERROR!!!</h1>}
      {!forecastApiLoading && (
        <div>
          <h1>5 day forecast (kind of!!)</h1>
          <ForecastWrapper>{weatherCards}</ForecastWrapper>
        </div>
      )}
    </div>
  );
};

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Forecast;
