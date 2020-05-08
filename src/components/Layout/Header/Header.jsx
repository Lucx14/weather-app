import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: black;
  opacity: 0.7;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 10rem;
`;

const H1 = styled.h1`
  font-weight: 400;
`;

const InnerWrapper = styled.div`
  margin: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const IconsWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-evenly;
`;

const Header = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <H1>Weather Forecast</H1>
        <IconsWrapper>
          <i className="owf owf-800 owf-3x" />
          <i className="owf owf-202 owf-3x" />
          <i className="owf owf-957 owf-3x" />
          <i className="owf owf-903 owf-3x" />
        </IconsWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
