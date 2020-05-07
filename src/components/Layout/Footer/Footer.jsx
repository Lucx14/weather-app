import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: pink;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 10rem;
`;

const InnerWrapper = styled.div`
  border: solid black 1px;
  margin: 2.4rem;
`;

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <h1>Footer</h1>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
