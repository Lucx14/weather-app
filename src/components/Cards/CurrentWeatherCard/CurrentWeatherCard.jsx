import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import bespokeDateFormat from '../../../helpers/dateFormatter';

const Wrapper = styled.div`
  border: 1px solid black;
  max-width: 300px;
  padding: 20px;
`;

const CardData = styled.div`
  display: flex;
  border: 1px solid grey;
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
      <p>{date}</p>
      <CardData>
        <GridItem>Wind</GridItem>
        <GridItem>Speed {windSpeed}m/s</GridItem>
      </CardData>
      <CardData>
        <GridItem>Cloudiness</GridItem>
        <GridItem>Coverage {cloudCover}%</GridItem>
      </CardData>
      <CardData>
        <GridItem>Pressure</GridItem>
        <GridItem>{pressure}hPa</GridItem>
      </CardData>
      <CardData>
        <GridItem>Humidity</GridItem>
        <GridItem>{humidity}%</GridItem>
      </CardData>
      <CardData>
        <GridItem>Rain</GridItem>
        <GridItem>0mm</GridItem>
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
