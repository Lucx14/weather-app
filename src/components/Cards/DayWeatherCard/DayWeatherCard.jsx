import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bespokeDateFormat from '../../../helpers/dateFormatter';

const CardWrapper = styled.div`
  /* border: solid black 1px; */
  padding: 10px;
`;

const Wrapper = styled.div`
  border: red solid 1px;
  width: 200px;
  text-align: center;
  margin: 10px;
`;

const DayWeatherCard = (props) => {
  const {
    dt,
    icon,
    description,
    minTemp,
    maxTemp,
    windSpeed,
    cloudCoverage,
  } = props;
  const date = bespokeDateFormat(new Date(dt * 1000));

  return (
    <Wrapper>
      <h2>
        {date.day} {date.dayofMonth} {date.month}
      </h2>
      <CardWrapper>
        <i className={`owf owf-${icon} owf-3x`} />
        <p>{description}</p>
        <p>
          Temp: {minTemp}&#8451; - {maxTemp}&#8451;
        </p>
        <p>wind: {windSpeed}m/s</p>
        <p>Clouds: {cloudCoverage}%</p>
      </CardWrapper>
    </Wrapper>
  );
};

DayWeatherCard.propTypes = {
  dt: PropTypes.number.isRequired,
  icon: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  cloudCoverage: PropTypes.number.isRequired,
};

export default DayWeatherCard;
