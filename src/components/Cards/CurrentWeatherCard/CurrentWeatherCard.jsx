import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import bespokeDateFormat from '../../../helpers/dateFormatter';

const Wrapper = styled.div`
  max-width: 300px;
  padding: 20px;
  margin: 10px;
  background-color: #4d4d49;
  color: #fbf8f4;
  -webkit-box-shadow: -1px 4px 26px 6px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -1px 4px 26px 6px rgba(0, 0, 0, 0.5);
  box-shadow: -1px 4px 26px 6px rgba(0, 0, 0, 0.5);
`;

const CardData = styled.div`
  display: flex;
  border: 1px solid #4d4d49;
  background-color: #f7f3e8;
  color: #45484b;
`;

const GridItem = styled.div`
  flex: 1;
  padding: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  max-width: 200px;
`;

const Temp = styled.div`
  flex: 1;
  font-size: 1.5rem;
  padding-top: 0.5rem;
`;

const Icon = styled.i`
  flex: 1;
`;

const CurrentWeatherCard = (props) => {
  const {
    city,
    icon,
    temp,
    description,
    windSpeed,
    cloudCover,
    pressure,
    humidity,
  } = props;
  const date = bespokeDateFormat(new Date());

  return (
    <Wrapper>
      <h2>Weather in {city}</h2>
      <IconContainer>
        <Icon className={`owf owf-${icon} owf-3x`} />
        <Temp>{temp}&#8451;</Temp>
      </IconContainer>
      <p>{description}</p>
      <p>
        {date.hour}:{date.min} {date.month} {date.dayofMonth}
      </p>
      <CardData>
        <GridItem>Wind Speed</GridItem>
        <GridItem>{windSpeed}m/s</GridItem>
      </CardData>
      <CardData>
        <GridItem>Cloud Coverage</GridItem>
        <GridItem>{cloudCover}%</GridItem>
      </CardData>
      <CardData>
        <GridItem>Pressure</GridItem>
        <GridItem>{pressure}hPa</GridItem>
      </CardData>
      <CardData>
        <GridItem>Humidity</GridItem>
        <GridItem>{humidity}%</GridItem>
      </CardData>
    </Wrapper>
  );
};

CurrentWeatherCard.propTypes = {
  city: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  temp: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  windSpeed: PropTypes.number.isRequired,
  cloudCover: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
};

export default CurrentWeatherCard;
