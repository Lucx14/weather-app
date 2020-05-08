import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import getLocation from '../../helpers/locationFinder';
import apiGetWeatherUsingCoordinates from '../../api/coordinates';

const SearchWrapper = styled.div``;

const InnerSearchWrapper = styled.div`
  margin: 2.4rem;
  text-align: center;
  padding: 1.875rem;
  border-radius: 5px;
  -webkit-box-shadow: -1px 4px 26px 6px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -1px 4px 26px 6px rgba(0, 0, 0, 0.5);
  box-shadow: -1px 4px 26px 6px rgba(0, 0, 0, 0.5);
`;

const Input = styled.input`
  background: none;
  width: 250px;
  margin-top: 10px;
  font-size: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: black solid 2px;
  outline: none;
`;

const Button = styled.input`
  padding: 5px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  color: white;
  background-color: #ff7200;
  outline: 0;
  border: none;
  :active {
    background-color: #fe7d08;
  }
  :hover {
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 1.25rem;
`;

const Search = (props) => {
  const { submit, updateApp } = props;
  const [searchCity, setSearchCity] = useState('');

  const searchCityUpdateHandler = (event) => {
    setSearchCity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    submit(searchCity);
  };

  const fetchCoordinates = async () => {
    try {
      const { coords } = await getLocation();
      const { latitude, longitude } = coords;
      const { name } = await apiGetWeatherUsingCoordinates(latitude, longitude);
      updateApp(name);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <SearchWrapper>
      <InnerSearchWrapper>
        <form onSubmit={submitHandler}>
          <Input
            type="text"
            value={searchCity}
            onChange={searchCityUpdateHandler}
            name="city-name"
            placeholder="Your city name"
          />
          <Button type="submit" value="Search" />
        </form>
        <ButtonWrapper>
          <Button
            type="button"
            onClick={fetchCoordinates}
            value="Current Location"
          />
        </ButtonWrapper>
      </InnerSearchWrapper>
    </SearchWrapper>
  );
};

Search.propTypes = {
  submit: PropTypes.func.isRequired,
  updateApp: PropTypes.func.isRequired,
};

export default Search;
