import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: black;
  color: white;
  opacity: 0.5;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 10rem;
`;

const LinkTag = styled.a`
  color: white;
  text-decoration: none;
`;

const InnerWrapper = styled.div`
  margin: 2.4rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <LinkTag href="https://github.com/Lucx14/weather-app">
          View code
        </LinkTag>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
