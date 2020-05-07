import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import getLocation from '../../helpers/locationFinder';
import apiGetWeatherUsingCoordinates from '../../api/coordinates';

const SearchWrapper = styled.div`
  /* border: solid 2px blue; */
`;

const InnerSearchWrapper = styled.div`
  border: solid black 1px;
  margin: 2.4rem;
  text-align: center;
  padding: 20px;
`;

const Input = styled.input`
  background: none;
  width: 300px;
  margin-top: 10px;
  font-size: 20px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: black solid 2px;
  outline: none;
  color: blue;
`;

const Button = styled.input`
  margin-left: 30px;
  font-size: 1.2rem;
  border-radius: 5px;
  color: red;
  background-color: yellow;
  outline: 0;
  border: none;
  :focus {
    /* outline: none; */
  }
  :active {
    background-color: green;
  }
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
        <button type="button" onClick={fetchCoordinates}>
          Current Location
        </button>
      </InnerSearchWrapper>
    </SearchWrapper>
  );
};

Search.propTypes = {
  submit: PropTypes.func.isRequired,
  updateApp: PropTypes.func.isRequired,
};

export default Search;
