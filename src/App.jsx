import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Layout/Header/Header';
import Search from './components/Search/Search';
import Weather from './components/Weather/Weather';
import Forecast from './components/Forecast/Forecast';
import Footer from './components/Layout/Footer/Footer';

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
`;

const initialState = 'London';

function App() {
  const [city, setCity] = useState(initialState);

  const searchSubmitHandler = (searchEntry) => {
    if (searchEntry.length === 0) {
      return;
    }
    setCity(searchEntry);
  };

  const submitGeolocationHandler = (geolocation) => {
    setCity(geolocation);
  };

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Search
          submit={searchSubmitHandler}
          updateApp={submitGeolocationHandler}
        />
        <Weather city={city} />
        <Forecast city={city} />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}

export default App;
