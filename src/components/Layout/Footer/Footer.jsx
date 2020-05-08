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

const InnerWrapper = styled.div`
  /* border: solid black 1px; */
  margin: 2.4rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <p>Designed and developed by Lucx14</p>
        <p>Code on github</p>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
